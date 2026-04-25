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

const roles = ['Full Stack Developer', 'Security Researcher', 'CTF Player']

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
    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">
      {displayed}
      <span className="animate-pulse text-emerald-400">|</span>
    </span>
  )
}

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full bg-[var(--background)]"
      style={{ paddingTop: 80, paddingBottom: 40, paddingLeft: 24, paddingRight: 24 }}
    >
      {/* Grid Pattern with Vignette */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.2 }} />
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, transparent 30%, var(--background) 100%)' }} />

      {/* Floating badges */}
      <div className="absolute left-8 inset-y-0 pointer-events-none hidden lg:flex flex-col justify-center gap-0 z-0">
        {leftBadges.map((b) => (
          <motion.div key={b.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ delay: b.delay, duration: 0.6 }}
            className="mono text-xs font-semibold px-4 py-2 rounded-full mb-6 w-fit backdrop-blur-sm border border-white/10 bg-white/5"
            style={{ color: b.color }}>
            {b.text}
          </motion.div>
        ))}
      </div>

      <div className="absolute right-8 inset-y-0 pointer-events-none hidden lg:flex flex-col justify-center gap-0 z-0">
        {rightBadges.map((b) => (
          <motion.div key={b.text}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ delay: b.delay, duration: 0.6 }}
            className="mono text-xs font-semibold px-4 py-2 rounded-full mb-6 w-fit self-end backdrop-blur-sm border border-white/10 bg-white/5"
            style={{ color: b.color }}>
            {b.text}
          </motion.div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text block */}
          <motion.div variants={container} initial="hidden" animate="show"
            className="flex flex-col items-start text-left gap-6 lg:pr-8">
            
            <motion.div variants={item} className="mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">Available for work</span>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <h1 className="tracking-tighter text-foreground" 
                  style={{ 
                    fontSize: 'clamp(3rem, 8vw, 6.5rem)', 
                    fontWeight: 900, 
                    lineHeight: 0.88, 
                    letterSpacing: '-0.04em' 
                  }}>
                <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent block">Full Stack</span>
                <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent block">Developer</span>
              </h1>
            </motion.div>

            <motion.div variants={item} className="text-lg sm:text-2xl font-bold h-10 mt-1 flex items-center gap-3">
              <span className="text-white/40 font-medium whitespace-nowrap">Focused on</span>
              <Typewriter />
            </motion.div>
            
            <motion.p variants={item} className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I craft scalable web applications and explore the depths of cybersecurity. Passionate about writing clean code and discovering new vulnerabilities.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-4">
              <a href="#projects" className="btn-dev">
                <Terminal size={18} /> View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-background hover:border-dev hover:text-dev transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual block (Identity Cards) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col gap-5 w-full max-w-lg mx-auto lg:ml-auto"
          >
            {identityCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.div key={card.label}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                  className="p-6 text-left rounded-2xl flex flex-col shadow-sm border border-border bg-background transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.border }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{ background: `radial-gradient(circle at 100% 100%, ${card.bg}, transparent 70%)` }} />

                  <div className="flex items-center gap-4 mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: card.bg, color: card.color, border: `1px solid ${card.border}` }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg leading-tight">
                        {card.label}
                      </h3>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        {idx === 0 ? 'Engineering' : idx === 1 ? 'Research' : 'Community'}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {card.desc}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:block"
        style={{ color: 'var(--muted-foreground)' }}>
        <ArrowDown size={22} className="opacity-50 animate-bounce" />
      </motion.div>
    </section>
  )
}
