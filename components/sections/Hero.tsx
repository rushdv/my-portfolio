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

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item: Variants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }

const identityCards = [
  {
    icon: Terminal,
    label: 'Full-Stack Dev',
    desc: 'React · Node.js · PostgreSQL · Docker',
    color: 'var(--dev)',
    bg: 'var(--dev-dim)',
    border: 'var(--dev-border)',
  },
  {
    icon: Shield,
    label: 'Ethical Hacker',
    desc: 'OWASP · Burp Suite · Metasploit',
    color: 'var(--sec)',
    bg: 'var(--sec-dim)',
    border: 'var(--sec-border)',
  },
  {
    icon: Lock,
    label: 'CTF Player',
    desc: 'HackTheBox · TryHackMe · Research',
    color: 'var(--dev-2)',
    bg: 'rgba(129,140,248,0.08)',
    border: 'rgba(129,140,248,0.18)',
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
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 58)
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
    else { setDeleting(false); setIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, idx])

  return (
    <span style={{ color: 'var(--dev)' }} className="font-semibold">
      {displayed}
      <span style={{ opacity: 0.5 }}>|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full"
      style={{ background: 'var(--background)', paddingTop: 80, paddingBottom: 60, paddingLeft: 24, paddingRight: 24 }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }} />
      {/* Vignette over grid */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, var(--background) 100%)' }} />

      {/* Indigo glow top-left */}
      <div className="absolute pointer-events-none z-0"
        style={{ top: '10%', left: '-5%', width: 600, height: 600,
          background: 'radial-gradient(circle, var(--dev-dim) 0%, transparent 65%)',
          filter: 'blur(72px)' }} />
      {/* Sec glow bottom-right */}
      <div className="absolute pointer-events-none z-0"
        style={{ bottom: '5%', right: '-5%', width: 500, height: 500,
          background: 'radial-gradient(circle, var(--sec-dim) 0%, transparent 65%)',
          filter: 'blur(72px)' }} />

      <div className="relative z-10 w-full max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show"
            className="flex flex-col items-start text-left gap-6">

            <motion.div variants={item}>
              <h1 style={{
                fontSize: 'clamp(3.2rem, 7.5vw, 6rem)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                color: 'var(--foreground)',
              }}>
                Full Stack<br />Developer
              </h1>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-2 font-medium"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--muted-foreground)' }}>
              Focused on&nbsp;<Typewriter />
            </motion.div>

            <motion.p variants={item} className="max-w-lg leading-relaxed"
              style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)' }}>
              I craft scalable web applications and explore the depths of cybersecurity — passionate about clean code and finding vulnerabilities.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-dev">
                <Terminal size={16} /> View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)', background: 'var(--card)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev-border)'; e.currentTarget.style.color = 'var(--dev)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)' }}>
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Identity Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-4 w-full max-w-md mx-auto lg:ml-auto"
          >
            {identityCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.label}
                  className="p-5 rounded-xl flex items-center gap-4 transition-all duration-200"
                  style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.border; e.currentTarget.style.background = 'var(--card-2)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: card.bg, color: card.color, border: `1px solid ${card.border}` }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ fontSize: '0.95rem', color: 'var(--foreground)' }}>{card.label}</p>
                    <p className="mt-0.5" style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>{card.desc}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:block"
        style={{ color: 'var(--muted-foreground)' }}>
        <ArrowDown size={20} className="opacity-35 animate-bounce" />
      </motion.div>
    </section>
  )
}
