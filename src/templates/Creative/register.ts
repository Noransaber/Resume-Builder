import { Template } from '../types'
import { CreativeTemplate } from './CreativeTemplate'
import { creativeTemplateConfig } from './config'

export const creativeTemplate: Template = {
  id: 'creative',
  name: 'Creative Portfolio',
  category: 'creative',
  component: CreativeTemplate,
  config: creativeTemplateConfig,
  thumbnail: '/images/thumbnails/creative-template-thumbnail.svg',
  description: 'Bold and artistic resume template with a focus on visual appeal and creative expression.',
  features: [
    'Bold, artistic design',
    'Two-column portfolio layout',
    'Creative timeline visualization',
    'Skill cloud with animations',
    'Geometric background patterns',
    'Portfolio project showcase',
    'Language proficiency bars',
    'Gradient color schemes'
  ],
  atsOptimized: true,
  popular: false,
  featured: true,
  premium: false
}
