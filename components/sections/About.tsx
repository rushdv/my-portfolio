'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, MapPin } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <p className="rn-label">About Me</p>
        <h2 className="rn-title">Who I Am</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }} className="relative flex justify-center">
          <div className="rn-card w-full max-w-xs aspect-square flex items-center justify-center overflow-hidden"
            style={{ borderRadius: 16 }}>
            {/* <Image src="/avatar.jpg" alt="Your Name" fill className="object-cover" /> */}
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>Add /public/avatar.jpg</span>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
            style={{ background: 'linear-gradient(to right, #fa5252, #dd2476)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Open to Work
          </div>
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
            <MapPin size={14} color="#fa5252" />
            Dhaka, Bangladesh
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            I&apos;m a full-stack developer with 3+ years of experience building production-grade web applications.
            I specialize in React, Next.js, and Node.js — and I care deeply about performance, accessibility, and clean code.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            I&apos;ve worked with startups and agencies, shipping products used by thousands of users.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3 mt-1">
            {stats.map((s) => (
              <div key={s.label} className="rn-card p-3 text-center !rounded-xl">
                <div className="grad-text text-2xl font-extrabold">{s.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-grad self-start mt-1">
            <Download size={14} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
