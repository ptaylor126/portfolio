'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navigation, siteConfig } from '@/data/content'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getNavStyle = (name: string) => {
    const lower = name.toLowerCase()
    if (lower === 'resume') {
      return 'px-5 py-2.5 border-2 border-blue-400 text-blue-400 rounded-xl text-lg hover:bg-blue-400/10 transition-colors'
    }
    if (lower === 'contact') {
      return 'px-5 py-2.5 bg-white text-gray-900 rounded-xl text-lg hover:bg-gray-100 transition-colors'
    }
    return 'text-white text-lg hover:text-gray-300 transition-colors'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between bg-gray-800 rounded-3xl">
        <Link href="/" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors">
          {siteConfig.name.toLowerCase()}
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navigation.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={getNavStyle(item.name)}
              >
                {item.name.toLowerCase()}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={getNavStyle(item.name)}
              >
                {item.name.toLowerCase()}
              </Link>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 bg-gray-800 rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={getNavStyle(item.name)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name.toLowerCase()}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={getNavStyle(item.name)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name.toLowerCase()}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
