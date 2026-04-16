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
          Optical Modules
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Powering Connections, Driving Innovation
        </p>
      </header>

      <main className="px-6 md:px-20 space-y-28 pb-20">
        <Section title="Unparalleled Performance for High-Demand Computing">
          SAIDI provide cutting-edge solutions for data centers, telecommunications, and enterprise networks, enabling faster, more efficient global connectivity.
        </Section>

