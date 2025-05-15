'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-white bg-black space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-[#4487c5]">Privacy Policy</h1>
      <p className="text-gray-300">
        SAIDI is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and protect your personal information.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#e35275]">1. Information We Collect</h2>
        <p className="text-gray-300">
          We collect information you provide directly, such as account registration, billing details, and support inquiries. We also collect usage data including IP address, session activity, and system logs.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">2. Use of Information</h2>
        <p className="text-gray-300">
          We use collected information to provide and improve our services, manage billing, enhance security, and communicate service-related updates.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">3. Data Security</h2>
        <p className="text-gray-300">
          SAIDI implements reasonable physical, administrative, and technical safeguards to protect your data from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">4. Data Sharing</h2>
        <p className="text-gray-300">
          We do not sell or rent your personal data. We may share data with trusted vendors for the sole purpose of operating and maintaining the Service.
        </p>

        <h2 className="text-2xl font-semibold text-[#e35275]">5. Your Rights</h2>
        <p className="text-gray-300">
          You may request to review, update, or delete your personal information by contacting our support team.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: May 2025
      </p>
    </motion.div>
  )
}
