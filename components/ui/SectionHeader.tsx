'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  label: string
  title: string
  accentColor?: string
  icon?: LucideIcon
}

export default function SectionHeader({ label, title, accentColor = '#6366f1', icon: Icon }: SectionHeaderProps) {
  return (
    <div className="mb-10 text-left">
      <div
        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] mb-3"
        style={{ color: accentColor }}
      >
        {Icon && <Icon size={14} />}
        <span>{label}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
          {title}
        </h2>
        <div
          className="w-12 h-1 rounded-full"
          style={{ backgroundColor: `${accentColor}80` }}
        />
      </div>
    </div>
  )
}
