'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, MapPin, Shield, Code2 } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years Dev', color: 'var(--dev)' },
  { value: '70+', label: 'Repos', color: 'var(--dev)' },
  { value: 'CEH', label: 'Certified', color: 'var(--sec)' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <p className="section-label dev">About</p>
        <h2 className="section-title dev">Who I Am</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <motion.div initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center pb-8">
          <div className="portfolio-card overflow-hidden" style={{ width: 300, height: 300, borderRadius: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/shihab.jpg" alt="Shihab Shahriar Rashu" className="w-full h-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mono absolute flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
            style={{
              bottom: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(52,211,153,0.1)',
              color: 'var(--sec)',
              border: '1px solid rgba(52,211,153,0.25)',
              backdropFilter: 'blur(8px)',
              zIndex: 10,
            }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6">

          <div className="flex items-center gap-2" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>
            <MapPin size={14} style={{ color: 'var(--dev)' }} /> Bangladesh
          </div>

          <div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Shihab Shahriar Rashu
            </h3>
            <p style={{ color: 'var(--muted-foreground)', marginTop: 6, fontSize: '0.95rem' }}>
              Full-Stack Developer &amp; Security Researcher
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.1)' }}>
              <Code2 size={16} style={{ color: 'var(--dev)', marginTop: 3, flexShrink: 0 }} />
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Full-Stack Developer and CS student based in Bangladesh. I build web apps that are fast, secure, and maintainable — spanning React, Node.js, FastAPI, and PostgreSQL.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.1)' }}>
              <Shield size={16} style={{ color: 'var(--sec)', marginTop: 3, flexShrink: 0 }} />
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                CEH certified with hands-on experience in penetration testing and network security. I bring a security mindset to everything I build.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="portfolio-card p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}>
                <div className="mono font-extrabold" style={{ color: s.color, fontSize: '1.6rem', letterSpacing: '-0.03em' }}>{s.value}</div>
                <div style={{ color: 'var(--muted-foreground)', marginTop: 4, fontSize: '0.78rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-dev self-start">
            <Download size={15} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
