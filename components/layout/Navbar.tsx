'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'border-b shadow-sm' : ''}`}
      style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', backdropFilter: 'blur(12px)' }}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="grad-text font-bold text-lg no-underline">
          &lt;YourName /&gt;
        </Link>

        <ul className="hidden md:flex gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="px-3 py-2 rounded-lg text-sm no-underline transition-colors duration-200 block"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-grad hidden md:inline-flex !py-2 !px-4 !text-xs">
            Resume
          </a>
          <button className="md:hidden p-1 rounded" onClick={() => setOpen(!open)} aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--color-muted)', cursor: 'pointer' }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-1 border-t"
          style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-sm no-underline"
              style={{ color: 'var(--color-muted)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
