'use client'

import { motion } from 'framer-motion'

export default function PricingPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-white bg-black space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-[#4487c5]">GPU Pricing Schedule</h1>
      <p className="text-gray-300">
        SAIDI offers a transparent, pay-as-you-go pricing model for all GPU compute services. The following schedule outlines our current hourly and monthly rates.
      </p>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full mt-8 text-left text-sm border-collapse">
          <thead>
            <tr className="text-[#e35275] border-b border-gray-700">
              <th className="pb-2">GPU Type</th>
              <th className="pb-2">vRAM</th>
              <th className="pb-2">Hourly Rate (USD)</th>
              <th className="pb-2">Monthly Rate (USD)</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-t border-gray-800">
              <td>NVIDIA A100</td>
              <td>80 GB</td>
              <td>$4.50</td>
              <td>$1,350.00</td>
            </tr>
            <tr className="border-t border-gray-800">
              <td>NVIDIA RTX 6000 Ada</td>
              <td>48 GB</td>
              <td>$2.80</td>
              <td>$850.00</td>
            </tr>
            <tr className="border-t border-gray-800">
              <td>NVIDIA T4</td>
              <td>16 GB</td>
              <td>$0.75</td>
              <td>$220.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 mt-8">
        <div className="bg-gray-900 rounded-lg p-4 space-y-2">
          <h3 className="text-[#e35275] font-semibold">NVIDIA A100</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-400">vRAM</div>
            <div>80 GB</div>
            <div className="text-gray-400">Hourly Rate</div>
            <div>$4.50</div>
            <div className="text-gray-400">Monthly Rate</div>
            <div>$1,350.00</div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 space-y-2">
          <h3 className="text-[#e35275] font-semibold">NVIDIA RTX 6000 Ada</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-400">vRAM</div>
            <div>48 GB</div>
            <div className="text-gray-400">Hourly Rate</div>
            <div>$2.80</div>
            <div className="text-gray-400">Monthly Rate</div>
            <div>$850.00</div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 space-y-2">
          <h3 className="text-[#e35275] font-semibold">NVIDIA T4</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-400">vRAM</div>
            <div>16 GB</div>
            <div className="text-gray-400">Hourly Rate</div>
            <div>$0.75</div>
            <div className="text-gray-400">Monthly Rate</div>
            <div>$220.00</div>
          </div>
        </div>
      </div>

      <section className="space-y-4 mt-10">
        <h2 className="text-2xl font-semibold text-[#e35275]">Included Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Full root access to GPU instances</li>
          <li>Pre-installed ML/AI frameworks (TensorFlow, PyTorch, CUDA)</li>
          <li>24/7 monitoring and support</li>
          <li>No setup or hidden fees</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: May 2025
      </p>
    </motion.div>
  )
}
