'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Clock, CalendarDays, Award, Star, Zap } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const certs = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    status: 'in-progress',
    tags: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
    color: '#22d3ee', // Cyan
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2023',
    status: 'completed',
    tags: ['React', 'Node.js', 'MongoDB', 'APIs'],
    color: '#10b981', // Emerald
  },
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'planned',
    tags: ['Cloud Architecture', 'Serverless', 'DevOps'],
    color: '#f43f5e', // Rose
  },
  {
    title: 'Computer Science Degree',
    issuer: 'University',
    year: '2025 – Present',
    status: 'in-progress',
    tags: ['Algorithms', 'Data Structures', 'System Design'],
    color: '#22d3ee', // Cyan
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === 'completed') {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium transition-colors">
        <CheckCircle2 size={12} />
        Completed
      </div>
    )
  }
  if (status === 'in-progress') {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-medium transition-colors">
        <Clock size={12} className="animate-spin-slow" />
        In Progress
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/10 text-rose-400 text-[10px] font-medium transition-colors">
      <Zap size={12} />
      Planned
    </div>
  )
}

function CertCard({ cert, index }: { cert: any; index: number }) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)' }}
      className="group relative p-8 rounded-2xl border border-white/5 bg-[#0d161d] hover:bg-[#0f1b26] transition-all duration-300"
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
            {cert.title}
          </h3>
          <StatusBadge status={cert.status} />
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-white/30">
          <span>{cert.issuer}</span>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <span>{cert.year}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {cert.tags.map((tag: any) => (
            <span 
              key={tag} 
              className="text-[10px] px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors uppercase font-black tracking-widest"
              style={{ 
                color: cert.status === 'completed' ? '#10b981' : cert.status === 'in-progress' ? '#22d3ee' : '#f43f5e',
                borderColor: `${cert.color}11`,
                backgroundColor: `${cert.color}05`
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-32 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          label="Certifications"
          title="Credentials"
          accentColor="#22d3ee"
          icon={Award}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </section>
  )
}
