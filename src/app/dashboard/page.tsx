"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/stores/authStore'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { 
  WelcomeHeader, 
  DashboardStats, 
  QuickActions, 
  DashboardActivity 
} from '@/components/dashboard/DashboardCards'
import { DashboardFullScreenLoader } from '@/components/ui/LoadingSpinner'

/**
 * Modern Dashboard Page
 * 
 * Features:
 * - Beautiful sidebar navigation
 * - Statistics cards with animations
 * - Quick action buttons
 * - Recent activity timeline
 * - Responsive design for all devices
 * - Authentication protection
 */
export default function DashboardPage() {
  const router = useRouter()
  const { user, loading, init, loginGoogle } = useAuthStore()

  useEffect(() => {
    init()
  }, [init])

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [user, loading, router])

  // Show loading while checking authentication
  if (loading) {
    return <DashboardFullScreenLoader />
  }

  // Show sign-in prompt if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Your Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Sign in to access your resumes, track applications, and manage your job search.
          </p>
          <button 
            onClick={() => loginGoogle()}
            className="w-full bg-gradient-to-r from-primary to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200"
          >
            Sign in with Google
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-80">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Welcome Header */}
            <WelcomeHeader userName={user.displayName || user.email?.split('@')[0]} />

            {/* Statistics Cards */}
            <DashboardStats />

            {/* Quick Actions */}
            <QuickActions />

            {/* Recent Activity */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <DashboardActivity />
              </div>
              
              {/* Additional Info Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Career Tips
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">
                      Optimize Your Resume
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Tailor your resume for each job application to increase your chances of getting noticed.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-900 dark:text-green-200 mb-2">
                      Follow Up
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Send a polite follow-up email 1-2 weeks after applying to show continued interest.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h4 className="font-medium text-purple-900 dark:text-purple-200 mb-2">
                      Network Actively
                    </h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Connect with professionals in your field on LinkedIn and attend industry events.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}


