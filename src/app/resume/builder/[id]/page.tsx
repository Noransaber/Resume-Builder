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
import { PageWrapper, LoadingButton } from '@/components/ui/PageLoader'
import { ResumeLoader } from '@/components/ui/ModernLoaders'

import { getTemplateById } from '../../../../templates'
import { PDFGenerator } from '../../../../lib/pdfGenerator'

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
  softSkills: [],
  technicalSkills: [],
  languages: [],
  customSections: [],
  projects: [
    {
      id: '1',
      name: '',
      description: '',
      technologies: '',
      link: ''
    }
  ],
  certifications: []
}

export default function ResumeBuilderPage() {
  const params = useParams()
  const templateId = params.id as string
  const { user } = useAuthStore()
  
  const [resumeData, setResumeData] = useState(defaultResumeData)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
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
    if (!template) {
      alert('Template not found. Please refresh the page and try again.')
      return
    }

    try {
      setIsDownloading(true)
      // Use the improved PDF generator
      await PDFGenerator.generatePDF(resumeData, template, {
        filename: `${resumeData.personal.firstName || 'Resume'}_${resumeData.personal.lastName || 'CV'}_${template.name.replace(/\s+/g, '_')}.pdf`,
        quality: 1.0,
        format: 'a4',
        orientation: 'portrait'
      })
    } catch (error) {
      console.error('PDF generation failed:', error)
      
      // Fallback to print method
      try {
        await PDFGenerator.generatePDFViaPrint(resumeData, template)
      } catch (printError) {
        console.error('Print PDF generation also failed:', printError)
        alert('PDF generation failed. Please use your browser\'s print function (Ctrl+P) to save as PDF.')
      }
    } finally {
      setIsDownloading(false)
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
    <PageWrapper 
      isLoading={isLoading} 
      loadingType="resume" 
      loadingMessage="Loading your resume builder..."
    >
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
              
              <LoadingButton
                isLoading={isSaving}
                onClick={handleSave}
                loadingText="Saving..."
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
                <span className="sm:hidden">Save</span>
              </LoadingButton>

              <LoadingButton
                isLoading={isDownloading}
                onClick={handleDownload}
                loadingText="Generating..."
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-gradient-to-r from-primary to-pink-600 text-white font-medium rounded-lg hover:shadow-lg transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </LoadingButton>
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
    </PageWrapper>
  )
}

