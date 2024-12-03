'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className='fixed z-50 w-full bg-white/80 backdrop-blur-md transition-colors duration-300 dark:bg-gray-900/80'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link
            href='/'
            className='text-2xl font-bold text-blue-600 dark:text-blue-400'
          >
            MVP-Chat
          </Link>
          <nav className='hidden space-x-10 md:flex'>
            <NavLink href='/chat'>Click to chat</NavLink>
          </nav>
          <div className='hidden items-center space-x-4 md:flex'>
            <SignedOut>
              <SignInButton>
                <Button className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-teal-500 transition duration-300 flex items-center justify-center">Sign Up</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='rounded-full bg-gray-200 p-2 text-gray-800 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200'
                aria-label='Toggle theme'
              >
                {theme === 'dark' ? (
                  <Sun className='h-5 w-5' />
                ) : (
                  <Moon className='h-5 w-5' />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

const NavLink = ({
  href,
  children,
  mobile = false
}: {
  href: string
  children: React.ReactNode
  mobile?: boolean
}) => (
  <Link
    href={href}
    className={`${mobile ? 'block' : 'inline-block'} px-3 py-2 text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white`}
  >
    {children}
  </Link>
)

export default Header
