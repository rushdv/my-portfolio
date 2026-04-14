'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const getLinkColor = (type: string) => {
    if (type === 'dev') return 'var(--dev)'
    if (type === 'sec') return 'var(--sec)'
    return 'var(--muted-foreground)'
  }

  const navBg = scrolled
    ? isDark
      ? 'rgba(8,11,18,0.9)'
      : 'rgba(245,240,235,0.92)'
    : 'transparent'

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: navBg,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="mono font-bold text-base no-underline flex items-center"
          style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'var(--dev)' }}>&lt;</span>
          <span>Shihab</span>
          <span style={{ color: 'var(--sec)' }}>/&gt;</span>
        </Link>

        <ul className="hidden md:flex gap-0.5 list-none items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="px-3 py-1.5 rounded-lg text-sm block transition-all duration-200 no-underline hover:bg-black/5 dark:hover:bg-white/5"
                style={{
                  color: getLinkColor(l.type),
                  fontFamily: l.type !== 'neutral' ? 'ui-monospace, monospace' : 'inherit',
                  fontSize: l.type !== 'neutral' ? '0.8rem' : '0.875rem',
                }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-dev hidden md:inline-flex"
            style={{ padding: '8px 18px', fontSize: '0.82rem', borderRadius: 8 }}>
            Resume
          </a>
          <button className="md:hidden cursor-pointer p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--muted-foreground)' }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1"
          style={{
            background: isDark ? 'rgba(8,11,18,0.97)' : 'rgba(245,240,235,0.97)',
            borderTop: '1px solid var(--border)',
            backdropFilter: 'blur(20px)',
          }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm no-underline transition-colors"
              style={{ color: getLinkColor(l.type) }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
