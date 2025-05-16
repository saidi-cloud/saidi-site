'use client'

import { motion } from 'framer-motion'

export default function PricingPage() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4487c5] mb-6">
          GPU Pricing Schedule
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          SAIDI offers a transparent, pay-as-you-go pricing model for all GPU compute services. 
          The following schedule outlines our current hourly and monthly rates.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#e35275] border-b border-gray-700">
                <th className="pb-4 text-lg font-semibold">GPU Type</th>
                <th className="pb-4 text-lg font-semibold">vRAM</th>
                <th className="pb-4 text-lg font-semibold">Hourly Rate (USD)</th>
                <th className="pb-4 text-lg font-semibold">Monthly Rate (USD)</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-gray-800">
                <td className="py-4 text-lg">NVIDIA A100</td>
                <td className="py-4 text-lg">80 GB</td>
                <td className="py-4 text-lg">$4.50</td>
                <td className="py-4 text-lg">$1,350.00</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-4 text-lg">NVIDIA RTX 6000 Ada</td>
                <td className="py-4 text-lg">48 GB</td>
                <td className="py-4 text-lg">$2.80</td>
                <td className="py-4 text-lg">$850.00</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-4 text-lg">NVIDIA T4</td>
                <td className="py-4 text-lg">16 GB</td>
                <td className="py-4 text-lg">$0.75</td>
                <td className="py-4 text-lg">$220.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-6">
        <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-[#e35275] mb-4">NVIDIA A100</h3>
          <div className="grid grid-cols-2 gap-4 text-base">
            <div className="text-gray-400">vRAM</div>
            <div className="font-medium">80 GB</div>
            <div className="text-gray-400">Hourly Rate</div>
            <div className="font-medium">$4.50</div>
            <div className="text-gray-400">Monthly Rate</div>
            <div className="font-medium">$1,350.00</div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-[#e35275] mb-4">NVIDIA RTX 6000 Ada</h3>
          <div className="grid grid-cols-2 gap-4 text-base">
            <div className="text-gray-400">vRAM</div>
            <div className="font-medium">48 GB</div>
            <div className="text-gray-400">Hourly Rate</div>
            <div className="font-medium">$2.80</div>
            <div className="text-gray-400">Monthly Rate</div>
            <div className="font-medium">$850.00</div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-[#e35275] mb-4">NVIDIA T4</h3>
          <div className="grid grid-cols-2 gap-4 text-base">
            <div className="text-gray-400">vRAM</div>
            <div className="font-medium">16 GB</div>
            <div className="text-gray-400">Hourly Rate</div>
            <div className="font-medium">$0.75</div>
            <div className="text-gray-400">Monthly Rate</div>
            <div className="font-medium">$220.00</div>
          </div>
        </div>
      </div>

      <section className="mt-20 bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-[#e35275] mb-6">Included Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <li className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-[#4487c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Full root access to GPU instances</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-[#4487c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Pre-installed ML/AI frameworks</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-[#4487c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>24/7 monitoring and support</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-[#4487c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>No setup or hidden fees</span>
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: May 2025
      </p>
    </motion.div>
  )
}
