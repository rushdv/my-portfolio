'use client'

import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'
import { Mail } from 'lucide-react'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#security', label: 'Security' },
  { href: '#writeups', label: 'Writeups' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/rushdv', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/rushdv313/', label: 'Twitter' },
  { icon: Mail, href: 'mailto:shihab.zn4@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold" style={{ fontFamily: 'ui-monospace, monospace' }}>
              <span style={{ color: 'var(--dev)' }}>&lt;</span>
              <span style={{ color: 'var(--foreground)' }}>Shihab</span>
              <span style={{ color: 'var(--sec)' }}> /&gt;</span>
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
              Full-Stack Dev &amp; Security Researcher
            </p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Building secure, scalable web applications with a focus on clean architecture and performance-first engineering.
          </p>
          {/* Status */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold w-fit px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(34,197,94,0.08)', color: 'var(--sec)', border: '1px solid rgba(34,197,94,0.2)', fontFamily: 'ui-monospace, monospace' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold mb-4"
            style={{ color: 'var(--dev)', fontFamily: 'ui-monospace, monospace' }}>
            // Quick Links
          </p>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm no-underline transition-colors duration-200 flex items-center gap-2"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  <span style={{ color: 'var(--dev)', fontFamily: 'ui-monospace, monospace', fontSize: '0.65rem' }}>→</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & socials */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold mb-4"
            style={{ color: 'var(--sec)', fontFamily: 'ui-monospace, monospace' }}>
            // Connect
          </p>
          <div className="flex flex-col gap-3 mb-5">
            <a href="mailto:shihab.zn4@gmail.com" className="text-sm no-underline transition-colors duration-200"
              style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--dev)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}>
              shihab.zn4@gmail.com
            </a>
            <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Bangladesh 🇧🇩</span>
          </div>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg no-underline transition-all duration-300"
                style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev)'; e.currentTarget.style.color = 'var(--dev)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)' }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3"
        style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-xs" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
          © {new Date().getFullYear()} Shihab Shahriar Rashu
        </p>
        <p className="text-xs" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
          <span style={{ color: 'var(--dev)' }}>dev</span>
          {' · '}
          <span style={{ color: 'var(--sec)' }}>security</span>
          {' · '}
          <span style={{ color: 'var(--danger)' }}>research</span>
        </p>
      </div>
    </footer>
  )
}
