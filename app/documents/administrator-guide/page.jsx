'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SystemAccess from './SystemAccess'

export default function AdministratorGuide() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('guide')

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = document.cookie.includes('admin_authenticated=true')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])

  const handleLogout = () => {
    // Remove the authentication cookie
    document.cookie = 'admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/admin/login')
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-white bg-black space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-8">
        <Image
          src="/saidi-logo.webp"
          alt="SAIDI Cloud Logo"
          width={200}
          height={63}
          priority
        />
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-[#e35275] hover:bg-[#d14268] text-white font-bold rounded-full transition"
        >
          Logout
        </button>
      </div>

      <div className="flex justify-center mb-8 border-b border-gray-800">
         <button 
           onClick={() => setActiveTab('guide')}
           className={`px-6 py-3 font-medium transition-colors relative ${
             activeTab === 'guide' ? 'text-[#4487c5]' : 'text-gray-400 hover:text-white'
           }`}
         >
           Administrator Guide
           {activeTab === 'guide' && (
             <motion.div 
               layoutId="activeTab"
               className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4487c5]"
             />
           )}
         </button>
         <button 
           onClick={() => setActiveTab('system-access')}
           className={`px-6 py-3 font-medium transition-colors relative ${
             activeTab === 'system-access' ? 'text-[#4487c5]' : 'text-gray-400 hover:text-white'
           }`}
         >
           System Access
           {activeTab === 'system-access' && (
             <motion.div 
               layoutId="activeTab"
               className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4487c5]"
             />
           )}
         </button>
      </div>

      {activeTab === 'guide' ? (
        <div className="space-y-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-[#4487c5] text-center">Administrator Guide</h1>
          <p className="text-gray-300 text-center">
            This guide provides essential information for managing the SAIDI website and associated services.
          </p>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#e35275]">Service Overview</h2>
            <div className="grid gap-6">
              <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#4487c5] mb-3">GitHub Repository</h3>
                <p className="text-gray-300 mb-2">Source code management and version control</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Repository: github.com/saidi-cloud</li>
                  <li>• Access: Requires GitHub account and team membership</li>
                  <li>• Purpose: Code management and collaboration</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#4487c5] mb-3">Netlify Hosting</h3>
                <p className="text-gray-300 mb-2">Website hosting and deployment platform</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• URL: app.netlify.com/teams/saidi-cloud/projects</li>
                  <li>• Access: Requires Netlify team membership</li>
                  <li>• Purpose: Website deployment and hosting</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#4487c5] mb-3">Domain Management</h3>
                <p className="text-gray-300 mb-2">Domain registration and DNS management</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Registrar: Exabytes.sg</li>
                  <li>• Domain: saidi.sg</li>
                  <li>• Renewal: June 7, 2026</li>
                  <li>• Nameservers: Configured for Netlify</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#4487c5] mb-3">Email Services</h3>
                <p className="text-gray-300 mb-2">Business email hosting and management</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Provider: Zoho Mail</li>
                  <li>• Domain: saidi.sg</li>
                  <li>• Purpose: Business communications</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#e35275]">Security Best Practices</h2>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">•</span>
                  <span>Use a password manager to securely store and share credentials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">•</span>
                  <span>Enable two-factor authentication (2FA) on all services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">•</span>
                  <span>Regularly review and update access permissions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">•</span>
                  <span>Never share credentials via email or documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">•</span>
                  <span>Use secure communication channels for sharing sensitive information</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#e35275]">Adding New Administrators</h2>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
              <ol className="text-gray-300 space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">1.</span>
                  <span>Create a new account for the administrator on each service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">2.</span>
                  <span>Add the new account to the appropriate team/organization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">3.</span>
                  <span>Set up 2FA for the new account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">4.</span>
                  <span>Share credentials securely through a password manager</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#4487c5]">5.</span>
                  <span>Provide access to this administrator guide</span>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#e35275]">Emergency Contacts</h2>
            <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-gray-300 mb-4">
                In case of emergencies or security incidents, contact the following:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Technical Support: Innovaas Solutions</li>
                <li>• Email: support@innovaas.co</li>
                <li>• Phone: +65 3106 5073</li>
              </ul>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-10 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      ) : (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <SystemAccess />
        </motion.div>
      )}
    </motion.div>
  )
}
