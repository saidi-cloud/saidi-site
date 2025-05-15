import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="px-6 py-4 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/saidi-logo.webp"
                alt="SAIDI Cloud Logo"
                width={160}
                height={50}
                priority
              />
            </Link>

            <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base text-center">
              <Link href="/" className="hover:text-[#4487c5] transition">Home</Link>
              <Link href="/about-us" className="hover:text-[#4487c5] transition">About Us</Link>
              <Link href="/services" className="hover:text-[#4487c5] transition">Services</Link>
              <Link href="/documents" className="hover:text-[#4487c5] transition">Documents</Link>
              <Link href="/contact" className="hover:text-[#4487c5] transition">Contact</Link>
            </nav>
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
