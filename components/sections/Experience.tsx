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
    <section id="experience" className="py-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          label="Journey"
          title="Experience"
          accentColor="#6366f1"
          icon={Briefcase}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto pl-12 md:pl-0">
        {/* Timeline Desktop Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-teal-400 to-transparent -translate-x-1/2 opacity-20" />
        {/* Timeline Mobile Line */}
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-teal-400 to-transparent opacity-20" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.div 
                key={i} 
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-[-48px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-6 z-20">
                  <div className="w-6 h-6 rounded-full bg-[#0a0a0f] border-2 border-indigo-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group">
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400/80">{exp.period}</span>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-white/40">
                        <Briefcase size={14} className="text-teal-400" />
                        {exp.company}
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span key={s} className="text-[10px] px-2.5 py-1 rounded-full border border-white/5 bg-white/5 text-white/30 uppercase font-black tracking-widest">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
