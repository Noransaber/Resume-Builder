import { createTemplateConfig } from '../utils'
import { TemplateConfig } from '../types'

export const minimalistTemplateConfig: TemplateConfig = createTemplateConfig(
  {
    id: 'minimalist',
    name: 'Minimalist Clean',
    category: 'minimalist',
    description: 'Simple, clean design that focuses on content and readability. Perfect for those who prefer elegance through simplicity.',
    
    // Minimalist color scheme - pure black and white
    colors: {
      primary: '#000000', // Pure Black
      secondary: '#374151', // Dark Gray
      accent: '#F3F4F6', // Very Light Gray
      text: {
        primary: '#000000',
        secondary: '#374151',
        muted: '#6B7280'
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#FEFEFE',
        accent: '#F9FAFB'
      },
      border: '#E5E7EB',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626'
    },
    
    // Minimalist typography
    typography: {
      fonts: {
        heading: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        body: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
      },
      sizes: {
        h1: '1.875rem', // 30px - Smaller for minimalism
        h2: '1.5rem', // 24px
        h3: '1.25rem', // 20px
        h4: '1.125rem', // 18px
        body: '1rem',
        small: '0.875rem',
        xs: '0.75rem'
      },
      weights: {
        light: 300,
        normal: 400,
        medium: 400, // Keep weights minimal
        semibold: 500,
        bold: 600
      },
      lineHeights: {
        tight: 1.4,
        normal: 1.6,
        relaxed: 1.8
      }
    },
    
    // Minimalist layout with maximum white space
    layout: {
      maxWidth: '210mm',
      padding: {
        page: '3rem',
        section: '2.5rem',
        element: '1rem'
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem'
      },
      borderRadius: {
        sm: '0',
        md: '0',
        lg: '0'
      },
      shadows: {
        sm: 'none',
        md: 'none',
        lg: 'none'
      }
    },
    
    // Minimal features
    features: {
      hasPhoto: false,
      hasSidebar: false,
      hasColorAccents: false,
      hasIcons: false,
      hasProgressBars: false,
      hasTimeline: false,
      hasBorders: true, // Simple lines only
      hasBackgroundPatterns: false
    },
    
    // Minimal section configurations
    sections: {
      header: {
        layout: 'left',
        showPhoto: false,
        contactStyle: 'inline'
      },
      experience: {
        layout: 'list',
        showCompanyLogo: false,
        showDuration: true
      },
      education: {
        layout: 'detailed',
        showGPA: true,
        showLocation: true
      },
      skills: {
        layout: 'list', // Simple comma-separated list
        showProficiency: false,
        groupByType: true
      },
      projects: {
        layout: 'list',
        showTechnologies: true,
        showLinks: true
      }
    }
  },
  'minimalist' // Use minimalist design system preset
)

