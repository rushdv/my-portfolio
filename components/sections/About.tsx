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
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label dev">About</p>
        <h2 className="section-title dev">Who I Am</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div
            className="portfolio-card w-full max-w-[280px] aspect-square flex items-center justify-center overflow-hidden"
            style={{ borderRadius: 16 }}
          >
            {/* Replace with: <Image src="/shihab.jpg" alt="Shihab" fill className="object-cover" /> */}
            <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Add /public/shihab.jpg</span>
          </div>
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
            style={{ background: 'rgba(34,197,94,0.1)', color: 'var(--sec)', border: '1px solid rgba(34,197,94,0.3)', fontFamily: 'ui-monospace, monospace' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <MapPin size={14} style={{ color: 'var(--dev)' }} /> Bangladesh
          </div>

          {/* Name */}
          <div>
            <h3 className="text-3xl font-extrabold" style={{ color: 'var(--foreground)', fontFamily: 'system-ui, sans-serif' }}>
              Shihab Shahriar Rashu
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
              Full-Stack Developer &amp; Security Researcher
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.1)' }}>
            <Code2 size={16} style={{ color: 'var(--dev)', marginTop: 2, flexShrink: 0 }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              I&apos;m a Full-Stack Developer and Computer Science student based in Bangladesh. I focus on building web applications that are fast, secure, and maintainable. My work spans React to Node.js, FastAPI, and PostgreSQL.
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.1)' }}>
            <Shield size={16} style={{ color: 'var(--sec)', marginTop: 2, flexShrink: 0 }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              CEH certified with hands-on experience in penetration testing and network security. I bring a security mindset to everything I build.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="portfolio-card p-4 text-center">
                <div className="text-2xl font-extrabold" style={{ color: s.color, fontFamily: 'ui-monospace, monospace' }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-dev self-start">
            <Download size={14} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
