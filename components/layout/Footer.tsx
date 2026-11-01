'use client'

import { ArrowUpRight, Shield, Code2, Mail, Download } from 'lucide-react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'
import { useResumeModal } from '@/components/ui/ResumeContext'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
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
  const { openResume } = useResumeModal()
  return (
    <footer className="border-t pt-12 pb-8" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="group flex items-center gap-1 text-xl font-bold tracking-tight text-[var(--foreground)]">
            <span className="text-[var(--dev)] font-mono">&lt;</span>
            <span>Shihab</span>
            <span className="text-[var(--sec)] font-mono">/&gt;</span>
          </Link>
          <p className="leading-relaxed max-w-xs" style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
            Full-Stack Developer & Security Researcher based in Bangladesh.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--dev-border)] transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">Navigation</p>
          <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">Get in touch</p>
          <a
            href="mailto:shihab.zn4@gmail.com"
            className="text-sm text-[var(--foreground)] hover:text-[var(--dev)] transition-colors"
          >
            shihab.zn4@gmail.com
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={openResume}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--dev)] hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0 p-0"
            >
              View Resume <ArrowUpRight size={14} />
            </button>
            <span className="text-[var(--muted-foreground)]">•</span>
            <a
              href="/resume.pdf"
              download="Md_Shihab_Shahriar_Rashu_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Download <Download size={14} />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Shihab Shahriar Rashu
        </p>
        <div className="flex items-center gap-5 text-xs text-[var(--muted-foreground)]">
          <span className="flex items-center gap-1.5"><Code2 size={12} /> Full-Stack</span>
          <span className="flex items-center gap-1.5"><Shield size={12} /> Security</span>
        </div>
      </div>
    </footer>
  )
}
