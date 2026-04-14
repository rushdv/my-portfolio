import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import ThemeProvider from '@/components/layout/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Shihab Shahriar Rashu — Full Stack Developer & Security Researcher',
  description: 'Full-Stack Developer and Security Researcher based in Bangladesh. Building secure, scalable web applications with React, Node.js, Python, and FastAPI.',
  icons: {
    icon: '/shihab.jpg',
    apple: '/shihab.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
