'use client';

import { Trees, Layers, Shovel, Truck, Sun, Droplets, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Trees,
    title: 'Land Clearing & Brush Removal',
    href: '/services/land-clearing',
    description: 'Small trees, brush, shrubs and overgrowth cleared by mulching, grubbing or blading — from light brush work to heavy vegetation removal for building sites and firebreaks.',
  },
  {
    icon: Layers,
    title: 'Grading, Driveways & Pad Prep',
    href: '/services/grading-driveways',
    description: 'Level building pads for sheds, container homes, and outbuildings. Grade driveways, parking areas, and access roads. Proper drainage and compaction for lasting results.',
  },
  {
    icon: Shovel,
    title: 'Trenching & Earthwork',
    href: '/services/trenching-earthwork',
    description: 'Dig trenches for utilities, conduit, and water lines. Create berms, swales, and drainage features. Foundation prep and excavation for small structures.',
  },
  {
    icon: Truck,
    title: 'Bulk Debris & Trash Removal',
    href: '/services/debris-removal',
    description: 'Construction debris, old materials, abandoned items and property cleanout waste hauled to the transfer station. The contractor brings the trailer; you get a clean property.',
  },
  {
    icon: Sun,
    title: 'Solar System Design & Installation',
    href: '/services/solar-systems',
    description: 'Off-grid and grid-tied systems quoted by licensed solar contractors: sizing, array layout, battery bank, inverter and the written warranty Arizona law requires of the installer.',
  },
  {
    icon: Droplets,
    title: 'Off-Grid Water Systems',
    href: '/services/water-systems',
    description: 'Pressurized water for properties without wells: storage tanks (up to 3,000+ gallons), pump and pressure systems, filtration and plumbing, installed by licensed contractors.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            The six jobs a raw valley parcel needs, each quoted and done by an independent, ROC-licensed contractor we refer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-hover p-6 bg-bg border border-borderColor rounded-lg"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm mt-3"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
