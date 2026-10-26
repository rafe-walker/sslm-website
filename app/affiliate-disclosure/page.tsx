import type { Metadata } from 'next'
import Link from 'next/link'
import { Mountain, ArrowLeft } from 'lucide-react'
import { SITE, canonical } from '../lib/site'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'How Sulfur Springs Land Management uses Amazon affiliate links, what we earn, and the rules we hold ourselves to when recommending equipment.',
  alternates: { canonical: canonical('/affiliate-disclosure') },
  robots: { index: true, follow: true },
}

export default function AffiliateDisclosure() {
  return (
    <div className="bg-bg text-textPrimary min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition"><Mountain className="w-8 h-8 text-accent" /><span className="text-lg font-bold">Sulfur Springs Land Management</span></Link>
          <Link href="/blog" className="flex items-center gap-2 hover:text-accent transition"><ArrowLeft className="w-4 h-4" />Guides</Link>
        </div>
      </nav>
      <main className="pt-28 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Affiliate disclosure</h1>

          <div className="blog-content">
            <p>
              Some articles on this site link to products on Amazon. Those are affiliate
              links. If you buy something through one, we earn a small commission from Amazon. You
              pay exactly the same price you would pay going to Amazon directly — the commission
              comes out of Amazon&rsquo;s margin, not your pocket.
            </p>

            <p>
              {SITE.name} is a participant in the Amazon Services LLC Associates Program, an
              affiliate advertising program designed to provide a means for sites to earn
              advertising fees by advertising and linking to Amazon.com. As an Amazon Associate we
              earn from qualifying purchases.
            </p>

            <h2>The rules we hold ourselves to</h2>

            <p>
              We are a contractor, not a review site. Our income comes from clearing, grading and
              building things — the affiliate links exist because owners ask us what to buy often
              enough that answering it properly in public is worth doing. That order of priority
              produces some rules:
            </p>

            <ul>
              <li>
                <strong>We only list gear we would use out here, or tell an owner to buy.</strong>{' '}
                Nothing is listed because it pays better than the alternative.
              </li>
              <li>
                <strong>We say what a product does badly.</strong> Almost every entry names a real
                limitation — a lead time, a rating that is lower than people assume, a filter that
                does not remove the thing this county actually has in its groundwater. A
                recommendation with no downside in it is an advertisement.
              </li>
              <li>
                <strong>We never link to something we sell as a service.</strong> If we would be
                doing the work, we tell you that instead of sending you to buy a tool.
              </li>
              <li>
                <strong>We do not publish prices or star ratings.</strong> Amazon&rsquo;s program
                terms only permit those when they come live from Amazon, and a number typed into a
                page by hand is out of date within weeks. Check the current price on the product
                page.
              </li>
              <li>
                <strong>Links go straight to Amazon.</strong> No redirect service, no link cloaking,
                nothing that hides where you are about to land. You can see the destination in your
                browser before you click.
              </li>
              <li>
                <strong>We check that products are actually buyable.</strong> When we chose the gear we found a meaningful share of the items that rank well in search for off-grid
                equipment were delisted or permanently out of stock. Those were dropped rather than
                linked.
              </li>
            </ul>

            <h2>What this does not affect</h2>

            <p>
              Nothing on this site is written to sell a product. The guides exist because people buy
              raw land in this county and then discover it is harder than the listing suggested, and
              because the pages currently answering those questions are written by companies selling
              leads. Where the honest answer is &ldquo;don&rsquo;t buy anything, go and look at the
              parcel first,&rdquo; that is what the article says.
            </p>

            <p>
              If you would rather not send us a commission, search the product name on Amazon
              yourself. No hard feelings, and the recommendation is the same either way.
            </p>

            <h2>Questions</h2>
            <p>
              Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{' '}
              <a href={SITE.phoneHref}>{SITE.phone}</a>.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-bg/50 border-t border-accent/10 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-textPrimary/60 text-sm">
          <p>&copy; 2026 Sulfur Springs Land Management. All rights reserved. | <Link href="/privacy" className="hover:text-accent">Privacy</Link> | <Link href="/terms" className="hover:text-accent">Terms</Link></p>
        </div>
      </footer>
    </div>
  )
}
