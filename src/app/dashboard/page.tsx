"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useAuthStore } from '@/stores/authStore'
import { Sidebar } from '@/components/dashboard/Sidebar'
import {
  WelcomeHeader,
  DashboardStats,
  QuickActions,
  DashboardActivity
} from '@/components/dashboard/DashboardCards'
import { DashboardFullScreenLoader } from '@/components/ui/LoadingSpinner'
import {
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Star,
  Zap,
  FileText,
  Briefcase,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react'

/**
 * Enhanced Modern Dashboard Page
 *
 * Features:
 * - Beautiful sidebar navigation with enhanced styling
 * - Statistics cards with advanced animations
 * - Quick action buttons with improved interactions
 * - Recent activity timeline with enhanced visuals
 * - Floating background elements
 * - Responsive design for all devices
 * - Authentication protection
 */
export default function DashboardPage() {
  const router = useRouter()
  const { user, loading, init, loginGoogle } = useAuthStore()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  useEffect(() => {
    init()
  }, [init])

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [user, loading, router])

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

  // Show loading while checking authentication
  if (loading) {
    return <DashboardFullScreenLoader />
  }

  // Show sign-in prompt if not authenticated
  if (!user) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-purple-50/80 to-pink-50/90 dark:from-gray-900/95 dark:via-purple-900/80 dark:to-pink-900/90" />

        {/* Multiple Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-lg mx-auto px-6"
        >
          {/* Enhanced Sign-in Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 p-8 text-center text-white">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Sparkles className="w-10 h-10" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-white/90">Access your personalized dashboard</p>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Your Dashboard Awaits
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sign in to access your resumes, track applications, and manage your job search with our AI-powered platform.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: FileText, text: 'Resume Builder', color: 'text-blue-600' },
                  { icon: Target, text: 'Job Tracking', color: 'text-green-600' },
                  { icon: TrendingUp, text: 'Analytics', color: 'text-purple-600' },
                  { icon: Award, text: 'AI Insights', color: 'text-orange-600' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Sign-in Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => loginGoogle()}
                className="w-full relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              >
                {/* Background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Sign in with Google
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  New here? <span className="text-purple-600 font-medium">Create your account</span> to get started
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-purple-50/80 to-pink-50/90 dark:from-gray-900/95 dark:via-purple-900/80 dark:to-pink-900/90" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-rose-400/10 to-fuchsia-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative z-10 lg:ml-80 pt-32">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Enhanced Welcome Header */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <WelcomeHeader userName={user.displayName || user.email?.split('@')[0]} />
            </motion.div>

            {/* Enhanced Statistics Cards */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <DashboardStats />
            </motion.div>

            {/* Enhanced Quick Actions */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <QuickActions />
            </motion.div>

            {/* Enhanced Recent Activity */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 xl:grid-cols-3 gap-8"
            >
              <div className="xl:col-span-2">
                <DashboardActivity />
              </div>

              {/* Enhanced Info Panel */}
              <motion.div
                variants={itemVariants}
                className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-xl font-bold">Career Tips</h3>
                  </div>
                  <p className="text-white/90 text-sm">Boost your job search success</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {[
                    {
                      icon: Target,
                      title: 'Optimize Your Resume',
                      description: 'Tailor your resume for each job application to increase your chances of getting noticed.',
                      color: 'from-blue-500 to-cyan-500',
                      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
                    },
                    {
                      icon: Clock,
                      title: 'Follow Up Strategically',
                      description: 'Send a polite follow-up email 1-2 weeks after applying to show continued interest.',
                      color: 'from-green-500 to-emerald-500',
                      bgColor: 'bg-green-50 dark:bg-green-900/20'
                    },
                    {
                      icon: Users,
                      title: 'Network Actively',
                      description: 'Connect with professionals in your field on LinkedIn and attend industry events.',
                      color: 'from-purple-500 to-pink-500',
                      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
                    }
                  ].map((tip, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 ${tip.bgColor} rounded-2xl border border-white/20 dark:border-gray-700/20 transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className={`w-10 h-10 bg-gradient-to-r ${tip.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                        >
                          <tip.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                            {tip.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-white/20 dark:border-gray-700/20 bg-gray-50/50 dark:bg-gray-700/50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Star className="w-4 h-4" />
                    <span>Explore More Tips</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}


