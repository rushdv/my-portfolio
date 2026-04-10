import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/layout/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Shihab Shahriar — Full Stack Developer & Security Researcher',
  description: 'Full-Stack Developer and Security Researcher based in Bangladesh. Building secure, scalable web applications with React, Node.js, Python, and FastAPI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
