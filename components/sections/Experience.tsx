'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '@/content/experience'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <p className="section-label dev">Experience</p>
        <h2 className="section-title dev">Work History</h2>
      </motion.div>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-3 bottom-3 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--dev), var(--sec), transparent)' }} />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div key={i} className="relative"
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              {/* Dot */}
              <div className="absolute -left-[33px] top-5 w-2.5 h-2.5 rounded-full ring-2"
                style={{ background: 'var(--dev)', ringColor: 'var(--background)', boxShadow: '0 0 0 3px var(--background)' }} />

              <div className="portfolio-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-base tracking-tight" style={{ color: 'var(--foreground)' }}>{exp.role}</h3>
                    <p className="grad-dev mono text-xs font-semibold mt-0.5">{exp.company}</p>
                  </div>
                  <span className="mono text-xs px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap"
                    style={{ background: 'rgba(56,189,248,0.08)', color: 'var(--dev)', border: '1px solid rgba(56,189,248,0.15)' }}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => <span key={s} className="tag-dev">{s}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
