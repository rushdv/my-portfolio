'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+880 1234 567890' },
  { icon: Mail, label: 'Email', value: 'your@email.com' },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/username', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
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
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <p className="rn-label">Contact</p>
        <h2 className="rn-title">Contact With Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            I am available for freelance work. Connect with me via phone or email and let&apos;s build something great together.
          </p>

          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rn-card flex items-center gap-4 p-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(250,82,82,0.1)' }}>
                <Icon size={17} color="#fa5252" />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: 'var(--color-muted)' }}>{label}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-fg)' }}>{value}</p>
              </div>
            </div>
          ))}

          <div className="mt-1">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--color-muted)' }}>
              Find me on
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border no-underline transition-all duration-200"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'linear-gradient(to right,#fa5252,#dd2476)'; el.style.borderColor = 'transparent'; el.style.color = '#fff' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.borderColor = 'var(--color-border)'; el.style.color = 'var(--color-muted)' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}>
          {status === 'success' ? (
            <div className="rn-card flex flex-col items-center justify-center gap-3 text-center p-10 min-h-[300px]">
              <CheckCircle size={48} color="#22c55e" />
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-fg)' }}>Message Sent!</h3>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>I&apos;ll get back to you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="btn-grad mt-2">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="name" required placeholder="Your Name" className="rn-input" />
                <input name="phone" placeholder="Phone Number" className="rn-input" />
              </div>
              <input name="email" type="email" required placeholder="Email Address" className="rn-input" />
              <input name="subject" placeholder="Subject" className="rn-input" />
              <textarea name="message" required rows={5} placeholder="Your Message..." className="rn-input resize-none" />
              {status === 'error' && <p className="text-sm text-red-400">Something went wrong. Try again.</p>}
              <button type="submit" disabled={status === 'loading'} className="btn-grad justify-center py-3"
                style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
