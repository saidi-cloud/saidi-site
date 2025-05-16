'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('')

    // Check credentials
    if (username === 'lv@saidi.sg' && password === 'kun123lu456!') {
      // Set authentication cookie
      document.cookie = 'admin_authenticated=true; path=/'
      router.push('/documents/administrator-guide')
    } else {
      setError('Invalid username or password')
    }
  }

  const handlePasswordReset = async () => {
    setStatus('Password reset link has been sent to your email')
    // Here you would typically implement the actual password reset logic
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Image
            src="/saidi-logo.png"
            alt="SAIDI Logo"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-[#4487c5]">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4487c5]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4487c5]"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          {status && (
            <div className="text-green-500 text-sm">{status}</div>
          )}

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#4487c5] hover:bg-[#357abd] text-white font-medium rounded-md transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handlePasswordReset}
              className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
} 