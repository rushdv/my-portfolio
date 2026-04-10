'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '@/content/experience'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label dev">Experience</p>
        <h2 className="section-title dev">Work History</h2>
      </motion.div>

      <div className="relative pl-10">
        <div className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full"
          style={{ background: 'linear-gradient(to bottom, var(--dev), var(--sec))' }} />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <motion.div key={i} className="relative"
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="absolute -left-7 top-6 w-3 h-3 rounded-full border-2"
                style={{ background: 'var(--dev)', borderColor: 'var(--background)' }} />
              <div className="portfolio-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>{exp.role}</h3>
                    <p className="grad-dev text-sm font-semibold" style={{ fontFamily: 'ui-monospace, monospace' }}>{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-full font-semibold whitespace-nowrap"
                    style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--dev)', border: '1px solid rgba(56,189,248,0.2)', fontFamily: 'ui-monospace, monospace' }}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>{exp.description}</p>
                <div className="flex flex-wrap gap-2">
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
