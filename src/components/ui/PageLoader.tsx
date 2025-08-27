"use client"

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { 
  DashboardLoader, 
  ResumeLoader, 
  JobSearchLoader,
  PageTransitionLoader 
} from './ModernLoaders'
import { DashboardFullScreenLoader } from './LoadingSpinner'

/**
 * Universal Page Loading System
 * 
 * Features:
 * - Context-aware loading animations
 * - Route-specific loaders
 * - Smooth page transitions
 * - Loading state management
 */

interface PageLoaderProps {
  isLoading: boolean
  loadingType?: 'dashboard' | 'resume' | 'jobs' | 'general' | 'transition'
  message?: string
  className?: string
}

export function PageLoader({ 
  isLoading, 
  loadingType = 'general', 
  message,
  className = '' 
}: PageLoaderProps) {
  if (!isLoading) return null

  const renderLoader = () => {
    switch (loadingType) {
      case 'dashboard':
        return <DashboardLoader className={className} />
      case 'resume':
        return <ResumeLoader className={className} />
      case 'jobs':
        return <JobSearchLoader className={className} />
      case 'transition':
        return <PageTransitionLoader className={className} />
      default:
        return <DashboardFullScreenLoader />
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="text-center">
        {renderLoader()}
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-300 mt-4"
          >
            {message}
          </motion.p>
        )}
      </div>
    </div>
  )
}

/**
 * Route-based Loading Hook
 * Automatically shows loading states during route changes
 */
export function useRouteLoading() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Listen for route changes
    const originalPush = router.push
    const originalReplace = router.replace

    router.push = async (...args) => {
      handleStart()
      try {
        await originalPush.apply(router, args)
      } finally {
        setTimeout(handleComplete, 500) // Minimum loading time for UX
      }
    }

    router.replace = async (...args) => {
      handleStart()
      try {
        await originalReplace.apply(router, args)
      } finally {
        setTimeout(handleComplete, 500)
      }
    }

    return () => {
      router.push = originalPush
      router.replace = originalReplace
    }
  }, [router])

  return isLoading
}

/**
 * Page Wrapper with Loading States
 */
interface PageWrapperProps {
  children: React.ReactNode
  isLoading?: boolean
  loadingType?: 'dashboard' | 'resume' | 'jobs' | 'general'
  loadingMessage?: string
  className?: string
}

export function PageWrapper({ 
  children, 
  isLoading = false, 
  loadingType = 'general',
  loadingMessage,
  className = '' 
}: PageWrapperProps) {
  const routeLoading = useRouteLoading()
  const showLoading = isLoading || routeLoading

  if (showLoading) {
    return (
      <PageLoader 
        isLoading={showLoading} 
        loadingType={loadingType}
        message={loadingMessage}
        className={className}
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Loading Button Component
 */
interface LoadingButtonProps {
  isLoading: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
  loadingText?: string
}

export function LoadingButton({
  isLoading,
  onClick,
  disabled,
  className = '',
  children,
  loadingText = 'Loading...'
}: LoadingButtonProps) {
  return (
    <motion.button
      whileHover={!isLoading && !disabled ? { scale: 1.02 } : {}}
      whileTap={!isLoading && !disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative inline-flex items-center justify-center transition-all duration-200 ${
        isLoading || disabled ? 'opacity-75 cursor-not-allowed' : ''
      } ${className}`}
    >
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          {loadingText}
        </motion.div>
      )}
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </motion.button>
  )
}

/**
 * Section Loading Skeleton
 */
interface SectionSkeletonProps {
  lines?: number
  className?: string
}

export function SectionSkeleton({ lines = 3, className = '' }: SectionSkeletonProps) {
  return (
    <div className={`animate-pulse space-y-4 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

/**
 * Card Loading Skeleton
 */
export function CardLoadingSkeleton({ className = '' }: { className?: string }) {
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

/**
 * Table Loading Skeleton
 */
export function TableLoadingSkeleton({ rows = 5, className = '' }: { rows?: number; className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      <div className="animate-pulse">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            ))}
          </div>
        </div>
        
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="border-b border-gray-200 dark:border-gray-700 p-4 last:border-b-0">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <div key={colIndex} className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
