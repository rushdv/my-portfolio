'use client'

import { motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDown, Terminal, Shield, Lock } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/rushdv', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/rushdv313/', label: 'Twitter' },
]

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }

const identityCards = [
  {
    icon: Terminal,
    label: 'Full-Stack Dev',
    desc: 'React · Node.js · PostgreSQL · Docker',
    color: 'var(--dev)',
    bg: 'rgba(56,189,248,0.06)',
    border: 'rgba(56,189,248,0.15)',
  },
  {
    icon: Shield,
    label: 'Ethical Hacker',
    desc: 'OWASP · Burp Suite · Metasploit',
    color: 'var(--sec)',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.15)',
  },
  {
    icon: Lock,
    label: 'CTF Player',
    desc: 'HackTheBox · TryHackMe · Research',
    color: 'var(--danger)',
    bg: 'rgba(251,113,133,0.06)',
    border: 'rgba(251,113,133,0.15)',
  },
]

const roles = ['Full Stack Developer', 'Security Researcher', 'CEH Candidate', 'CTF Player', 'Open Source Contributor']

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[idx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    else { setDeleting(false); setIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, idx])

  return (
    <span className="grad-dev font-bold">{displayed}
      <span className="animate-pulse" style={{ color: 'var(--dev)' }}>|</span>
    </span>
  )
}

// Left = dev, Right = security
const leftBadges = [
  { text: 'React', color: 'var(--dev)', top: '22%', delay: 0.5 },
  { text: 'Node.js', color: 'var(--dev)', top: '42%', delay: 0.8 },
  { text: 'TypeScript', color: 'var(--dev)', top: '62%', delay: 1.1 },
]
const rightBadges = [
  { text: 'CEH', color: 'var(--sec)', top: '20%', delay: 0.6 },
  { text: 'OWASP', color: 'var(--sec)', top: '38%', delay: 0.9 },
  { text: 'CTF', color: 'var(--sec)', top: '56%', delay: 1.2 },
  { text: 'Pentest', color: 'var(--danger)', top: '74%', delay: 1.5 },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(56,189,248,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(52,211,153,0.15) 0%, transparent 70%), var(--background)',
        paddingTop: 72, paddingBottom: 32, paddingLeft: 24, paddingRight: 24,
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.6 }} />
      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, var(--background) 100%)' }} />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-[180px]"
          style={{ background: 'rgba(56,189,248,0.18)' }} />
        <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: 'rgba(52,211,153,0.14)' }} />
      </div>

      {/* Left floating badges */}
      <div className="absolute left-4 inset-y-0 pointer-events-none hidden xl:flex flex-col justify-center gap-0">
        {leftBadges.map((b, i) => (
          <motion.div key={b.text}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 0.6, x: 0, y: [0, -8, 0] }}
            transition={{ opacity: { delay: b.delay, duration: 0.5 }, x: { delay: b.delay, duration: 0.5 }, y: { delay: b.delay + 0.5, duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' } }}
            className="mono text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit"
            style={{ color: b.color, background: `${b.color}0e`, border: `1px solid ${b.color}25` }}>
            {b.text}
          </motion.div>
        ))}
      </div>

      {/* Right floating badges */}
      <div className="absolute right-4 inset-y-0 pointer-events-none hidden xl:flex flex-col justify-center gap-0">
        {rightBadges.map((b, i) => (
          <motion.div key={b.text}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 0.6, x: 0, y: [0, -8, 0] }}
            transition={{ opacity: { delay: b.delay, duration: 0.5 }, x: { delay: b.delay, duration: 0.5 }, y: { delay: b.delay + 0.5, duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' } }}
            className="mono text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit self-end"
            style={{ color: b.color, background: `${b.color}0e`, border: `1px solid ${b.color}25` }}>
            {b.text}
          </motion.div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">

        {/* Text block */}
        <motion.div variants={container} initial="hidden" animate="show"
          className="w-full flex flex-col items-center gap-5 mb-10">

          <motion.div variants={item}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--foreground)' }}>
              <span className="grad-dev">Full Stack Developer</span>
              <br />
              <span style={{ color: 'var(--foreground)' }}>&amp; </span>
              <span className="grad-sec">Cybersecurity Enthusiast</span>
            </h1>
          </motion.div>

          <motion.div variants={item} style={{ fontSize: '1.1rem', minHeight: '1.7rem' }}>
            <Typewriter />
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2 justify-center">
            {['React / Node.js', 'Next.js', 'Python / FastAPI'].map(t => <span key={t} className="tag-dev">{t}</span>)}
            {['CEH', 'Pentesting', 'CTF Player'].map(t => <span key={t} className="tag-sec">{t}</span>)}
            <span className="mono inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-md"
              style={{ background: 'rgba(251,113,133,0.08)', color: 'var(--danger)', border: '1px solid rgba(251,113,133,0.18)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--danger)' }} />
              Learning: AWS + CEH
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
            <a href="#projects" className="btn-dev"><Terminal size={15} /> View Projects</a>
            <a href="#security" className="btn-sec"><Shield size={15} /> Security Work</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 flex-wrap justify-center">
            <span className="mono text-xs font-semibold" style={{ color: 'var(--muted-foreground)', opacity: 0.4 }}>// find me on</span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
                style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev)'; e.currentTarget.style.color = 'var(--dev)'; e.currentTarget.style.background = 'rgba(56,189,248,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)'; e.currentTarget.style.background = 'transparent' }}>
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Identity cards — full width of max-w-4xl */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
        >
          {identityCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div key={card.label}
                className="portfolio-card p-6 text-left"
                style={{ borderColor: card.border }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: card.bg, color: card.color, border: `1px solid ${card.border}` }}>
                  <Icon size={18} />
                </div>
                <h3 className="font-bold mb-1.5" style={{ color: 'var(--foreground)', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                  {card.label}
                </h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--muted-foreground)' }}>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  )
}
