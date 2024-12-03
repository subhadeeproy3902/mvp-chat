import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'MVP-Chat | Connect Anytime, Anywhere',
  description: 'Experience seamless communication with MVP-Chat, the ultimate modern chat application for teams and individuals.',
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <FAQ />
          <CTA />
        </main>
      </div>
    </ThemeProvider>
  )
}

