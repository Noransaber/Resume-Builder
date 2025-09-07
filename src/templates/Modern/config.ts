import { createTemplateConfig } from '../utils'
import { TemplateConfig } from '../types'

export const modernTemplateConfig: TemplateConfig = createTemplateConfig(
  {
    id: 'modern',
    name: 'Modern Professional',
    category: 'professional',
    description: 'Clean and contemporary design perfect for modern professionals seeking a polished, corporate look.',
    
    // Override specific colors for Modern template
    colors: {
      primary: '#3B82F6', // Professional Blue
      secondary: '#1E40AF', // Darker Blue
      accent: '#EBF4FF', // Light Blue
      text: {
        primary: '#1F2937', // Dark Gray
        secondary: '#4B5563', // Medium Gray
        muted: '#6B7280' // Light Gray
      },
      background: {
        primary: '#FFFFFF', // White
        secondary: '#F9FAFB', // Very Light Gray
        accent: '#F3F4F6' // Light Gray
      },
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    },
    
    // Typography specific to Modern template
    typography: {
      fonts: {
        heading: 'Inter, system-ui, -apple-system, sans-serif',
        body: 'Inter, system-ui, -apple-system, sans-serif'
      },
      sizes: {
        h1: '2.25rem', // 36px - Prominent name
        h2: '1.5rem',   // 24px - Section titles
        h3: '1.25rem',  // 20px - Job titles
        h4: '1.125rem', // 18px - Subsections
        body: '1rem',   // 16px - Body text
        small: '0.875rem', // 14px - Meta info
        xs: '0.75rem'   // 12px - Fine print
      },
      weights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      lineHeights: {
        tight: 1.25,
        normal: 1.5,
        relaxed: 1.75
      }
    },
    
    // Layout specific to Modern template
    layout: {
      maxWidth: '210mm', // A4 width
      padding: {
        page: '2rem',
        section: '1.5rem',
        element: '0.75rem'
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem'
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem'
      },
      shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    },
    
    // Features enabled for Modern template
    features: {
      hasPhoto: false,
      hasSidebar: false,
      hasColorAccents: true,
      hasIcons: true,
      hasProgressBars: false,
      hasTimeline: true, // Experience timeline
      hasBorders: true,
      hasBackgroundPatterns: false
    },
    
    // Section configurations
    sections: {
      header: {
        layout: 'centered',
        showPhoto: false,
        contactStyle: 'inline'
      },
      experience: {
        layout: 'timeline',
        showCompanyLogo: false,
        showDuration: true
      },
      education: {
        layout: 'detailed',
        showGPA: true,
        showLocation: true
      },
      skills: {
        layout: 'tags',
        showProficiency: false,
        groupByType: true
      },
      projects: {
        layout: 'cards',
        showTechnologies: true,
        showLinks: true
      }
    }
  },
  'professional' // Use professional design system preset
)

