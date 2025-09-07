"use client"
import React from 'react'

// Template interface for type safety
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

// Template registry with mock templates
export const templates: Template[] = [
  {
    id: '1',
    name: 'Modern Professional',
    category: 'Professional',
    component: MockTemplate,
    thumbnail: '/images/thumbnails/modern-template-thumbnail.svg',
    description: 'Clean and contemporary design perfect for modern professionals',
    features: ['Clean layout', 'Modern typography', 'Professional styling', 'ATS optimized'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: '2',
    name: 'Classic Elegant',
    category: 'Professional',
    component: MockTemplate,
    thumbnail: '/images/thumbnails/classic-template-thumbnail.svg',
    description: 'Traditional, professional design with serif typography and conservative styling',
    features: ['Traditional layout', 'Serif typography', 'Conservative styling', 'Professional appeal'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: '3',
    name: 'Creative Portfolio',
    category: 'Creative',
    component: MockTemplate,
    thumbnail: '/images/thumbnails/creative-template-thumbnail.svg',
    description: 'Bold and creative design perfect for designers and creative professionals',
    features: ['Creative layout', 'Bold typography', 'Visual elements', 'Portfolio focused'],
    atsOptimized: true,
    popular: false,
    featured: false
  },
  {
    id: '4',
    name: 'Minimalist Clean',
    category: 'Professional',
    component: MockTemplate,
    thumbnail: '/images/thumbnails/minimal-template-thumbnail.svg',
    description: 'Simple, clean design that focuses on content and readability',
    features: ['Minimal design', 'Clean typography', 'Content focused', 'ATS optimized'],
    atsOptimized: true,
    popular: true,
    featured: false
  },
  {
    id: '5',
    name: 'Tech Innovator',
    category: 'Technology',
    component: MockTemplate,
    thumbnail: '/images/thumbnails/tech-template-thumbnail.svg',
    description: 'Modern tech-focused design perfect for developers and IT professionals',
    features: ['Tech styling', 'Code-friendly layout', 'Modern design', 'Developer focused'],
    atsOptimized: true,
    popular: false,
    featured: true
  },
  {
    id: '6',
    name: 'Executive Suite',
    category: 'Executive',
    component: MockTemplate,
    thumbnail: '/images/thumbnails/executive-template-thumbnail.svg',
    description: 'Premium executive design for C-level professionals and senior management',
    features: ['Executive styling', 'Premium design', 'Leadership focused', 'Professional appeal'],
    atsOptimized: true,
    popular: false,
    featured: false
  }
]

// Helper function to get template by ID
export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id)
}

// Helper function to get templates by category
export const getTemplatesByCategory = (category: string): Template[] => {
  if (category === 'all') return templates
  return templates.filter(template => template.category.toLowerCase() === category.toLowerCase())
}

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Templates', count: templates.length },
  { id: 'professional', name: 'Professional', count: templates.filter(t => t.category === 'Professional').length },
  { id: 'creative', name: 'Creative', count: templates.filter(t => t.category === 'Creative').length },
  { id: 'technology', name: 'Technology', count: templates.filter(t => t.category === 'Technology').length },
  { id: 'executive', name: 'Executive', count: templates.filter(t => t.category === 'Executive').length }
]

export default templates


