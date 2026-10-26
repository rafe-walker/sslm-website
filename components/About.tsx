'use client';

import { Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
      <div className="max-w-4xl mx-auto">
        <div
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-invert max-w-none space-y-6 text-textSecondary leading-relaxed">
            <p>
              Sulfur Springs Land Management was born from necessity. When our founder — a 10-year tech industry veteran — moved off-grid in the Sulfur Springs Valley to build his own homestead, he discovered that quality land services for rural properties were nearly impossible to find.
            </p>
            <p>
              The companies that did exist were built for city lots, not 5-acre desert parcels with no utilities, and the ones that could do the work had no website and no way to be found. So this site became the thing he wished existed: a local who knows which licensed contractors actually show up in the valley, and a set of guides written from living out here. We cover the Sulphur Springs Valley and Cochise County and nowhere else, on purpose.
            </p>
            <p>
              Sulfur Springs Land Management is owned by a U.S. military veteran through Stormhaven Enterprises LLC. It is a referral service, not a licensed contractor: every quote, contract and permit comes from the independent, ROC-licensed contractor who does the work, under their own name and licence number.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg">
              <Shield size={24} className="text-accent" />
              <div>
                <div className="text-xs font-bold text-accent tracking-wider">VETERAN OWNED &amp; OPERATED</div>
                <div className="text-xs text-textSecondary">Stormhaven Enterprises LLC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
