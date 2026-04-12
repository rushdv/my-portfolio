'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Clock, Calendar } from 'lucide-react'

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
  completed:   { label: 'Completed',   icon: CheckCircle, color: '#22c55e', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)' },
  'in-progress': { label: 'In Progress', icon: Clock,        color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
  planned:     { label: 'Planned',     icon: Calendar,     color: '#f78166', bg: 'rgba(247,129,102,0.1)', border: 'rgba(247,129,102,0.25)' },
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label dev">Certifications</p>
        <h2 className="section-title dev">Credentials</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {certs.map((cert, i) => {
          const s = statusConfig[cert.status as keyof typeof statusConfig]
          const Icon = s.icon
          const accentColor = cert.type === 'sec' ? 'var(--sec)' : 'var(--dev)'
          const accentBg = cert.type === 'sec' ? 'rgba(34,197,94,0.06)' : 'rgba(56,189,248,0.06)'
          const accentBorder = cert.type === 'sec' ? 'rgba(34,197,94,0.15)' : 'rgba(56,189,248,0.15)'

          return (
            <motion.div
              key={cert.title}
              className="portfolio-card p-6 flex gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderColor: accentBorder }}
            >
              {/* Left accent bar */}
              <div className="w-1 rounded-full flex-shrink-0 self-stretch"
                style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }} />

              <div className="flex flex-col gap-3 flex-1 min-w-0">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--foreground)' }}>
                      {cert.title}
                    </h3>
                    <p className="text-xs mt-0.5 font-medium" style={{ color: accentColor, fontFamily: 'ui-monospace, monospace' }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>

                  {/* Status badge */}
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0"
                    style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontFamily: 'ui-monospace, monospace' }}
                  >
                    <Icon size={11} />
                    {s.label}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}`, fontFamily: 'ui-monospace, monospace' }}
                    >
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
