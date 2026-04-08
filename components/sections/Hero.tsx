'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/icons/SocialIcons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/username', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: TwitterXIcon, href: 'https://twitter.com/username', label: 'Twitter' },
]

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #fa5252, transparent)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #dd2476, transparent)' }} />
      </div>

      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-5">

        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{ borderColor: 'rgba(250,82,82,0.3)', color: '#fa5252', background: 'rgba(250,82,82,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.p variants={item} className="rn-label !mb-0">Welcome to my world</motion.p>

        <motion.h1 variants={item} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          style={{ color: 'var(--color-fg)' }}>
          Hi, I&apos;m <span className="grad-text">Your Name</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl font-medium" style={{ color: 'var(--color-muted)' }}>
          Full Stack Developer
        </motion.p>

        <motion.p variants={item} className="text-base leading-relaxed max-w-lg" style={{ color: 'var(--color-muted)' }}>
          I build fast, scalable, and beautiful web applications — from pixel-perfect UIs to robust backend systems.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
          <a href="#projects" className="btn-grad">View My Work</a>
          <a href="#contact" className="btn-outline">Hire Me</a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--color-muted)' }}>
            Find me on
          </span>
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 no-underline"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'linear-gradient(to right,#fa5252,#dd2476)'; el.style.borderColor = 'transparent'; el.style.color = '#fff' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-muted)' }}>
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--color-muted)' }}>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
