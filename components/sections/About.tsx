'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, MapPin, Shield, Code2, User } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import SectionHeader from '@/components/ui/SectionHeader'

const stats = [
  { value: 3, label: 'Years Dev', color: '#06b6d4', suffix: '+' },
  { value: 70, label: 'Repos', color: '#06b6d4', suffix: '+' },
  { value: 'CEH', label: 'Certified', color: '#10b981', suffix: '' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <SectionHeader 
          label="Profile"
          title="Who I Am"
          accentColor="#06b6d4"
          icon={User}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar Container with Rotating Ring */}
        <motion.div initial={false} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center pb-8 group">
          
          {/* Static Ring */}
          <div className="absolute inset-0 w-[320px] h-[320px] rounded-full overflow-hidden -z-10 group-hover:scale-105 transition-transform duration-700">
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, #6366f1, #14b8a6, #6366f1)', opacity: 0.3 }} />
            <div className="absolute inset-2 bg-[#0a0a0f] rounded-full" />
          </div>

          <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-[#0a0a0f] shadow-2xl z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/shihab.jpg" alt="Shihab Shahriar Rashu" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
          </div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-4 -left-8 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl z-20"
          >
            <span className="text-xs font-bold text-indigo-400 mono">Full-Stack</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-12 -right-8 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl z-20"
          >
            <span className="text-xs font-bold text-teal-400 mono">Security</span>
          </motion.div>

          <div className="absolute -top-6 right-4 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md z-20">
            <Shield size={14} className="text-indigo-400" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8">

          {/* Header Area */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-500/80 text-sm font-medium">
              <MapPin size={16} />
              <span className="tracking-tight">Bangladesh</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                Shihab Shahriar Rashu
              </h3>
              <p className="text-white/40 font-medium tracking-tight">Full-Stack Developer & Security Researcher</p>
            </div>
          </div>

          {/* Specialization Boxes */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-4 items-start group hover:bg-white/[0.05] transition-all duration-300">
              <Code2 size={24} className="text-cyan-500 shrink-0 mt-1" />
              <p className="text-white/60 leading-relaxed text-sm">
                Full-Stack Developer and CS student based in Bangladesh. I build web apps that are fast, secure, and maintainable — spanning <span className="text-white">React, Node.js, FastAPI, and PostgreSQL.</span>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-4 items-start group hover:bg-white/[0.05] transition-all duration-300">
              <Shield size={24} className="text-emerald-500 shrink-0 mt-1" />
              <p className="text-white/60 leading-relaxed text-sm">
                CEH certified with hands-on experience in penetration testing and network security. I bring a <span className="text-white">security mindset</span> to everything I build.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/[0.05] transition-all"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}>
                <div className="text-3xl font-black mb-1 tracking-tighter" style={{ color: s.color }}>
                  {typeof s.value === 'number' ? <CountUp to={s.value} suffix={s.suffix} /> : s.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-black text-white/20 group-hover:text-white/40 transition-colors">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" 
               className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold text-sm hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all">
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
