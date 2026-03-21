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
          <h2 className="text-2xl font-bold mb-4 text-accent">1. Agreement to Terms</h2>
          <p className="text-textSecondary leading-relaxed">
            These Terms of Service ("Terms") constitute a legal agreement between you and Cochise Land Management, a business operated by Stormhaven Enterprises LLC. By accessing our website, requesting services, or accepting a free estimate, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our website or services.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">2. Use License</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) from our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software on our website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transmit the materials to anyone or "mirror" the materials on any other server</li>
            <li>Harass, abuse, or otherwise harm our staff or business</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">3. Free Estimates and Consultations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Estimate Accuracy</h3>
              <p className="text-textSecondary leading-relaxed">
                All free estimates provided by Cochise Land Management are good-faith assessments based on the information you provide and our on-site inspection (if applicable). Estimates may change based on:
              </p>
              <ul className="list-disc list-inside text-textSecondary mt-2 space-y-1">
                <li>Discovery of unexpected site conditions during work</li>
                <li>Additional work you request</li>
                <li>Changes to the original scope of work</li>
                <li>Material or equipment cost fluctuations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Estimate Validity</h3>
              <p className="text-textSecondary leading-relaxed">
                Free estimates are valid for 30 days from the date issued. After 30 days, conditions or pricing may have changed and a new estimate may be required.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Property Access</h3>
              <p className="text-textSecondary leading-relaxed">
                For on-site assessments, you grant Cochise Land Management permission to access your property and assess conditions relevant to the requested services. You remain responsible for any hazards on your property and for providing safe access.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">4. Service Agreement</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Work Description</h3>
              <p className="text-textSecondary leading-relaxed">
                All work performed by Cochise Land Management shall be described in a written work agreement or contract. Only work explicitly described in the agreement is included. Any additional work must be requested in writing and approved by both parties before execution.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Payment Terms</h3>
              <p className="text-textSecondary leading-relaxed">
                Payment terms, including pricing, deposit requirements, and payment schedules, will be specified in your individual service agreement. Payment must be made according to the agreed schedule.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Timelines</h3>
              <p className="text-textSecondary leading-relaxed">
                While we strive to meet all project timelines, Cochise Land Management is not liable for delays caused by weather, unforeseen site conditions, equipment failure, or circumstances beyond our reasonable control. We will communicate any anticipated delays as soon as possible.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">5. Equipment and Safety</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Equipment Operation</h3>
              <p className="text-textSecondary leading-relaxed">
                All equipment used by Cochise Land Management is operated by trained personnel in accordance with manufacturer specifications and applicable safety regulations. You are responsible for identifying any hazards on your property (utilities, structures, etc.) that may be affected by our work.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Property Hazards</h3>
              <p className="text-textSecondary leading-relaxed">
                You must disclose all known hazards on your property, including underground utilities, septic systems, wells, easements, and archaeological sites. Call 811 before digging to locate underground utilities. Cochise Land Management is not responsible for damage to unmarked utilities.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Site Conditions</h3>
              <p className="text-textSecondary leading-relaxed">
                You are responsible for ensuring safe and legal property access. If site conditions change or become unsafe, work may be suspended until conditions are remedied.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">6. Liability and Responsibility</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Property Damage</h3>
              <p className="text-textSecondary leading-relaxed">
                Cochise Land Management will exercise reasonable care to protect your property and nearby structures. However, you acknowledge that land clearing, grading, excavation, and equipment operation carry inherent risks. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-textSecondary mt-2 space-y-1">
                <li>Disclosing all property boundaries and easements</li>
                <li>Marking any structures, utilities, or items to be protected</li>
                <li>Informing us of any underground hazards</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Warranty Disclaimer</h3>
              <p className="text-textSecondary leading-relaxed">
                Services are provided on an "as-is" basis. Cochise Land Management makes no warranty, express or implied, regarding the results of its services or the durability of completed work. All work is subject to normal wear and maintenance responsibilities of the property owner.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Limitation of Liability</h3>
              <p className="text-textSecondary leading-relaxed">
                Cochise Land Management's liability for any claim arising from our services is limited to the amount paid for the service in question. We are not liable for indirect, consequential, or punitive damages.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">7. Insurance and Permits</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Cochise Land Management maintains appropriate business insurance. Depending on the scope of work, applicable permits or certifications may be required. You are responsible for:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>Obtaining all necessary local, county, and state permits</li>
            <li>Ensuring zoning compliance for your project</li>
            <li>Providing proof of property ownership or authorization</li>
            <li>Providing any required HOA or covenant approvals</li>
          </ul>
          <p className="text-textSecondary leading-relaxed mt-4">
            We will advise you on permit requirements, but you are responsible for obtaining them.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">8. Solar and Water Systems</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">System Design</h3>
              <p className="text-textSecondary leading-relaxed">
                Solar and water system designs are based on your stated needs, site assessment, and available resources. System performance may vary based on weather, usage patterns, maintenance, and other factors. Cochise Land Management is not responsible for system underperformance due to user modifications, lack of maintenance, or changes in usage.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Maintenance Responsibility</h3>
              <p className="text-textSecondary leading-relaxed">
                You are responsible for all ongoing maintenance, repairs, and replacements of system components. We can provide maintenance plans and support on a separate fee basis.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Utility Connections</h3>
              <p className="text-textSecondary leading-relaxed">
                For grid-tied solar systems, you are responsible for all utility company applications, interconnection agreements, and compliance with utility requirements.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">9. Cancellation and Refund Policy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Estimate Cancellation</h3>
              <p className="text-textSecondary leading-relaxed">
                Free estimates can be cancelled at any time at no cost.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Work Cancellation</h3>
              <p className="text-textSecondary leading-relaxed">
                If you wish to cancel a scheduled project, written notice must be provided as soon as possible. Cancellation policies, including potential fees for cancellation after work has begun, will be specified in your service agreement.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Refunds</h3>
              <p className="text-textSecondary leading-relaxed">
                Refund eligibility depends on the specific circumstances and will be handled according to your service agreement. Work completed is not refundable.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">10. Confidentiality</h2>
          <p className="text-textSecondary leading-relaxed">
            Information about your property, systems, and services is treated as confidential and proprietary. We will not share details about your property or systems with third parties without your written consent, except as required by law or when providing necessary referrals (such as to our sister company Stronghold Precision Aerials for surveying services).
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">11. Disclaimers</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Cochise Land Management provides services "as-is" and "as available." We make no warranties regarding:
          </p>
          <ul className="list-disc list-inside text-textSecondary space-y-2">
            <li>The accuracy of estimates or advice</li>
            <li>The suitability of recommended services for your specific situation</li>
            <li>The durability or performance of completed work</li>
            <li>Third-party systems or services we may recommend</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">12. Indemnification</h2>
          <p className="text-textSecondary leading-relaxed">
            You agree to indemnify, defend, and hold harmless Cochise Land Management, Stormhaven Enterprises LLC, and their respective officers, employees, and agents from any and all claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or breach of any agreement with us.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">13. Governing Law and Jurisdiction</h2>
          <p className="text-textSecondary leading-relaxed">
            These Terms of Service are governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of laws provisions. You agree that any legal action or proceeding related to these Terms shall be brought exclusively in the courts located in Cochise County, Arizona.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">14. Dispute Resolution</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            Before initiating legal action, we encourage you to contact us to attempt to resolve any dispute. If informal resolution is unsuccessful, disputes may be resolved through mediation or binding arbitration as specified in your service agreement.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">15. Modification of Terms</h2>
          <p className="text-textSecondary leading-relaxed">
            Cochise Land Management may modify these Terms at any time. Changes are effective immediately upon posting to our website. Your continued use of our website or services after modifications constitutes acceptance of the updated Terms.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">16. Contact Information</h2>
          <p className="text-textSecondary leading-relaxed mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-bgCard border border-borderColor p-6 rounded-lg">
            <p className="font-bold text-accent mb-2">Cochise Land Management</p>
            <p className="text-textSecondary mb-1">A Stormhaven Enterprises LLC Company</p>
            <p className="text-textSecondary mb-1">Cochise County, Arizona</p>
            <p className="text-textSecondary mb-1">Email: contact@cochiselandmanagement.com</p>
            <p className="text-textSecondary">Web: cochiselandmanagement.com</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <div className="bg-accent/5 border border-accent/30 p-6 rounded-lg">
            <p className="text-sm text-textSecondary">
              <strong>Last Updated:</strong> January 1, 2026<br />
              <strong>Terms Version:</strong> 1.0<br />
              <strong>Owner:</strong> Stormhaven Enterprises LLC
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
