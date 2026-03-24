'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Consult',
    description: 'Call or email for a free property assessment. We\'ll discuss your vision, walk the land, and develop a plan.',
  },
  {
    number: '02',
    title: 'Execute',
    description: 'Our crew arrives with the right equipment for the job. We work clean, efficient, and on schedule.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Your property transformed. We don\'t leave until the job meets our standards — and yours.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            From first call to project completion, we keep things simple and transparent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
