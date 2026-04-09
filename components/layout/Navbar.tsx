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
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'var(--card)',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? 'var(--sh)' : 'none',
      transition: 'all 0.3s',
    }}>
      <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', background: 'linear-gradient(to right, #fa5252, #dd2476)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          &lt;YourName /&gt;
        </Link>

        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ padding: '6px 12px', borderRadius: 6, color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none', display: 'block', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            style={{ display: 'none', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, fontSize: '0.8rem', fontWeight: 600, background: 'linear-gradient(to right, #fa5252, #dd2476)', color: '#fff', textDecoration: 'none' }}
            className="md:!inline-flex">
            Resume
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 4 }}
            className="md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '12px 24px 16px' }} className="md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '8px 12px', borderRadius: 6, color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
