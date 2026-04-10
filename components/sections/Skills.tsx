'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const devSkills = [
  { name: 'React / Next.js', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python / FastAPI', icon: 'python' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Prisma ORM', icon: 'prisma' },
  { name: 'WebSockets', icon: 'javascript' },
  { name: 'AWS', icon: 'amazonwebservices' },
]

const secSkills = [
  { name: 'Penetration Testing', tag: 'sec' },
  { name: 'Network Security', tag: 'sec' },
  { name: 'Metasploit', tag: 'sec' },
  { name: 'Kali Linux', tag: 'sec' },
  { name: 'Wireshark', tag: 'sec' },
  { name: 'Burp Suite', tag: 'sec' },
  { name: 'Scapy', tag: 'danger' },
  { name: 'Vulnerability Assessment', tag: 'danger' },
]

const iconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label dev">Skills</p>
        <h2 className="section-title dev">Tech &amp; Tools</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Dev */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--dev)', fontFamily: 'ui-monospace, monospace' }}>
            // Development
          </p>
          <div className="flex flex-wrap gap-3">
            {devSkills.map((skill, i) => (
              <motion.div key={skill.name} className="portfolio-card flex items-center gap-2 px-4 py-2.5 cursor-default"
                initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={iconUrl(skill.icon)} alt={skill.name} width={18} height={18} className="opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div>
          <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--sec)', fontFamily: 'ui-monospace, monospace' }}>
            // Security
          </p>
          <div className="flex flex-wrap gap-3">
            {secSkills.map((skill, i) => (
              <motion.div key={skill.name} className={`portfolio-card ${skill.tag} flex items-center gap-2 px-4 py-2.5 cursor-default`}
                initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: skill.tag === 'danger' ? 'var(--danger)' : 'var(--sec)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--foreground)', fontFamily: 'ui-monospace, monospace' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
