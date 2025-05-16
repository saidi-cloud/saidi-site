'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const form = formRef.current
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('There was a problem sending your message. Please try again later.')
      }
    } catch {
      setError('There was a problem sending your message. Please try again later.')
    }
    setLoading(false)
  }

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

      {sent ? (
        <div className="max-w-3xl mx-auto bg-green-900/60 border border-green-700 text-green-300 rounded-lg p-6 text-center text-lg font-semibold shadow">
          Thank you for contacting us! Your message has been sent.
        </div>
      ) : (
        <form className="max-w-3xl mx-auto space-y-6" ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
              required
            ></textarea>
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button
            type="submit"
            className="px-6 py-3 bg-[#e35275] hover:bg-[#d14268] text-white font-bold rounded-full transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </motion.div>
  )
}
