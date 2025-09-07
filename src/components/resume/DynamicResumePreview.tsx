"use client"
import { motion } from 'framer-motion'
import { Template, TemplateData } from '@/templates'

interface DynamicResumePreviewProps {
  data: TemplateData
  template: Template
}

export function DynamicResumePreview({ data, template }: DynamicResumePreviewProps) {
  if (!template) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Template not found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Please select a valid template
          </p>
        </div>
      </div>
    )
  }

  // Dynamically render the selected template component with configuration
  const TemplateComponent = template.component

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <TemplateComponent userData={data} config={template.config} />
    </motion.div>
  )
}
