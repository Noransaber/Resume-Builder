import { createTemplateConfig } from '../utils'
import { TemplateConfig } from '../types'

export const creativeTemplateConfig: TemplateConfig = createTemplateConfig(
  {
    id: 'creative',
    name: 'Creative Portfolio',
    category: 'creative',
    description: 'Bold and artistic design perfect for creative professionals, designers, and artists seeking to showcase their unique style.',
    
    // Creative-specific color overrides
    colors: {
      primary: '#8B5CF6', // Purple
      secondary: '#EC4899', // Pink
      accent: '#06B6D4', // Cyan
      text: {
        primary: '#1F2937',
        secondary: '#374151',
        muted: '#6B7280'
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        accent: '#F1F5F9'
      },
      border: '#E2E8F0',
      success: '#22C55E',
      warning: '#F97316',
      error: '#F43F5E'
    },
    
    // Creative typography
    typography: {
      fonts: {
        heading: 'Poppins, system-ui, -apple-system, sans-serif',
        body: 'Inter, system-ui, -apple-system, sans-serif'
      },
      sizes: {
        h1: '2.5rem', // 40px - Larger for creative impact
        h2: '1.875rem', // 30px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
        body: '1rem',
        small: '0.875rem',
        xs: '0.75rem'
      },
      weights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      lineHeights: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75
      }
    },
    
    // Creative layout with more spacing
    layout: {
      maxWidth: '210mm',
      padding: {
        page: '2.5rem',
        section: '2rem',
        element: '1rem'
      },
      spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1.25rem',
        lg: '2rem',
        xl: '2.5rem'
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem'
      },
      shadows: {
        sm: '0 2px 4px 0 rgba(139, 92, 246, 0.1)',
        md: '0 8px 16px -4px rgba(139, 92, 246, 0.2)',
        lg: '0 20px 25px -5px rgba(139, 92, 246, 0.25)'
      }
    },
    
    // Creative features
    features: {
      hasPhoto: false,
      hasSidebar: true, // Two-column layout
      hasColorAccents: true,
      hasIcons: true,
      hasProgressBars: true, // Language proficiency bars
      hasTimeline: true, // Creative timeline
      hasBorders: true,
      hasBackgroundPatterns: true // Geometric shapes
    },
    
    // Creative section configurations
    sections: {
      header: {
        layout: 'centered',
        showPhoto: false,
        contactStyle: 'stacked'
      },
      experience: {
        layout: 'timeline',
        showCompanyLogo: false,
        showDuration: true
      },
      education: {
        layout: 'compact',
        showGPA: true,
        showLocation: true
      },
      skills: {
        layout: 'categories', // Skill cloud/bubbles
        showProficiency: false,
        groupByType: true
      },
      projects: {
        layout: 'grid', // Portfolio grid
        showTechnologies: true,
        showLinks: true
      }
    }
  },
  'creative' // Use creative design system preset
)

