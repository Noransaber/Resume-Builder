"use client"
import React from 'react'
import { 
  initializeTemplateSystem, 
  getAllTemplates, 
  getTemplatesByCategory as getTemplatesByCat, 
  templateCategories,
  getTemplate,
  TemplateData as NewTemplateData,
  TemplateProps as NewTemplateProps,
  Template as NewTemplate
} from './templates/index'

// Initialize the template system
try {
  initializeTemplateSystem()
} catch (error) {
  console.warn('Template system initialization warning:', error)
}

// Re-export types for backwards compatibility
export type { NewTemplateData, NewTemplateProps, NewTemplate }

// Legacy interface for backwards compatibility
export interface TemplateData {
  personal: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    summary: string
  }
  experience: Array<{
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
  }>
  education: Array<{
    id: string
    institution: string
    degree: string
    field: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    gpa: string
  }>
  softSkills: string[]
  technicalSkills: string[]
  languages: Array<{
    id: string
    name: string
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Fluent' | 'Native'
  }>
  customSections: Array<{
    id: string
    title: string
    content: string
    type: 'text' | 'list'
    items?: string[]
  }>
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string
    link: string
  }>
  certifications: string[]
}

export interface TemplateProps {
  userData: TemplateData
}

export interface Template {
  id: string
  name: string
  category: string
  component: React.ComponentType<TemplateProps>
  thumbnail: string
  description: string
  features: string[]
  atsOptimized: boolean
  popular: boolean
  featured: boolean
}

// Enhanced Mock Template with better styling and more data display
const MockTemplate: React.FC<TemplateProps> = ({ userData }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      {/* Header */}
      <div className="mb-8 text-center border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {userData.personal.firstName} {userData.personal.lastName}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
          {userData.personal.email && <span>{userData.personal.email}</span>}
          {userData.personal.phone && <span>•</span>}
          {userData.personal.phone && <span>{userData.personal.phone}</span>}
          {userData.personal.location && <span>•</span>}
          {userData.personal.location && <span>{userData.personal.location}</span>}
        </div>
        {(userData.personal.website || userData.personal.linkedin) && (
          <div className="mt-2 flex flex-wrap gap-4">
            {userData.personal.website && (
              <span className="text-blue-600 dark:text-blue-400">{userData.personal.website}</span>
            )}
            {userData.personal.linkedin && (
              <span className="text-blue-600 dark:text-blue-400">{userData.personal.linkedin}</span>
            )}
          </div>
        )}
      </div>

      {/* Summary */}
      {userData.personal.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{userData.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {userData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="space-y-6">
            {userData.experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate} • {exp.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {userData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="space-y-4">
            {userData.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}{edu.field && ` in ${edu.field}`}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  {edu.location && ` • ${edu.location}`}
                </p>
                {edu.gpa && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          {userData.technicalSkills.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {userData.technicalSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {userData.softSkills.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {userData.softSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Languages */}
      {userData.languages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Languages</h2>
          <div className="grid grid-cols-2 gap-4">
            {userData.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="text-gray-900 dark:text-white">{lang.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {userData.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="space-y-4">
            {userData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Technologies: {project.technologies}</p>
                {project.link && (
                  <p className="text-sm text-blue-600 dark:text-blue-400">{project.link}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Get templates from the new registry system (templates are now auto-registered)
const allTemplates = getAllTemplates()
console.log('DEBUG: Templates loaded:', allTemplates.length, allTemplates.map(t => t.id))
export const templates = allTemplates

// Helper function to get template by ID - use the new system
export const getTemplateById = (id: string): Template | undefined => {
  try {
    return getTemplate(id)
  } catch (error) {
    console.warn('Error getting template by ID:', id, error)
    return undefined
  }
}

// Helper function to get templates by category  
export const getTemplatesByCategory = (category: string): Template[] => {
  if (category === 'all') return templates
  return templates.filter((template: any) => template.category.toLowerCase() === category.toLowerCase())
}

// Get categories from the new registry system
export const categories = [
  { id: 'all', name: 'All Templates', count: getAllTemplates().length },
  ...templateCategories.map((cat: any) => ({
    id: cat.id,
    name: cat.name,
    count: getTemplatesByCat(cat.id).length
  }))
]

export default templates


