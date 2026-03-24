'use client';

import { motion } from 'framer-motion';
import { Sun, Droplets, CheckCircle } from 'lucide-react';

export default function SolarWater() {
  const solarFeatures = [
    'System design and sizing for your energy needs',
    'Ground-mount and roof-mount array installation',
    'Battery bank setup and configuration (LiFePO4, lead-acid)',
    'Inverter installation and grid-tie/off-grid wiring',
    'System monitoring and maintenance plans',
  ];

  const waterFeatures = [
    'Large capacity tank delivery and placement (1,000-3,000+ gallons)',
    'Pressurized pump systems for consistent water flow',
    'Filtration and treatment systems',
    'Rainwater harvesting setup',
    'Hauled water system optimization',
  ];

  return (
    <section id="solar-&amp;-water" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solar &amp; Water Systems</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Independent power and water are the foundation of off-grid living. We design, install, and support complete systems built for desert reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-bg border border-borderColor rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Sun size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Solar Solutions</h3>
            </div>
            <ul className="space-y-4">
              {solarFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-textSecondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-bg border border-borderColor rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Droplets size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Water Systems</h3>
            </div>
            <ul className="space-y-4">
              {waterFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-textSecondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 p-6 bg-accent/5 border border-accent/30 rounded-lg text-center"
        >
          <p className="text-textSecondary">
            Need aerial surveying for your property layout? Our sister company{' '}
            <a href="https://strongholdprecisionaerials.com" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-accentLight">
              Stronghold Precision Aerials
            </a>
            {' '}provides precision mapping and 3D terrain modeling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
