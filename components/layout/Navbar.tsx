'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About', type: 'neutral' },
  { href: '#projects', label: 'Projects', type: 'dev' },
  { href: '#security', label: 'Security', type: 'sec' },
  { href: '#skills', label: 'Skills', type: 'neutral' },
  { href: '#experience', label: 'Experience', type: 'neutral' },
  { href: '#contact', label: 'Contact', type: 'neutral' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const getLinkColor = (type: string) => {
    if (type === 'dev') return 'var(--dev)'
    if (type === 'sec') return 'var(--sec)'
    return 'var(--muted-foreground)'
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--card)' : 'var(--background)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? 'var(--shadow)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg no-underline"
          style={{ fontFamily: 'ui-monospace, monospace', color: 'var(--foreground)' }}
        >
          <span style={{ color: 'var(--dev)' }}>&lt;</span>
          Shihab
          <span style={{ color: 'var(--sec)' }}> /&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 list-none items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-md text-sm block transition-colors duration-200 no-underline"
                style={{ color: getLinkColor(l.type), fontFamily: l.type !== 'neutral' ? 'ui-monospace, monospace' : 'inherit' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-dev hidden md:inline-flex"
            style={{ padding: '7px 16px', fontSize: '0.8rem' }}
          >
            Resume
          </a>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--muted-foreground)' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-1"
          style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}
        >
          {links.map((l) => (
            <a
              key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md text-sm no-underline"
              style={{ color: getLinkColor(l.type) }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
