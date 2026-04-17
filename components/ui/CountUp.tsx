'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion'

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
}

export default function CountUp({ to, duration = 1.5, suffix = "" }: CountUpProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const spanRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(spanRef, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: "easeOut" })
    }
  }, [isInView, to, duration, count])

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = `${latest}${suffix}`
      }
    })
  }, [rounded, suffix])

  return (
    <span ref={spanRef}>
      0{suffix}
    </span>
  )
}
