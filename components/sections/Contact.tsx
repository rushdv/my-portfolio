'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, CheckCircle2, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'
import SectionHeader from '@/components/ui/SectionHeader'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shihab.zn4@gmail.com', href: 'mailto:shihab.zn4@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh 🇧🇩', href: null },
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
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-left"
      >
        <SectionHeader
          label="Contact"
          title="Let’s keep it simple."
          accentColor="#818cf8"
          icon={Send}
        />
        <p className="max-w-2xl text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
          Send a quick message with your idea and I&apos;ll get back to you soon. No clutter, just clear contact info and an easy form.
        </p>
      </motion.div>

      <div
        className="mt-12 rounded-4xl border p-8 shadow-xl lg:p-10"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border p-6"
              style={{ backgroundColor: 'var(--card-2)', borderColor: 'var(--border)' }}>
              <p className="text-xs uppercase tracking-[0.35em] mb-6" style={{ color: 'var(--muted-foreground)' }}>Contact details</p>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="space-y-2">
                    <p className="text-[0.7rem] uppercase tracking-[0.35em]" style={{ color: 'var(--muted-foreground)' }}>{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold transition"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border p-6"
              style={{ backgroundColor: 'var(--card-2)', borderColor: 'var(--border)' }}>
              <p className="text-xs uppercase tracking-[0.35em] mb-5" style={{ color: 'var(--muted-foreground)' }}>Stay connected</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                    }}
                  >
                    <social.icon size={18} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-4xl border p-8 text-center"
                style={{
                  backgroundColor: 'var(--card-2)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: 'var(--sec)' }}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--foreground)' }}>Message sent!</h3>
                <p className="text-sm leading-7 mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  Thanks for reaching out. I’ll reply shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="rounded-full px-8 py-3 text-sm font-bold transition"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)',
                  }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm" style={{ color: 'var(--foreground)' }}>
                    <span className="block uppercase tracking-[0.25em]" style={{ color: 'var(--muted-foreground)' }}>Name</span>
                    <input
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-3xl border px-4 py-3 outline-none transition"
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--card-2)',
                        color: 'var(--foreground)',
                      }}
                    />
                  </label>
                  <label className="space-y-2 text-sm" style={{ color: 'var(--foreground)' }}>
                    <span className="block uppercase tracking-[0.25em]" style={{ color: 'var(--muted-foreground)' }}>Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-3xl border px-4 py-3 outline-none transition"
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--card-2)',
                        color: 'var(--foreground)',
                      }}
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm block" style={{ color: 'var(--foreground)' }}>
                  <span className="block uppercase tracking-[0.25em]" style={{ color: 'var(--muted-foreground)' }}>Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-3xl border px-4 py-3 outline-none transition resize-none"
                    style={{
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--card-2)',
                      color: 'var(--foreground)',
                    }}
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-full px-5 py-4 text-sm font-black uppercase tracking-[0.18em] transition"
                  style={{
                    backgroundColor: 'var(--dev)',
                    color: 'var(--card)',
                  }}
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
