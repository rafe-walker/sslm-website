'use client';

import { MapPin } from 'lucide-react';
import { SERVICE_AREA } from '@/app/lib/site';

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 bg-bgCard border border-borderColor rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <MapPin size={24} className="text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold">The Sulphur Springs Valley</h2>
          </div>
          <p className="text-textSecondary mb-8">
            Every contractor we refer works the valley and the rest of Cochise County. Requests for
            Tucson, Phoenix, Scottsdale or elsewhere in Arizona are not referred. For the San Pedro
            side of the county — Benson, Sierra Vista, Bisbee — our sister site{' '}
            <a href="https://cochiselandmanagement.com" className="text-accent hover:text-accentLight" rel="noopener">Cochise Land Management</a>
            {' '}covers the whole county.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-accent mb-2">Primary coverage</h3>
              <p className="text-textSecondary">{SERVICE_AREA.primary.join(', ')}</p>
            </div>

            <div>
              <h3 className="font-bold text-accent mb-2">Extended area</h3>
              <p className="text-textSecondary">{SERVICE_AREA.extended.join(', ')}</p>
            </div>

            <div className="pt-4 border-t border-borderColor space-y-3">
              <p className="text-textSecondary flex items-start gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span>
                  <strong>Equipment:</strong> the contractors we refer bring their own machines to
                  your property anywhere in the service area.
                </span>
              </p>
              <p className="text-textSecondary flex items-start gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span>
                  <strong>Not sure if you are in it?</strong> Send us your parcel number. If a
                  contractor we know works your road, we will say so; if not, we will say that too.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
