'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Lock, Zap, Globe, Users, Video, Cloud, Smartphone } from 'lucide-react'

const features = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Real-time Messaging',
    description: 'Send and receive messages instantly with our lightning-fast chat system.'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'End-to-End Encryption',
    description: 'Your conversations are secure with our state-of-the-art encryption technology.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Seamless Integration',
    description: 'Easily integrate with your favorite apps and services for enhanced productivity.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Cross-Platform Support',
    description: 'Access your chats from any device, anywhere in the world.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Group Chats',
    description: 'Create and manage group conversations with ease.'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video Calls',
    description: 'Connect face-to-face with high-quality video calls.'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Sync',
    description: 'Your messages and files are always synced across all your devices.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App',
    description: 'Stay connected on-the-go with our powerful mobile application.'
  }
]

const Features = () => {
  return (
    <section id="features" className="flex items-center justify-center flex-col pt-28 pb-10 relative overflow-hidden w-full">
      <div className="absolute h-16 rounded-full w-44 blur-3xl select-none bg-primary opacity-40 -top-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the tools that make MVP-Chat the ultimate communication platform for modern teams and individuals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div 
                className="text-blue-600 dark:text-blue-400 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

