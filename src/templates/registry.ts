import { Template, TemplateCategory, TemplateConfig } from './types'
import { templateCategories } from './categories'

// Template Registry Class
export class TemplateRegistry {
  private templates: Map<string, Template> = new Map()
  private categories: Map<string, TemplateCategory> = new Map()
  private initialized = false

  constructor() {
    this.initializeCategories()
  }

  private initializeCategories() {
    templateCategories.forEach(category => {
      this.categories.set(category.id, { ...category })
    })
  }

  // Register a new template
  registerTemplate(template: Template): void {
    this.templates.set(template.id, template)
    this.updateCategoryCount(template.category)
  }

  // Get template by ID
  getTemplate(id: string): Template | undefined {
    return this.templates.get(id)
  }

  // Get all templates
  getAllTemplates(): Template[] {
    return Array.from(this.templates.values())
  }

  // Get templates by category
  getTemplatesByCategory(categoryId: string): Template[] {
    return this.getAllTemplates().filter(template => template.category === categoryId)
  }

  // Get popular templates
  getPopularTemplates(): Template[] {
    return this.getAllTemplates().filter(template => template.popular)
  }

  // Get featured templates
  getFeaturedTemplates(): Template[] {
    return this.getAllTemplates().filter(template => template.featured)
  }

  // Get premium templates
  getPremiumTemplates(): Template[] {
    return this.getAllTemplates().filter(template => template.premium)
  }

  // Get ATS optimized templates
  getATSOptimizedTemplates(): Template[] {
    return this.getAllTemplates().filter(template => template.atsOptimized)
  }

  // Search templates
  searchTemplates(query: string): Template[] {
    const lowercaseQuery = query.toLowerCase()
    return this.getAllTemplates().filter(template =>
      template.name.toLowerCase().includes(lowercaseQuery) ||
      template.category.toLowerCase().includes(lowercaseQuery) ||
      template.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
    )
  }

  // Get categories
  getAllCategories(): TemplateCategory[] {
    return Array.from(this.categories.values())
  }

  // Get category by ID
  getCategory(id: string): TemplateCategory | undefined {
    return this.categories.get(id)
  }

  // Update category template count
  private updateCategoryCount(categoryId: string): void {
    const category = this.categories.get(categoryId)
    if (category) {
      category.count = this.getTemplatesByCategory(categoryId).length
      category.templates = this.getTemplatesByCategory(categoryId)
    }
  }

  // Get template statistics
  getStatistics() {
    const allTemplates = this.getAllTemplates()
    return {
      total: allTemplates.length,
      popular: this.getPopularTemplates().length,
      featured: this.getFeaturedTemplates().length,
      premium: this.getPremiumTemplates().length,
      atsOptimized: this.getATSOptimizedTemplates().length,
      byCategory: Object.fromEntries(
        this.getAllCategories().map(cat => [cat.id, cat.count])
      )
    }
  }

  // Validate template configuration
  validateTemplate(template: Template): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!template.id) errors.push('Template ID is required')
    if (!template.name) errors.push('Template name is required')
    if (!template.category) errors.push('Template category is required')
    if (!template.component) errors.push('Template component is required')
    if (!template.config) errors.push('Template config is required')

    // Check if category exists
    if (template.category && !this.categories.has(template.category)) {
      errors.push(`Category '${template.category}' does not exist`)
    }

    // Check for duplicate IDs
    if (template.id && this.templates.has(template.id)) {
      errors.push(`Template with ID '${template.id}' already exists`)
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  // Bulk register templates
  registerTemplates(templates: Template[]): { success: Template[]; failed: Array<{ template: Template; errors: string[] }> } {
    const success: Template[] = []
    const failed: Array<{ template: Template; errors: string[] }> = []

    templates.forEach(template => {
      const validation = this.validateTemplate(template)
      if (validation.isValid) {
        this.registerTemplate(template)
        success.push(template)
      } else {
        failed.push({ template, errors: validation.errors })
      }
    })

    return { success, failed }
  }

  // Get template recommendations based on user data or preferences
  getRecommendations(criteria?: {
    industry?: string
    experience?: 'entry' | 'mid' | 'senior'
    role?: string
    preferences?: string[]
  }): Template[] {
    let templates = this.getAllTemplates()

    if (!criteria) {
      return this.getPopularTemplates().slice(0, 3)
    }

    // Filter by industry/role
    if (criteria.industry || criteria.role) {
      // This is a simplified recommendation engine
      // In a real app, you'd have more sophisticated matching logic
      const industryKeywords = criteria.industry?.toLowerCase().split(' ') || []
      const roleKeywords = criteria.role?.toLowerCase().split(' ') || []
      const allKeywords = [...industryKeywords, ...roleKeywords]

      templates = templates.filter(template =>
        allKeywords.some(keyword =>
          template.name.toLowerCase().includes(keyword) ||
          template.category.toLowerCase().includes(keyword) ||
          template.features.some(feature => feature.toLowerCase().includes(keyword))
        )
      )
    }

    // Sort by relevance (popular first, then featured)
    templates.sort((a, b) => {
      if (a.popular && !b.popular) return -1
      if (!a.popular && b.popular) return 1
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })

    return templates.slice(0, 6)
  }

  // Export/Import functionality for template management
  exportTemplates(): string {
    return JSON.stringify({
      templates: Array.from(this.templates.entries()),
      categories: Array.from(this.categories.entries()),
      timestamp: new Date().toISOString()
    })
  }

  importTemplates(data: string): { success: boolean; error?: string } {
    try {
      const parsed = JSON.parse(data)
      // Implementation would restore templates from backup
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Invalid template data format' }
    }
  }
}

// Template Factory for creating template instances
export class TemplateFactory {
  constructor(private registry: TemplateRegistry) {}

  // Create template component with configuration
  createTemplate(templateId: string, data: any) {
    const template = this.registry.getTemplate(templateId)
    if (!template) {
      throw new Error(`Template '${templateId}' not found`)
    }

    const TemplateComponent = template.component
    return {
      component: TemplateComponent,
      config: template.config,
      props: { userData: data, config: template.config }
    }
  }

  // Create template with custom configuration overrides
  createTemplateWithOverrides(
    templateId: string,
    data: any,
    configOverrides: Partial<TemplateConfig>
  ) {
    const template = this.registry.getTemplate(templateId)
    if (!template) {
      throw new Error(`Template '${templateId}' not found`)
    }

    const mergedConfig = {
      ...template.config,
      ...configOverrides,
      colors: {
        ...template.config.colors,
        ...configOverrides.colors
      },
      typography: {
        ...template.config.typography,
        ...configOverrides.typography
      },
      layout: {
        ...template.config.layout,
        ...configOverrides.layout
      }
    }

    const TemplateComponent = template.component
    return {
      component: TemplateComponent,
      config: mergedConfig,
      props: { userData: data, config: mergedConfig }
    }
  }

  // Batch create templates for comparison
  createTemplateComparison(templateIds: string[], data: any) {
    return templateIds.map(id => {
      try {
        return this.createTemplate(id, data)
      } catch (error) {
        return { error: error instanceof Error ? error.message : 'Unknown error', templateId: id }
      }
    })
  }
}

// Global template registry instance
export const templateRegistry = new TemplateRegistry()
export const templateFactory = new TemplateFactory(templateRegistry)

// Helper functions for easy access
export function getTemplate(id: string) {
  return templateRegistry.getTemplate(id)
}

export function getAllTemplates() {
  return templateRegistry.getAllTemplates()
}

export function getTemplatesByCategory(categoryId: string) {
  return templateRegistry.getTemplatesByCategory(categoryId)
}

export function searchTemplates(query: string) {
  return templateRegistry.searchTemplates(query)
}

export function getTemplateRecommendations(criteria?: Parameters<TemplateRegistry['getRecommendations']>[0]) {
  return templateRegistry.getRecommendations(criteria)
}

