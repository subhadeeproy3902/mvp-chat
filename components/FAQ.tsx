'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "What is MVP-Chat?",
    answer: "MVP-Chat is a modern messaging platform that allows users to communicate in real-time across various devices and platforms. It offers features like instant messaging, group chats, file sharing, and more."
  },
  {
    question: "Is MVP-Chat free to use?",
    answer: "MVP-Chat offers both free and paid plans. The basic features are available for free, while advanced features and increased storage are available in our premium plans."
  },
  {
    question: "How secure is MVP-Chat?",
    answer: "MVP-Chat uses end-to-end encryption for all messages and calls, ensuring that your conversations remain private and secure. We also offer additional security features like two-factor authentication."
  },
  {
    question: "Can I use MVP-Chat on multiple devices?",
    answer: "Yes, MVP-Chat supports multi-device usage. You can access your account and messages from your smartphone, tablet, and computer, with all your data synced across devices."
  },
  {
    question: "How do I start a group chat?",
    answer: "To start a group chat, simply tap the 'New Chat' button, select 'New Group', and then choose the contacts you want to add to the group. You can then name the group and start chatting!"
  }
]

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about MVP-Chat and its features.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQItem = ({ question, answer }: {
  question: string
  answer: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        ) : (
          <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <p className="text-gray-600 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQ

