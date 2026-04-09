'use client'

import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/username', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/username', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '32px 24px', marginTop: 8 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()}{' '}
          <span style={{ background: 'linear-gradient(to right, #fa5252, #dd2476)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>
            Your Name
          </span>
          {' '}— All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid var(--border)', color: 'var(--muted)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'linear-gradient(to right,#fa5252,#dd2476)'; el.style.borderColor = 'transparent'; el.style.color = '#fff' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--muted)' }}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
