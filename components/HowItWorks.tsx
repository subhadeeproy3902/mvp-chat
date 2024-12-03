'use client'

import { motion } from 'framer-motion'
import { Download, UserPlus, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Download the App',
    description: 'Get started by downloading MVP-Chat from your device\'s app store.'
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Create an Account',
    description: 'Sign up quickly using your email or social media accounts.'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Start Chatting',
    description: 'Connect with friends and start enjoying seamless communication.'
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute h-16 rounded-full w-44 blur-3xl select-none bg-primary opacity-35 bottom-28 -right-16"></div>
      <div className="absolute h-16 rounded-full w-44 blur-3xl select-none bg-primary opacity-35 bottom-28 -left-16"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting started with MVP-Chat is easy. Follow these simple steps to begin your journey.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-600 flex flex-col items-center text-center max-w-xs w-full"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

