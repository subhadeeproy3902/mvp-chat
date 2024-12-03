'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full relative py-12 md:py-28 min-h-dvh overflow-hidden mt-16">
      <div className="bg-gradient-to-r from-transparent to-transparent via-primary/50 h-px w-3/5 left-1/2 -translate-x-1/2 absolute bottom-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated background elements */}
        <div className="absolute bottom-0 left-[-10%] right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(46,247,255,.15),rgba(255,255,255,0))] opacity-0 md:opacity-100"></div>
        <div className="absolute bottom-0 left-[-20%] top-[5%] right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(12,121,255,.15),rgba(255,255,255,0))] opacity-0 md:opacity-100"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="flex flex-col lg:flex-row items-center relative z-10">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 place-items-center lg:place-items-start max-w-3xl mx-auto text-center lg:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connect and <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Chat</span> <br />
              <span className="gradient-text">Anytime, Anywhere</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Experience seamless communication with our modern chat application. Stay connected with friends, family, and colleagues effortlessly.
            </p>
            <div className="flex flex-col justify-center lg:justify-start w-full sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/chat" className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-3 rounded-md text-lg font-semibold hover:from-blue-700 hover:to-teal-500 transition duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#" className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 rounded-2xl filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MVP-Chat</h3>
                    <p className="text-gray-500 dark:text-gray-400">Online</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Message sender="You" content="Hey, how's it going?" />
                  <Message sender="Sarah" content="Hi! I'm doing great, thanks for asking. How about you?" />
                  <Message sender="You" content="I'm good too! Just checking out this new chat app." />
                  <Message sender="Sarah" content="Oh nice! I've heard great things about it. What do you think so far?" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Message = ({ sender, content }: {
  sender: string
  content: string
}) => (
  <div className={`flex ${sender === 'You' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-xs px-4 py-2 rounded-lg ${sender === 'You' ? 'bg-gradient-to-r from-blue-600 to-teal-400 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
      <p className="text-sm">{content}</p>
    </div>
  </div>
)

export default Hero

