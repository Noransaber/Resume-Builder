"use client"

import { motion } from 'framer-motion'
import { 
  FileText, 
  Briefcase, 
  Heart, 
  TrendingUp, 
  Eye,
  Download,
  Calendar,
  Target,
  Award,
  Clock,
  Users,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

/**
 * Dashboard Statistics and Action Cards
 * 
 * Features:
 * - Animated statistics cards with gradients
 * - Quick action cards with hover effects
 * - Recent activity timeline
 * - Performance metrics
 */

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: React.ComponentType<any>
  gradient: string
  delay?: number
}

function StatCard({ title, value, change, changeType = 'neutral', icon: Icon, gradient, delay = 0 }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />
      
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${gradient} mb-4 shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="relative">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
          {title}
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {value}
        </p>
        {change && (
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${changeColors[changeType]}`}>
            <TrendingUp className="w-4 h-4 mr-1" />
            {change}
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface ActionCardProps {
  title: string
  description: string
  icon: React.ComponentType<any>
  href: string
  color: string
  delay?: number
}

function ActionCard({ title, description, icon: Icon, href, color, delay = 0 }: ActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <Link href={href}>
        <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300">
          {/* Hover Effect */}
          <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-4 shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

interface RecentActivityProps {
  activities: Array<{
    id: string
    type: 'resume' | 'application' | 'save' | 'view'
    title: string
    description: string
    time: string
  }>
}

function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'resume': return FileText
      case 'application': return Briefcase
      case 'save': return Heart
      case 'view': return Eye
      default: return Clock
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'resume': return 'bg-blue-500'
      case 'application': return 'bg-green-500'
      case 'save': return 'bg-red-500'
      case 'view': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <Link href="/dashboard/activity" className="text-primary hover:text-primary/80 text-sm font-medium">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = getActivityIcon(activity.type)
          const colorClass = getActivityColor(activity.type)
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className={`flex-shrink-0 w-10 h-10 ${colorClass} rounded-lg flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export function DashboardStats() {
  const stats = [
    {
      title: 'Total Resumes',
      value: '12',
      change: '+2 this month',
      changeType: 'positive' as const,
      icon: FileText,
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Applications Sent',
      value: '28',
      change: '+8 this week',
      changeType: 'positive' as const,
      icon: Briefcase,
      gradient: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Saved Jobs',
      value: '45',
      change: '+12 today',
      changeType: 'positive' as const,
      icon: Heart,
      gradient: 'bg-gradient-to-r from-red-500 to-red-600'
    },
    {
      title: 'Profile Views',
      value: '156',
      change: '+23%',
      changeType: 'positive' as const,
      icon: Eye,
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 0.1} />
      ))}
    </div>
  )
}

export function QuickActions() {
  const actions = [
    {
      title: 'Create Resume',
      description: 'Build a new professional resume',
      icon: FileText,
      href: '/resume/new',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Browse Jobs',
      description: 'Find your next opportunity',
      icon: Briefcase,
      href: '/jobs',
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Track Applications',
      description: 'Monitor your job applications',
      icon: BarChart3,
      href: '/dashboard/applications',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      title: 'Set Goals',
      description: 'Define your career objectives',
      icon: Target,
      href: '/dashboard/goals',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {actions.map((action, index) => (
        <ActionCard key={action.title} {...action} delay={index * 0.1} />
      ))}
    </div>
  )
}

export function DashboardActivity() {
  const activities = [
    {
      id: '1',
      type: 'resume' as const,
      title: 'Updated Software Engineer Resume',
      description: 'Added new project and skills section',
      time: '2 hours ago'
    },
    {
      id: '2',
      type: 'application' as const,
      title: 'Applied to Frontend Developer at TechCorp',
      description: 'Submitted application with custom cover letter',
      time: '5 hours ago'
    },
    {
      id: '3',
      type: 'save' as const,
      title: 'Saved UX Designer Position',
      description: 'Bookmarked job at Design Studio Inc.',
      time: '1 day ago'
    },
    {
      id: '4',
      type: 'view' as const,
      title: 'Profile Viewed by Recruiter',
      description: 'HR Manager at StartupXYZ viewed your profile',
      time: '2 days ago'
    }
  ]

  return <RecentActivity activities={activities} />
}

interface WelcomeHeaderProps {
  userName?: string
}

export function WelcomeHeader({ userName }: WelcomeHeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {getGreeting()}, {userName || 'there'}! 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Here's what's happening with your job search today.
      </p>
    </motion.div>
  )
}
