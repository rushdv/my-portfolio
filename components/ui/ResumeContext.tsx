'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ResumeContextType {
  isOpen: boolean
  openResume: () => void
  closeResume: () => void
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openResume = () => setIsOpen(true)
  const closeResume = () => setIsOpen(false)

  return (
    <ResumeContext.Provider value={{ isOpen, openResume, closeResume }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResumeModal() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResumeModal must be used within a ResumeProvider')
  }
  return context
}
