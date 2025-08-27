"use client"
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, Star, ArrowRight } from 'lucide-react'

interface Template {
  id: number
  name: string
  category: string
  image: string
  rating: number
  downloads: string
  description: string
  popular: boolean
}

interface TemplateModalProps {
  template: Template
  onClose: () => void
}

export function TemplateModal({ template, onClose }: TemplateModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-4 z-50 flex items-center justify-center"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {template.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {template.category} Template
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Template Preview */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  {template.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-primary to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Template Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {template.rating} rating
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {template.downloads} downloads
                  </div>
                </div>
              </div>

              {/* Template Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Template Details
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {template.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      ATS-optimized layout
                    </li>
                    <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Professional design
                    </li>
                    <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Easy customization
                    </li>
                    <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Export to PDF & Word
                    </li>
                  </ul>
                </div>

                {/* Best For */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Best For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {template.category === 'Professional' && (
                      <>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                          Corporate Jobs
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                          Business Roles
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                          Management
                        </span>
                      </>
                    )}
                    {template.category === 'Creative' && (
                      <>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                          Design Jobs
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                          Creative Roles
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                          Portfolio
                        </span>
                      </>
                    )}
                    {template.category === 'Technology' && (
                      <>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                          Tech Jobs
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                          Development
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                          Engineering
                        </span>
                      </>
                    )}
                    {template.category === 'Minimal' && (
                      <>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          Any Industry
                        </span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          Clean Design
                        </span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          Simple Layout
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Ready to create your resume with this template?
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/resume/${template.id}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Use this template
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

