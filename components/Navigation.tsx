'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mountain, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-bg/95 backdrop-blur-md z-50 border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Mountain className="w-5 h-5 text-bg" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold tracking-wider text-accent">COCHISE</div>
              <div className="text-xs tracking-wider text-textSecondary">LAND MANAGEMENT</div>
            </div>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {['Services', 'Solar & Water', 'About', 'Coverage', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm text-textSecondary hover:text-accent transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <Link href="/blog" className="text-sm text-textSecondary hover:text-accent transition-colors font-medium">
              Blog
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2 bg-accent text-bg rounded-lg font-bold text-sm hover:bg-accentLight transition-colors"
          >
            Get a Free Estimate
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-accent p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-borderColor"
          >
            <div className="flex flex-col gap-4 py-4">
              {['Services', 'Solar & Water', 'About', 'Coverage', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-left text-sm text-textSecondary hover:text-accent transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-left text-sm text-textSecondary hover:text-accent transition-colors font-medium">
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-2 bg-accent text-bg rounded-lg font-bold text-sm hover:bg-accentLight transition-colors mt-2"
              >
                Get a Free Estimate
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
