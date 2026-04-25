'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const rafRef = useRef<number | null>(null)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const moveCursor = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor') ||
        target.closest('[data-cursor="hover"]')
      )
      setHovered(isHoverable)
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: hovered ? 40 : 10,
        height: hovered ? 40 : 10,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
    />
  )
}
