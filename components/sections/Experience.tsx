'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '@/content/experience'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <p className="rn-label">Experience</p>
        <h2 className="rn-title">Work History</h2>
      </motion.div>

      <div className="relative pl-10">
        {/* Timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #fa5252, #dd2476)' }} />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <motion.div key={i} className="relative"
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              {/* Dot */}
              <div className="absolute -left-7 top-5 w-3 h-3 rounded-full border-2"
                style={{ background: '#fa5252', borderColor: 'var(--color-bg)' }} />

              <div className="rn-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-base" style={{ color: 'var(--color-fg)' }}>{exp.role}</h3>
                    <p className="grad-text text-sm font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap"
                    style={{ background: 'rgba(250,82,82,0.1)', color: '#fa5252', border: '1px solid rgba(250,82,82,0.2)' }}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => <span key={s} className="rn-tag">{s}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
