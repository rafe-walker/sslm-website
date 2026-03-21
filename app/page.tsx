'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Mountain,
  Trees,
  Layers,
  Shovel,
  Truck,
  Sun,
  Droplets,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  BookOpen,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Land Clearing',
    propertySize: '',
    description: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would submit to a backend service
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Land Clearing',
      propertySize: '',
      description: '',
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

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

  const coverageAreas = {
    primary: ['Cochise', 'Sunsites', 'Pearce', 'Willcox', 'Dragoon', 'Benson'],
    extended: ['Sierra Vista', 'Tombstone', 'Bisbee', 'Douglas', 'St. David'],
  };

  return (
    <div className="min-h-screen bg-bg text-textPrimary overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-bg/95 backdrop-blur-md z-50 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
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

            {/* Desktop Navigation */}
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

            {/* CTA Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2 bg-accent text-bg rounded-lg font-bold text-sm hover:bg-accentLight transition-colors"
            >
              Get a Free Estimate
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-accent p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
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

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bgCard to-bg opacity-60"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentOrange/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Veteran Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-bgCard border border-accent/30 rounded-full mb-6"
          >
            <Shield size={16} className="text-accent" />
            <span className="text-xs font-bold text-accent tracking-wider">VETERAN OWNED & OPERATED</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Your Land.<br />
            <span className="gradient-text">Done Right.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-textSecondary mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Full-service land management for rural Cochise County. From raw desert to livable homestead — clearing, grading, solar, water, and everything in between.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-accent text-bg rounded-lg font-bold hover:bg-accentLight transition-colors"
            >
              Get a Free Estimate
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 border border-accent text-accent rounded-lg font-bold hover:bg-accent/10 transition-colors"
            >
              View Services
            </button>
          </motion.div>

          {/* Down Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="animate-bounce-slow text-accent hover:text-accentLight transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Complete solutions for rural properties. Everything you need to build and maintain your off-grid homestead.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
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
          </motion.div>
        </div>
      </section>

      {/* Off-Grid Specialists Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bgCard/50 to-bg/50"></div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Off-Grid Specialists</h2>
            <p className="text-lg text-textSecondary leading-relaxed max-w-3xl mx-auto">
              Most land service companies are built for subdivisions and city lots. We're built for the real Cochise County — the RU-4 parcels, the off-grid homesteads, the raw desert that needs to become home. We live out here too, and we know what it takes to build a life off the grid.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { stat: '20+ Mile', label: 'Service radius with equipment delivery' },
              { stat: 'Full-Service', label: 'From raw land to move-in ready' },
              { stat: 'One Call', label: 'Clearing, solar, water — all under one roof' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-bg border border-borderColor rounded-lg text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">{item.stat}</div>
                <p className="text-textSecondary text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solar & Water Section */}
      <section id="solar-water" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solar & Water Systems</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Independent power and water are the foundation of off-grid living. We design, install, and support complete systems built for desert reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Solar Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-bg border border-borderColor rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sun size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Solar Solutions</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'System design and sizing for your energy needs',
                  'Ground-mount and roof-mount array installation',
                  'Battery bank setup and configuration (LiFePO4, lead-acid)',
                  'Inverter installation and grid-tie/off-grid wiring',
                  'System monitoring and maintenance plans',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-textSecondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Water Systems */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-bg border border-borderColor rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Droplets size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Water Systems</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Large capacity tank delivery and placement (1,000-3,000+ gallons)',
                  'Pressurized pump systems for consistent water flow',
                  'Filtration and treatment systems',
                  'Rainwater harvesting setup',
                  'Hauled water system optimization',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-textSecondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sister Company Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-accent/5 border border-accent/30 rounded-lg text-center"
          >
            <p className="text-textSecondary">
              Need aerial surveying for your property layout? Our sister company{' '}
              <a href="#" className="text-accent font-bold hover:text-accentLight">
                Stronghold Precision Aerials
              </a>
              {' '}provides precision mapping and 3D terrain modeling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              From first call to project completion, we keep things simple and transparent.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
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
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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

            {/* Veteran Badge */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg">
                <Shield size={24} className="text-accent" />
                <div>
                  <div className="text-xs font-bold text-accent tracking-wider">VETERAN OWNED & OPERATED</div>
                  <div className="text-xs text-textSecondary">Stormhaven Enterprises LLC</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-bgCard border border-borderColor rounded-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Service Area</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-accent mb-2">Primary Coverage</h3>
                <p className="text-textSecondary">
                  {coverageAreas.primary.join(', ')}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-accent mb-2">Extended Area</h3>
                <p className="text-textSecondary">
                  {coverageAreas.extended.join(', ')}
                </p>
              </div>

              <div className="pt-4 border-t border-borderColor">
                <p className="text-textSecondary flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Equipment Delivery:</strong> We deliver equipment to your property within our service area — no need to arrange your own transport.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactFormRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Talk About Your Land</h2>
            <p className="text-textSecondary">
              Free estimates for all services. Tell us about your property and we'll put together a plan.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleFormSubmit}
            className="bg-bg border border-borderColor rounded-lg p-8 space-y-6"
          >
            {/* Success Message */}
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-accent/10 border border-accent text-accent rounded-lg text-sm font-medium"
              >
                Thank you! We've received your inquiry and will be in touch within 24 hours.
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-bgCard border border-borderColor text-textPrimary placeholder-textSecondary rounded-lg focus:border-accent focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 bg-bgCard border border-borderColor text-textPrimary placeholder-textSecondary rounded-lg focus:border-accent focus:outline-none"
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 bg-bgCard border border-borderColor text-textPrimary placeholder-textSecondary rounded-lg focus:border-accent focus:outline-none"
            />

            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleFormChange}
              className="w-full px-4 py-2 bg-bgCard border border-borderColor text-textPrimary rounded-lg focus:border-accent focus:outline-none"
            >
              <option value="Land Clearing">Land Clearing & Brush Removal</option>
              <option value="Grading">Grading, Driveways & Pad Prep</option>
              <option value="Trenching">Trenching & Earthwork</option>
              <option value="Debris">Bulk Debris & Trash Removal</option>
              <option value="Solar">Solar System Design & Installation</option>
              <option value="Water">Off-Grid Water Systems</option>
              <option value="Multiple">Multiple Services</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="propertySize"
              value={formData.propertySize}
              onChange={handleFormChange}
              placeholder="Property Size (e.g., 5 acres)"
              className="w-full px-4 py-2 bg-bgCard border border-borderColor text-textPrimary placeholder-textSecondary rounded-lg focus:border-accent focus:outline-none"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              placeholder="Describe your project..."
              rows={5}
              className="w-full px-4 py-2 bg-bgCard border border-borderColor text-textPrimary placeholder-textSecondary rounded-lg focus:border-accent focus:outline-none resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-accent text-bg rounded-lg font-bold hover:bg-accentLight transition-colors"
            >
              Send Free Estimate Request
            </motion.button>
          </motion.form>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center"
          >
            <div className="p-4 bg-bgCard border border-borderColor rounded-lg">
              <Phone size={20} className="w-5 h-5 text-accent mx-auto mb-2" />
              <p className="text-sm text-textSecondary mb-1">Call us directly</p>
              <a href="tel:+1" className="text-accent font-bold hover:text-accentLight">(XXX) XXX-XXXX</a>
            </div>
            <div className="p-4 bg-bgCard border border-borderColor rounded-lg">
              <Mail size={20} className="w-5 h-5 text-accent mx-auto mb-2" />
              <p className="text-sm text-textSecondary mb-1">Email us</p>
              <a href="mailto:inquiries@cochiselandmanagement.com" className="text-accent font-bold hover:text-accentLight">inquiries@cochiselandmanagement.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* From the Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-sage-green" />
              <h2 className="text-3xl sm:text-4xl font-bold">
                From the <span className="text-sage-green">Blog</span>
              </h2>
            </div>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto">
              Expert guides on off-grid solar systems, land clearing, water management, and sustainable rural property development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            <motion.article
              variants={itemVariants}
              className="bg-bgCard border border-sage-green/20 rounded-xl p-6 hover:border-sage-green/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-sage-green/10"
            >
              <Link href="/blog/off-grid-solar-sizing-guide" className="block h-full">
                <div className="flex flex-col h-full">
                  <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
                    Off-Grid Living
                  </span>
                  <h3 className="text-2xl font-bold mt-3 mb-3 group-hover:text-sage-green transition-colors">
                    Off-Grid Solar System Sizing Guide for Cochise County
                  </h3>
                  <p className="text-textSecondary mb-6 flex-grow">
                    Learn how to size a solar system for off-grid living in Arizona, including sun hours, battery calculations, and cost estimates.
                  </p>
                  <div className="flex items-center gap-2 text-sage-green group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.article>

            <motion.article
              variants={itemVariants}
              className="bg-bgCard border border-sage-green/20 rounded-xl p-6 hover:border-sage-green/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-sage-green/10"
            >
              <Link href="/blog/off-grid-land-clearing-checklist" className="block h-full">
                <div className="flex flex-col h-full">
                  <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
                    Land Preparation
                  </span>
                  <h3 className="text-2xl font-bold mt-3 mb-3 group-hover:text-sage-green transition-colors">
                    Preparing Your Off-Grid Property: Land Clearing Checklist
                  </h3>
                  <p className="text-textSecondary mb-6 flex-grow">
                    Complete step-by-step checklist for preparing off-grid land, from site survey through final grading and utilities.
                  </p>
                  <div className="flex items-center gap-2 text-sage-green group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sage-green hover:gap-3 transition-all font-semibold"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bgCard border-t border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-bg" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-accent">COCHISE</div>
                  <div className="text-xs tracking-wider text-textSecondary">LAND MANAGEMENT</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-accent/10 border border-accent/30 rounded text-xs mt-4">
                <Shield size={14} className="text-accent" />
                <span className="text-accent font-bold">VETERAN OWNED</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-textSecondary">
                <li><a href="#services" className="hover:text-accent transition-colors">Land Clearing</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Grading & Driveways</a></li>
                <li><a href="#solar-water" className="hover:text-accent transition-colors">Solar Systems</a></li>
                <li><a href="#solar-water" className="hover:text-accent transition-colors">Water Systems</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-textSecondary">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#coverage" className="hover:text-accent transition-colors">Coverage Area</a></li>
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-textSecondary">
                <li><a href="mailto:inquiries@cochiselandmanagement.com" className="hover:text-accent transition-colors">inquiries@cochiselandmanagement.com</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cochise County, AZ</a></li>
                <li className="pt-2"><a href="#" className="text-xs text-accent hover:text-accentLight transition-colors font-bold">Stronghold Precision Aerials</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-borderColor pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textSecondary">
              <p>&copy; 2026 Cochise Land Management. All rights reserved.</p>
              <p>A Stormhaven Enterprises LLC Company</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
