import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MVP-Chat</h3>
            <p className="text-gray-400">
              Connecting people through seamless communication.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} MVP-Chat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

