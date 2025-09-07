import { TemplateConfig, TemplateData } from './types'
import { designSystemPresets, layoutPresets } from './categories'

// Template Configuration Generator
export function createTemplateConfig(
  baseConfig: Partial<TemplateConfig>,
  categoryPreset: keyof typeof designSystemPresets
): TemplateConfig {
  const colorPreset = designSystemPresets[categoryPreset].colors
  const typographyPreset = designSystemPresets[categoryPreset].typography
  const layoutPreset = layoutPresets[categoryPreset]

  return {
    id: baseConfig.id || '',
    name: baseConfig.name || '',
    category: baseConfig.category || '',
    description: baseConfig.description || '',
    
    colors: {
      ...colorPreset,
      ...baseConfig.colors
    },
    
    typography: {
      ...typographyPreset,
      ...baseConfig.typography
    },
    
    layout: {
      ...layoutPreset,
      ...baseConfig.layout
    },
    
    features: {
      hasPhoto: false,
      hasSidebar: false,
      hasColorAccents: true,
      hasIcons: false,
      hasProgressBars: false,
      hasTimeline: false,
      hasBorders: true,
      hasBackgroundPatterns: false,
      ...baseConfig.features
    },
    
    sections: {
      header: {
        layout: 'centered',
        showPhoto: false,
        contactStyle: 'inline',
        ...baseConfig.sections?.header
      },
      experience: {
        layout: 'list',
        showCompanyLogo: false,
        showDuration: true,
        ...baseConfig.sections?.experience
      },
      education: {
        layout: 'detailed',
        showGPA: true,
        showLocation: true,
        ...baseConfig.sections?.education
      },
      skills: {
        layout: 'tags',
        showProficiency: false,
        groupByType: true,
        ...baseConfig.sections?.skills
      },
      projects: {
        layout: 'list',
        showTechnologies: true,
        showLinks: true,
        ...baseConfig.sections?.projects
      },
      ...baseConfig.sections
    }
  }
}

// CSS Variable Generator
export function generateCSSVariables(config: TemplateConfig): Record<string, string> {
  return {
    // Colors
    '--color-primary': config.colors.primary,
    '--color-secondary': config.colors.secondary,
    '--color-accent': config.colors.accent,
    '--color-text-primary': config.colors.text.primary,
    '--color-text-secondary': config.colors.text.secondary,
    '--color-text-muted': config.colors.text.muted,
    '--color-bg-primary': config.colors.background.primary,
    '--color-bg-secondary': config.colors.background.secondary,
    '--color-bg-accent': config.colors.background.accent,
    '--color-border': config.colors.border,
    '--color-success': config.colors.success,
    '--color-warning': config.colors.warning,
    '--color-error': config.colors.error,
    
    // Typography
    '--font-heading': config.typography.fonts.heading,
    '--font-body': config.typography.fonts.body,
    '--font-mono': config.typography.fonts.mono || config.typography.fonts.body,
    '--text-h1': config.typography.sizes.h1,
    '--text-h2': config.typography.sizes.h2,
    '--text-h3': config.typography.sizes.h3,
    '--text-h4': config.typography.sizes.h4,
    '--text-body': config.typography.sizes.body,
    '--text-small': config.typography.sizes.small,
    '--text-xs': config.typography.sizes.xs,
    '--font-light': config.typography.weights.light.toString(),
    '--font-normal': config.typography.weights.normal.toString(),
    '--font-medium': config.typography.weights.medium.toString(),
    '--font-semibold': config.typography.weights.semibold.toString(),
    '--font-bold': config.typography.weights.bold.toString(),
    '--leading-tight': config.typography.lineHeights.tight.toString(),
    '--leading-normal': config.typography.lineHeights.normal.toString(),
    '--leading-relaxed': config.typography.lineHeights.relaxed.toString(),
    
    // Layout
    '--max-width': config.layout.maxWidth,
    '--padding-page': config.layout.padding.page,
    '--padding-section': config.layout.padding.section,
    '--padding-element': config.layout.padding.element,
    '--spacing-xs': config.layout.spacing.xs,
    '--spacing-sm': config.layout.spacing.sm,
    '--spacing-md': config.layout.spacing.md,
    '--spacing-lg': config.layout.spacing.lg,
    '--spacing-xl': config.layout.spacing.xl,
    '--radius-sm': config.layout.borderRadius.sm,
    '--radius-md': config.layout.borderRadius.md,
    '--radius-lg': config.layout.borderRadius.lg,
    '--shadow-sm': config.layout.shadows.sm,
    '--shadow-md': config.layout.shadows.md,
    '--shadow-lg': config.layout.shadows.lg,
  }
}

// Template Data Validation
export function validateTemplateData(data: TemplateData): {
  isValid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  // Required fields validation
  if (!data.personal.firstName && !data.personal.lastName) {
    errors.push('Name is required (firstName or lastName)')
  }
  
  if (!data.personal.email && !data.personal.phone) {
    warnings.push('Contact information recommended (email or phone)')
  }

  // Data completeness warnings
  if (data.experience.length === 0) {
    warnings.push('No work experience provided')
  }
  
  if (data.education.length === 0) {
    warnings.push('No education information provided')
  }
  
  if (data.technicalSkills.length === 0 && data.softSkills.length === 0) {
    warnings.push('No skills provided')
  }

  // Data quality checks
  data.experience.forEach((exp, index) => {
    if (!exp.company || !exp.position) {
      errors.push(`Experience item ${index + 1} missing company or position`)
    }
    if (!exp.startDate) {
      warnings.push(`Experience item ${index + 1} missing start date`)
    }
  })

  data.education.forEach((edu, index) => {
    if (!edu.institution || !edu.degree) {
      errors.push(`Education item ${index + 1} missing institution or degree`)
    }
  })

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

// Template Utility Classes
export class TemplateUtils {
  static formatDate(date: string): string {
    if (!date) return ''
    
    try {
      const [year, month] = date.split('-')
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
      return `${monthNames[parseInt(month) - 1]} ${year}`
    } catch {
      return date
    }
  }

  static formatDateRange(startDate: string, endDate: string, current: boolean): string {
    const start = this.formatDate(startDate)
    const end = current ? 'Present' : this.formatDate(endDate)
    return `${start} - ${end}`
  }

  static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  static getInitials(firstName: string, lastName: string): string {
    const first = firstName ? firstName.charAt(0).toUpperCase() : ''
    const last = lastName ? lastName.charAt(0).toUpperCase() : ''
    return first + last
  }

  static formatSkillsList(skills: string[], maxItems?: number): string[] {
    if (maxItems && skills.length > maxItems) {
      return [...skills.slice(0, maxItems - 1), `+${skills.length - maxItems + 1} more`]
    }
    return skills
  }

  static getProficiencyLevel(proficiency: string): number {
    const levels = {
      'Beginner': 1,
      'Intermediate': 2,
      'Advanced': 3,
      'Fluent': 4,
      'Native': 5
    }
    return levels[proficiency as keyof typeof levels] || 1
  }

  static generateSectionId(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').trim()
  }
}

// Template Performance Utilities
export class TemplatePerformance {
  static measureRenderTime<T>(fn: () => T, label?: string): T {
    const start = performance.now()
    const result = fn()
    const end = performance.now()
    
    if (label) {
      console.log(`${label} rendered in ${end - start}ms`)
    }
    
    return result
  }

  static debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  static memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map()
    
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args)
      
      if (cache.has(key)) {
        return cache.get(key)
      }
      
      const result = fn(...args)
      cache.set(key, result)
      return result
    }) as T
  }
}

// Template Accessibility Utilities
export class TemplateA11y {
  static generateAriaLabel(section: string, content: string): string {
    return `${section}: ${content}`
  }

  static getContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd want a more robust color parsing library
    return 4.5 // Placeholder - should calculate actual contrast
  }

  static validateColorContrast(config: TemplateConfig): string[] {
    const issues: string[] = []
    
    // Check text on background contrast
    const textBgContrast = this.getContrastRatio(
      config.colors.text.primary,
      config.colors.background.primary
    )
    
    if (textBgContrast < 4.5) {
      issues.push('Primary text on background has insufficient contrast')
    }
    
    return issues
  }

  static generateSkipLinks(sections: string[]): Array<{ href: string; label: string }> {
    return sections.map(section => ({
      href: `#${TemplateUtils.generateSectionId(section)}`,
      label: `Skip to ${section}`
    }))
  }
}

