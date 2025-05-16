'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showResetForm, setShowResetForm] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetStatus, setResetStatus] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Check credentials
    if (username === 'lv@saidi.sg' && password === 'kun123lu456!') {
      // Set authentication cookie
      document.cookie = 'admin_authenticated=true; path=/; max-age=86400' // 24 hours
      router.push('/documents/administrator-guide')
    } else {
      setError('Invalid username or password')
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setResetStatus('')

    if (resetEmail !== 'lv@saidi.sg') {
      setResetStatus('Invalid email address')
      return
    }

    try {
      // Send reset email
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: resetEmail }),
      })

      if (response.ok) {
        setResetStatus('Password reset instructions have been sent to your email')
        setShowResetForm(false)
      } else {
        setResetStatus('Failed to send reset instructions. Please try again.')
      }
    } catch (error) {
      setResetStatus('An error occurred. Please try again.')
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Image
            src="/saidi-logo.webp"
            alt="SAIDI Cloud Logo"
            width={200}
            height={63}
            priority
            className="mx-auto mb-8"
          />
          <h2 className="text-3xl font-bold text-[#4487c5]">Administrator Login</h2>
        </div>

        {!showResetForm ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">{error}</div>
            )}

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#e35275] hover:bg-[#d14268] text-white font-bold rounded-full transition"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setShowResetForm(true)}
                className="w-full px-6 py-3 text-[#4487c5] hover:text-[#3a76b0] font-medium transition"
              >
                Forgot password?
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="reset-email"
                name="reset-email"
                type="email"
                required
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4487c5]"
              />
            </div>

            {resetStatus && (
              <div className={`text-sm text-center ${
                resetStatus.includes('sent') ? 'text-green-500' : 'text-red-400'
              }`}>
                {resetStatus}
              </div>
            )}

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#e35275] hover:bg-[#d14268] text-white font-bold rounded-full transition"
              >
                Send Reset Instructions
              </button>
              <button
                type="button"
                onClick={() => setShowResetForm(false)}
                className="w-full px-6 py-3 text-[#4487c5] hover:text-[#3a76b0] font-medium transition"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  )
} 