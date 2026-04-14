'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Wrench, Shield, Bug, Network } from 'lucide-react'

const devCategories = [
  {
    label: 'Frontend',
    icon: Code2,
    color: 'var(--dev)',
    bg: 'rgba(56,189,248,0.06)',
    border: 'rgba(56,189,248,0.15)',
    skills: [
      { name: 'React / Next.js', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Framer Motion', icon: 'framermotion' },
      { name: 'HTML5 / CSS3', icon: 'html5' },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    color: 'var(--dev-2)',
    bg: 'rgba(129,140,248,0.06)',
    border: 'rgba(129,140,248,0.15)',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python / FastAPI', icon: 'python' },
      { name: 'Express.js', icon: 'express' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Prisma ORM', icon: 'prisma' },
      { name: 'WebSockets', icon: 'javascript' },
      { name: 'REST APIs', icon: 'nodejs' },
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: Wrench,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.15)',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Git / GitHub', icon: 'github' },
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Figma', icon: 'figma' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
]

const secCategories = [
  {
    label: 'Offensive Security',
    icon: Bug,
    color: 'var(--sec)',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.15)',
    skills: [
      { name: 'Penetration Testing' },
      { name: 'Metasploit' },
      { name: 'Burp Suite' },
      { name: 'SQLMap' },
      { name: 'Hydra' },
      { name: 'John the Ripper' },
    ],
  },
  {
    label: 'Network Security',
    icon: Network,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.12)',
    skills: [
      { name: 'Wireshark' },
      { name: 'Nmap' },
      { name: 'Scapy' },
      { name: 'Netcat' },
      { name: 'Tcpdump' },
      { name: 'Network Recon' },
    ],
  },
  {
    label: 'Security Platforms',
    icon: Shield,
    color: 'var(--danger)',
    bg: 'rgba(251,113,133,0.06)',
    border: 'rgba(251,113,133,0.15)',
    skills: [
      { name: 'Kali Linux' },
      { name: 'HackTheBox' },
      { name: 'TryHackMe' },
      { name: 'OWASP Top 10' },
      { name: 'CVE Research' },
      { name: 'Vulnerability Assessment' },
    ],
  },
]

const iconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`

function SkillChip({ name, icon, color }: { name: string; icon?: string; color: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
      style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}0d` }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--muted)' }}>
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={iconUrl(icon)} alt={name} width={16} height={16} className="opacity-80 flex-shrink-0"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
      )}
      {!icon && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />}
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--foreground)' }}>{name}</span>
    </div>
  )
}

function CategoryCard({ cat, inView, ci, type }: { cat: typeof devCategories[0]; inView: boolean; ci: number; type: 'dev' | 'sec' }) {
  const Icon = cat.icon
  return (
    <motion.div
      className="portfolio-card p-6"
      style={{ borderColor: cat.border }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}>

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: cat.bg, border: `1px solid ${cat.border}` }}>
          <Icon size={17} style={{ color: cat.color }} />
        </div>
        <h3 className="font-bold text-base" style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>{cat.label}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <motion.div key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.25, delay: ci * 0.1 + i * 0.03 }}>
            <SkillChip name={skill.name} icon={'icon' in skill ? skill.icon : undefined} color={cat.color} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <p className="section-label dev">Skills</p>
        <h2 className="section-title dev">Tech &amp; Tools</h2>
      </motion.div>

      {/* Development */}
      <div className="mb-12">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, var(--dev), transparent)' }} />
          <span className="mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ color: 'var(--dev)', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)' }}>
            Development
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, var(--dev), transparent)' }} />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {devCategories.map((cat, ci) => (
            <CategoryCard key={cat.label} cat={cat} inView={inView} ci={ci} type="dev" />
          ))}
        </div>
      </div>

      {/* Cybersecurity */}
      <div>
        <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, var(--sec), transparent)' }} />
          <span className="mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ color: 'var(--sec)', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}>
            Cybersecurity
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, var(--sec), transparent)' }} />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {secCategories.map((cat, ci) => (
            <CategoryCard key={cat.label} cat={cat as typeof devCategories[0]} inView={inView} ci={ci + 3} type="sec" />
          ))}
        </div>
      </div>
    </section>
  )
}
