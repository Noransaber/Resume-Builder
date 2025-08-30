"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  FileText, 
  Briefcase, 
  Heart, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  Plus,
  BarChart3,
  Target
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { useState } from 'react'

/**
 * Modern Sidebar Navigation Component
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Active state highlighting
 * - Smooth animations with Framer Motion
 * - User profile section
 * - Quick action buttons
 */

interface SidebarProps {
  className?: string
}

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'Overview & statistics'
  },
  {
    name: 'My Resumes',
    href: '/dashboard/resumes',
    icon: FileText,
    description: 'Manage your resumes',
    badge: 'New'
  },
  // {
  //   name: 'Applied Jobs',
  //   href: '/dashboard/applications',
  //   icon: Briefcase,
  //   description: 'Track applications'
  // },
  // {
  //   name: 'Saved Jobs',
  //   href: '/dashboard/saved',
  //   icon: Heart,
  //   description: 'Bookmarked positions'
  // },
  // {
  //   name: 'Analytics',
  //   href: '/dashboard/analytics',
  //   icon: BarChart3,
  //   description: 'Performance insights'
  // },
  // {
  //   name: 'Goals',
  //   href: '/dashboard/goals',
  //   icon: Target,
  //   description: 'Career objectives'
  // }
]

const quickActions = [
  {
    name: 'New Resume',
    href: '/resume/new',
    icon: Plus,
    color: 'bg-gradient-to-br from-purple-400 to-pink-400'
  }
]

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname()
  const { user, logout } = useAuthStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              ResumeBuilder
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Professional Dashboard
            </p>
          </div>
        </motion.div>
      </div>

      {/* User Profile Section */}
      {user && (
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt={user.displayName || 'User'} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <User className="w-6 h-6 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {user.displayName || 'User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user.email}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={action.href}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-white font-medium shadow-lg transition-all duration-200 ${action.color}`}
                >
                  <action.icon className="w-5 h-5" />
                  <span>{action.name}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
          Navigation
        </h3>
        <ul className="space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-pink-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-primary'}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* Footer Actions */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-800">
        <div className="space-y-2">
          <Link href="/dashboard/settings">
            <motion.div
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Settings className="w-5 h-5 text-gray-500" />
              <span className="font-medium">Settings</span>
            </motion.div>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </motion.button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50 ">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </motion.button>
      </div>

      {/* Desktop Sidebar */}
      <aside className={`hidden pt-32 lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 ${className}`}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-80 lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
