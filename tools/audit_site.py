#!/usr/bin/env python3
"""
audit_site.py — structural audit of the built site.

Crawls the prerendered HTML in .next/server/app and checks the things that break
quietly: a page that lost its nav, a footer link that 404s, an orphan page
nothing links to, a duplicate title, a canonical pointing at the wrong host, an
affiliate link missing its rel attributes.

Run after `npm run build`:
    python3 tools/audit_site.py

Why this exists rather than clicking around. Every one of these checks is here
because the failure it detects had already happened on this site and nobody had
noticed:

  - Every blog post served the site-wide <title>, because the route was a client
    component and could not emit metadata. A post ranking at position 6.8 had a
    click-through rate of zero.
  - There were no canonical tags anywhere, while both www and non-www hosts were
    indexed and splitting the same traffic.
  - /blog and /blog/[slug] hand-rolled their own nav and footer, so the
    affiliate disclosure link — an FTC requirement on any page carrying an
    affiliate link — appeared on neither.

None of those produce a build error. All of them are one grep away.
"""

import os
import re
import sys
from collections import defaultdict

APP = ".next/server/app"
SITE = "https://cochiselandmanagement.com"

# Sourced from app/components/BlogChrome.tsx — update both together.
NAV_LINKS = ["/blog", "/gear", "/#services", "/#coverage"]
FOOTER_LINKS = ["/affiliate-disclosure", "/privacy", "/terms",
                "mailto:inquiries@cochiselandmanagement.com"]

# The homepage renders components/Navigation.tsx, whose Services and Coverage
# entries are scroll buttons rather than anchors — so it cannot satisfy the nav
# href check. It does use the shared PageFooter, so the footer check applies.
NAV_EXEMPT = {"/", "/_not-found", "/_global-error"}
FOOTER_EXEMPT = {"/_not-found", "/_global-error"}

REQUIRED_REL = {"sponsored", "nofollow", "noopener"}

# Files that must exist and be served. robots.txt and sitemap.xml are generated
# routes; llms.txt is a static file in public/.
REQUIRED_FILES = ["public/llms.txt"]

# Names that must not appear anywhere in the built output. The owner's personal
# name was previously the byline on a blog post and would have gone into the
# Article JSON-LD as a Person.
BANNED_STRINGS = ["Joshua Bryan", "Joshua Bryan".lower()]

# Service-area language guard.
#
# This is a Cochise County contractor, not a statewide one. Naming Arizona is
# fine and often necessary — ADWR, ADEQ, A.R.S., AZGS and the state's greywater
# rules are genuinely state-level. What is not fine is a SERVICE claim scoped to
# the state, because it pulls in Phoenix and Scottsdale enquiries that can never
# be served.
#
# So this checks the <title> and <meta name="description"> only — the two
# strings that describe what the business does and where — rather than body
# prose, which legitimately discusses state regulation.
STATEWIDE_PATTERNS = [
    r"\bservices?,?\s+arizona\b",
    r"\brural land services\b",
    r"\bstatewide\b",
    r"\bacross arizona\b",
    r"\barizona\s+(?:land clearing|excavation|grading|solar installation)\b",
    r"\b(?:land clearing|grading|excavation)\s+arizona\b",
]


def routes():
    """Map route path -> prerendered html file."""
    out = {}
    for root, _dirs, files in os.walk(APP):
        for f in files:
            if not f.endswith(".html"):
                continue
            full = os.path.join(root, f)
            rel = os.path.relpath(full, APP)[:-5]
            path = "/" + rel.replace(os.sep, "/")
            if path.endswith("/index"):
                path = path[:-6] or "/"
            out[path if path != "/index" else "/"] = full
    return out


def main():
    if not os.path.isdir(APP):
        sys.exit(f"{APP} not found — run `npm run build` first.")

    pages = routes()
    known = set(pages) | {"/sitemap.xml", "/robots.txt"}

    problems = defaultdict(list)
    inbound = defaultdict(int)
    titles = defaultdict(list)
    descriptions = defaultdict(list)

    for path, f in sorted(pages.items()):
        html = open(f, encoding="utf-8", errors="ignore").read()
        hrefs = set(re.findall(r'href="([^"]+)"', html))

        # ---- chrome consistency
        if path not in NAV_EXEMPT:
            missing = [l for l in NAV_LINKS if l not in hrefs]
            if missing:
                problems["nav links missing"].append(f"{path}  missing {missing}")
        if path not in FOOTER_EXEMPT:
            missing_f = [l for l in FOOTER_LINKS if l not in hrefs]
            if missing_f:
                problems["footer links missing"].append(f"{path}  missing {missing_f}")

        # ---- banned strings anywhere in the rendered page
        for banned in BANNED_STRINGS:
            if banned in html:
                problems["banned string in output"].append(f"{path}  contains {banned!r}")

        # ---- internal links resolve
        for h in hrefs:
            if h.startswith(("http", "mailto:", "tel:", "#", "//")):
                continue
            target = h.split("#")[0].split("?")[0].rstrip("/") or "/"
            if not target.startswith("/"):
                continue
            # Static assets are not pages. Note that featured images live under
            # /blog/ alongside the article routes, so the extension test has to
            # come before any path-prefix test or every article image reads as a
            # broken link to a page.
            if target.lower().endswith((".png", ".jpg", ".jpeg", ".svg", ".webp",
                                        ".gif", ".ico", ".mp4", ".pdf")):
                continue
            if target.startswith("/_next/"):
                continue
            inbound[target] += 1
            if target in known:
                continue
            problems["broken internal link"].append(f"{path}  ->  {h}")

        # ---- title: present, unique, not the site default on an article
        m = re.search(r"<title>(.*?)</title>", html, re.S)
        if not m:
            problems["no title"].append(path)
        else:
            t = m.group(1).strip()
            titles[t].append(path)
            if path.startswith("/blog/") and t.startswith("Cochise Land Management |"):
                problems["article serving the site default title"].append(path)
            for pat in STATEWIDE_PATTERNS:
                if re.search(pat, t, re.I):
                    problems["statewide service claim in title"].append(f"{path}  {t}")
                    break

        # ---- meta description: present and unique
        dm = re.search(r'<meta name="description" content="([^"]*)"', html)
        if not dm:
            problems["no meta description"].append(path)
        else:
            desc = dm.group(1)
            descriptions[desc].append(path)
            for pat in STATEWIDE_PATTERNS:
                if re.search(pat, desc, re.I):
                    problems["statewide service claim in description"].append(
                        f"{path}  ...{desc[:90]}...")
                    break

        # ---- canonical present and on the right host
        cm = re.search(r'rel="canonical" href="([^"]+)"', html)
        if not cm:
            problems["no canonical"].append(path)
        elif not cm.group(1).startswith(SITE):
            problems["canonical on wrong host"].append(f"{path}  {cm.group(1)}")

        # ---- affiliate links carry the right rel and no cloaking
        for tag in re.findall(r"<a\b[^>]*amazon\.com[^>]*>", html):
            rel = set(re.search(r'rel="([^"]*)"', tag).group(1).split()) if 'rel="' in tag else set()
            if not REQUIRED_REL.issubset(rel):
                problems["affiliate link missing rel"].append(
                    f"{path}  rel={sorted(rel) or 'none'}")
        # A page with an affiliate link must link the disclosure.
        if "amazon.com" in html and "/affiliate-disclosure" not in hrefs:
            problems["affiliate link with no disclosure link"].append(path)

    # ---- duplicates
    for t, ps in titles.items():
        if len(ps) > 1:
            problems["duplicate title"].append(f'"{t[:60]}" on {ps}')
    for d, ps in descriptions.items():
        if len(ps) > 1:
            problems["duplicate meta description"].append(f"{ps}")

    # ---- orphans
    for path in sorted(pages):
        if path in ("/", "/_not-found", "/_global-error"):
            continue
        if inbound.get(path, 0) == 0:
            problems["orphan (no inbound links)"].append(path)

    # ---- required static files
    for f in REQUIRED_FILES:
        if not os.path.isfile(f):
            problems["required file missing"].append(f)

    # ---- robots.txt: generated route, so check the source declares the sitemap
    # on the canonical host. A sitemap URL on the wrong host is logged by Search
    # Console as a redirect error and the sitemap is not processed.
    robots_src = "app/robots.ts"
    if os.path.isfile(robots_src):
        rs = open(robots_src, encoding="utf-8").read()
        if "sitemap" not in rs.lower():
            problems["robots.ts declares no sitemap"].append(robots_src)
        if "www." in rs:
            problems["robots.ts references the www host"].append(robots_src)
    else:
        problems["required file missing"].append(robots_src)

    # ---- llms.txt should name the service-area boundary explicitly, since its
    # whole purpose is being read by an assistant that will paraphrase it.
    if os.path.isfile("public/llms.txt"):
        ls = open("public/llms.txt", encoding="utf-8").read()
        if "Cochise County" not in ls:
            problems["llms.txt does not name the service area"].append("public/llms.txt")
        if not re.search(r"only|not a statewide", ls, re.I):
            problems["llms.txt does not bound the service area"].append("public/llms.txt")

    print(f"Audited {len(pages)} prerendered pages\n")
    total = 0
    for kind, items in problems.items():
        total += len(items)
        print(f"{kind.upper()}  ({len(items)})")
        for i in items[:25]:
            print(f"    {i}")
        if len(items) > 25:
            print(f"    ... and {len(items) - 25} more")
        print()

    if not total:
        print("No structural problems found.")
    else:
        print(f"{total} issue(s).")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
