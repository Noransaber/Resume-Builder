"use client"
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export const exportToPdf = async (elementId: string, filename: string) => {
  try {
    // Get the element to export
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error('Element not found')
    }

    // Create a canvas from the element with improved options
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true, // Enable CORS for images
      logging: false,
      backgroundColor: '#ffffff',
      height: element.scrollHeight, // Capture full height including scrolled content
      windowHeight: element.scrollHeight,
      scrollX: 0,
      scrollY: 0
    })

    // Calculate dimensions for A4
    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4')
    
    // If content fits on one page
    if (imgHeight <= pageHeight) {
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
      )
    } else {
      // Multi-page handling
      let yPosition = 0
      let pageNumber = 0
      
      while (yPosition < imgHeight) {
        if (pageNumber > 0) {
          pdf.addPage()
        }
        
        // Calculate how much of the image to show on this page
        const remainingHeight = imgHeight - yPosition
        const pageContentHeight = Math.min(pageHeight, remainingHeight)
        
        // Create a temporary canvas for this page
        const pageCanvas = document.createElement('canvas')
        const pageCtx = pageCanvas.getContext('2d')
        
        if (pageCtx) {
          // Set canvas dimensions
          pageCanvas.width = canvas.width
          pageCanvas.height = (pageContentHeight * canvas.width) / imgWidth
          
          // Fill with white background
          pageCtx.fillStyle = '#ffffff'
          pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height)
          
          // Draw the portion of the original canvas for this page
          pageCtx.drawImage(
            canvas,
            0,
            (yPosition * canvas.width) / imgWidth, // Source Y position
            canvas.width,
            pageCanvas.height, // Source height
            0,
            0, // Destination position
            pageCanvas.width,
            pageCanvas.height // Destination size
          )
          
          // Add this page to PDF
          pdf.addImage(
            pageCanvas.toDataURL('image/png'),
            'PNG',
            0,
            0,
            imgWidth,
            pageContentHeight
          )
        }
        
        yPosition += pageHeight
        pageNumber++
      }
    }

    // Save the PDF
    pdf.save(`${filename}.pdf`)
    
    return true
  } catch (error) {
    console.error('Error exporting PDF:', error)
    return false
  }
}
