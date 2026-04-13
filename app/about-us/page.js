'use client'

import { motion } from 'framer-motion'

export default function AboutUsPage() {
  return (
    <motion.div
      className="space-y-12 bg-black text-white min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4487c5] mb-6">About SAIDI</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          SAIDI is an optical module supplier dedicated to supporting the needs of various industries. Our mission is to provide a wide range of optical modules and related services.
        </p>
      </section>
      

  )
}
