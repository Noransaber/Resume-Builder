"use client"
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
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
  Heart,
  Sparkles,
  FileText,
  Users,
  Target,
  Send
} from 'lucide-react'
import { Award, Shield, TrendingUp, Star } from "lucide-react"

// Footer navigation data with enhanced structure
const footerLinks = {
  product: {
    title: 'Product',
    icon: FileText,
    gradient: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Resume Builder', href: '/resume-templates', description: 'Create professional resumes' },
      { name: 'Templates', href: '/resume-templates', description: 'Choose from 50+ designs' },
      { name: 'Cover Letters', href: '/cover-letters', description: 'AI-powered letter builder' },
      // { name: 'Job Search', href: '/jobs', description: 'Find your dream job' },
      { name: 'Pricing', href: '/pricing', description: 'Plans for everyone' },
    ]
  },
  resources: {
    title: 'Resources',
    icon: Target,
    gradient: 'from-purple-500 to-pink-500',
    links: [
      { name: 'Resume Guide', href: '/guide', description: 'Expert writing tips' },
      { name: 'Career Advice', href: '/blog', description: 'Industry insights' },
      { name: 'Interview Tips', href: '/interview-tips', description: 'Ace your interviews' },
      // { name: 'Salary Guide', href: '/salary-guide', description: 'Know your worth' },
      { name: 'Help Center', href: '/help', description: 'Get instant support' },
    ]
  },
  company: {
    title: 'Company',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    links: [
      { name: 'About Us', href: '/about-us', description: 'Our mission & vision' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      // { name: 'Press', href: '/press', description: 'Latest news' },
      // { name: 'Partners', href: '/partners', description: 'Strategic alliances' },
      { name: 'Contact', href: '/contact-us', description: 'Get in touch' },
    ]
  },
  legal: {
    title: 'Legal',
    icon: Award,
    gradient: 'from-orange-500 to-red-500',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy', description: 'Data protection' },
      { name: 'Terms of Service', href: '/terms-and-conditions', description: 'Usage terms' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie preferences' },
      // { name: 'GDPR', href: '/gdpr', description: 'EU compliance' },
    ]
  }
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/noran.abdelfattah.2025', color: 'hover:bg-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/Noransaber11', color: 'hover:bg-sky-500' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/noran-saber-abdelfattah-6198471ba/', color: 'hover:bg-blue-700' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Noransaber', color: 'hover:bg-gray-800' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  }
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950 text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-rose-400/10 to-fuchsia-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Enhanced Brand Section */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4"
            >
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <span className="text-white font-black text-3xl">R</span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>

                <div className="flex flex-col">
                  <span className="text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    ResumeBuilder
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-left"
                  />
                </div>
              </div>

              {/* Enhanced Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-300 mb-8 leading-relaxed text-lg"
              >
                Transform your career with our <span className="font-bold text-purple-400">AI-powered</span> platform.
                Create stunning resumes that get you noticed and land your dream job.
              </motion.p>

              {/* Enhanced Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { value: '2M+', label: 'Users', icon: Users },
                  { value: '94%', label: 'Success Rate', icon: Target }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <stat.icon className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Enhanced Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'noransaber685@gmail.com', href: 'mailto:noransaber685@gmail.com' },
                  { icon: Phone, text: '+20 10 3070 6893', href: 'tel:+201030706893' },
                  { icon: MapPin, text: 'Cairo, Egypt', href: '#' }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-300/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Navigation Links */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-8"
            >
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(footerLinks).map(([key, section], index) => (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-10 h-10 bg-gradient-to-r ${section.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <section.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {section.title}
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + linkIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Link
                            href={link.href as any}
                            className="group/link flex flex-col text-gray-300 hover:text-white transition-all duration-300"
                          >
                            <span className="font-semibold group-hover/link:text-purple-400 transition-colors duration-300">
                              {link.name}
                            </span>
                            <span className="text-sm text-gray-400 group-hover/link:text-gray-300 transition-colors duration-300">
                              {link.description}
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Newsletter Section */}
        {/* <motion.div
          variants={itemVariants}
          className="py-16 border-t border-white/20"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={itemVariants}
                className="text-center lg:text-left"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Stay Ahead</span>
                </motion.div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Get Career Tips & Insights
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Join <span className="font-bold text-purple-400">50,000+</span> professionals who receive weekly
                  career advice, resume tips, and job market insights delivered straight to their inbox.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Subscribe</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div> */}

        {/* Enhanced Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="py-12 border-t border-white/20"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Enhanced Copyright */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 text-gray-300 text-sm"
            >
              <div className="flex items-center gap-2">
                <span>© {currentYear} ResumeBuilder. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Made with</span>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center"
                >
                  <Heart className="w-4 h-4 text-white fill-current" />
                </motion.div>
                <span className="hidden sm:inline">for job seekers worldwide</span>
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 lg:flex-row lg:items-center"
            >
              <span className="text-gray-400 text-sm">Connect with us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 ${social.color} shadow-lg hover:shadow-2xl`}
                    aria-label={social.name}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center items-center gap-6"
          >
            {[
              { text: 'ISO 27001 Certified', icon: Award },
              { text: 'GDPR Compliant', icon: Shield },
              { text: '99.9% Uptime', icon: TrendingUp },
              { text: '24/7 Support', icon: Star }
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <badge.icon className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
