"use client"
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, Menu, X, Sparkles, FileText, Users, BarChart3, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"


export function Header() {
  const { theme, setTheme } = useTheme()
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Firebase auth state
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: Array<{
    name: string;
    href: string;
    icon: any;
    description?: string;
    gradient: string;
  }> = [
    {
      name: 'Home',
      href: '/',
      icon: Sparkles,
      description: 'Welcome',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Templates',
      href: '/resume-templates',
      icon: FileText,
      description: 'Choose Design',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'About',
      href: '/about-us',
      icon: Users,
      description: 'Our Story',
      gradient: 'from-green-500 to-emerald-500'
    },

    {
      name: 'Contact',
      href: '/contact-us',
      icon: Heart,
      description: 'Get in Touch',
      gradient: 'from-rose-500 to-pink-500'
    },


  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 p-[20px] ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-white/20 dark:border-gray-700/20 shadow-2xl shadow-purple-500/5'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-22">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <span className="text-white font-bold text-xl lg:text-2xl">R</span>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  ResumeBuilder
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                />
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center space-x-2 px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-800/80 backdrop-blur-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <div className="flex flex-col">
                      <span>{item.name}</span>
      
                    </div>

                    {/* Animated underline */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover background effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                      initial={false}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
              className="relative p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:border-purple-300/50 dark:hover:border-purple-600/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animated ring effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>

            {/* Enhanced Sign In Button */}
  {/* Dynamic Sign In / Dashboard Button */}
  <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {loading ? (
                <div className="px-8 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Loading...
                </div>
              ) : (
                <Link
                  href={user ? "/dashboard" : "/signin"}
                  className="relative inline-flex items-center px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">
                    {user ? "Go to Dashboard" : "Sign In"}
                  </span>
                  <motion.div
                    className="relative z-10 ml-2"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Enhanced Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden relative p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:border-purple-300/50 dark:hover:border-purple-600/50 shadow-lg shadow-purple-500/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated ring effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="py-6 space-y-4 border-t border-white/20 dark:border-gray-700/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-b-3xl mx-4 mt-4 shadow-2xl"
              >
                {/* Mobile Nav Items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-4 px-6 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`p-2 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                      >
                        <item.icon className="w-5 h-5" />
                      </motion.div>
                      <div className="flex flex-col">
                        <span className="group-hover:text-purple-600 transition-colors duration-300">{item.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center space-x-4 px-6 pt-4 border-t border-white/20 dark:border-gray-700/20"
                >
                  {/* Mobile Theme Toggle */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle Theme"
                    className="p-3 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:border-purple-300/50 dark:hover:border-purple-600/50 shadow-lg transition-all duration-300"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    )}
                  </motion.button>

                  {/* Mobile Sign In Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/signin"
                      className="inline-flex items-center px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}


