import { createTemplateConfig } from '../utils'
import { TemplateConfig } from '../types'

export const executiveTemplateConfig: TemplateConfig = createTemplateConfig(
  {
    id: 'executive',
    name: 'Executive Suite',
    category: 'executive',
    description: 'Premium, sophisticated design for C-level executives, senior management, and leadership roles. Emphasizes achievements and executive presence.',
    
    // Executive color scheme - dark navy with gold accents
    colors: {
      primary: '#1F2937', // Executive Dark Navy
      secondary: '#F59E0B', // Gold Accent
      accent: '#6B7280', // Sophisticated Gray
      text: {
        primary: '#111827',
        secondary: '#374151',
        muted: '#6B7280'
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#F9FAFB',
        accent: '#F3F4F6'
      },
      border: '#D1D5DB',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626'
    },
    
    // Executive typography with serif headings
    typography: {
      fonts: {
        heading: 'Playfair Display, Georgia, Times, serif',
        body: 'Inter, system-ui, -apple-system, sans-serif'
      },
      sizes: {
        h1: '2.25rem', // 36px - Larger for executive presence
        h2: '1.75rem', // 28px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
        body: '1.125rem', // 18px - Slightly larger for readability
        small: '1rem', // 16px
        xs: '0.875rem' // 14px
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
        normal: 1.6,
        relaxed: 1.8
      }
    },
    
    // Executive layout with generous spacing
    layout: {
      maxWidth: '210mm',
      padding: {
        page: '2.5rem',
        section: '2rem',
        element: '1rem'
      },
      spacing: {
        xs: '0.375rem',
        sm: '0.75rem',
        md: '1.25rem',
        lg: '2rem',
        xl: '2.5rem'
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem'
      },
      shadows: {
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        md: '0 4px 8px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 12px 20px -4px rgba(0, 0, 0, 0.15)'
      }
    },
    
    // Executive features
    features: {
      hasPhoto: false,
      hasSidebar: true, // Two-column for skills/education
      hasColorAccents: true,
      hasIcons: true,
      hasProgressBars: false, // Use dots for language proficiency
      hasTimeline: false, // Use numbered cards instead
      hasBorders: true,
      hasBackgroundPatterns: true // Gold accent patterns
    },
    
    // Executive section configurations
    sections: {
      header: {
        layout: 'centered',
        showPhoto: false,
        contactStyle: 'stacked'
      },
      experience: {
        layout: 'cards', // Numbered executive cards
        showCompanyLogo: false,
        showDuration: true
      },
      education: {
        layout: 'detailed',
        showGPA: true,
        showLocation: true
      },
      skills: {
        layout: 'categories', // Core competencies
        showProficiency: false,
        groupByType: true
      },
      projects: {
        layout: 'cards', // Key achievements
        showTechnologies: true,
        showLinks: true
      }
    }
  },
  'executive' // Use executive design system preset
)

