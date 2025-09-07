import { Template } from '../types'
import { ModernTemplate } from './ModernTemplate'
import { modernTemplateConfig } from './config'

export const modernTemplate: Template = {
  id: 'modern',
  name: 'Modern Professional',
  category: 'professional',
  component: ModernTemplate,
  config: modernTemplateConfig,
  thumbnail: '/images/thumbnails/modern-template-thumbnail.svg',
  description: 'Clean and contemporary design perfect for modern professionals seeking a polished, corporate look.',
  features: [
    'Clean, professional layout',
    'Timeline-based experience section',
    'Skill categorization (Technical/Soft)',
    'ATS-optimized structure',
    'Print-friendly design',
    'Mobile responsive',
    'Professional color scheme',
    'Modern typography'
  ],
  atsOptimized: true,
  popular: true,
  featured: true,
  premium: false
}
