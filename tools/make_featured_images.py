#!/usr/bin/env python3
"""
make_featured_images.py — generate branded 1200x630 featured/OG images.

Three of the posts carry real photographs. The rest do not, and the realistic
alternatives were reusing the same three images across twenty-two articles or
shipping stock photography of a forest. Both are worse than a consistent
branded card that states what the article is.

These double as Open Graph images, which is the more important job: a link
shared to Facebook or a text message renders this, and a generic site image on
every article is a wasted impression.

Run from the repo root:
    python3 tools/make_featured_images.py

Reads the post files directly so titles never drift from the images.
"""

import os
import re
import sys
import textwrap

from PIL import Image, ImageDraw, ImageFont

POSTS = "app/blog/posts"
OUT = "public/blog"
W, H = 1200, 630

BG = (26, 21, 16)
CARD = (42, 35, 24)
ACCENT = (124, 154, 62)
ACCENT_LIGHT = (154, 184, 88)
ORANGE = (212, 134, 58)
TEXT = (245, 240, 232)
MUTED = (184, 169, 142)
BORDER = (58, 50, 40)

FONT_DIRS = [
    "/usr/share/fonts/truetype/dejavu",
    "/usr/share/fonts/truetype/liberation",
    "/usr/share/fonts",
]


def find_font(*names):
    for d in FONT_DIRS:
        for root, _dirs, files in os.walk(d):
            for n in names:
                if n in files:
                    return os.path.join(root, n)
    return None


BOLD = find_font("DejaVuSans-Bold.ttf", "LiberationSans-Bold.ttf")
REG = find_font("DejaVuSans.ttf", "LiberationSans-Regular.ttf")
if not BOLD or not REG:
    sys.exit("No usable TrueType font found — install fonts-dejavu-core.")


def font(path, size):
    return ImageFont.truetype(path, size)


def wrap_to_width(draw, text, f, max_w):
    """Greedy wrap by measured pixel width rather than character count."""
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if draw.textlength(trial, font=f) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def render(slug, title, category, date):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # Diagonal band, evoking a graded cut across a slope. Subtle enough that the
    # text stays the subject.
    d.polygon([(0, H), (W, H), (W, int(H * 0.58)), (0, int(H * 0.80))], fill=CARD)
    d.line([(0, int(H * 0.80)), (W, int(H * 0.58))], fill=BORDER, width=2)

    # Accent rule, top left.
    d.rectangle([64, 64, 64 + 84, 64 + 6], fill=ACCENT)

    # Category
    f_cat = font(BOLD, 22)
    d.text((64, 96), category.upper(), font=f_cat, fill=ACCENT_LIGHT)

    # Title — shrink to fit rather than truncate.
    max_w = W - 128
    for size in (62, 56, 50, 46, 42, 38):
        f_title = font(BOLD, size)
        lines = wrap_to_width(d, title, f_title, max_w)
        line_h = int(size * 1.18)
        if len(lines) * line_h <= 300:
            break
    y = 152
    for ln in lines:
        d.text((64, y), ln, font=f_title, fill=TEXT)
        y += line_h

    # Footer: brand and locale
    f_brand = font(BOLD, 26)
    f_meta = font(REG, 21)
    d.text((64, H - 108), "COCHISE LAND MANAGEMENT", font=f_brand, fill=TEXT)
    d.text((64, H - 70), f"Cochise County, Arizona  ·  {date}", font=f_meta, fill=MUTED)

    # Small orange square, bottom right — a fixed brand mark so the set reads as
    # a series rather than as unrelated cards.
    d.rectangle([W - 104, H - 104, W - 64, H - 64], fill=ORANGE)

    path = os.path.join(OUT, f"{slug}.png")
    img.save(path, "PNG", optimize=True)
    return path


def main():
    if not os.path.isdir(POSTS):
        sys.exit("Run from the repo root.")
    os.makedirs(OUT, exist_ok=True)

    made, skipped = 0, 0
    for fn in sorted(os.listdir(POSTS)):
        if not fn.endswith(".ts") or fn == "index.ts":
            continue
        t = open(os.path.join(POSTS, fn), encoding="utf-8").read()

        img_m = re.search(r"featuredImage: '/blog/([^']+)'", t)
        title_m = re.search(r"\n\s*title: '((?:[^'\\]|\\.)*)'", t)
        cat_m = re.search(r"category: '([^']+)'", t)
        date_m = re.search(r"date: '(\d{4})-(\d{2})-(\d{2})'", t)
        if not (img_m and title_m and cat_m and date_m):
            print(f"  ! skipping {fn} — could not parse fields")
            continue

        name = img_m.group(1)
        slug = name.rsplit(".", 1)[0]
        target = os.path.join(OUT, name)

        # Never overwrite a real photograph that is already committed.
        if os.path.exists(target) and slug in ("solar-sizing", "land-clearing", "water-systems"):
            print(f"  = keeping existing photo {name}")
            skipped += 1
            continue

        title = title_m.group(1).replace("\\'", "'")
        months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"]
        y, m, dd = date_m.groups()
        date = f"{months[int(m) - 1]} {int(dd)}, {y}"

        p = render(slug, title, cat_m.group(1), date)
        print(f"  + {p}")
        made += 1

    print(f"\n{made} generated, {skipped} existing photos kept.")


if __name__ == "__main__":
    main()
