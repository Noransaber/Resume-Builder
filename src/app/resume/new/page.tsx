"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function NewResumePage() {
  const router = useRouter()

  // Auto-redirect to resume builder after a brief moment
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/resume/builder/1')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Loading Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-pink-600 rounded-full flex items-center justify-center">
            <FileText className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Let's Build Your Resume
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          Starting your resume with our professional template. 
          You can customize everything to match your style.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/resume/builder/1"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Building
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/resume-templates"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600"
            >
              Choose Template
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Auto-redirect notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-gray-500 dark:text-gray-400 mb-4"
        >
          Redirecting to builder in 2 seconds...
        </motion.p>

        {/* Progress indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'linear' }}
          className="h-1 bg-gradient-to-r from-primary to-pink-600 rounded-full mx-auto max-w-xs"
        />
      </div>
    </div>
  )
}
