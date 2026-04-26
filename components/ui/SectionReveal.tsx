'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  width?: 'fit-content' | '100%'
}

export default function SectionReveal({ children, delay = 0, className = '', width = '100%' }: SectionRevealProps) {
  const ref = useRef(null)
  // amount:0.05 means trigger as soon as 5% of the section enters viewport
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <div ref={ref} style={{ position: 'relative', width }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
