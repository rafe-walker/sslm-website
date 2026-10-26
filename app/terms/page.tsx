'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-textSecondary mt-2">Effective Date: October 26, 2026</p>
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
          <h2 className="text-2xl font-bold mb-4 text-accent">1. Agreement to Terms</h2>
          <p className="text-textSecondary leading-relaxed">
            These Terms of Service ("Terms") are an agreement between you and Sulfur Springs Land Management, a referral service operated by Stormhaven Enterprises LLC. By using this website or sending a quote request through it, you agree to these Terms. If you do not agree, please do not use the website.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">2. What This Service Is</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Sulfur Springs Land Management is a referral service, not a contractor. We are not licensed by the Arizona Registrar of Contractors and we do not perform, bid, price, supervise or warrant any land clearing, grading, trenching, hauling, solar, water or other work. What we do:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>Publish guides for landowners in Cochise County, Arizona</li>
            <li>Take quote requests through this website and by phone</li>
            <li>Pass each request to one or more independent, ROC-licensed contractors who work the area described</li>
          </ul>
          <p className="text-textSecondary leading-relaxed mt-4">
            Nothing on this website is a quote, an estimate or an offer to do work. Every quote comes from the contractor, under the contractor's own name and licence number.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">3. Quote Requests</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">What happens to a request</h3>
              <p className="text-textSecondary leading-relaxed">
                When you send a request we may share the details you give us — name, contact details, parcel or location and the work described — with up to three independent, ROC-licensed contractors so they can quote it, and they may contact you by phone, text or email about that request. Consent to this is not a condition of buying anything from anyone. Our <Link href="/privacy" className="text-accent hover:text-accentLight">Privacy Policy</Link> describes the rest.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">No guarantee of a referral</h3>
              <p className="text-textSecondary leading-relaxed">
                We refer requests inside Cochise County, Arizona only. We do not guarantee that a contractor will be available for a given job, location or timeline, that a contractor will contact you, or that any quote will be acceptable to you.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Your information</h3>
              <p className="text-textSecondary leading-relaxed">
                You agree that the information you send is accurate, that you own the property described or have the owner's authority to request work on it, and that you will not send requests for property outside the area we serve or requests that are not genuine.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">4. Your Relationship with the Contractor</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Any contract for work is between you and the contractor. We are not a party to it. In particular:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>The quote, the written contract, the schedule and the price are the contractor's</li>
            <li>Payment is made to the contractor. We never ask you for payment and we never hold funds</li>
            <li>Permits, insurance, utility locates, safety on site and compliance with Arizona law are the contractor's responsibility</li>
            <li>Any warranty on the work is the contractor's, including the written warranty Arizona law requires of solar installers</li>
            <li>Disputes about the work are between you and the contractor; the Arizona Registrar of Contractors handles complaints about licensed contractors</li>
          </ul>
          <p className="text-textSecondary leading-relaxed mt-4">
            Before you sign anything, ask the contractor for their ROC licence number and check it at the Registrar of Contractors website (azroc.my.site.com). We do our best to refer only licensed contractors, but the licence check is yours to make.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">5. Referral Compensation</h2>
          <p className="text-textSecondary leading-relaxed">
            We may receive a referral fee or other compensation from a contractor for a request we pass to them. You pay nothing to us. A referral is not an endorsement, a guarantee of quality or a recommendation that you accept any particular quote, and you are free to obtain quotes from anyone.
          </p>
          <p className="text-textSecondary leading-relaxed mt-4">
            Stronghold Precision Aerials, an affiliated company also operated by Stormhaven Enterprises LLC, offers optional aerial site surveys (drone photographs and maps of a parcel). That is a separate service, quoted and billed by Stronghold Precision Aerials under its own terms; choosing it or declining it has no effect on whether or to whom a request is referred.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">6. Guides, Blog Posts and Affiliate Links</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            The guides on this website are general information about rural land in Cochise County, written from publicly available sources and the authors' own experience. They are not legal, engineering, surveying, tax or professional advice, and county, state and utility rules change. Confirm anything that matters with Cochise County Development Services, the relevant agency or a licensed professional before you act on it.
          </p>
          <p className="text-textSecondary leading-relaxed">
            Some guides contain affiliate links to products on Amazon or elsewhere. If you buy through one of those links we may earn a commission at no additional cost to you. Affiliate links are marked as such.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">7. Use of the Website</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            You may use this website for your own, non-commercial purposes. You may not:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>Copy, scrape or republish the guides or other content without written permission</li>
            <li>Send automated, bulk or fraudulent quote requests</li>
            <li>Use the website to harvest contact details of contractors or other users</li>
            <li>Interfere with the website's operation or security</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">8. Disclaimers</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            This website and the referral service are provided "as is" and "as available". To the fullest extent permitted by Arizona law, we make no warranty, express or implied, regarding:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>The accuracy, completeness or currency of any guide or other content</li>
            <li>The availability, licensing, insurance, pricing, workmanship, conduct or timeliness of any contractor we refer</li>
            <li>The outcome of any work performed by a contractor</li>
            <li>Third-party products, websites or services linked from this website</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">9. Limitation of Liability</h2>
          <p className="text-textSecondary leading-relaxed">
            To the fullest extent permitted by law, Sulfur Springs Land Management and Stormhaven Enterprises LLC are not liable for any indirect, incidental, consequential, special or punitive damages, or for any loss arising from work performed or not performed by a contractor we refer, from your reliance on any guide, or from your use of this website. Where liability cannot be excluded, it is limited to one hundred dollars ($100). Nothing in these Terms limits any liability that cannot be limited under Arizona law.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">10. Indemnification</h2>
          <p className="text-textSecondary leading-relaxed">
            You agree to indemnify and hold harmless Sulfur Springs Land Management, Stormhaven Enterprises LLC and their officers, employees and agents from claims, losses and expenses (including reasonable legal fees) arising from your breach of these Terms, from inaccurate information you provide in a request, or from your dealings with any contractor.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">11. Governing Law and Jurisdiction</h2>
          <p className="text-textSecondary leading-relaxed">
            These Terms are governed by the laws of the State of Arizona, without regard to its conflict of laws provisions. Any legal action related to these Terms shall be brought in the courts located in Cochise County, Arizona.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">12. Dispute Resolution</h2>
          <p className="text-textSecondary leading-relaxed">
            Before starting legal action, please contact us so we can try to resolve the matter informally. Disputes about work performed belong with the contractor who performed it and, where appropriate, the Arizona Registrar of Contractors.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">13. Modification of Terms</h2>
          <p className="text-textSecondary leading-relaxed">
            We may modify these Terms at any time. Changes are effective when posted to this website, and the date at the top of this page will change. Your continued use of the website after a change is acceptance of the updated Terms.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">14. Contact Information</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            For questions about these Terms, please contact us:
          </p>
          <div className="bg-bgCard border border-borderColor p-6 rounded-lg">
            <p className="font-bold text-accent mb-2">Sulfur Springs Land Management</p>
            <p className="text-textSecondary mb-1">A Stormhaven Enterprises LLC Company</p>
            <p className="text-textSecondary mb-1">Cochise County, Arizona</p>
            <p className="text-textSecondary mb-1">Email: inquiries@sulfurspringslandmanagement.com</p>
            <p className="text-textSecondary">Web: sulfurspringslandmanagement.com</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <div className="bg-accent/5 border border-accent/30 p-6 rounded-lg">
            <p className="text-sm text-textSecondary">
              <strong>Last Updated:</strong> October 26, 2026<br />
              <strong>Terms Version:</strong> 2.0 (referral service)<br />
              <strong>Owner:</strong> Stormhaven Enterprises LLC
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
