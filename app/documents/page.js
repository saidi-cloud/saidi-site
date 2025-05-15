'use client'

import { motion } from 'framer-motion'

export default function DocumentsPage() {
  return (
    <motion.div
      className="space-y-12 bg-black text-white min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#4487c5] mb-4">Documents</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Find key SAIDI policy documents and reference materials below.
        </p>
      </section>

      <ul className="space-y-6 max-w-3xl mx-auto text-left text-[#e35275]">
        <li>
          <a href="/pdfs/terms-of-service.pdf" className="hover:underline">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/pdfs/privacy-policy.pdf" className="hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/pdfs/gpu-pricing-schedule.pdf" className="hover:underline">
            GPU Pricing Schedule
          </a>
        </li>
      </ul>
    </motion.div>
  )
}
