'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  width?: "fit-content" | "100%"
}

export default function SectionReveal({ children, delay = 0, className = "", width = "100%" }: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" })

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.98 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)', 
          scale: 1 
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay, 
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 1 },
          filter: { duration: 1.2 }
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
