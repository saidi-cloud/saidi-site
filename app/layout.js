'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="px-6 py-4 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto gap-4 relative">
            <Link href="/" className="inline-block">
              <Image
                src="/saidi-logo.webp"
                alt="SAIDI Cloud Logo"
                width={160}
                height={50}
                priority
              />
            </Link>

            {/* Hamburger icon for mobile */}
            <button
              className="sm:hidden absolute right-0 top-2 p-2 z-20"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
              <span className={`block w-6 h-0.5 bg-white mb-1 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className="block w-6 h-0.5 bg-white rounded transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
            </button>

            {/* Navigation */}
            <nav className="hidden sm:flex flex-row gap-6 text-sm sm:text-base text-center">
              <Link href="/" className="hover:text-[#4487c5] transition">Home</Link>
              <Link href="/about-us" className="hover:text-[#4487c5] transition">About Us</Link>
              <Link href="/services" className="hover:text-[#4487c5] transition">Services</Link>
              <Link href="/documents" className="hover:text-[#4487c5] transition">Documents</Link>
              <Link href="/contact" className="hover:text-[#4487c5] transition">Contact</Link>
            </nav>

            {/* Mobile menu dropdown */}
            {menuOpen && (
              <nav className="sm:hidden absolute right-0 top-14 w-48 bg-black border border-gray-800 rounded-lg shadow-lg flex flex-col gap-2 p-4 z-10 animate-fade-in">
                <Link href="/" className="hover:text-[#4487c5] transition" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about-us" className="hover:text-[#4487c5] transition" onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link href="/services" className="hover:text-[#4487c5] transition" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link href="/documents" className="hover:text-[#4487c5] transition" onClick={() => setMenuOpen(false)}>Documents</Link>
                <Link href="/contact" className="hover:text-[#4487c5] transition" onClick={() => setMenuOpen(false)}>Contact</Link>
              </nav>
            )}
          </div>
        </header>

        <main className="min-h-screen max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SAIDI Cloud. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
