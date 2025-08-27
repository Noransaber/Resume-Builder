// Enhanced PDF Generation Utility
// Fixes styling issues and generates PDFs directly without opening new windows

import { Template, TemplateData } from '../templates'

interface PDFOptions {
  filename?: string
  quality?: number
  format?: 'a4' | 'letter'
  orientation?: 'portrait' | 'landscape'
}

export class PDFGenerator {
  private static async loadLibraries() {
    const [html2canvas, jsPDF] = await Promise.all([
      import('html2canvas'),
      import('jspdf')
    ])
    return { html2canvas: html2canvas.default, jsPDF: jsPDF.jsPDF }
  }

  private static async injectStyles(): Promise<string> {
    let styles = ''
    
    // Get all CSS from the current document
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const styleSheet = document.styleSheets[i]
        
        if (styleSheet.href) {
          // External stylesheets (like Tailwind)
          try {
            const response = await fetch(styleSheet.href)
            const cssText = await response.text()
            styles += cssText + '\n'
          } catch (e) {
            console.warn('Could not fetch stylesheet:', styleSheet.href)
          }
        } else if (styleSheet.cssRules) {
          // Inline styles
          for (let j = 0; j < styleSheet.cssRules.length; j++) {
            styles += styleSheet.cssRules[j].cssText + '\n'
          }
        }
      } catch (e) {
        // Cross-origin stylesheets will throw an error, skip them
        console.warn('Could not access stylesheet:', e)
      }
    }

    return styles
  }

  private static createHiddenContainer(
    templateComponent: React.ComponentType<{ userData: TemplateData }>,
    userData: TemplateData,
    template: Template
  ): HTMLElement {
    // Create a hidden container with the resume content
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.top = '-9999px'
    container.style.left = '-9999px'
    container.style.width = '210mm' // A4 width
    container.style.minHeight = '297mm' // A4 height
    container.style.backgroundColor = 'white'
    container.style.padding = '20mm'
    container.style.boxSizing = 'border-box'
    container.style.fontFamily = 'Arial, sans-serif'
    container.style.fontSize = '14px'
    container.style.lineHeight = '1.6'
    container.style.color = '#000'
    
    // Add template-specific styles
    container.className = `pdf-export template-${template.id}`
    
    return container
  }

  private static async renderReactComponentToHTML(
    templateComponent: React.ComponentType<{ userData: TemplateData }>,
    userData: TemplateData,
    template: Template
  ): Promise<string> {
    // For server-side rendering or static HTML generation
    // This is a simplified version - in production, you'd use ReactDOMServer
    
    const componentHTML = this.generateStaticHTML(userData, template)
    return componentHTML
  }

  private static generateStaticHTML(userData: TemplateData, template: Template): string {
    // Generate static HTML representation of the resume
    // This ensures consistent styling across different environments
    
    return `
      <div class="resume-container template-${template.id}" style="
        max-width: 210mm;
        margin: 0 auto;
        background: white;
        padding: 20mm;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: #1f2937;
      ">
        <!-- Header -->
        <header style="border-bottom: 4px solid #c10b41; padding-bottom: 2rem; margin-bottom: 2rem;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #1f2937; margin: 0 0 1rem 0;">
            ${userData.personal.firstName} ${userData.personal.lastName}
          </h1>
          ${userData.personal.summary ? `
            <p style="font-size: 1.1rem; color: #6b7280; margin-bottom: 1.5rem; line-height: 1.6;">
              ${userData.personal.summary}
            </p>
          ` : ''}
          
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.9rem; color: #6b7280;">
            ${userData.personal.email ? `<span>📧 ${userData.personal.email}</span>` : ''}
            ${userData.personal.phone ? `<span>📱 ${userData.personal.phone}</span>` : ''}
            ${userData.personal.location ? `<span>📍 ${userData.personal.location}</span>` : ''}
            ${userData.personal.website ? `<span>🌐 ${userData.personal.website}</span>` : ''}
            ${userData.personal.linkedin ? `<span>💼 LinkedIn</span>` : ''}
          </div>
        </header>

        <!-- Experience -->
        ${userData.experience.some(exp => exp.company || exp.position) ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              Professional Experience
            </h2>
            ${userData.experience.map(exp => exp.company || exp.position ? `
              <div style="margin-bottom: 1.5rem; border-left: 4px solid #c10b41; padding-left: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                  <div>
                    <h3 style="font-size: 1.2rem; font-weight: 600; color: #1f2937; margin: 0;">
                      ${exp.position || 'Position'}
                    </h3>
                    <p style="font-size: 1rem; color: #c10b41; font-weight: 500; margin: 0.25rem 0;">
                      ${exp.company || 'Company'}
                    </p>
                  </div>
                  <div style="text-align: right; font-size: 0.9rem; color: #6b7280;">
                    <div>${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</div>
                    ${exp.location ? `<div>${exp.location}</div>` : ''}
                  </div>
                </div>
                ${exp.description ? `
                  <p style="color: #4b5563; line-height: 1.6; margin: 0;">
                    ${exp.description}
                  </p>
                ` : ''}
              </div>
            ` : '').join('')}
          </section>
        ` : ''}

        <!-- Education -->
        ${userData.education.some(edu => edu.institution || edu.degree) ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              Education
            </h2>
            ${userData.education.map(edu => edu.institution || edu.degree ? `
              <div style="margin-bottom: 1.5rem; border-left: 4px solid #c10b41; padding-left: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                  <div>
                    <h3 style="font-size: 1.2rem; font-weight: 600; color: #1f2937; margin: 0;">
                      ${edu.degree || 'Degree'} ${edu.field ? `in ${edu.field}` : ''}
                    </h3>
                    <p style="font-size: 1rem; color: #c10b41; font-weight: 500; margin: 0.25rem 0;">
                      ${edu.institution || 'Institution'}
                    </p>
                  </div>
                  <div style="text-align: right; font-size: 0.9rem; color: #6b7280;">
                    <div>${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}</div>
                    ${edu.location ? `<div>${edu.location}</div>` : ''}
                  </div>
                </div>
                ${edu.gpa ? `
                  <p style="color: #4b5563; margin: 0;">
                    GPA: ${edu.gpa}
                  </p>
                ` : ''}
              </div>
            ` : '').join('')}
          </section>
        ` : ''}

        <!-- Technical Skills -->
        ${userData.technicalSkills.length > 0 ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              Technical Skills
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${userData.technicalSkills.map(skill => `
                <span style="background: rgba(193, 11, 65, 0.1); color: #c10b41; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.9rem; font-weight: 500;">
                  ${skill}
                </span>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Soft Skills -->
        ${userData.softSkills.length > 0 ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              Soft Skills
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${userData.softSkills.map(skill => `
                <span style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.9rem; font-weight: 500;">
                  ${skill}
                </span>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Languages -->
        ${userData.languages.length > 0 ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              Languages
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
              ${userData.languages.map(lang => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem;">
                  <span style="font-weight: 500; color: #1f2937;">${lang.name}</span>
                  <span style="font-size: 0.9rem; color: #6b7280;">${lang.proficiency}</span>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Projects -->
        ${userData.projects.some(project => project.name || project.description) ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              Projects
            </h2>
            ${userData.projects.map(project => project.name || project.description ? `
              <div style="margin-bottom: 1.5rem; border-left: 4px solid #c10b41; padding-left: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                  <div>
                    <h3 style="font-size: 1.2rem; font-weight: 600; color: #1f2937; margin: 0;">
                      ${project.name || 'Project Name'}
                    </h3>
                    ${project.technologies ? `
                      <p style="font-size: 0.9rem; color: #6b7280; margin: 0.25rem 0;">
                        ${project.technologies}
                      </p>
                    ` : ''}
                  </div>
                  ${project.link ? `
                    <a href="${project.link}" style="color: #c10b41; font-size: 0.9rem; text-decoration: none;">
                      View Project →
                    </a>
                  ` : ''}
                </div>
                ${project.description ? `
                  <p style="color: #4b5563; line-height: 1.6; margin: 0;">
                    ${project.description}
                  </p>
                ` : ''}
              </div>
            ` : '').join('')}
          </section>
        ` : ''}

        <!-- Custom Sections -->
        ${userData.customSections.map(section => `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #c10b41; padding-bottom: 0.5rem;">
              ${section.title}
            </h2>
            ${section.type === 'list' && section.items ? `
              <ul style="margin: 0; padding-left: 1.5rem; color: #4b5563; line-height: 1.6;">
                ${section.items.map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
              </ul>
            ` : `
              <p style="color: #4b5563; line-height: 1.6; margin: 0;">
                ${section.content}
              </p>
            `}
          </section>
        `).join('')}
      </div>
    `
  }

  static async generatePDF(
    userData: TemplateData,
    template: Template,
    options: PDFOptions = {}
  ): Promise<void> {
    try {
      const { html2canvas, jsPDF } = await this.loadLibraries()
      
      // Create a hidden div with the resume content
      const tempDiv = document.createElement('div')
      tempDiv.style.position = 'absolute'
      tempDiv.style.top = '-9999px'
      tempDiv.style.left = '0'
      tempDiv.style.width = '210mm'
      tempDiv.style.backgroundColor = 'white'
      tempDiv.style.padding = '0'
      tempDiv.style.margin = '0'
      tempDiv.style.transform = 'scale(1)'
      tempDiv.style.transformOrigin = 'top left'
      
      // Generate and inject the HTML content
      const htmlContent = this.generateStaticHTML(userData, template)
      tempDiv.innerHTML = htmlContent
      
      // Inject critical styles
      const styleElement = document.createElement('style')
      styleElement.textContent = `
        .resume-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          line-height: 1.6 !important;
          color: #1f2937 !important;
          background: white !important;
        }
        .resume-container * {
          box-sizing: border-box !important;
        }
        .resume-container h1, .resume-container h2, .resume-container h3 {
          margin-top: 0 !important;
        }
      `
      document.head.appendChild(styleElement)
      
      // Add to DOM temporarily
      document.body.appendChild(tempDiv)
      
      // Wait for fonts and images to load
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Generate canvas with high quality
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: tempDiv.scrollWidth,
        height: tempDiv.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: tempDiv.scrollWidth,
        windowHeight: tempDiv.scrollHeight
      })

      // Clean up
      document.body.removeChild(tempDiv)
      document.head.removeChild(styleElement)

      // Create PDF
      const imgData = canvas.toDataURL('image/png', options.quality || 1.0)
      const pdf = new jsPDF({
        orientation: options.orientation || 'portrait',
        unit: 'mm',
        format: options.format || 'a4'
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = pdfWidth
      const imgHeight = (canvas.height * pdfWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pdfHeight
      }

      // Generate filename
      const filename = options.filename || 
        `${userData.personal.firstName || 'Resume'}_${userData.personal.lastName || 'CV'}_${template.name.replace(/\s+/g, '_')}.pdf`

      // Download the PDF
      pdf.save(filename)

    } catch (error) {
      console.error('PDF generation failed:', error)
      throw new Error('Failed to generate PDF. Please try again.')
    }
  }

  // Alternative method using browser's print functionality
  static async generatePDFViaPrint(
    userData: TemplateData,
    template: Template,
    options: PDFOptions = {}
  ): Promise<void> {
    try {
      // Create a new window with the resume content
      const printWindow = window.open('', '_blank', 'width=210mm,height=297mm')
      if (!printWindow) {
        throw new Error('Popup blocked. Please allow popups for this site.')
      }

      const htmlContent = this.generateStaticHTML(userData, template)
      const styles = await this.injectStyles()

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Resume - ${userData.personal.firstName} ${userData.personal.lastName}</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background: white;
            }
            @media print { 
              body { margin: 0; padding: 0; }
              * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
            }
            @page { 
              size: A4; 
              margin: 0.5in; 
            }
            ${styles}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `)
      
      printWindow.document.close()
      printWindow.focus()
      
      // Wait for content to load, then print
      setTimeout(() => {
        printWindow.print()
        setTimeout(() => printWindow.close(), 1000)
      }, 1000)

    } catch (error) {
      console.error('Print PDF generation failed:', error)
      throw new Error('Failed to generate PDF via print. Please try the download method.')
    }
  }
}
