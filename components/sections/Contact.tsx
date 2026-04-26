'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, CheckCircle2, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'
import SectionHeader from '@/components/ui/SectionHeader'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shihab.zn4@gmail.com', href: 'mailto:shihab.zn4@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/rushdv', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/', label: 'LinkedIn' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

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
    <section id="contact" className="py-16 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <SectionHeader label="Contact" title="Get in Touch" icon={Send} />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="leading-relaxed" style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)' }}>
            Have a project in mind or want to collaborate? Send me a message and I'll get back to you.
          </p>

          <div className="p-5 rounded-xl flex flex-col gap-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
            {contactInfo.map((info) => (
              <div key={info.label}>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: 'var(--muted-foreground)' }}>{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="text-sm font-medium transition-colors hover:opacity-80" style={{ color: 'var(--foreground)' }}>
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)', background: 'var(--card)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev-border)'; e.currentTarget.style.color = 'var(--foreground)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted-foreground)' }}>
                <s.icon size={16} /> {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {status === 'success' ? (
            <div className="p-8 rounded-xl text-center" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'var(--sec-dim)', color: 'var(--sec)' }}>
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Message sent!</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>I'll reply shortly.</p>
              <button onClick={() => setStatus('idle')} className="btn-outline text-sm px-5 py-2">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>Name</label>
                  <input name="name" required placeholder="John Doe" className="form-input" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>Email</label>
                  <input name="email" type="email" required placeholder="john@example.com" className="form-input" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>Message</label>
                <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="form-input resize-none" />
              </div>
              <button type="submit" disabled={status === 'loading'} className="btn-dev w-full justify-center py-3">
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-xs text-center" style={{ color: '#f87171' }}>Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
