'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, Server, Wrench, Shield, Bug, Network, 
  Terminal, Database, Globe, Layers, Cpu, Lock,
  Boxes, Layout, Settings, FileCode, Search
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const devCategories = [
  {
    label: 'Frontend',
    icon: Layout,
    color: '#6366f1',
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
    color: '#14b8a6',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python / FastAPI', icon: 'python' },
      { name: 'Express.js', icon: 'javascript' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Prisma ORM', icon: 'prisma' },
      { name: 'WebSockets', icon: 'javascript' },
      { name: 'REST APIs', icon: 'nextjs' },
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: Wrench,
    color: '#a855f7',
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
    color: '#f43f5e',
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
    color: '#38bdf8',
    skills: [
      { name: 'Kali Linux' },
      { name: 'HackTheBox' },
      { name: 'TryHackMe' },
      { name: 'OWASP Top 10' },
      { name: 'CVE Research' },
    ],
  },
]

const iconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`

function SkillCard({ cat, index }: { cat: any; index: number }) {
  const Icon = cat.icon
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-8 rounded-3xl border border-white/5 bg-[#0d1117] hover:border-white/10 transition-all duration-300 overflow-hidden"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div 
          className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] opacity-20"
          style={{ background: `conic-gradient(from 0deg, transparent, ${cat.color || '#6366f1'}, transparent)` }} 
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10"
               style={{ color: cat.color || '#6366f1' }}>
            <Icon size={24} />
          </div>
          <h4 className="font-bold text-xl text-white tracking-tight">{cat.label}</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cat.skills.map((skill: any) => (
            <div 
              key={skill.name} 
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all group/skill"
            >
              {skill.icon ? (
                <img 
                  src={iconUrl(skill.icon)} 
                  alt="" 
                  className="w-4 h-4 opacity-50 group-hover/skill:opacity-100 transition-opacity"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              ) : (
                <div 
                  className="w-1.5 h-1.5 rounded-full opacity-40 group-hover/skill:opacity-100 transition-all shadow-[0_0_8px_rgba(99,102,241,0.3)]" 
                  style={{ backgroundColor: cat.color || '#6366f1' }}
                />
              )}
              <span className="text-xs font-bold text-white/40 group-hover/skill:text-white transition-colors">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SectionDivider({ label, color }: { label: string; color: string }) {
  return (
    <div className="relative flex items-center justify-center my-20">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div 
        className="relative px-6 py-1.5 rounded-full border border-white/10 bg-[#0a0a0f] text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          label="Capabilities"
          title="Tech & Tools"
          accentColor="#6366f1"
          icon={Boxes}
        />
      </motion.div>

      <div className="space-y-32">
        {/* Development Section */}
        <div>
          <SectionDivider label="Development" color="#14b8a6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devCategories.map((cat, i) => (
              <SkillCard key={cat.label} cat={cat} index={i} />
            ))}
          </div>
        </div>

        {/* Cybersecurity Section */}
        <div>
          <SectionDivider label="Cybersecurity" color="#f43f5e" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secCategories.map((cat, i) => (
              <SkillCard key={cat.label} cat={cat} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
