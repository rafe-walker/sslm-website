'use client';

import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Tell us the job',
    description: 'Send the parcel number or nearest road, what you need done and when. Rough acreage and a photo help. Nothing is quoted from this site.',
  },
  {
    number: '02',
    title: 'A licensed contractor calls',
    description: 'We pass the request to an independent, ROC-licensed Cochise County contractor who works the valley. They walk the land with you and quote it under their own name and licence number.',
  },
  {
    number: '03',
    title: 'They do the work',
    description: 'The contract, the permit, the equipment and the warranty are theirs. If the first contractor cannot take it, say so and we will find another.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            One form, one call back from a licensed contractor who works your part of the valley. No quotes come from this site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="p-6 bg-bgCard border border-borderColor rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-textSecondary">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight size={24} className="text-accent/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
