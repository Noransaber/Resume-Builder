"use client"

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * Reusable Loading Spinner Component
 * 
 * Features:
 * - Multiple sizes (sm, md, lg)
 * - Smooth Framer Motion animations
 * - Customizable styling via className
 * - Accessibility features
 */
export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Loader2 className={`${sizeClasses[size]} text-primary`} />
      </motion.div>
      <span className="sr-only">Loading...</span>
    </motion.div>
  )
}

/**
 * Full Screen Loading Component
 * Used for page-level loading states
 */
export function FullScreenLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <LoadingSpinner size="lg" className="mb-4" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 font-medium"
        >
          Loading your workspace...
        </motion.p>
      </motion.div>
    </div>
  )
}
