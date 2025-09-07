import { Template } from '../types'
import { ExecutiveTemplate } from './ExecutiveTemplate'
import { executiveTemplateConfig } from './config'

export const executiveTemplate: Template = {
  id: 'executive',
  name: 'Executive Suite',
  category: 'executive',
  component: ExecutiveTemplate,
  config: executiveTemplateConfig,
  thumbnail: '/images/thumbnails/executive-template-thumbnail.svg',
  description: 'Premium executive design with gold accents and serif typography for senior leadership roles.',
  features: [
    'Premium executive design',
    'Gold accent color scheme',
    'Serif typography for elegance',
    'Numbered achievement cards',
    'Two-column competencies layout',
    'Executive summary highlighting',
    'Leadership-focused sections',
    'Sophisticated visual hierarchy'
  ],
  atsOptimized: true,
  popular: false,
  featured: false,
  premium: true
}
