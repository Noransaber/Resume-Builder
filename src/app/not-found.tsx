"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  FileQuestion,
  Compass,
  RefreshCw
} from 'lucide-react'

/**
 * Modern 404 Error Page
 * 
 * Features:
 * - Beautiful animated illustrations
 * - Multiple navigation options
 * - Helpful suggestions for users
 * - Responsive design
 * - Engaging micro-interactions
 */
export default function NotFound() {
  const router = useRouter()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* 404 Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Large 404 Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 bg-clip-text leading-none"
            >
              404
            </motion.h1>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FileQuestion className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-4 left-4 md:bottom-8 md:left-8"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
            The page you're looking for seems to have vanished into thin air.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Don't worry, even the best explorers sometimes take a wrong turn!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          {/* Go Home Button */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </motion.div>
          </Link>

          {/* Go Back Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoBack}
            className="group flex items-center space-x-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </motion.button>

          {/* Search Jobs Button */}
          <Link href="/jobs">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Search className="w-5 h-5" />
              <span>Search Jobs</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Dashboard', href: '/dashboard', icon: Home, color: 'from-blue-500 to-blue-600' },
              { name: 'Resume Builder', href: '/resume/new', icon: FileQuestion, color: 'from-green-500 to-green-600' },
              { name: 'Job Search', href: '/jobs', icon: Search, color: 'from-purple-500 to-purple-600' },
              { name: 'Templates', href: '/resume-templates', icon: RefreshCw, color: 'from-pink-500 to-pink-600' }
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <Link href={link.href}>
                  <div className="group p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-primary transition-colors">
                      {link.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm text-gray-500 dark:text-gray-400 mt-8"
        >
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-primary hover:underline font-medium">
            contact support
          </Link>
        </motion.p>
      </div>
    </div>
  )
}
