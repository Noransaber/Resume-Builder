import { Template } from '../types'
import { MinimalistTemplate } from './MinimalistTemplate'
import { minimalistTemplateConfig } from './config'

export const minimalistTemplate: Template = {
  id: 'minimalist',
  name: 'Minimalist Clean',
  category: 'minimalist',
  component: MinimalistTemplate,
  config: minimalistTemplateConfig,
  thumbnail: '/images/thumbnails/minimal-template-thumbnail.svg',
  description: 'Ultra-clean, minimal design focusing on content with maximum white space and simplicity.',
  features: [
    'Ultra-clean, minimal design',
    'Maximum white space',
    'System font typography',
    'No decorative elements',
    'Pure black and white',
    'Content-focused layout',
    'ATS-optimized structure',
    'Print-friendly design'
  ],
  atsOptimized: true,
  popular: true,
  featured: false,
  premium: false
}
