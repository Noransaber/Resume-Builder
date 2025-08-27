"use client"
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Download, Eye, ChevronRight } from 'lucide-react'
import { templates, categories } from '../../templates'
import { PageWrapper } from '@/components/ui/PageLoader'

// Convert template data to match the expected format
const resumeTemplates = templates.map(template => ({
  id: template.id,
  name: template.name,
  category: template.category,
  previewImage: template.thumbnail,
  rating: 4.8, // Default rating
  downloads: template.popular ? '2.5k' : '1.2k', // Mock download counts
  description: template.description,
  popular: template.popular,
  style: template.id,
  featured: template.featured,
  atsOptimized: template.atsOptimized,
  features: template.features
}))

// Helper functions for template preview styles
const getTemplatePreviewStyles = (style: string) => {
  switch (style) {
    case 'modern-professional':
      return 'border-l-4 border-primary bg-white'
    case 'executive-suite':
      return 'border-l-4 border-primary bg-gradient-to-br from-gray-50 to-white'
    case 'creative-portfolio':
      return 'border-l-4 border-primary bg-gradient-to-br from-blue-50 to-indigo-100'
    case 'minimalist-clean':
      return 'border border-gray-300 border-l-2 border-l-gray-600 bg-white'
    case 'tech-innovator':
      return 'border-l-4 border-primary bg-gradient-to-br from-gray-900 to-black text-white'
    case 'classic-elegant':
      return 'border-2 border-gray-400 border-l-2 border-l-gray-600 bg-white'
    default:
      return 'border-l-4 border-primary bg-white'
  }
}

const getTemplateSkills = (style: string): string[] => {
  switch (style) {
    case 'modern-professional':
      return ['React', 'TypeScript', 'Node.js']
    case 'executive-suite':
      return ['Leadership', 'Strategy', 'Management']
    case 'creative-portfolio':
      return ['Figma', 'Adobe CC', 'Prototyping']
    case 'minimalist-clean':
      return ['Python', 'Django', 'AWS']
    case 'tech-innovator':
      return ['JavaScript', 'React', 'Python']
    case 'classic-elegant':
      return ['Marketing', 'Analytics', 'Strategy']
    default:
      return ['React', 'TypeScript', 'Node.js']
  }
}

export default function ResumeTemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  // Filter templates based on active category
  const filteredTemplates = useMemo(() => {
    if (activeCategory === 'all') {
      return resumeTemplates
    }
    return resumeTemplates.filter(template => 
      template.category.toLowerCase() === activeCategory
    )
  }, [activeCategory])

  return (
    <PageWrapper isLoading={false} loadingType="general">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section - Matching resume.io style */}
      <section className="pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Professional Resume Templates
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose from our collection of professionally designed templates that have helped thousands land their dream jobs. 
              Each template is optimized for ATS systems and designed to make you stand out.
            </p>
            
            {/* CTA Button - Above the grid like resume.io */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/resume/builder/modern"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Create my resume
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs - Horizontal scrollable like resume.io */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex overflow-x-auto scrollbar-hide gap-2 pb-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-pink-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Popular Badge */}
                {template.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-primary to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {template.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Template Thumbnail - CSS Generated CV Template Preview */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white dark:bg-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full p-4"
                  >
                    <div className={`w-full h-full rounded-lg shadow-sm ${getTemplatePreviewStyles(template.style)}`}>
                      <div className="p-3">
                        <div className="border-b-2 border-primary pb-2 mb-3">
                          <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {template.name.split(' ')[0]}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {template.name.split(' ')[1]}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                            Experience
                          </div>
                          <div className="text-xs text-gray-700 dark:text-gray-300">
                            {template.category} • 2020 - Present
                          </div>
                          <div className="text-xs font-semibold text-primary uppercase tracking-wide mt-3">
                            Skills
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {getTemplateSkills(template.style).map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Hover Overlay with "Use this template" button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Link
                        href={`/resume/builder/${template.id}`}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Use this template
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {template.rating}
                    </span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {template.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {template.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {template.downloads} downloads
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                        title="Preview template"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                        title="Download template"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-pink-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to create your professional resume?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose any template above to start building your resume with our intuitive builder
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/resume/builder/modern"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </PageWrapper>
  )
}

