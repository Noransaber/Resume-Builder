"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ArrowLeft, ArrowRight, ZoomIn, Download, Star, Check } from 'lucide-react'
import { Template } from '@/templates'

interface TemplatePreviewModalProps {
  template: Template | null
  onClose: () => void
  onSelect: (template: Template) => void
  isOpen: boolean
  templates: Template[]
}

export function TemplatePreviewModal({
  template,
  onClose,
  onSelect,
  isOpen,
  templates
}: TemplatePreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  
  if (!template || !isOpen) return null
  
  // Find the index of the current template
  const templateIndex = templates.findIndex(t => t.id === template.id)
  if (templateIndex !== currentIndex) {
    setCurrentIndex(templateIndex)
  }
  
  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + templates.length) % templates.length
    setCurrentIndex(newIndex)
  }
  
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % templates.length
    setCurrentIndex(newIndex)
  }
  
  const currentTemplate = templates[currentIndex]
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white dark:bg-gray-800 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentTemplate.name}
              </h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            {/* Content */}
            <div className="grid md:grid-cols-5 gap-0">
              {/* Preview */}
              <div className="md:col-span-3 relative bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden" style={{ height: '70vh' }}>
                <div 
                  className={`relative transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <Image
                    src={currentTemplate.thumbnail}
                    alt={currentTemplate.name}
                    width={400}
                    height={600}
                    className="object-contain shadow-lg"
                  />
                </div>
                
                {/* Zoom indicator */}
                <button 
                  className="absolute bottom-4 right-4 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsZoomed(!isZoomed)
                  }}
                >
                  <ZoomIn className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                
                {/* Navigation arrows */}
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                >
                  <ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                
                {/* Template counter */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg">
                  {currentIndex + 1} / {templates.length}
                </div>
              </div>
              
              {/* Details */}
              <div className="md:col-span-2 p-6 overflow-y-auto" style={{ maxHeight: '70vh' }}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentTemplate.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {currentTemplate.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        4.8
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {currentTemplate.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {currentTemplate.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* ATS Badge */}
                {currentTemplate.atsOptimized && (
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
                
                {/* Best For */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Best For
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {currentTemplate.category === 'Professional' && 'Corporate roles, business professionals, and traditional industries'}
                    {currentTemplate.category === 'Creative' && 'Designers, artists, photographers, and creative professionals'}
                    {currentTemplate.category === 'Technology' && 'Software developers, IT professionals, and tech industry roles'}
                    {currentTemplate.category === 'Executive' && 'Senior managers, directors, C-level executives, and leadership positions'}
                    {currentTemplate.category === 'Entrepreneur' && 'Startup founders, business owners, and entrepreneurial professionals'}
                    {currentTemplate.category === 'Academic' && 'Professors, researchers, scientists, and academic professionals'}
                    {currentTemplate.category === 'Healthcare' && 'Doctors, nurses, medical staff, and healthcare professionals'}
                    {currentTemplate.category === 'Sales' && 'Sales representatives, account managers, and business development roles'}
                    {currentTemplate.category === 'Student' && 'Recent graduates, students, and entry-level professionals'}
                    {currentTemplate.category === 'Freelance' && 'Freelancers, contractors, and independent professionals'}
                    {currentTemplate.category === 'Remote' && 'Remote workers, digital nomads, and location-independent professionals'}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onSelect(currentTemplate)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors flex-1 flex items-center justify-center gap-2"
                  >
                    <span>Use This Template</span>
                    <ArrowRight className="w-5 h-5" />
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
