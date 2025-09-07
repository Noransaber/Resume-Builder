import { createTemplateConfig } from '../utils'
import { TemplateConfig } from '../types'

export const techTemplateConfig: TemplateConfig = createTemplateConfig(
  {
    id: 'tech',
    name: 'Tech Innovator',
    category: 'technology',
    description: 'Modern, tech-focused design perfect for developers, engineers, and IT professionals. Features terminal styling and code-inspired elements.',
    
    // Tech-specific dark theme colors
    colors: {
      primary: '#00FF88', // Tech Green
      secondary: '#0EA5E9', // Tech Blue
      accent: '#8B5CF6', // Purple
      text: {
        primary: '#F1F5F9', // Light for dark theme
        secondary: '#CBD5E1',
        muted: '#94A3B8'
      },
      background: {
        primary: '#0F172A', // Dark Navy
        secondary: '#1E293B', // Lighter Dark
        accent: '#334155' // Medium Dark
      },
      border: '#475569',
      success: '#22C55E',
      warning: '#EAB308',
      error: '#EF4444'
    },
    
    // Tech typography with monospace
    typography: {
      fonts: {
        heading: 'JetBrains Mono, Fira Code, Consolas, monospace',
        body: 'Inter, system-ui, -apple-system, sans-serif',
        mono: 'JetBrains Mono, Fira Code, Consolas, monospace'
      },
      sizes: {
        h1: '2rem', // 32px
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
        medium: 500,
        semibold: 600,
        bold: 700
      },
      lineHeights: {
        tight: 1.3,
        normal: 1.5,
        relaxed: 1.7
      }
    },
    
    // Tech layout
    layout: {
      maxWidth: '210mm',
      padding: {
        page: '1.5rem',
        section: '1.25rem',
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
        md: '0.5rem',
        lg: '0.75rem'
      },
      shadows: {
        sm: '0 0 0 1px rgba(0, 255, 136, 0.1)',
        md: '0 0 0 1px rgba(0, 255, 136, 0.2), 0 4px 8px rgba(0, 0, 0, 0.3)',
        lg: '0 0 0 1px rgba(0, 255, 136, 0.3), 0 8px 16px rgba(0, 0, 0, 0.4)'
      }
    },
    
    // Tech features
    features: {
      hasPhoto: false,
      hasSidebar: true, // Two-column layout
      hasColorAccents: true,
      hasIcons: true,
      hasProgressBars: true, // Language proficiency
      hasTimeline: true, // Git-like timeline
      hasBorders: true,
      hasBackgroundPatterns: false
    },
    
    // Tech section configurations
    sections: {
      header: {
        layout: 'left',
        showPhoto: false,
        contactStyle: 'stacked'
      },
      experience: {
        layout: 'timeline', // Git commit style
        showCompanyLogo: false,
        showDuration: true
      },
      education: {
        layout: 'compact',
        showGPA: true,
        showLocation: true
      },
      skills: {
        layout: 'categories', // JSON format
        showProficiency: false,
        groupByType: true
      },
      projects: {
        layout: 'grid', // Repository cards
        showTechnologies: true,
        showLinks: true
      }
    }
  },
  'technology' // Use technology design system preset
)

