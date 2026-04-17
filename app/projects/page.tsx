'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Code2, Shield } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-6">
            All <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-teal-400 bg-clip-text text-transparent">Projects.</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/50 leading-relaxed">
            A comprehensive collection of my work in software development and security research. 
            From scalable web apps to deep-dive vulnerability analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
