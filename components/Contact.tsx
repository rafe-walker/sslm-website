'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Land Clearing',
    propertySize: '',
    description: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(false);
    try {
      const res = await fetch('https://formspree.io/f/xeerwrbw', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: 'Land Clearing',
          propertySize: '',
          description: '',
        });
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    }
    setFormSubmitting(false);
  };

  return (
    <section id="contact" ref={contactFormRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-bgCard/50">
      <div className="max-w-2xl mx-auto">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Talk About Your Land</h2>
          <p className="text-textSecondary">
            Free estimates for all services. Tell us about your property and we&apos;ll put together a plan.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="bg-bg border border-borderColor rounded-lg p-8 space-y-6"
        >
          {formSubmitted && (
            <div
              className="p-4 bg-accent/10 border border-accent text-accent rounded-lg text-sm font-medium"
            >
              Thank you! We&apos;ve received your inquiry and will be in touch within 24 hours.
            </div>
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
            <option value="Land Clearing">Land Clearing &amp; Brush Removal</option>
            <option value="Grading">Grading, Driveways &amp; Pad Prep</option>
            <option value="Trenching">Trenching &amp; Earthwork</option>
            <option value="Debris">Bulk Debris &amp; Trash Removal</option>
            <option value="Solar">Solar System Design &amp; Installation</option>
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

          {formError && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={formSubmitting}
            className="w-full px-6 py-3 bg-accent text-bg rounded-lg font-bold hover:bg-accentLight transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formSubmitting ? 'Sending...' : 'Send Free Estimate Request'}
          </motion.button>
        </form>

        <div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center"
        >
          <div className="p-4 bg-bgCard border border-borderColor rounded-lg">
            <Phone size={20} className="w-5 h-5 text-accent mx-auto mb-2" />
            <p className="text-sm text-textSecondary mb-1">Call us directly</p>
            <a href="tel:+15204025877" className="text-accent font-bold hover:text-accentLight">(520) 402-5877</a>
          </div>
          <div className="p-4 bg-bgCard border border-borderColor rounded-lg">
            <Mail size={20} className="w-5 h-5 text-accent mx-auto mb-2" />
            <p className="text-sm text-textSecondary mb-1">Email us</p>
            <a href="mailto:inquiries@sulfurspringslandmanagement.com" className="text-accent font-bold hover:text-accentLight break-all text-sm">inquiries@sulfurspringslandmanagement.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
