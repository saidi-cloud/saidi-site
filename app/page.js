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
            alt="Cloud Illustration"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#4487c5] leading-tight drop-shadow-lg">
          Optical Modules & Colocation
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          High-speed Interconnects + Reliable Data Center Infrastructure.
        </p>
      </header>

      <main className="px-6 md:px-20 space-y-28 pb-20">
        <Section title="Unparalleled Performance">
          SAIDI&apos;s optical modules provide excellent performance.
        </Section>

        <FeaturesSection title="Why Choose SAIDI" features={benefits} />

        <Section title="How It Works">
          <ul className="space-y-4 text-left max-w-3xl mx-auto">
            <li><strong>1. Requirement Alignment:</strong> Understand your deployment scenario, speed needs, and infrastructure environment.</li>
            <li><strong>2. Qualification & Validation:</strong> Ensure compatibility and performance through structured testing.</li>
            <li><strong>3. Scale as Needed:</strong> Flexible and scalable infrastructure for all business sizes.</li>
          </ul>
        </Section>

        <Section title="Call to Action">
          <p className="mb-4">Deployment & Lifecycle Support：Ramp to production with ongoing infrastructure and interconnect support.</p>
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
    title: 'Transceivers & Cables',
    description: 'High-speed optical modules and copper cables for low latency, low power, and reliable connectivity.'
  },
  {
    icon: LucideServer,
    title: 'Colocation Infrastructure',
    description: 'Rack space, power, and bandwidth with redundant cooling and power for production workloads.'
  },
  {
    icon: LucideSettings,
    title: 'Infrastructure Management',
    description: 'Provisioning, configuration, monitoring, and optimization of your colocation environment.'
  },
  {
    icon: LucideActivity,
    title: '24/7 Technical Support',
    description: 'Dedicated support to keep your physical infrastructure and network connectivity running smoothly.'
  },
  {
    icon: LucideShieldCheck,
    title: 'Custom Engineering',
    description: 'Bespoke optical and cabling solutions tailored to your specific switch platforms and deployment scenarios.'
  },
]

const managedServices = [
  {
    icon: LucideSettings,
    title: 'Security & Compliance',
    description: 'Physical security, access control, and compliance alignment for colocation deployments.'
  },
  {
    icon: LucideShieldCheck,
    title: 'Backup & Recovery',
    description: 'Disaster recovery planning and data protection support for your hosted infrastructure.'
  },
  {
    icon: LucideActivity,
    title: 'Cost-Effective Infrastructure',
    description: 'Optimized colocation and optical solutions without unnecessary complexity or overspend.'
  },
  {
    icon: LucideCpu,
    title: 'On-Site & Remote Assistance',
    description: 'Professional support for colocation and optical deployment — from cable patching to module replacement.'
  },
]

const benefits = [
  {
    icon: LucideShieldCheck,
    title: 'Flexible Colocation',
    description: 'Rack space, power, and bandwidth with infrastructure‑aligned, transparent pricing.'
  },
  {
    icon: LucideCpu,
    title: 'High‑Speed Optics Portfolio',
    description: '25G–1.6T | DAC / ACC / AEC / AOC | CMIS 5.2 & QSFP112 MSA'
  },
  {
    icon: LucideServer,
    title: 'Colocation + Optics Integration',
    description: 'Redundant power & cooling + production‑tested optical modules — for reliable infrastructure and interconnect.'
  }
]
