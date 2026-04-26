'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, MapPin, Shield, Code2, User } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import SectionHeader from '@/components/ui/SectionHeader'

const stats = [
  { value: 3, label: 'Years Dev', suffix: '+' },
  { value: 70, label: 'Repos', suffix: '+' },
  { value: 'CEH', label: 'Certified', suffix: '' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <SectionHeader label="Profile" title="Who Am I" icon={User} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center group"
        >
          <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              border: '2px solid var(--dev-border)',
              boxShadow: '0 0 0 0 var(--dev-border)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--dev)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px var(--dev-dim), 0 0 0 4px var(--dev-dim)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--dev-border)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 var(--dev-border)'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/shihab.jpg" alt="Shihab Shahriar Rashu"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
          </div>
          <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{ background: 'var(--dev-dim)', color: 'var(--dev)', border: '1px solid var(--dev-border)' }}>
            Full-Stack
          </div>
          <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{ background: 'var(--sec-dim)', color: 'var(--sec)', border: '1px solid var(--sec-border)' }}>
            Security
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-2" style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
              <MapPin size={14} />
              <span>Bangladesh</span>
            </div>
            <h3 className="font-bold tracking-tight" style={{ fontSize: '1.4rem', color: 'var(--foreground)' }}>
              Shihab Shahriar Rashu
            </h3>
            <p className="mt-1" style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>Full-Stack Developer & Security Researcher</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-xl flex gap-3 items-start"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <Code2 size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--dev)' }} />
              <p className="leading-relaxed" style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                CS student building fast, secure web apps with <span style={{ color: 'var(--foreground)' }}>React, Node.js, FastAPI, and PostgreSQL.</span>
              </p>
            </div>
            <div className="p-4 rounded-xl flex gap-3 items-start"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <Shield size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--sec)' }} />
              <p className="leading-relaxed" style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                CEH certified with hands-on penetration testing experience. I bring a <span style={{ color: 'var(--foreground)' }}>security mindset</span> to everything I build.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="p-4 rounded-xl text-center"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="text-2xl font-bold tracking-tight" style={{ color: 'var(--dev)' }}>
                  {typeof s.value === 'number' ? <CountUp to={s.value} suffix={s.suffix} /> : s.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-1 font-medium" style={{ color: 'var(--muted-foreground)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-dev w-fit">
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
