'use client'

import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/rushdv', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/rushdv313/', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6" style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
          <span style={{ color: 'var(--dev)' }}>&lt;</span>
          <span style={{ color: 'var(--foreground)' }}>Shihab</span>
          <span style={{ color: 'var(--sec)' }}> /&gt;</span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </p>
        <div className="flex gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg no-underline transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev)'; e.currentTarget.style.color = 'var(--dev)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)' }}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
