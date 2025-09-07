// Central exports for the template system
export * from './types'
export * from './categories'
export * from './utils'
export * from './registry'

// Re-export commonly used items for convenience
export {
  templateRegistry,
  templateFactory,
  getTemplate,
  getAllTemplates,
  getTemplatesByCategory,
  searchTemplates,
  getTemplateRecommendations
} from './registry'

export {
  createTemplateConfig,
  generateCSSVariables,
  validateTemplateData,
  TemplateUtils,
  TemplatePerformance,
  TemplateA11y
} from './utils'

export {
  templateCategories,
  designSystemPresets,
  layoutPresets
} from './categories'

export type {
  Template,
  TemplateData,
  TemplateProps,
  TemplateConfig,
  TemplateCategory,
  TemplateComponentProps
} from './types'

// Version information
export const TEMPLATE_SYSTEM_VERSION = '1.0.0'

// Import and register templates
import { modernTemplate } from './Modern/register'
import { creativeTemplate } from './Creative/register'
import { minimalistTemplate } from './Minimalist/register'
import { techTemplate } from './Tech/register'
import { executiveTemplate } from './Executive/register'
import { templateRegistry } from './registry'
import { templateCategories } from './categories'

// Register all templates immediately
templateRegistry.registerTemplate(modernTemplate)
templateRegistry.registerTemplate(creativeTemplate)
templateRegistry.registerTemplate(minimalistTemplate)
templateRegistry.registerTemplate(techTemplate)
templateRegistry.registerTemplate(executiveTemplate)

// Template system initialization function (for backwards compatibility)
export function initializeTemplateSystem() {
  console.log(`Template System v${TEMPLATE_SYSTEM_VERSION} initialized`)
  console.log(`Categories: ${templateCategories.length}`)
  console.log(`Templates: ${getAllTemplates().length}`)
  console.log(`Registered templates:`, getAllTemplates().map(t => t.name))
}
