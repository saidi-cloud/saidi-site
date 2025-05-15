'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.div
      className="space-y-12 bg-black text-white min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#4487c5] mb-4">Contact SAIDI</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
        We&#39;d love to hear from you. Reach out to us with your queries, feedback, or partnership ideas.
        </p>
      </section>

      <form className="max-w-3xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-[#e35275] hover:bg-[#d14268] text-white font-bold rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  )
}
