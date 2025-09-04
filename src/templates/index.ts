// Central Template Registry
// This file acts as a manifest, exporting all templates and their metadata

import ModernTemplate from './Modern'
import ClassicTemplate from './Classic'
import CreativeTemplate from './Creative'
import MinimalTemplate from './Minimal'
import TechTemplate from './Tech'
import ExecutiveTemplate from './Executive'
import CorporateExecutive from './CorporateExecutive'
import DesignerShowcase from './DesignerShowcase'
import StartupFounder from './StartupFounder'
import AcademicScholar from './AcademicScholar'
import HealthcareProfessional from './HealthcareProfessional'
import SalesProfessional from './SalesProfessional'
import StudentFresh from './StudentFresh'
import Freelancer from './Freelancer'
import DigitalNomad from './DigitalNomad'

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

// Template registry with all available templates
export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    category: 'Professional',
    component: ModernTemplate,
    thumbnail: '/images/thumbnails/modern-template-thumbnail.svg',
    description: 'Clean and contemporary design perfect for modern professionals',
    features: ['Clean layout', 'Modern typography', 'Professional styling', 'ATS optimized'],
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
    description: 'Traditional, professional design with serif typography and conservative styling',
    features: ['Traditional layout', 'Serif typography', 'Conservative styling', 'Professional appeal'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'creative',
    name: 'Creative Modern',
    category: 'Creative',
    component: CreativeTemplate,
    thumbnail: '/images/thumbnails/creative-template-thumbnail.svg',
    description: 'Bold and innovative design for creative professionals and artists',
    features: ['Creative layout', 'Bold colors', 'Unique design', 'Visual impact'],
    atsOptimized: false,
    popular: true,
    featured: true
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    category: 'Professional',
    component: MinimalTemplate,
    thumbnail: '/images/thumbnails/minimal-template-thumbnail.svg',
    description: 'Minimalist design focusing on content with clean typography',
    features: ['Minimal design', 'Clean typography', 'Content focused', 'ATS friendly'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'tech',
    name: 'Tech Professional',
    category: 'Technology',
    component: TechTemplate,
    thumbnail: '/images/thumbnails/tech-template-thumbnail.svg',
    description: 'Modern template designed specifically for tech professionals and developers',
    features: ['Tech focused', 'Modern design', 'Skills showcase', 'Developer friendly'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'executive',
    name: 'Executive Leadership',
    category: 'Executive',
    component: ExecutiveTemplate,
    thumbnail: '/images/thumbnails/executive-template-thumbnail.svg',
    description: 'Premium template for executives and senior leadership positions',
    features: ['Executive presence', 'Premium design', 'Leadership focus', 'Professional authority'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'corporate-executive',
    name: 'Corporate Executive',
    category: 'Executive',
    component: CorporateExecutive,
    thumbnail: '/images/thumbnails/corporate-executive-thumbnail.svg',
    description: 'Sophisticated template for senior corporate leaders with authority and prestige',
    features: ['Executive presence', 'Corporate styling', 'Leadership focus', 'Premium design'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'designer-showcase',
    name: 'Designer Showcase',
    category: 'Creative',
    component: DesignerShowcase,
    thumbnail: '/images/thumbnails/designer-showcase-thumbnail.svg',
    description: 'Vibrant and creative template perfect for designers, artists, and creative professionals',
    features: ['Creative layout', 'Portfolio showcase', 'Visual elements', 'Bold typography'],
    atsOptimized: false,
    popular: true,
    featured: true
  },
  {
    id: 'startup-founder',
    name: 'Startup Founder',
    category: 'Entrepreneur',
    component: StartupFounder,
    thumbnail: '/images/thumbnails/startup-founder-thumbnail.svg',
    description: 'Dynamic template for entrepreneurs and startup founders showcasing vision and achievements',
    features: ['Entrepreneur focus', 'Growth metrics', 'Innovation showcase', 'Modern design'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'academic-scholar',
    name: 'Academic Scholar',
    category: 'Academic',
    component: AcademicScholar,
    thumbnail: '/images/thumbnails/academic-scholar-thumbnail.svg',
    description: 'Professional template for researchers, professors, and academic professionals',
    features: ['Academic credentials', 'Research focus', 'Publications showcase', 'Scholarly design'],
    atsOptimized: true,
    popular: false,
    featured: true
  },
  {
    id: 'healthcare-professional',
    name: 'Healthcare Professional',
    category: 'Healthcare',
    component: HealthcareProfessional,
    thumbnail: '/images/thumbnails/healthcare-professional-thumbnail.svg',
    description: 'Compassionate and professional template for doctors, nurses, and healthcare workers',
    features: ['Healthcare focus', 'Patient care emphasis', 'Medical credentials', 'Trust-building design'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'sales-professional',
    name: 'Sales Professional',
    category: 'Sales',
    component: SalesProfessional,
    thumbnail: '/images/thumbnails/sales-professional-thumbnail.svg',
    description: 'Results-driven template for sales professionals showcasing achievements and metrics',
    features: ['Sales metrics', 'Achievement focus', 'Revenue showcase', 'Professional presentation'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'student-fresh',
    name: 'Student Fresh',
    category: 'Student',
    component: StudentFresh,
    thumbnail: '/images/thumbnails/student-fresh-thumbnail.svg',
    description: 'Fresh and energetic template for recent graduates and students entering the workforce',
    features: ['Fresh perspective', 'Academic achievements', 'Project showcase', 'Modern appeal'],
    atsOptimized: true,
    popular: false,
    featured: false
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    category: 'Freelance',
    component: Freelancer,
    thumbnail: '/images/thumbnails/freelancer-thumbnail.svg',
    description: 'Versatile template for independent contractors and freelancers showcasing expertise',
    features: ['Portfolio focus', 'Service offerings', 'Client testimonials', 'Professional flexibility'],
    atsOptimized: true,
    popular: true,
    featured: true
  },
  {
    id: 'digital-nomad',
    name: 'Digital Nomad',
    category: 'Remote',
    component: DigitalNomad,
    thumbnail: '/images/thumbnails/digital-nomad-thumbnail.svg',
    description: 'Modern template for remote workers and digital nomads with global experience',
    features: ['Remote work focus', 'Global experience', 'Cultural adaptability', 'Modern lifestyle'],
    atsOptimized: true,
    popular: false,
    featured: false
  },
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    category: 'Professional',
    component: ModernTemplate,
    thumbnail: '/images/thumbnails/modern-professional-thumbnail.svg',
    description: 'Clean and modern design perfect for corporate roles and tech professionals',
    features: ['Clean layout', 'Professional styling', 'ATS-friendly', 'Modern typography'],
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
  { id: 'executive', name: 'Executive', count: templates.filter(t => t.category === 'Executive').length },
  { id: 'technology', name: 'Technology', count: templates.filter(t => t.category === 'Technology').length },
  { id: 'entrepreneur', name: 'Entrepreneur', count: templates.filter(t => t.category === 'Entrepreneur').length },
  { id: 'academic', name: 'Academic', count: templates.filter(t => t.category === 'Academic').length },
  { id: 'healthcare', name: 'Healthcare', count: templates.filter(t => t.category === 'Healthcare').length },
  { id: 'sales', name: 'Sales', count: templates.filter(t => t.category === 'Sales').length },
  { id: 'student', name: 'Student', count: templates.filter(t => t.category === 'Student').length },
  { id: 'freelance', name: 'Freelance', count: templates.filter(t => t.category === 'Freelance').length },
  { id: 'remote', name: 'Remote', count: templates.filter(t => t.category === 'Remote').length }
]

export default templates
