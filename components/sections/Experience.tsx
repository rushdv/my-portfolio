'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '@/content/experience'
import { Briefcase } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-16 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <SectionHeader label="Journey" title="Experience" icon={Briefcase} />
      </motion.div>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="p-5 rounded-xl transition-all duration-200"
            style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dev-border)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold" style={{ fontSize: '1rem', color: 'var(--foreground)' }}>{exp.role}</h3>
                <div className="flex items-center gap-1.5 mt-0.5" style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                  <Briefcase size={13} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-md w-fit"
                style={{ background: 'var(--dev-dim)', color: 'var(--dev)', border: '1px solid var(--dev-border)' }}>
                {exp.period}
              </span>
            </div>
            <p className="leading-relaxed mb-3" style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-0.5 rounded"
                  style={{ background: 'var(--card-2)', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
