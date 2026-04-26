'use client'

import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  label: string
  title: string
  accentColor?: string
  icon?: LucideIcon
}

export default function SectionHeader({ label, title, accentColor = 'var(--dev)', icon: Icon }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-3 font-semibold uppercase tracking-widest"
        style={{ fontSize: '0.72rem', color: accentColor }}>
        {Icon && <Icon size={13} />}
        <span>{label}</span>
      </div>
      <h2 className="font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'var(--foreground)', lineHeight: 1.15 }}>
        {title}
      </h2>
      <div className="mt-3 w-10 h-0.5 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.5 }} />
    </div>
  )
}
