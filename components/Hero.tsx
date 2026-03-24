'use client';

import { Shield, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-bgCard border border-accent/30 rounded-full mb-6"
        >
          <Shield size={16} className="text-accent" />
          <span className="text-xs font-bold text-accent tracking-wider">VETERAN OWNED &amp; OPERATED</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Your Land.<br />
          <span className="gradient-text">Done Right.</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-textSecondary mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full-service land management for the Sulfur Springs Valley and rural Cochise County. From raw desert to livable homestead — clearing, grading, solar, water, and everything in between.
        </p>

        <div
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
        </div>

        <div
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="animate-bounce-slow text-accent hover:text-accentLight transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
