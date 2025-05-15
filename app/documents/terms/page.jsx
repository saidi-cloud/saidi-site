'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-white bg-black space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-[#4487c5]">Terms of Service</h1>
      <p className="text-gray-300">
        These Terms of Service ("Terms") govern your access to and use of SAIDI's cloud computing platform ("Service"). By accessing or using the Service, you agree to be bound by these Terms.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#e35275]">1. Use of Service</h2>
        <p className="text-gray-300">
          You may only use the Service in accordance with applicable laws and these Terms. You are responsible for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">2. User Responsibilities</h2>
        <p className="text-gray-300">
          You agree not to misuse the Service, including but not limited to distributing malware, launching DDoS attacks, or attempting unauthorized access to other systems.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">3. Fees and Billing</h2>
        <p className="text-gray-300">
          Usage of GPU infrastructure is billed according to the pricing published on our platform. All fees are non-refundable except where required by law.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">4. Termination</h2>
        <p className="text-gray-300">
          We reserve the right to suspend or terminate your account at any time for breach of these Terms or misuse of our infrastructure.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">5. Limitation of Liability</h2>
        <p className="text-gray-300">
          SAIDI shall not be liable for indirect, incidental, or consequential damages, including but not limited to data loss, downtime, or service interruption.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: May 2025
      </p>
    </motion.div>
  )
}
