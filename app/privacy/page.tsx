'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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

  return (
    <div className="min-h-screen bg-bg text-textPrimary pt-20">
      {/* Header */}
      <div className="bg-bgCard/50 border-b border-borderColor">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accentLight transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-textSecondary mt-2">Effective Date: January 1, 2026</p>
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">1. Introduction</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Cochise Land Management ("we," "us," "our," or "Company"), owned and operated by Stormhaven Enterprises LLC, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-textSecondary leading-relaxed">
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website or services.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">2. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Information You Provide Directly</h3>
              <p className="text-textSecondary leading-relaxed">
                When you submit a contact form, request a free estimate, or communicate with us via email or phone, we collect:
              </p>
              <ul className="list-disc list-inside text-textSecondary mt-2 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Property location and size</li>
                <li>Description of your project and service needs</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Information Collected Automatically</h3>
              <p className="text-textSecondary leading-relaxed">
                Our website may collect limited technical information such as your browser type, IP address, and pages visited to help us improve your experience and understand how our site is used.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">3. How We Use Your Information</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>Responding to your inquiries and providing free property estimates</li>
            <li>Communicating with you about our services and projects</li>
            <li>Scheduling consultations and assessments</li>
            <li>Understanding your property and service needs</li>
            <li>Improving our website and services</li>
            <li>Sending marketing communications (only with your consent)</li>
            <li>Complying with legal obligations</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">4. How We Protect Your Information</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Cochise Land Management takes reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
          </p>
          <p className="text-textSecondary leading-relaxed">
            All property assessment data and contact information are treated as confidential and are used only for the purposes outlined in this Privacy Policy.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">5. Information Sharing</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>With service providers who assist us in operating our website and conducting our business, under confidentiality agreements</li>
            <li>When required by law or to protect our legal rights</li>
            <li>With your explicit consent for specific purposes</li>
            <li>In the event of a merger, acquisition, or sale of assets (you will be notified)</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">6. Your Privacy Rights</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt-out of marketing communications</li>
          </ul>
          <p className="text-textSecondary leading-relaxed mt-4">
            To exercise any of these rights, please contact us at contact@cochiselandmanagement.com.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">7. Cookies and Tracking</h2>
          <p className="text-textSecondary leading-relaxed">
            Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us recognize you and improve our services. You can control cookie settings through your browser preferences. Disabling cookies may limit your ability to use certain features of our website.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">8. Third-Party Links</h2>
          <p className="text-textSecondary leading-relaxed">
            Our website may contain links to third-party websites, including our sister company Stronghold Precision Aerials. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of third-party sites. We encourage you to review the privacy policies of any third-party sites before providing your information.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">9. Children's Privacy</h2>
          <p className="text-textSecondary leading-relaxed">
            Our website and services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a minor, we will take steps to delete such information promptly.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">10. Data Retention</h2>
          <p className="text-textSecondary leading-relaxed">
            We retain your personal information for as long as necessary to provide our services, fulfill your requests, and comply with legal obligations. You may request deletion of your information at any time by contacting us.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">11. Contact Information</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-bgCard border border-borderColor p-6 rounded-lg">
            <p className="font-bold text-accent mb-2">Cochise Land Management</p>
            <p className="text-textSecondary mb-1">A Stormhaven Enterprises LLC Company</p>
            <p className="text-textSecondary mb-1">Cochise County, Arizona</p>
            <p className="text-textSecondary mb-1">Email: contact@cochiselandmanagement.com</p>
            <p className="text-textSecondary">Web: cochiselandmanagement.com</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">12. Changes to This Policy</h2>
          <p className="text-textSecondary leading-relaxed">
            Cochise Land Management may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the effective date. Your continued use of our website after such modifications constitutes your acknowledgment and acceptance of the updated Privacy Policy.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <div className="bg-accent/5 border border-accent/30 p-6 rounded-lg">
            <p className="text-sm text-textSecondary">
              <strong>Last Updated:</strong> January 1, 2026<br />
              <strong>Policy Version:</strong> 1.0
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
