"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  type: ToastType
  title: string
  message?: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

/**
 * Toast Notification Component
 * 
 * Features:
 * - Multiple types (success, error, warning, info)
 * - Auto-dismiss functionality
 * - Smooth animations with Framer Motion
 * - Accessible design
 */
export function Toast({ 
  type, 
  title, 
  message, 
  isVisible, 
  onClose, 
  duration = 5000 
}: ToastProps) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 100) {
          onClose()
          return 0
        }
        return prev - 100
      })
    }, 100)

    return () => clearInterval(timer)
  }, [isVisible, onClose])

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info
  }

  const colors = {
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-200',
      icon: 'text-green-600 dark:text-green-400'
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-200',
      icon: 'text-red-600 dark:text-red-400'
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: 'text-yellow-600 dark:text-yellow-400'
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-200',
      icon: 'text-blue-600 dark:text-blue-400'
    }
  }

  const IconComponent = icons[type]
  const colorScheme = colors[type]
  const progress = (timeLeft / duration) * 100

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-4 right-4 z-50 max-w-sm w-full ${colorScheme.bg} ${colorScheme.border} border rounded-xl shadow-lg backdrop-blur-sm`}
          role="alert"
          aria-live="polite"
        >
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <IconComponent className={`w-5 h-5 ${colorScheme.icon} flex-shrink-0 mt-0.5`} />
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-semibold ${colorScheme.text}`}>
                  {title}
                </h4>
                {message && (
                  <p className={`text-sm ${colorScheme.text} opacity-80 mt-1`}>
                    {message}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`${colorScheme.text} opacity-60 hover:opacity-100 transition-opacity`}
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="h-1 bg-black/10 dark:bg-white/10">
            <motion.div
              className={`h-full ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`}
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Toast Hook for easy usage
 */
export function useToast() {
  const [toasts, setToasts] = useState<Array<{
    id: string
    type: ToastType
    title: string
    message?: string
  }>>([])

  const showToast = (type: ToastType, title: string, message?: string) => {
    const id = Math.random().toString(36).substring(7)
    setToasts(prev => [...prev, { id, type, title, message }])
  }

  const hideToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          isVisible={true}
          onClose={() => hideToast(toast.id)}
        />
      ))}
    </div>
  )

  return {
    showToast,
    ToastContainer
  }
}
