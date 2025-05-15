'use client'

import { motion } from 'framer-motion'
import { LucideCpu, LucideServer, LucideActivity, LucideSettings, LucideShieldCheck } from 'lucide-react'

export default function ServicesPage() {
  return (
    <motion.div
      className="space-y-16 bg-black text-white min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#4487c5] mb-4">Our Services</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          SAIDI offers a wide range of GPU cloud computing services designed for AI, machine learning, and compute-intensive applications.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg border border-gray-800">
            <Icon className="text-[#4487c5] w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const services = [
  {
    icon: LucideCpu,
    title: 'GPU Rental',
    description: 'Access powerful GPUs on-demand with hourly or monthly pricing.'
  },
  {
    icon: LucideServer,
    title: 'Cloud GPU Instances',
    description: 'Launch virtual GPU servers pre-configured for AI/ML and simulation workloads.'
  },
  {
    icon: LucideActivity,
    title: 'Managed GPU Infrastructure',
    description: 'We handle deployment, scaling, and monitoring so you can focus on development.'
  },
  {
    icon: LucideSettings,
    title: 'Custom Configuration',
    description: 'Tailored GPU setups to meet your specific project requirements.'
  },
  {
    icon: LucideShieldCheck,
    title: 'Compliance and Security',
    description: 'Enterprise-grade security protocols and compliance certifications.'
  }
]
