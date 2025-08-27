"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Save, Download, ArrowLeft, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, FileText } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { db, firebaseReady } from '@/lib/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { ResumeForm } from '@/components/resume/ResumeForm'
import { DynamicResumePreview } from '@/components/resume/DynamicResumePreview'

import { getTemplateById } from '../../../../templates'

// Default resume data structure
const defaultResumeData = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    summary: ''
  },
  experience: [
    {
      id: '1',
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ],
  education: [
    {
      id: '1',
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: ''
    }
  ],
  skills: [],
  projects: [
    {
      id: '1',
      name: '',
      description: '',
      technologies: '',
      link: ''
    }
  ],
  certifications: [],
  languages: []
}

export default function ResumeBuilderPage() {
  const params = useParams()
  const templateId = params.id as string
  const { user } = useAuthStore()
  
  const [resumeData, setResumeData] = useState(defaultResumeData)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  const template = getTemplateById(templateId)

  // Load existing resume data if user is logged in
  useEffect(() => {
    if (user && templateId) {
      loadResumeData()
    }
  }, [user, templateId])

  const loadResumeData = async () => {
    if (!user || !firebaseReady || !db) return
    
    try {
      setIsLoading(true)
      const resumeRef = doc(db, 'resumes', `${user.uid}_${templateId}`)
      const resumeDoc = await getDoc(resumeRef)
      
      if (resumeDoc.exists()) {
        setResumeData(resumeDoc.data().data)
      }
    } catch (error) {
      console.error('Error loading resume data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    if (!user) {
      setSaveMessage('Please log in to save your resume')
      return
    }

    if (!firebaseReady || !db) {
      setSaveMessage('Firebase not ready. Please try again.')
      return
    }

    try {
      setIsSaving(true)
      const resumeRef = doc(db, 'resumes', `${user.uid}_${templateId}`)
      await setDoc(resumeRef, {
        userId: user.uid,
        templateId: templateId,
        data: resumeData,
        updatedAt: new Date()
      })
      setSaveMessage('Resume saved successfully!')
      setTimeout(() => setSaveMessage(''), 3000)
    } catch (error) {
      console.error('Error saving resume:', error)
      setSaveMessage('Error saving resume. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDownload = async () => {
    try {
      // Find the resume preview element
      const resumeElement = document.querySelector('[data-resume-preview]')
      if (!resumeElement) {
        console.error('Resume preview element not found')
        return
      }

      // Try modern browser print to PDF first
      if (typeof window !== 'undefined' && 'print' in window) {
        // Get all stylesheets from the current document
        let styles = ''
        
        // Get Tailwind and other CSS from the current document
        for (let i = 0; i < document.styleSheets.length; i++) {
          try {
            const styleSheet = document.styleSheets[i]
            if (styleSheet.href && styleSheet.href.includes('/_next/static/css/')) {
              // This is a Next.js CSS file, fetch it
              fetch(styleSheet.href)
                .then(response => response.text())
                .then(cssText => {
                  styles += cssText
                })
                .catch(() => {})
            } else if (styleSheet.cssRules) {
              // Inline styles
              for (let j = 0; j < styleSheet.cssRules.length; j++) {
                styles += styleSheet.cssRules[j].cssText
              }
            }
          } catch (e) {
            // Cross-origin stylesheets will throw an error, skip them
          }
        }

        // Create a new window with just the resume content and proper styles
        const printWindow = window.open('', '_blank')
        if (printWindow) {
          printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
              <title>Resume - ${resumeData.personal.firstName} ${resumeData.personal.lastName}</title>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script src="https://cdn.tailwindcss.com"></script>
              <style>
                body { 
                  margin: 0; 
                  padding: 20px; 
                  font-family: Arial, sans-serif;
                  background: white;
                }
                @media print { 
                  body { margin: 0; padding: 10px; }
                  * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
                }
                @page { 
                  size: A4; 
                  margin: 0.5in; 
                }
                
                /* Template-specific styles */
                .modern-professional {
                  border-left: 4px solid #c10b41;
                  background: white;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  padding: 32px;
                  max-width: 1024px;
                  margin: 0 auto;
                }
                
                .executive-suite {
                  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                  border-left: 4px solid #c10b41;
                  border-radius: 8px;
                  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                  padding: 40px;
                  max-width: 1024px;
                  margin: 0 auto;
                }
                
                .creative-portfolio {
                  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
                  border-left: 4px solid #c10b41;
                  border-radius: 16px;
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                  padding: 32px;
                  max-width: 1024px;
                  margin: 0 auto;
                }
                
                .minimalist-clean {
                  background: white;
                  border-radius: 8px;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                  border: 1px solid #e5e7eb;
                  padding: 24px;
                  max-width: 1024px;
                  margin: 0 auto;
                }
                
                .tech-innovator {
                  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
                  color: white;
                  border-left: 4px solid #c10b41;
                  border-radius: 8px;
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                  padding: 32px;
                  max-width: 1024px;
                  margin: 0 auto;
                }
                
                .classic-elegant {
                  background: white;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  border: 2px solid #e5e7eb;
                  padding: 32px;
                  max-width: 1024px;
                  margin: 0 auto;
                  font-family: 'Times New Roman', serif;
                }
                
                ${styles}
              </style>
            </head>
            <body>
              ${resumeElement.outerHTML}
            </body>
            </html>
          `)
          printWindow.document.close()
          printWindow.focus()
          setTimeout(() => {
            printWindow.print()
            setTimeout(() => printWindow.close(), 1000)
          }, 500)
          return
        }
      }

      // Fallback: Try to use html2canvas and jspdf
      try {
        const html2canvas = (await import('html2canvas')).default
        const jsPDF = (await import('jspdf')).jsPDF

        // Generate canvas from the resume element
        const canvas = await html2canvas(resumeElement as HTMLElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        })

        // Create PDF
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        })

        const imgWidth = 210
        const pageHeight = 295
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        let heightLeft = imgHeight
        let position = 0

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }

        const fileName = `${resumeData.personal.firstName || 'Resume'}_${resumeData.personal.lastName || 'Template'}_${template?.name?.replace(/\s+/g, '_') || 'CV'}.pdf`
        pdf.save(fileName)

      } catch (pdfError) {
        console.error('PDF generation failed:', pdfError)
        // Final fallback: open print dialog
        window.print()
      }

    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Please use your browser\'s print function (Ctrl+P) to save as PDF.')
    }
  }

  const updateResumeData = (section: string, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }))
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Template not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The requested template does not exist.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32  bg-gray-50 dark:bg-gray-900  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {template.name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {template.category} Template
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {saveMessage && (
                <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 hidden sm:block">
                  {saveMessage}
                </span>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                disabled={isSaving}
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 text-sm"
              >
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">{isSaving ? 'Saving...' : 'Save'}</span>
                <span className="sm:hidden">Save</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-gradient-to-r from-primary to-pink-600 text-white font-medium rounded-lg hover:shadow-lg transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        {/* Left Panel - Form */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 lg:border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-4 sm:p-6">
            <ResumeForm
              data={resumeData}
              onUpdate={updateResumeData}
              isLoading={isLoading}
            />
          </div>
        </div>

        {/* Right Panel - Live Preview */}
        <div className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-900 overflow-y-auto border-t lg:border-t-0 border-gray-200 dark:border-gray-700">
          <div className="p-4 sm:p-6">
            <div className="lg:hidden mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Preview</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">See how your resume looks as you type</p>
            </div>
            <DynamicResumePreview
              data={resumeData}
              template={template}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

