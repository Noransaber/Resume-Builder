import React from 'react'

// Core data interfaces (same as before but centralized)
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

// Template Configuration Schema
export interface TemplateConfig {
  id: string
  name: string
  category: string
  description: string
  
  // Design System
  colors: {
    primary: string
    secondary: string
    accent: string
    text: {
      primary: string
      secondary: string
      muted: string
    }
    background: {
      primary: string
      secondary: string
      accent: string
    }
    border: string
    success: string
    warning: string
    error: string
  }
  
  typography: {
    fonts: {
      heading: string
      body: string
      mono?: string
    }
    sizes: {
      h1: string
      h2: string
      h3: string
      h4: string
      body: string
      small: string
      xs: string
    }
    weights: {
      light: number
      normal: number
      medium: number
      semibold: number
      bold: number
    }
    lineHeights: {
      tight: number
      normal: number
      relaxed: number
    }
  }
  
  layout: {
    maxWidth: string
    padding: {
      page: string
      section: string
      element: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    borderRadius: {
      sm: string
      md: string
      lg: string
    }
    shadows: {
      sm: string
      md: string
      lg: string
    }
  }
  
  features: {
    hasPhoto: boolean
    hasSidebar: boolean
    hasColorAccents: boolean
    hasIcons: boolean
    hasProgressBars: boolean
    hasTimeline: boolean
    hasBorders: boolean
    hasBackgroundPatterns: boolean
  }
  
  sections: {
    header: {
      layout: 'centered' | 'left' | 'right' | 'split'
      showPhoto: boolean
      contactStyle: 'inline' | 'stacked' | 'sidebar'
    }
    experience: {
      layout: 'timeline' | 'cards' | 'list' | 'detailed'
      showCompanyLogo: boolean
      showDuration: boolean
    }
    education: {
      layout: 'detailed' | 'compact' | 'timeline'
      showGPA: boolean
      showLocation: boolean
    }
    skills: {
      layout: 'tags' | 'bars' | 'categories' | 'grid'
      showProficiency: boolean
      groupByType: boolean
    }
    projects: {
      layout: 'cards' | 'list' | 'grid'
      showTechnologies: boolean
      showLinks: boolean
    }
  }
}

// Template Registry Interface
export interface Template {
  id: string
  name: string
  category: string
  component: React.ComponentType<TemplateProps>
  config: TemplateConfig
  thumbnail: string
  description: string // Add description for backwards compatibility
  features: string[]
  atsOptimized: boolean
  popular: boolean
  featured: boolean
  premium?: boolean
}

// Template Categories
export interface TemplateCategory {
  id: string
  name: string
  description: string
  icon: string
  count: number
  templates: Template[]
}

// Template Component Props with Config
export interface TemplateComponentProps extends TemplateProps {
  config: TemplateConfig
}
