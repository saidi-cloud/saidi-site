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
          SAIDI (Singapore Advanced Infrastructure for Distributed Intelligence) is a cloud GPU infrastructure provider dedicated to
          supporting high-performance computing needs across industries. Our mission is to deliver scalable, secure, and cost-effective
          GPU compute infrastructure as a service.
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#e35275] mb-2">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To empower organizations and researchers by providing access to powerful, on-demand GPU computing resources. We aim to simplify
            infrastructure and accelerate innovation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#e35275] mb-2">Why We Exist</h2>
          <p className="text-gray-300 leading-relaxed">
            As AI/ML and data-intensive applications become essential, traditional compute models fall short. SAIDI bridges this gap by offering a
            robust GPU cloud platform for experimentation, production, and scale — without vendor lock-in.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#e35275] mb-2">Our Team</h2>
          <p className="text-gray-300 leading-relaxed">
            We are a team of engineers, researchers, and infrastructure experts passionate about democratizing access to GPU computing.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
