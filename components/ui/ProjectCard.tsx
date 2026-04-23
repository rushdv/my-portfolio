'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { GithubIcon } from '@/components/icons/SocialIcons'

export default function ProjectCard({ project, index = 0, featured = false }: { project: Project; index?: number; featured?: boolean }) {
  return (
    <motion.div
      className={`group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 h-full ${featured ? 'shadow-2xl shadow-indigo-500/10' : ''}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Mock Browser Frame */}
      <div className={`relative overflow-hidden flex-shrink-0 ${featured ? 'flex-1 min-h-[300px]' : 'aspect-video'}`}>
        {/* Browser Top Bar */}
        <div className="absolute top-0 inset-x-0 h-9 bg-black/40 backdrop-blur-xl border-b border-white/5 flex items-center px-4 gap-2 z-20">
          <div className="flex gap-1.5 leading-none">
            <div className="w-2 h-2 rounded-full bg-red-500/30" />
            <div className="w-2 h-2 rounded-full bg-amber-500/30" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
          </div>
          <div className="flex-1 h-4 bg-white/5 rounded-full border border-white/5 mx-4" />
        </div>

        {/* Project Image */}
        <div className="w-full h-full relative pt-9 overflow-hidden">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={project.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 opacity-80 group-hover:opacity-100" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
              <span className="mono font-black select-none text-white/5" style={{ fontSize: featured ? '6rem' : '3.5rem' }}>
                {'{ }'}
              </span>
            </div>
          )}
          
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0d1117] to-transparent opacity-80" />

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-12 left-6 px-3 py-1 rounded-full bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest z-30">
              Featured Case Study
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-2xl">
                <GithubIcon size={22} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-2xl">
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col p-8 ${featured ? 'bg-[#0d1117]' : 'bg-[#0d1117]/80 flex-1'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors ${featured ? 'text-3xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <ArrowUpRight size={featured ? 24 : 18} className="text-white/20 group-hover:text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>

        <p className={`text-white/50 leading-relaxed mb-6 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span key={tag} className="text-[10px] px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors uppercase font-black tracking-widest">
              {tag}
            </span>
          ))}
          {!featured && project.tags.length > 3 && (
            <span className="text-[10px] px-2 py-1 text-white/20 font-black">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
