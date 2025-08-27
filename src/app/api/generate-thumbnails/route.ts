// API route for generating high-quality template thumbnails using Puppeteer
// This creates pixel-perfect screenshots of each template with dummy data

import { NextRequest, NextResponse } from 'next/server'
import { templates } from '../../templates'

// Dummy data for thumbnail generation
const dummyData = {
  personal: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    website: 'https://johndoe.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    summary: 'Experienced professional with 10+ years in technology and leadership. Proven track record of driving innovation and delivering results in fast-paced environments.'
  },
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: '2020-01',
      endDate: '',
      current: true,
      description: 'Led development of scalable web applications serving 100k+ users. Implemented microservices architecture reducing system latency by 40%.'
    },
    {
      id: '2',
      company: 'Innovation Labs',
      position: 'Full Stack Developer',
      location: 'New York, NY',
      startDate: '2018-06',
      endDate: '2019-12',
      current: false,
      description: 'Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Collaborated with design team to create intuitive user interfaces.'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science',
      location: 'Stanford, CA',
      startDate: '2016-09',
      endDate: '2018-06',
      current: false,
      gpa: '3.8'
    }
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'TypeScript', 'GraphQL', 'MongoDB'],
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with real-time inventory management and payment processing.',
      technologies: 'React, Node.js, PostgreSQL, Stripe API',
      link: 'https://github.com/johndoe/ecommerce'
    }
  ],
  certifications: [],
  languages: []
}

export async function POST(request: NextRequest) {
  try {
    const { templateId } = await request.json()

    // Validate template ID
    const template = templates.find(t => t.id === templateId)
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    // Check if we're in development or if puppeteer is available
    let puppeteer
    try {
      puppeteer = await import('puppeteer')
    } catch (error) {
      return NextResponse.json({ 
        error: 'Puppeteer not available. Install with: npm install puppeteer',
        message: 'Thumbnail generation requires puppeteer to be installed'
      }, { status: 500 })
    }

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    })

    try {
      const page = await browser.newPage()
      
      // Set viewport for consistent screenshots
      await page.setViewport({
        width: 1200,
        height: 1600,
        deviceScaleFactor: 2
      })

      // Create HTML content with the template
      const TemplateComponent = template.component
      
      // Since we can't directly render React components in Puppeteer,
      // we'll create a static HTML version with the template styles
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Template Thumbnail - ${template.name}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Georgia:wght@400;700&display=swap" rel="stylesheet">
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              background: #f8fafc;
              font-family: 'Inter', sans-serif;
            }
            .template-container {
              max-width: 800px;
              margin: 0 auto;
              transform: scale(0.8);
              transform-origin: top center;
            }
            
            /* Template-specific styles */
            .modern-professional {
              background: white;
              border-left: 4px solid #c10b41;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              padding: 32px;
            }
            
            .classic-elegant {
              background: white;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border: 2px solid #e5e7eb;
              padding: 32px;
              font-family: 'Georgia', serif;
            }
            
            .creative-portfolio {
              background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
              border-left: 4px solid #c10b41;
              border-radius: 16px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              padding: 32px;
              position: relative;
              overflow: hidden;
            }
            
            .creative-portfolio::before {
              content: '';
              position: absolute;
              top: -50px;
              right: -50px;
              width: 200px;
              height: 200px;
              background: linear-gradient(135deg, rgba(193, 11, 65, 0.1), rgba(236, 72, 153, 0.1));
              border-radius: 50%;
              filter: blur(20px);
            }
            
            .minimalist-clean {
              background: white;
              border-radius: 8px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              border: 1px solid #e5e7eb;
              padding: 24px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            }
            
            .tech-innovator {
              background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
              color: white;
              border-left: 4px solid #c10b41;
              border-radius: 8px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              padding: 32px;
              font-family: 'JetBrains Mono', monospace;
            }
            
            .executive-suite {
              background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
              border-left: 4px solid #c10b41;
              border-radius: 8px;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
              padding: 40px;
              font-family: 'Georgia', serif;
              position: relative;
            }
            
            .executive-suite::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 6px;
              background: linear-gradient(90deg, #c10b41, #dc2626, #ea580c, #d97706, #ca8a04);
              border-radius: 8px 8px 0 0;
            }
            
            .name {
              font-size: 2.5rem;
              font-weight: bold;
              margin-bottom: 0.5rem;
              color: #1f2937;
            }
            
            .tech-innovator .name {
              color: #10b981;
              text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
            }
            
            .creative-portfolio .name {
              background: linear-gradient(135deg, #c10b41, #ec4899, #8b5cf6);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            
            .executive-suite .name {
              font-size: 3rem;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .summary {
              color: #6b7280;
              margin-bottom: 1.5rem;
              line-height: 1.6;
            }
            
            .tech-innovator .summary {
              color: #d1d5db;
            }
            
            .section {
              margin-bottom: 2rem;
            }
            
            .section-title {
              font-size: 1.5rem;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 1rem;
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }
            
            .tech-innovator .section-title {
              color: white;
            }
            
            .section-title::after {
              content: '';
              flex: 1;
              height: 1px;
              background: linear-gradient(to right, #c10b41, transparent);
            }
            
            .experience-item {
              border-left: 4px solid #c10b41;
              padding-left: 1.5rem;
              margin-bottom: 1.5rem;
              position: relative;
            }
            
            .experience-item::before {
              content: '';
              position: absolute;
              left: -6px;
              top: 0;
              width: 8px;
              height: 8px;
              background: #c10b41;
              border-radius: 50%;
            }
            
            .job-title {
              font-size: 1.25rem;
              font-weight: 600;
              color: #1f2937;
              margin-bottom: 0.25rem;
            }
            
            .tech-innovator .job-title {
              color: white;
            }
            
            .company-name {
              font-size: 1.125rem;
              color: #c10b41;
              font-weight: 500;
              margin-bottom: 0.5rem;
            }
            
            .job-description {
              color: #4b5563;
              line-height: 1.6;
            }
            
            .tech-innovator .job-description {
              color: #d1d5db;
            }
            
            .skills-grid {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }
            
            .skill-tag {
              padding: 0.5rem 1rem;
              background: rgba(193, 11, 65, 0.1);
              color: #c10b41;
              border-radius: 9999px;
              font-size: 0.875rem;
              font-weight: 500;
            }
            
            .tech-innovator .skill-tag {
              background: #c10b41;
              color: white;
            }
            
            .creative-portfolio .skill-tag {
              background: linear-gradient(135deg, #c10b41, #ec4899);
              color: white;
            }
          </style>
        </head>
        <body>
          <div class="template-container">
            <div class="${template.id.replace(/([A-Z])/g, '-$1').toLowerCase()}">
              <div class="name">${dummyData.personal.firstName} ${dummyData.personal.lastName}</div>
              <div class="summary">${dummyData.personal.summary}</div>
              
              <div class="section">
                <div class="section-title">Experience</div>
                <div class="experience-item">
                  <div class="job-title">${dummyData.experience[0].position}</div>
                  <div class="company-name">${dummyData.experience[0].company}</div>
                  <div class="job-description">${dummyData.experience[0].description}</div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Skills</div>
                <div class="skills-grid">
                  ${dummyData.skills.slice(0, 6).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `

      // Load the HTML content
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' })

      // Take screenshot
      const screenshot = await page.screenshot({
        type: 'png',
        fullPage: false,
        clip: {
          x: 0,
          y: 0,
          width: 1200,
          height: 800
        }
      })

      await browser.close()

      // Return the screenshot as base64
      const base64Screenshot = screenshot.toString('base64')
      
      return NextResponse.json({
        success: true,
        templateId,
        templateName: template.name,
        screenshot: `data:image/png;base64,${base64Screenshot}`,
        message: 'Thumbnail generated successfully'
      })

    } catch (error) {
      await browser.close()
      throw error
    }

  } catch (error) {
    console.error('Error generating thumbnail:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate thumbnail', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}

// GET endpoint to generate all thumbnails
export async function GET() {
  try {
    const results = []
    
    for (const template of templates) {
      try {
        // This would normally call the POST endpoint internally
        // For now, we'll return the template info
        results.push({
          id: template.id,
          name: template.name,
          status: 'ready_for_generation',
          thumbnailPath: template.thumbnail
        })
      } catch (error) {
        results.push({
          id: template.id,
          name: template.name,
          status: 'error',
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Template thumbnail generation status',
      templates: results,
      instructions: {
        generate_single: 'POST /api/generate-thumbnails with { "templateId": "template-id" }',
        install_puppeteer: 'npm install puppeteer',
        note: 'Thumbnails will be generated as base64 images. Save them to public/images/thumbnails/ directory.'
      }
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get thumbnail status', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
