# Resume Builder Template System

This document outlines the comprehensive template system implemented for the Resume Builder application, following the architectural principles you outlined.

## 🏗️ Architecture Overview

The template system is built with the following key principles:

1. **Component-Driven Development**: Each template is a self-contained React component
2. **Central Registry**: All templates are managed through a single registry system
3. **Dynamic Loading**: Templates are loaded dynamically based on user selection
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Scalability**: Easy to add new templates without modifying core code

## 📁 File Structure

```
src/
├── templates/
│   ├── index.ts                    # Central template registry
│   ├── Modern/
│   │   ├── ModernTemplate.tsx      # React component
│   │   ├── ModernTemplate.module.css # Template-specific styles
│   │   └── index.ts                # Export file
│   ├── Classic/
│   │   ├── ClassicTemplate.tsx
│   │   ├── ClassicTemplate.module.css
│   │   └── index.ts
│   ├── Creative/
│   │   ├── CreativeTemplate.tsx
│   │   ├── CreativeTemplate.module.css
│   │   └── index.ts
│   ├── Minimal/
│   │   ├── MinimalTemplate.tsx
│   │   ├── MinimalTemplate.module.css
│   │   └── index.ts
│   ├── Tech/
│   │   ├── TechTemplate.tsx
│   │   ├── TechTemplate.module.css
│   │   └── index.ts
│   └── Executive/
│       ├── ExecutiveTemplate.tsx
│       ├── ExecutiveTemplate.module.css
│       └── index.ts
├── components/resume/
│   └── DynamicResumePreview.tsx    # Dynamic template renderer
├── app/
│   ├── resume-templates/
│   │   └── page.tsx                # Template selection page
│   ├── resume/builder/[id]/
│   │   └── page.tsx                # Dynamic builder page
│   └── api/generate-thumbnails/
│       └── route.ts                # Thumbnail generation API
public/images/thumbnails/           # Generated thumbnail images
scripts/
└── generate-placeholder-thumbnails.js # Thumbnail generation script
```

## 🎨 Available Templates

### 1. Modern Professional
- **ID**: `modern`
- **Category**: Professional
- **Features**: Clean layout, professional styling, ATS-friendly, modern typography
- **Best For**: Corporate roles, tech professionals, modern industries

### 2. Classic Elegant
- **ID**: `classic`
- **Category**: Professional
- **Features**: Traditional layout, elegant typography, conservative styling
- **Best For**: Traditional industries, formal positions, conservative companies

### 3. Creative Portfolio
- **ID**: `creative`
- **Category**: Creative
- **Features**: Creative layout, visual elements, portfolio showcase, bold design
- **Best For**: Designers, artists, creative professionals, marketing roles

### 4. Minimalist Clean
- **ID**: `minimal`
- **Category**: Modern
- **Features**: Minimalist design, clean typography, distraction-free
- **Best For**: Any industry, content-focused roles, modern companies

### 5. Tech Innovator
- **ID**: `tech`
- **Category**: Technology
- **Features**: Tech-focused design, code-friendly layout, terminal styling
- **Best For**: Developers, engineers, tech professionals, startups

### 6. Executive Suite
- **ID**: `executive`
- **Category**: Executive
- **Features**: Executive styling, leadership focus, premium design
- **Best For**: C-level executives, senior leadership, management roles

## 🔧 Template Component Structure

Each template component follows this structure:

```typescript
// TemplateComponent.tsx
import React from 'react'
import { TemplateProps } from '../index'
import styles from './TemplateComponent.module.css'

const TemplateComponent: React.FC<TemplateProps> = ({ userData }) => {
  if (!userData) return null

  // Helper functions for date formatting, etc.
  const formatDate = (dateString: string) => {
    // Date formatting logic
  }

  return (
    <div className={styles.container} data-resume-preview>
      {/* Template-specific layout and styling */}
    </div>
  )
}

export default TemplateComponent
```

## 📊 Data Structure

All templates consume a standardized data structure:

```typescript
interface TemplateData {
  personal: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    summary: string
  }
  experience: Array<{
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
  }>
  education: Array<{
    id: string
    institution: string
    degree: string
    field: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    gpa: string
  }>
  skills: string[]
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string
    link: string
  }>
  certifications: string[]
  languages: string[]
}
```

## 🖼️ Thumbnail Generation

The system includes both automatic and manual thumbnail generation:

### Automatic Generation (Puppeteer)
```bash
# Install puppeteer
npm install puppeteer

# Generate single template thumbnail
curl -X POST http://localhost:3000/api/generate-thumbnails \
  -d '{"templateId":"modern"}' \
  -H "Content-Type: application/json"

# Get generation status
curl http://localhost:3000/api/generate-thumbnails
```

### Manual Placeholder Generation
```bash
# Generate SVG placeholders
node scripts/generate-placeholder-thumbnails.js
```

## 🚀 Usage

### Adding a New Template

1. **Create Template Directory**:
   ```bash
   mkdir src/templates/NewTemplate
   ```

2. **Create Template Component**:
   ```typescript
   // src/templates/NewTemplate/NewTemplateComponent.tsx
   import React from 'react'
   import { TemplateProps } from '../index'
   import styles from './NewTemplateComponent.module.css'

   const NewTemplateComponent: React.FC<TemplateProps> = ({ userData }) => {
     // Template implementation
   }

   export default NewTemplateComponent
   ```

3. **Create Styles**:
   ```css
   /* src/templates/NewTemplate/NewTemplateComponent.module.css */
   .container {
     /* Template-specific styles */
   }
   ```

4. **Create Index File**:
   ```typescript
   // src/templates/NewTemplate/index.ts
   export { default } from './NewTemplateComponent'
   ```

5. **Register in Central Registry**:
   ```typescript
   // src/templates/index.ts
   import NewTemplate from './NewTemplate'

   export const templates: Template[] = [
     // ... existing templates
     {
       id: 'new-template',
       name: 'New Template Name',
       category: 'Professional',
       component: NewTemplate,
       thumbnail: '/images/thumbnails/new-template-thumbnail.svg',
       description: 'Template description',
       features: ['Feature 1', 'Feature 2'],
       atsOptimized: true,
       popular: false,
       featured: false
     }
   ]
   ```

6. **Generate Thumbnail**:
   ```bash
   # Add to scripts/generate-placeholder-thumbnails.js
   # Then run:
   node scripts/generate-placeholder-thumbnails.js
   ```

### Using Templates in Components

```typescript
import { getTemplateById, templates } from '@/templates'

// Get specific template
const template = getTemplateById('modern')

// Render template dynamically
const TemplateComponent = template.component
return <TemplateComponent userData={userData} />
```

## 🎯 Key Features

### 1. **Dynamic Loading**
Templates are loaded dynamically based on URL parameters, enabling clean routing:
- `/resume/builder/modern` → Modern Professional template
- `/resume/builder/creative` → Creative Portfolio template

### 2. **Real-time Preview**
The `DynamicResumePreview` component provides live updates as users edit their information.

### 3. **Type Safety**
Full TypeScript support ensures type safety across all template components and data structures.

### 4. **Print Optimization**
All templates include print-specific CSS for high-quality PDF generation.

### 5. **Responsive Design**
Templates are fully responsive and work across all device sizes.

### 6. **Dark Mode Support**
Templates support both light and dark themes.

## 🔄 Template Registry API

The central registry provides several utility functions:

```typescript
// Get all templates
import { templates } from '@/templates'

// Get template by ID
import { getTemplateById } from '@/templates'
const template = getTemplateById('modern')

// Get templates by category
import { getTemplatesByCategory } from '@/templates'
const professionalTemplates = getTemplatesByCategory('Professional')

// Get featured templates
import { getFeaturedTemplates } from '@/templates'
const featured = getFeaturedTemplates()

// Get popular templates
import { getPopularTemplates } from '@/templates'
const popular = getPopularTemplates()
```

## 🎨 Styling Guidelines

### CSS Modules
Each template uses CSS Modules for scoped styling:
- Use semantic class names
- Include print styles
- Support dark mode
- Ensure responsive design

### Design Principles
- **Consistency**: Maintain visual hierarchy
- **Readability**: Ensure text is readable at all sizes
- **Professional**: Keep designs appropriate for business use
- **ATS-Friendly**: Avoid complex layouts that might confuse ATS systems

## 🚀 Performance

The template system is optimized for performance:
- **Code Splitting**: Templates are loaded only when needed
- **Lazy Loading**: Template components are dynamically imported
- **Optimized Images**: SVG thumbnails for fast loading
- **Minimal Bundle Size**: Each template is self-contained

## 🔧 Development

### Running the System
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Generate thumbnails (optional)
npm install puppeteer
node scripts/generate-placeholder-thumbnails.js
```

### Testing Templates
Visit the template selection page at `/resume-templates` to see all available templates with their thumbnails and descriptions.

## 📈 Future Enhancements

Potential improvements to the template system:

1. **Template Customization**: Allow users to customize colors and fonts
2. **Template Marketplace**: Enable community-contributed templates
3. **Advanced Layouts**: Support for multi-column layouts
4. **Template Analytics**: Track template usage and popularity
5. **A/B Testing**: Test different template variations
6. **Template Versioning**: Support for template updates and migrations

## 🤝 Contributing

When contributing new templates:

1. Follow the established file structure
2. Ensure full TypeScript support
3. Include comprehensive CSS with print styles
4. Test across different data scenarios
5. Generate appropriate thumbnails
6. Update documentation

This template system provides a robust, scalable foundation for the Resume Builder application, making it easy to add new templates while maintaining code quality and user experience.
