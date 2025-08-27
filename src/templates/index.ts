// Central Template Registry
// This file acts as a manifest, exporting all templates and their metadata

import ModernTemplate from './Modern'
import ClassicTemplate from './Classic'
import CreativeTemplate from './Creative'
import MinimalTemplate from './Minimal'
import TechTemplate from './Tech'
import ExecutiveTemplate from './Executive'

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
  skills: string[]
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string
    link: string
  }>
  certifications: string[]
  languages: string[]
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

// Template registry with all available templates
export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    category: 'Professional',
    component: ModernTemplate,
    thumbnail: '/images/thumbnails/modern-template-thumbnail.svg',
    description: 'Clean and modern design perfect for corporate roles and tech professionals',
    features: ['Clean layout', 'Professional styling', 'ATS-friendly', 'Modern typography'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'classic',
    name: 'Classic Elegant',
    category: 'Professional',
    component: ClassicTemplate,
    thumbnail: '/images/thumbnails/classic-template-thumbnail.svg',
    description: 'Timeless design that never goes out of style, perfect for traditional industries',
    features: ['Traditional layout', 'Elegant typography', 'Conservative styling', 'Widely accepted'],
    atsOptimized: true,
    popular: false,
    featured: false
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    category: 'Creative',
    component: CreativeTemplate,
    thumbnail: '/images/thumbnails/creative-template-thumbnail.svg',
    description: 'Stand out with this creative and unique template for designers and creative professionals',
    features: ['Creative layout', 'Visual elements', 'Portfolio showcase', 'Bold design'],
    atsOptimized: false,
    popular: true,
    featured: true
  },
  {
    id: 'minimal',
    name: 'Minimalist Clean',
    category: 'Modern',
    component: MinimalTemplate,
    thumbnail: '/images/thumbnails/minimal-template-thumbnail.svg',
    description: 'Simple and elegant design focusing on content over decoration',
    features: ['Minimalist design', 'Clean typography', 'Distraction-free', 'Professional'],
    atsOptimized: true,
    popular: false,
    featured: false
  },
  {
    id: 'tech',
    name: 'Tech Innovator',
    category: 'Technology',
    component: TechTemplate,
    thumbnail: '/images/thumbnails/tech-template-thumbnail.svg',
    description: 'Perfect for tech professionals, developers, and engineers with a modern tech aesthetic',
    features: ['Tech-focused design', 'Code-friendly layout', 'Modern styling', 'Skills showcase'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    category: 'Executive',
    component: ExecutiveTemplate,
    thumbnail: '/images/thumbnails/executive-template-thumbnail.svg',
    description: 'Premium template designed for C-level executives and senior leadership roles',
    features: ['Executive styling', 'Leadership focus', 'Premium design', 'Authority presence'],
    atsOptimized: true,
    popular: true,
    featured: true
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

// Helper function to get featured templates
export const getFeaturedTemplates = (): Template[] => {
  return templates.filter(template => template.featured)
}

// Helper function to get popular templates
export const getPopularTemplates = (): Template[] => {
  return templates.filter(template => template.popular)
}

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Templates', count: templates.length },
  { id: 'professional', name: 'Professional', count: templates.filter(t => t.category === 'Professional').length },
  { id: 'creative', name: 'Creative', count: templates.filter(t => t.category === 'Creative').length },
  { id: 'modern', name: 'Modern', count: templates.filter(t => t.category === 'Modern').length },
  { id: 'technology', name: 'Technology', count: templates.filter(t => t.category === 'Technology').length },
  { id: 'executive', name: 'Executive', count: templates.filter(t => t.category === 'Executive').length }
]

export default templates
