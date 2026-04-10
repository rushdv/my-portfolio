'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+880 1234 567890', color: 'var(--dev)' },
  { icon: Mail, label: 'Email', value: 'your@email.com', color: 'var(--dev)' },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', color: 'var(--sec)' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/username', label: 'GitHub', color: 'var(--dev)' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/username', label: 'LinkedIn', color: 'var(--dev)' },
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
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label dev">Contact</p>
        <h2 className="section-title dev">Get In Touch</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-4">

          {/* Terminal-style availability */}
          <div className="portfolio-card p-4" style={{ fontFamily: 'ui-monospace, monospace' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: '#f78166' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#e3b341' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#3fb950' }} />
              </div>
              <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>status.sh</span>
            </div>
            <p className="text-xs" style={{ color: 'var(--sec)' }}>$ whoami</p>
            <p className="text-xs mb-1" style={{ color: 'var(--foreground)' }}>Full-Stack Dev &amp; Security Researcher</p>
            <p className="text-xs" style={{ color: 'var(--sec)' }}>$ availability</p>
            <p className="text-xs" style={{ color: 'var(--foreground)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-1.5 animate-pulse" />
              Open to freelance &amp; full-time roles
            </p>
          </div>

          {contactInfo.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="portfolio-card flex items-center gap-4 p-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)' }}>
                <Icon size={17} style={{ color }} />
              </div>
              <div>
                <p className="text-xs mb-0.5 uppercase tracking-wider font-semibold" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>{label}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{value}</p>
              </div>
            </div>
          ))}

          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>// find me</p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg no-underline transition-all duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}>
          {status === 'success' ? (
            <div className="portfolio-card flex flex-col items-center justify-center gap-3 text-center p-10 min-h-[300px]">
              <CheckCircle size={48} color="var(--sec)" />
              <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Message Sent!</h3>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>I&apos;ll get back to you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="btn-dev mt-2">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="name" required placeholder="Your Name" className="form-input" />
                <input name="phone" placeholder="Phone Number" className="form-input" />
              </div>
              <input name="email" type="email" required placeholder="Email Address" className="form-input" />
              <input name="subject" placeholder="Subject" className="form-input" />
              <textarea name="message" required rows={5} placeholder="Your Message..." className="form-input resize-none" />
              {status === 'error' && <p className="text-sm" style={{ color: 'var(--danger)' }}>Something went wrong. Try again.</p>}
              <button type="submit" disabled={status === 'loading'} className="btn-dev justify-center py-3"
                style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
                <Terminal size={15} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
