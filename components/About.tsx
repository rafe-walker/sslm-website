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
              Cochise Land Management was born from necessity. When our founder — a 10-year tech industry veteran — moved off-grid in Cochise County to build his own homestead, he discovered that quality land services for rural properties were nearly impossible to find.
            </p>
            <p>
              The companies that did exist were built for city lots, not 5-acre desert parcels with no utilities. So he built the company he wished existed — one that understands off-grid living because we live it ourselves.
            </p>
            <p>
              As a veteran-owned company under Stormhaven Enterprises LLC, we bring discipline, reliability, and follow-through to every project. Your land is your future. We treat it that way.
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
