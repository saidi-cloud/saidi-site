'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LucideCpu, LucideServer, LucideActivity, LucideSettings, LucideShieldCheck } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="text-center py-20 px-4 relative">
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/gpu-hero.jpg"
            alt="GPU Cloud Illustration"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#4487c5] leading-tight drop-shadow-lg">
          Unleash the Power of GPU<br />Cloud Computing
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Revolutionizing GPU Cloud Computing Services for AI, ML, rendering, and high-performance workloads.
        </p>
      </header>

      <main className="px-6 md:px-20 space-y-28 pb-20">
        <Section title="Unparalleled Performance for High-Demand Computing">
          SAIDI's GPU cloud offers state-of-the-art infrastructure and cutting-edge GPUs, delivering superior performance and flexibility for compute-intensive workloads.
        </Section>

        <FeaturesSection title="Why Choose SAIDI" features={benefits} />

        <Section title="How It Works">
          <ul className="space-y-4 text-left max-w-3xl mx-auto">
            <li><strong>1. Sign Up and Deploy in Minutes:</strong> Create an account and start using SAIDI&#39;s GPU cloud immediately.</li>
            <li><strong>2. Superior Performance:</strong> Enjoy lightning-fast compute speeds for any workload.</li>
            <li><strong>3. Scale as Needed:</strong> Flexible and scalable GPU infrastructure for all business sizes.</li>
          </ul>
        </Section>

        <Section title="Call to Action">
          <p className="mb-4">Ready to elevate your computing performance?</p>
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-[#e35275] hover:bg-[#c63e63] text-white font-bold rounded-full transition"
          >
            Learn More
          </a>
        </Section>

        <FeaturesSection title="Our Services" features={services} />
        <FeaturesSection title="Managed Services" features={managedServices} />
      </main>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <motion.section
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-[#4487c5] mb-6 text-center">{title}</h2>
      <div className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
        {children}
      </div>
    </motion.section>
  )
}

function FeaturesSection({ title, features }) {
  return (
    <motion.section
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-[#4487c5] mb-10 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            {Icon && <Icon className="text-[#4487c5] w-8 h-8 mb-4" />}
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

const services = [
  {
    icon: LucideCpu,
    title: 'GPU Rental',
    description: 'Rent powerful GPUs for compute-intensive tasks with flexible terms and pricing.'
  },
  {
    icon: LucideServer,
    title: 'Cloud GPU Instances',
    description: 'Tailored configurations for machine learning, rendering, and more.'
  },
  {
    icon: LucideSettings,
    title: 'GPU Management',
    description: 'Dashboard to manage, monitor, and scale your GPU resources.'
  },
  {
    icon: LucideActivity,
    title: '24/7 Support',
    description: 'Dedicated support to keep your operations running smoothly and efficiently.'
  },
  {
    icon: LucideShieldCheck,
    title: 'Cost-Effective Solutions',
    description: 'Transparent billing and optimal performance to maximize your ROI.'
  },
]

const managedServices = [
  {
    icon: LucideSettings,
    title: 'Infrastructure Management',
    description: 'Provisioning, configuration, scaling, and optimization of your GPU cloud.'
  },
  {
    icon: LucideShieldCheck,
    title: 'Security & Compliance',
    description: 'Full-stack security management, threat detection, and compliance assurance.'
  },
  {
    icon: LucideActivity,
    title: 'Backup & Recovery',
    description: 'Automated backups, disaster recovery planning, and restoration services.'
  },
  {
    icon: LucideCpu,
    title: 'Custom Solutions',
    description: 'Bespoke architecture tailored to your specific industry and workload needs.'
  },
]

const benefits = [
  {
    icon: LucideShieldCheck,
    title: 'Flexibility & Cost Efficiency',
    description: 'Scalable infrastructure with transparent pricing tailored to your workload needs.'
  },
  {
    icon: LucideCpu,
    title: 'High Performance GPUs',
    description: 'Use the latest GPUs optimized for compute-heavy tasks like AI, ML, and rendering.'
  },
  {
    icon: LucideServer,
    title: 'Reliable Cloud Infrastructure',
    description: 'Consistently fast performance backed by modern data center technology.'
  }
]
