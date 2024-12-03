import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import Providers from '@/components/providers'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MVP - Chat',
  description: 'Experience seamless communication with our modern chat application. Stay connected with friends, family, and colleagues effortlessly.',
  metadataBase: new URL("https://mvpchat.vercel.app"),
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className='scroll-smooth antialiased'
        suppressHydrationWarning
      >
        <body className={`${inter.className}`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
