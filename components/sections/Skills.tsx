'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Wrench, Shield, Bug, Network, Layout, Boxes } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const devCategories = [
  {
    label: 'Frontend',
    icon: Layout,
    skills: ['React / Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3'],
    accent: 'var(--dev)',
    dim: 'var(--dev-dim)',
    border: 'var(--dev-border)',
  },
  {
    label: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python / FastAPI', 'Express.js', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'WebSockets', 'REST APIs'],
    accent: 'var(--dev)',
    dim: 'var(--dev-dim)',
    border: 'var(--dev-border)',
  },
  {
    label: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Docker', 'Git / GitHub', 'AWS', 'Vercel', 'Linux', 'Figma', 'VS Code'],
    accent: 'var(--dev-2)',
    dim: 'rgba(129,140,248,0.08)',
    border: 'rgba(129,140,248,0.18)',
  },
]

const secCategories = [
  {
    label: 'Offensive Security',
    icon: Bug,
    skills: ['Penetration Testing', 'Metasploit', 'Burp Suite', 'SQLMap', 'Hydra', 'John the Ripper'],
    accent: 'var(--sec)',
    dim: 'var(--sec-dim)',
    border: 'var(--sec-border)',
  },
  {
    label: 'Network Security',
    icon: Network,
    skills: ['Wireshark', 'Nmap', 'Scapy', 'Netcat', 'Tcpdump', 'Network Recon'],
    accent: 'var(--sec)',
    dim: 'var(--sec-dim)',
    border: 'var(--sec-border)',
  },
  {
    label: 'Platforms & Standards',
    icon: Shield,
    skills: ['Kali Linux', 'HackTheBox', 'TryHackMe', 'OWASP Top 10', 'CVE Research'],
    accent: 'var(--sec-2)',
    dim: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
  },
]

function SkillCard({ cat, index }: { cat: typeof devCategories[0]; index: number }) {
  const Icon = cat.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="p-5 rounded-xl"
      style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: cat.dim, color: cat.accent, border: `1px solid ${cat.border}` }}>
          <Icon size={16} />
        </div>
        <h4 className="font-semibold" style={{ fontSize: '0.95rem', color: 'var(--foreground)' }}>{cat.label}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span key={skill} className="px-2.5 py-1 rounded-md font-medium"
            style={{ fontSize: '0.8rem', background: cat.dim, color: cat.accent, border: `1px solid ${cat.border}` }}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Divider({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
      <span className="text-xs font-semibold uppercase tracking-widest px-3" style={{ color }}>{label}</span>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <SectionHeader label="Capabilities" title="Tech & Tools" icon={Boxes} />
      </motion.div>

      <Divider label="Development" color="var(--dev)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {devCategories.map((cat, i) => <SkillCard key={cat.label} cat={cat} index={i} />)}
      </div>

      <Divider label="Cybersecurity" color="var(--sec)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {secCategories.map((cat, i) => <SkillCard key={cat.label} cat={cat} index={i} />)}
      </div>
    </section>
  )
}
