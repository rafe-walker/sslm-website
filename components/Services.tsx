'use client';

import { motion } from 'framer-motion';
import { Trees, Layers, Shovel, Truck, Sun, Droplets } from 'lucide-react';

const services = [
  {
    icon: Trees,
    title: 'Land Clearing & Brush Removal',
    description: 'Clear small trees, brush, shrubs, and overgrowth to reclaim your property. We handle everything from light brush clearing to heavy vegetation removal for building sites and firebreaks.',
  },
  {
    icon: Layers,
    title: 'Grading, Driveways & Pad Prep',
    description: 'Level building pads for sheds, container homes, and outbuildings. Grade driveways, parking areas, and access roads. Proper drainage and compaction for lasting results.',
  },
  {
    icon: Shovel,
    title: 'Trenching & Earthwork',
    description: 'Dig trenches for utilities, conduit, and water lines. Create berms, swales, and drainage features. Foundation prep and excavation for small structures.',
  },
  {
    icon: Truck,
    title: 'Bulk Debris & Trash Removal',
    description: 'Haul away construction debris, old materials, abandoned items, and property cleanout waste. We bring the muscle and the trailer — you get a clean property.',
  },
  {
    icon: Sun,
    title: 'Solar System Design & Installation',
    description: 'Complete off-grid and grid-tied solar solutions. System sizing, array layout, battery bank configuration, hardware installation, and full system setup. From consultation to first watt.',
  },
  {
    icon: Droplets,
    title: 'Off-Grid Water Systems',
    description: 'Pressurized water systems for properties without wells. Large tank delivery and setup (up to 3,000+ gallons), pump systems, filtration, and plumbing. Water independence for rural living.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Complete solutions for rural properties. Everything you need to build and maintain your off-grid homestead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-hover p-6 bg-bg border border-borderColor rounded-lg"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
