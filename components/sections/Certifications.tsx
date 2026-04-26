'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Clock, Zap, Award } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const certs = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    status: 'in-progress',
    tags: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2023',
    status: 'completed',
    tags: ['React', 'Node.js', 'MongoDB', 'APIs'],
  },
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'planned',
    tags: ['Cloud Architecture', 'Serverless', 'DevOps'],
  },
  {
    title: 'Computer Science Degree',
    issuer: 'University',
    year: '2025 – Present',
    status: 'in-progress',
    tags: ['Algorithms', 'Data Structures', 'System Design'],
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === 'completed') return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md"
      style={{ background: 'var(--sec-dim)', color: 'var(--sec)', border: '1px solid var(--sec-border)' }}>
      <CheckCircle2 size={11} /> Completed
    </span>
  )
  if (status === 'in-progress') return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md"
      style={{ background: 'var(--dev-dim)', color: 'var(--dev)', border: '1px solid var(--dev-border)' }}>
      <Clock size={11} /> In Progress
    </span>
  )
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md"
      style={{ background: 'rgba(129,140,248,0.08)', color: 'var(--dev-2)', border: '1px solid rgba(129,140,248,0.18)' }}>
      <Zap size={11} /> Planned
    </span>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-16 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <SectionHeader label="Certifications" title="Credentials" icon={Award} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="p-5 rounded-xl transition-all duration-200"
            style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev-border)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-semibold leading-snug" style={{ fontSize: '0.95rem', color: 'var(--foreground)' }}>{cert.title}</h3>
              <StatusBadge status={cert.status} />
            </div>
            <p className="mb-3" style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
              {cert.issuer} · {cert.year}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cert.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded"
                  style={{ background: 'var(--card-2)', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
