import { TemplateCategory, TemplateConfig } from './types'

// Template Categories Definition
export const templateCategories: TemplateCategory[] = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean, corporate designs perfect for business and traditional industries',
    icon: 'briefcase',
    count: 0, // Will be calculated dynamically
    templates: []
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold, artistic designs for creative professionals and designers',
    icon: 'palette',
    count: 0,
    templates: []
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple, clean designs that let your content shine',
    icon: 'minus-circle',
    count: 0,
    templates: []
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Modern, tech-focused designs for developers and IT professionals',
    icon: 'code',
    count: 0,
    templates: []
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Premium, sophisticated designs for senior leadership roles',
    icon: 'crown',
    count: 0,
    templates: []
  }
]

// Design System Presets for Each Category
export const designSystemPresets = {
  // Professional Templates Design System
  professional: {
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
    typography: {
      fonts: {
        heading: 'Inter, system-ui, sans-serif',
        body: 'Inter, system-ui, sans-serif'
      },
      sizes: {
        h1: '2rem', // 32px
        h2: '1.5rem', // 24px
        h3: '1.25rem', // 20px
        h4: '1.125rem', // 18px
        body: '1rem', // 16px
        small: '0.875rem', // 14px
        xs: '0.75rem' // 12px
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
    }
  },

  // Creative Templates Design System
  creative: {
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
    typography: {
      fonts: {
        heading: 'Poppins, system-ui, sans-serif',
        body: 'Inter, system-ui, sans-serif'
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
    }
  },

  // Minimalist Templates Design System
  minimalist: {
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
    typography: {
      fonts: {
        heading: 'system-ui, -apple-system, sans-serif',
        body: 'system-ui, -apple-system, sans-serif'
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
    }
  },

  // Technology Templates Design System
  technology: {
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
    typography: {
      fonts: {
        heading: 'JetBrains Mono, Fira Code, monospace',
        body: 'Inter, system-ui, sans-serif',
        mono: 'JetBrains Mono, Fira Code, monospace'
      },
      sizes: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.25rem',
        h4: '1.125rem',
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
    }
  },

  // Executive Templates Design System
  executive: {
    colors: {
      primary: '#1F2937', // Executive Dark
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
    typography: {
      fonts: {
        heading: 'Playfair Display, Georgia, serif',
        body: 'Inter, system-ui, sans-serif'
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
    }
  }
}

// Layout Presets
export const layoutPresets = {
  professional: {
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
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }
  },
  
  creative: {
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

  minimalist: {
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

  technology: {
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

  executive: {
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
  }
}

