'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-themes'

const links = [
  { href: '#about', label: 'About', type: 'neutral' },
  { href: '#projects', label: 'Projects', type: 'dev' },
  { href: '#security', label: 'Security', type: 'sec' },
  { href: '#writeups', label: 'Writeups', type: 'sec' },
  { href: '#skills', label: 'Skills', type: 'neutral' },
  { href: '#experience', label: 'Experience', type: 'neutral' },
  { href: '#contact', label: 'Contact', type: 'neutral' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Simple intersection observer could be better for activeTab, but using click for now
  const handleLinkClick = (href: string) => {
    setActiveTab(href)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? 'border-b border-white/5 backdrop-blur-[16px]' : 'border-b border-transparent'}`}
      style={{
        background: scrolled ? 'rgba(10, 10, 15, 0.7)' : 'transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="mono font-bold text-lg no-underline flex items-center group"
          style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
          <span className="text-[var(--dev)] group-hover:rotate-12 transition-transform">&lt;</span>
          <span>Shihab</span>
          <span className="text-[var(--sec)] group-hover:-rotate-12 transition-transform">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-1 list-none items-center">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <a href={l.href}
                onClick={() => handleLinkClick(l.href)}
                className="px-4 py-2 text-sm font-medium transition-colors no-underline relative z-10"
                style={{
                  color: activeTab === l.href 
                    ? 'var(--foreground)' 
                    : l.type === 'dev' ? 'var(--dev)' : l.type === 'sec' ? 'var(--sec)' : 'var(--muted-foreground)'
                }}>
                {l.label}
              </a>
              {activeTab === l.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 z-0"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-dev hidden md:inline-flex shadow-lg shadow-indigo-500/10"
            style={{ padding: '8px 20px', fontSize: '0.85rem', borderRadius: 10 }}>
            Resume
          </a>
          <button className="md:hidden cursor-pointer text-white/70" onClick={() => setOpen(!open)} aria-label="Toggle menu"
            style={{ background: 'none', border: 'none' }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-6 flex flex-col gap-2 overflow-hidden"
            style={{
              background: 'rgba(10, 10, 15, 0.95)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(16px)',
            }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium no-underline transition-colors hover:bg-white/5"
                style={{ 
                  color: l.type === 'dev' ? 'var(--dev)' : l.type === 'sec' ? 'var(--sec)' : 'var(--foreground)' 
                }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
