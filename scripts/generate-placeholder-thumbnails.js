// Generate placeholder thumbnail images for templates
// Run with: node scripts/generate-placeholder-thumbnails.js

const fs = require('fs')
const path = require('path')

// Template configurations
const templates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    color: '#c10b41',
    bgColor: '#ffffff',
    accent: '#f8fafc'
  },
  {
    id: 'classic',
    name: 'Classic Elegant',
    color: '#1f2937',
    bgColor: '#ffffff',
    accent: '#f9fafb'
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    color: '#c10b41',
    bgColor: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
    accent: '#8b5cf6'
  },
  {
    id: 'minimal',
    name: 'Minimalist Clean',
    color: '#374151',
    bgColor: '#ffffff',
    accent: '#f3f4f6'
  },
  {
    id: 'tech',
    name: 'Tech Innovator',
    color: '#10b981',
    bgColor: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
    accent: '#064e3b'
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    color: '#c10b41',
    bgColor: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
    accent: '#dc2626'
  },
  {
    id: 'corporate-executive',
    name: 'Corporate Executive',
    color: '#0f172a',
    bgColor: '#ffffff',
    accent: '#f1f5f9'
  },
  {
    id: 'designer-showcase',
    name: 'Designer Showcase',
    color: '#8b5cf6',
    bgColor: 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%)',
    accent: '#a78bfa'
  },
  {
    id: 'startup-founder',
    name: 'Startup Founder',
    color: '#2563eb',
    bgColor: '#ffffff',
    accent: '#dbeafe'
  },
  {
    id: 'academic-scholar',
    name: 'Academic Scholar',
    color: '#4b5563',
    bgColor: '#ffffff',
    accent: '#f3f4f6'
  },
  {
    id: 'healthcare-professional',
    name: 'Healthcare Professional',
    color: '#0ea5e9',
    bgColor: '#ffffff',
    accent: '#e0f2fe'
  },
  {
    id: 'sales-professional',
    name: 'Sales Professional',
    color: '#f59e0b',
    bgColor: '#ffffff',
    accent: '#fef3c7'
  },
  {
    id: 'student-fresh',
    name: 'Student Fresh',
    color: '#10b981',
    bgColor: '#ffffff',
    accent: '#d1fae5'
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    color: '#8b5cf6',
    bgColor: '#ffffff',
    accent: '#ede9fe'
  },
  {
    id: 'digital-nomad',
    name: 'Digital Nomad',
    color: '#06b6d4',
    bgColor: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
    accent: '#14b8a6'
  },
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    color: '#c10b41',
    bgColor: '#ffffff',
    accent: '#f8fafc'
  }
]

// Create SVG placeholder for each template
function createSVGPlaceholder(template) {
  const isGradient = template.bgColor.includes('gradient')
  const bgId = `bg-${template.id}`
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${isGradient ? `
    <linearGradient id="${bgId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e3f2fd;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f3e5f5;stop-opacity:1" />
    </linearGradient>
    ` : ''}
  </defs>
  
  <!-- Background -->
  <rect width="400" height="300" fill="${isGradient ? `url(#${bgId})` : template.bgColor}" />
  
  <!-- Left accent border -->
  <rect x="0" y="0" width="4" height="300" fill="${template.color}" />
  
  <!-- Header section -->
  <rect x="20" y="20" width="360" height="60" fill="${template.accent}" opacity="0.3" rx="4" />
  
  <!-- Name placeholder -->
  <rect x="30" y="30" width="200" height="16" fill="${template.color}" rx="2" />
  <rect x="30" y="50" width="150" height="12" fill="#6b7280" rx="2" />
  
  <!-- Content sections -->
  <rect x="30" y="100" width="100" height="12" fill="${template.color}" rx="2" />
  <rect x="30" y="120" width="340" height="8" fill="#9ca3af" rx="2" />
  <rect x="30" y="135" width="280" height="8" fill="#9ca3af" rx="2" />
  <rect x="30" y="150" width="320" height="8" fill="#9ca3af" rx="2" />
  
  <!-- Skills section -->
  <rect x="30" y="180" width="60" height="12" fill="${template.color}" rx="2" />
  <rect x="30" y="200" width="60" height="20" fill="${template.color}" opacity="0.1" rx="10" />
  <rect x="100" y="200" width="50" height="20" fill="${template.color}" opacity="0.1" rx="10" />
  <rect x="160" y="200" width="70" height="20" fill="${template.color}" opacity="0.1" rx="10" />
  
  <!-- Template name label -->
  <rect x="20" y="260" width="360" height="30" fill="#f8fafc" opacity="0.8" rx="4" />
  <text x="200" y="278" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#374151" font-weight="500">
    ${template.name}
  </text>
</svg>`
}

// Ensure thumbnails directory exists
const thumbnailsDir = path.join(__dirname, '..', 'public', 'images', 'thumbnails')
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true })
}

// Generate SVG files for each template
templates.forEach(template => {
  const svgContent = createSVGPlaceholder(template)
  const filename = `${template.id}-template-thumbnail.svg`
  const filepath = path.join(thumbnailsDir, filename)
  
  fs.writeFileSync(filepath, svgContent)
  console.log(`✅ Generated ${filename}`)
})

console.log(`\n🎉 Generated ${templates.length} placeholder thumbnails!`)
console.log('📁 Location: public/images/thumbnails/')
console.log('\n💡 To generate high-quality PNG thumbnails:')
console.log('   1. Install puppeteer: npm install puppeteer')
console.log('   2. Visit: http://localhost:3000/api/generate-thumbnails')
console.log('   3. Or use: curl -X POST http://localhost:3000/api/generate-thumbnails -d \'{"templateId":"modern"}\' -H "Content-Type: application/json"')
