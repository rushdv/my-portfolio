'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowDown, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/rushdv', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/rushdv313/', label: 'Twitter' },
]

const devTags = ['React / Node.js', 'Next.js', 'Python / FastAPI']
const secTags = ['CEH', 'Pentesting', 'CTF Player']

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-[0.06] blur-[120px]" style={{ background: '#38bdf8' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.05] blur-[100px]" style={{ background: '#22c55e' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl flex flex-col gap-5">

          {/* Available badge */}
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e', background: 'rgba(34,197,94,0.08)', fontFamily: 'ui-monospace, monospace' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for hire
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={item}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: 'var(--foreground)', fontFamily: 'system-ui, sans-serif' }}>
              <span className="grad-dev">Shihab Shahriar</span>
              <br />
              <span className="grad-sec">&amp; Security Researcher</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Building secure, scalable web applications with a focus on clean architecture
            <br />
            and performance-first engineering.
          </motion.p>

          {/* Dual tags */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {devTags.map((t) => <span key={t} className="tag-dev">{t}</span>)}
            {secTags.map((t) => <span key={t} className="tag-sec">{t}</span>)}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-dev">
              <Terminal size={15} /> View Projects
            </a>
            <a href="#security" className="btn-sec">View Security</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
              // find me
            </span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 no-underline"
                style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--dev)'; el.style.color = 'var(--dev)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--muted-foreground)' }}
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Identity cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
        >
          {[
            { icon: '{ }', label: 'Full-Stack', desc: 'React, Node, PostgreSQL, Docker', color: 'var(--dev)', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)' },
            { icon: '▲', label: 'Ethical Hacking', desc: 'OWASP, Burp Suite, Metasploit', color: 'var(--sec)', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
            { icon: '◆', label: 'CTF / Research', desc: 'HackTheBox, TryHackMe', color: 'var(--danger)', bg: 'rgba(247,129,102,0.08)', border: 'rgba(247,129,102,0.2)' },
          ].map((card) => (
            <div
              key={card.label}
              className="portfolio-card p-5"
              style={{ borderColor: card.border }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold mb-3"
                style={{ background: card.bg, color: card.color, fontFamily: 'ui-monospace, monospace' }}
              >
                {card.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--foreground)' }}>{card.label}</h3>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--muted-foreground)' }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  )
}
