'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Clock, CalendarDays } from 'lucide-react'

const certs = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    status: 'in-progress',
    tags: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
    type: 'sec',
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2023',
    status: 'completed',
    tags: ['React', 'Node.js', 'MongoDB', 'APIs'],
    type: 'dev',
  },
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'planned',
    tags: ['Cloud Architecture', 'Serverless', 'DevOps'],
    type: 'dev',
  },
  {
    title: 'Computer Science Degree',
    issuer: 'University',
    year: '2025 – Present',
    status: 'in-progress',
    tags: ['Algorithms', 'Data Structures', 'System Design'],
    type: 'dev',
  },
]

const statusConfig = {
  completed:     { label: 'Completed',    icon: CheckCircle2, color: 'var(--sec)',    bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.2)' },
  'in-progress': { label: 'In Progress',  icon: Clock,        color: 'var(--dev)',    bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.2)' },
  planned:       { label: 'Planned',      icon: CalendarDays, color: 'var(--danger)', bg: 'rgba(251,113,133,0.08)', border: 'rgba(251,113,133,0.2)' },
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <p className="section-label dev">Certifications</p>
        <h2 className="section-title dev">Credentials</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => {
          const s = statusConfig[cert.status as keyof typeof statusConfig]
          const Icon = s.icon
          const accent = cert.type === 'sec' ? 'var(--sec)' : 'var(--dev)'
          const accentBg = cert.type === 'sec' ? 'rgba(52,211,153,0.05)' : 'rgba(56,189,248,0.05)'
          const accentBorder = cert.type === 'sec' ? 'rgba(52,211,153,0.12)' : 'rgba(56,189,248,0.12)'

          return (
            <motion.div key={cert.title}
              className={`portfolio-card ${cert.type === 'sec' ? 'sec' : ''} p-5 flex gap-4`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ borderColor: accentBorder }}>

              {/* Accent bar */}
              <div className="w-0.5 rounded-full flex-shrink-0 self-stretch"
                style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }} />

              <div className="flex flex-col gap-2.5 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="font-bold text-sm leading-snug" style={{ color: 'var(--foreground)', letterSpacing: '-0.01em' }}>
                      {cert.title}
                    </h3>
                    <p className="mono text-xs mt-0.5 font-medium" style={{ color: accent }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <span className="mono inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-bold whitespace-nowrap flex-shrink-0"
                    style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                    <Icon size={10} />
                    {s.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md mono font-medium"
                      style={{ background: accentBg, color: accent, border: `1px solid ${accentBorder}` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
