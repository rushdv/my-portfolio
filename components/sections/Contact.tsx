'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, CheckCircle2, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'
import TerminalWidget from '@/components/ui/Terminal'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shihab.zn4@gmail.com', href: 'mailto:shihab.zn4@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Bangladesh 🇧🇩', href: null },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/rushdv', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/', label: 'LinkedIn' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    })
    setStatus(res.ok ? 'success' : 'error')
    if (res.ok) form.reset()
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <p className="section-label dev">Contact</p>
        <h2 className="section-title dev">Get In Touch</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-5">

          {/* Status card */}
          <div className="portfolio-card p-4 mono">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--danger)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e3b341' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--sec)' }} />
              </div>
              <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>status.sh</span>
            </div>
            <p className="text-xs mb-0.5" style={{ color: 'var(--sec)' }}>$ whoami</p>
            <p className="text-xs mb-2" style={{ color: 'var(--foreground)' }}>Full-Stack Dev &amp; Security Researcher</p>
            <p className="text-xs mb-0.5" style={{ color: 'var(--sec)' }}>$ availability</p>
            <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--foreground)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to freelance &amp; full-time roles
            </p>
          </div>

          {/* Contact info */}
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="portfolio-card flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.12)' }}>
                <Icon size={16} style={{ color: 'var(--dev)' }} />
              </div>
              <div>
                <p className="mono text-xs mb-0.5 uppercase tracking-wider font-semibold" style={{ color: 'var(--muted-foreground)' }}>{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-semibold transition-colors duration-200"
                    style={{ color: 'var(--foreground)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--dev)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground)')}>
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Socials */}
          <div>
            <p className="mono text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}>// find me</p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl no-underline transition-all duration-300"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev)'; e.currentTarget.style.color = 'var(--dev)'; e.currentTarget.style.background = 'rgba(56,189,248,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)'; e.currentTarget.style.background = 'transparent' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}>
          {status === 'success' ? (
            <div className="portfolio-card flex flex-col items-center justify-center gap-4 text-center p-10 min-h-[320px]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <CheckCircle2 size={28} style={{ color: 'var(--sec)' }} />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight" style={{ color: 'var(--foreground)' }}>Message Sent!</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>I&apos;ll get back to you within 24 hours.</p>
              </div>
              <button onClick={() => setStatus('idle')} className="btn-dev mt-2">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="name" required placeholder="Your Name" className="form-input" />
                <input name="phone" placeholder="Phone (optional)" className="form-input" />
              </div>
              <input name="email" type="email" required placeholder="Email Address" className="form-input" />
              <input name="subject" placeholder="Subject" className="form-input" />
              <textarea name="message" required rows={5} placeholder="Your Message..." className="form-input resize-none" />
              {status === 'error' && <p className="text-xs" style={{ color: 'var(--danger)' }}>Something went wrong. Try again.</p>}
              <button type="submit" disabled={status === 'loading'} className="btn-dev justify-center py-3"
                style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
                <Send size={14} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Terminal */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }} className="mt-10">
        <p className="mono text-xs uppercase tracking-widest font-bold mb-3" style={{ color: 'var(--dev)', opacity: 0.7 }}>
          // Interactive Terminal — try: help, whoami, skills, security
        </p>
        <TerminalWidget />
      </motion.div>
    </section>
  )
}
