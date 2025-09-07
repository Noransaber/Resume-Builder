"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { X, Check, ArrowRight, Loader2 } from 'lucide-react'
import { Template } from '@/templates'
import { useTemplateStore } from '@/stores/templateStore'

interface TemplateSelectionModalProps {
  template: Template | null
  onClose: () => void
  isOpen: boolean
}

export function TemplateSelectionModal({ 
  template, 
  onClose,
  isOpen
}: TemplateSelectionModalProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const selectTemplate = useTemplateStore(state => state.selectTemplate)
  
  if (!template) return null
  
  const handleSelectTemplate = () => {
    setIsLoading(true)
    
    // Select the template in the store
    selectTemplate(template.id)
    
    // Simulate a brief loading state before redirecting
    setTimeout(() => {
      router.push(`/resume/builder/${template.id}`)
    }, 800)
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {template.name}
              </h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 grid md:grid-cols-2 gap-8">
              {/* Template Preview */}
              <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={template.thumbnail}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Template Details */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {template.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* ATS Badge */}
                {template.atsOptimized && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-green-800 dark:text-green-400 font-medium">
                        ATS-Optimized
                      </span>
                    </div>
                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                      This template is designed to pass through Applicant Tracking Systems successfully.
                    </p>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  
                  <button
                    onClick={handleSelectTemplate}
                    disabled={isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Preparing Template...</span>
                      </>
                    ) : (
                      <>
                        <span>Use This Template</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
