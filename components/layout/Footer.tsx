'use client'

import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/username', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/username', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t py-8 px-6 mt-4" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()}{' '}
          <span className="grad-text font-bold">Your Name</span>
          {' '}— All rights reserved.
        </p>
        <div className="flex gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 no-underline"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'linear-gradient(to right,#fa5252,#dd2476)'; el.style.borderColor = 'transparent'; el.style.color = '#fff' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-muted)' }}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
