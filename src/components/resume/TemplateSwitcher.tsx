"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { templates, Template } from '@/templates'
import { useTemplateStore } from '@/stores/templateStore'
import { X, Check, ArrowRight, ChevronLeft, ChevronRight, Layout } from 'lucide-react'

interface TemplateSwitcherProps {
  currentTemplateId: string
}

export function TemplateSwitcher({ currentTemplateId }: TemplateSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const router = useRouter()
  const selectTemplate = useTemplateStore(state => state.selectTemplate)
  
  const currentTemplate = templates.find(t => t.id === currentTemplateId)
  const recentTemplates = useTemplateStore(state => state.recentTemplates)
    .map(id => templates.find(t => t.id === id))
    .filter(Boolean) as Template[]
  
  // Filter out the current template from recommendations
  const recommendedTemplates = templates
    .filter(t => t.id !== currentTemplateId)
    .filter(t => !recentTemplates.some(r => r.id === t.id))
    .slice(0, 4)
  
  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template)
    setConfirmDialogOpen(true)
  }
  
  const handleConfirmSwitch = () => {
    if (selectedTemplate) {
      selectTemplate(selectedTemplate.id)
      router.push(`/resume/builder/${selectedTemplate.id}`)
      setConfirmDialogOpen(false)
      setIsOpen(false)
    }
  }
  
  return (
    <>
      {/* Template Switcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg z-30 flex items-center justify-center"
        title="Switch Template"
      >
        <Layout className="w-6 h-6" />
      </motion.button>
      
      {/* Template Switcher Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-end sm:items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white dark:bg-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Switch Template
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Current Template */}
                {currentTemplate && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Current Template
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4">
                      <div className="relative w-16 h-20 bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow">
                        <Image
                          src={currentTemplate.thumbnail}
                          alt={currentTemplate.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {currentTemplate.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {currentTemplate.category}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Recent Templates */}
                {recentTemplates.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Templates
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {recentTemplates.map(template => (
                        <div 
                          key={template.id}
                          onClick={() => handleSelectTemplate(template)}
                          className="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                            <Image
                              src={template.thumbnail}
                              alt={template.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button className="px-3 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium">
                                Select
                              </button>
                            </div>
                          </div>
                          <div className="p-3">
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                              {template.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {template.category}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Recommended Templates */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recommended Templates
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {recommendedTemplates.map(template => (
                      <div 
                        key={template.id}
                        onClick={() => handleSelectTemplate(template)}
                        className="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={template.thumbnail}
                            alt={template.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="px-3 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium">
                              Select
                            </button>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                            {template.name}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {template.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Browse All Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      router.push('/resume-templates')
                      setIsOpen(false)
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    <span>Browse All Templates</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Confirmation Dialog */}
      <AnimatePresence>
        {confirmDialogOpen && selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Switch Template?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Are you sure you want to switch to {selectedTemplate.name}? Your content will be preserved but may look different with the new template.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                  <button
                    onClick={() => setConfirmDialogOpen(false)}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  
                  <button
                    onClick={handleConfirmSwitch}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    Switch Template
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
