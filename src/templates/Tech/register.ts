import { Template } from '../types'
import { TechTemplate } from './TechTemplate'
import { techTemplateConfig } from './config'

export const techTemplate: Template = {
  id: 'tech',
  name: 'Tech Innovator',
  category: 'technology',
  component: TechTemplate,
  config: techTemplateConfig,
  thumbnail: '/images/thumbnails/tech-template-thumbnail.svg',
  description: 'Dark theme terminal-inspired design perfect for developers and tech professionals.',
  features: [
    'Dark theme terminal styling',
    'Git-inspired timeline',
    'Repository-style project cards',
    'JSON-formatted skills section',
    'Monospace typography',
    'Code block aesthetics',
    'Progress bar animations',
    'Developer-focused design'
  ],
  atsOptimized: true,
  popular: false,
  featured: true,
  premium: false
}
