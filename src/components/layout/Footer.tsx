"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  Heart
} from 'lucide-react'

// Footer navigation data
const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { name: 'Resume Builder', href: '/resume/builder/1' },
      { name: 'Resume Templates', href: '/templates' },
      { name: 'Cover Letters', href: '/cover-letters' },
      { name: 'Job Search', href: '/jobs' },
      { name: 'Pricing', href: '/pricing' },
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Resume Guide', href: '/guide' },
      { name: 'Career Advice', href: '/blog' },
      { name: 'Interview Tips', href: '/interview-tips' },
      { name: 'Salary Guide', href: '/salary-guide' },
      { name: 'Help Center', href: '/help' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ]
  }
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-primary/5 to-pink-600/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ResumeBuilder
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Build professional resumes that get you hired. Our AI-powered builder creates 
                ATS-optimized resumes in minutes, helping millions of professionals land their dream jobs.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@resumebuilder.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(footerLinks).map(([key, section], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href as any}
                            className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-12 border-t border-gray-800"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay updated with career tips
              </h3>
              <p className="text-gray-300">
                Get the latest resume writing tips, job search strategies, and career advice 
                delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} ResumeBuilder. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">for job seekers</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
