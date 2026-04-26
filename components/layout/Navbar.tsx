'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about',        label: 'About' },
  { href: '#projects',     label: 'Projects' },
  { href: '#skills',       label: 'Skills' },
  { href: '#experience',   label: 'Experience' },
  { href: '#writeups',     label: 'Writeups' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--background) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-0.5 text-lg font-bold tracking-tight"
          style={{ color: 'var(--foreground)' }}
        >
          <span style={{ color: 'var(--dev)', fontFamily: 'monospace' }}>&lt;</span>
          <span>Shihab</span>
          <span style={{ color: 'var(--sec)', fontFamily: 'monospace' }}>/&gt;</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm rounded-md transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-dev"
            style={{ padding: '7px 16px', fontSize: '0.8rem', borderRadius: '7px' }}
          >
            Resume
          </a>
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: 'var(--muted-foreground)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm transition-colors"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
