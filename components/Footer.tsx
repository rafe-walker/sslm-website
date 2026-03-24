'use client';

import { Mountain, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bgCard border-t border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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

          <div>
            <h4 className="font-bold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li><a href="#services" className="hover:text-accent transition-colors">Land Clearing</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Grading &amp; Driveways</a></li>
              <li><a href="#solar-&-water" className="hover:text-accent transition-colors">Solar Systems</a></li>
              <li><a href="#solar-&-water" className="hover:text-accent transition-colors">Water Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#coverage" className="hover:text-accent transition-colors">Coverage Area</a></li>
              <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li><a href="mailto:inquiries@cochiselandmanagement.com" className="hover:text-accent transition-colors">inquiries@cochiselandmanagement.com</a></li>
              <li><a href="tel:+15204025877" className="hover:text-accent transition-colors">(520) 402-5877</a></li>
              <li><span>Cochise County, AZ</span></li>
              <li className="pt-2"><a href="https://strongholdprecisionaerials.com" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:text-accentLight transition-colors font-bold">Stronghold Precision Aerials</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-borderColor pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textSecondary">
            <p>&copy; 2026 Cochise Land Management. All rights reserved.</p>
            <p>A Stormhaven Enterprises LLC Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
