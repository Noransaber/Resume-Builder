"use client"

import { motion } from 'framer-motion'
import { Loader2, Zap, Target, FileText, Briefcase } from 'lucide-react'

/**
 * Modern Loading Components Collection
 * 
 * Features:
 * - Multiple loading animation styles
 * - Customizable colors and sizes
 * - Context-specific loaders
 * - Smooth Framer Motion animations
 * - Accessibility support
 */

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  color?: string
}

// Pulse Dots Loader
export function PulseDotsLoader({ size = 'md', className = '', color = 'bg-primary' }: LoaderProps) {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5'
  }

  const containerSizes = {
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-3',
    xl: 'space-x-4'
  }

  return (
    <div className={`flex items-center justify-center ${containerSizes[size]} ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizes[size]} ${color} rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Spinning Ring Loader
export function SpinningRingLoader({ size = 'md', className = '', color = 'border-primary' }: LoaderProps) {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
    xl: 'w-16 h-16 border-4'
  }

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <motion.div
        className={`${sizes[size]} ${color} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Wave Bars Loader
export function WaveBarsLoader({ size = 'md', className = '', color = 'bg-primary' }: LoaderProps) {
  const sizes = {
    sm: 'w-1 h-8',
    md: 'w-1.5 h-12',
    lg: 'w-2 h-16',
    xl: 'w-3 h-20'
  }

  const containerSizes = {
    sm: 'space-x-1',
    md: 'space-x-1.5',
    lg: 'space-x-2',
    xl: 'space-x-3'
  }

  return (
    <div className={`flex items-end justify-center ${containerSizes[size]} ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`${sizes[size]} ${color} rounded-full`}
          animate={{
            scaleY: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Bouncing Ball Loader
export function BouncingBallLoader({ size = 'md', className = '', color = 'bg-primary' }: LoaderProps) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <motion.div
        className={`${sizes[size]} ${color} rounded-full`}
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Gradient Spinner
export function GradientSpinner({ size = 'md', className = '' }: Omit<LoaderProps, 'color'>) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <motion.div
        className={`${sizes[size]} rounded-full`}
        style={{
          background: 'conic-gradient(from 0deg, transparent, #3B82F6, #EC4899, transparent)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Context-Specific Loaders

// Resume Loading
export function ResumeLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`} role="status" aria-label="Loading resume">
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FileText className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Building your resume...
        </h3>
        <PulseDotsLoader size="sm" />
      </div>
    </div>
  )
}

// Job Search Loading
export function JobSearchLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`} role="status" aria-label="Searching jobs">
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Briefcase className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Finding perfect jobs...
        </h3>
        <WaveBarsLoader size="sm" />
      </div>
    </div>
  )
}

// Dashboard Loading
export function DashboardLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-6 ${className}`} role="status" aria-label="Loading dashboard">
      <motion.div
        className="relative"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-primary to-pink-600 rounded-full flex items-center justify-center shadow-xl">
          <Target className="w-10 h-10 text-white" />
        </div>
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Loading your workspace...
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Preparing your career dashboard
        </p>
        <GradientSpinner size="sm" />
      </div>
    </div>
  )
}

// Page Transition Loader
export function PageTransitionLoader({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ${className}`}
      role="status"
      aria-label="Page loading"
    >
      <div className="text-center">
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-primary to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-6 h-6 text-white" />
        </motion.div>
        <SpinningRingLoader size="sm" />
      </div>
    </motion.div>
  )
}

// Skeleton Loaders for Content
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-xl"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  )
}

export function StatCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-xl mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  )
}
