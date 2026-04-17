'use client'

import { ArrowUpRight, Shield, Code2, Mail } from 'lucide-react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand & Mission */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-white">
            <span className="text-indigo-500 group-hover:rotate-12 transition-transform">&lt;</span>
            SHIHAB
            <span className="text-emerald-500 group-hover:-rotate-12 transition-transform">/&gt;</span>
          </Link>
          <p className="max-w-sm text-white/50 text-sm leading-relaxed">
            Architecting secure, high-performance digital experiences. 
            Focused on the intersection of modern full-stack development and advanced security research.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a 
                key={s.label} 
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:border-white/10 hover:-translate-y-1 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Navigation</h4>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="text-sm font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-500" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Status & CTA */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">System Status</h4>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-xs font-bold text-white tracking-tight">Available for hire</span>
            </div>
            <p className="text-[10px] text-white/30 font-medium leading-relaxed">
              Open to high-impact roles in cybersecurity and engineering.
            </p>
            <button 
              onClick={scrollToTop}
              className="w-full py-2.5 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-indigo-500 hover:text-white transition-all active:scale-95"
            >
              Back to Top
            </button>
          </div>
        </div>

      </div>

      {/* Final Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
          © {new Date().getFullYear()} SHIHAB SHAHRIAR RASHU — DESIGNED FOR THE ELITE
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/10">
            <Code2 size={12} /> Full-Stack
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/10">
            <Shield size={12} /> Security
          </div>
        </div>
      </div>
    </footer>
  )
}
