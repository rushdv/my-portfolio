'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/content/skills'

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools & DevOps' },
] as const

const iconUrl = (name: string) => {
  const map: Record<string, string> = {
    'TypeScript': 'typescript', 'React': 'react', 'Next.js': 'nextjs',
    'Tailwind CSS': 'tailwindcss', 'Framer Motion': 'framermotion', 'HTML / CSS': 'html5',
    'Node.js': 'nodejs', 'Express': 'express', 'PostgreSQL': 'postgresql',
    'MongoDB': 'mongodb', 'Prisma': 'prisma', 'REST / GraphQL': 'graphql',
    'Git & GitHub': 'github', 'Docker': 'docker', 'Vercel': 'vercel',
    'Figma': 'figma', 'Linux': 'linux', 'VS Code': 'vscode',
  }
  const key = map[name] ?? name.toLowerCase().replace(/[^a-z]/g, '')
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${key}/${key}-original.svg`
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="rn-label">My Skills</p>
        <h2 className="rn-title">Tech Stack</h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {categories.map((cat, ci) => {
          const catSkills = skills.filter((s) => s.category === cat.key)
          return (
            <div key={cat.key}>
              <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: '#fa5252' }}>
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {catSkills.map((skill, i) => (
                  <motion.div key={skill.name} className="rn-card flex items-center gap-2 px-4 py-2.5 cursor-default"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.05 + i * 0.04 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={iconUrl(skill.name)} alt={skill.name} width={20} height={20} className="opacity-80"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
