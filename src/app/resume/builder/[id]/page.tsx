"use client"

import { useParams, useRouter } from "next/navigation"
import { getTemplateById } from "@/templates"
import { DynamicResumePreview } from "@/components/resume/DynamicResumePreview"
import { ResumeForm } from "@/components/resume/ResumeForm"
import { useState, useEffect, useRef } from "react"
import { PageWrapper } from "@/components/ui/PageLoader"
import { useTemplateStore } from "@/stores/templateStore"
import { useResumeStore } from "@/stores/resumeStore"
import { useAuthStore } from "@/stores/authStore"
import { TemplateSwitcher } from "@/components/resume/TemplateSwitcher"
import { exportToPdf } from "@/lib/pdfExport"
import { Download, Loader2, FileText, Save } from "lucide-react"

// Resume preview container ref for PDF export
const previewContainerId = "resume-preview-container"

export default function ResumeBuilderPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const templateId = params?.id
  const [isLoading, setIsLoading] = useState(true)
  
  // Get template from URL param
  const template = getTemplateById(templateId)
  
  // Get selected template from store
  const selectedTemplateId = useTemplateStore(state => state.selectedTemplateId)
  const selectTemplate = useTemplateStore(state => state.selectTemplate)
  
  // If user directly navigated to this page without selecting a template,
  // update the store with the current template ID
  useEffect(() => {
    if (templateId && !selectedTemplateId) {
      selectTemplate(templateId)
    }
    
    // If user has selected a different template than the URL, redirect
    if (selectedTemplateId && templateId !== selectedTemplateId) {
      router.replace(`/resume/builder/${selectedTemplateId}`)
    }
    
    setIsLoading(false)
  }, [templateId, selectedTemplateId, selectTemplate, router])

  // Resume data from store
  const resumeData = useResumeStore(state => state.data)
  const updateResumeData = useResumeStore(state => state.updateSection)
  const loadSampleData = useResumeStore(state => state.loadSampleData)
  
  // Auth state
  const { user, loading: authLoading } = useAuthStore()
  
  // PDF export state
  const [isExporting, setIsExporting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  
  // Handle PDF export
  const handleExportPdf = async () => {
    setIsExporting(true)
    try {
      const filename = `${resumeData.personal.firstName || 'Resume'}_${resumeData.personal.lastName || ''}_${templateId}`
      await exportToPdf(previewContainerId, filename)
    } catch (error) {
      console.error('Error exporting PDF:', error)
    } finally {
      setIsExporting(false)
    }
  }

  // Handle Save Resume
  const handleSaveResume = async () => {
    if (!user) {
      // Redirect to sign-in page if not authenticated
      router.push('/signin')
      return
    }

    setIsSaving(true)
    try {
      // Here you would typically save to your backend/database
      // For now, we'll simulate a save operation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // You could implement actual Firebase Firestore save here:
      // const docRef = await addDoc(collection(db, 'resumes'), {
      //   userId: user.uid,
      //   templateId,
      //   data: resumeData,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // })
      
      console.log('Resume saved successfully!')
      // You might want to show a toast notification here
      
    } catch (error) {
      console.error('Error saving resume:', error)
      // You might want to show an error toast here
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <PageWrapper isLoading={isLoading} loadingType="resume">
      <div className="min-h-screen py-10 px-4 md:px-10 bg-gray-50 dark:bg-gray-900 pt-32">
        {template ? (
          <div className="w-full max-w-7xl mx-auto">
            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={loadSampleData}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>Load Sample Data</span>
              </button>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveResume}
                  disabled={isSaving || authLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-70"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      <span>{user ? 'Save Resume' : 'Sign In to Save'}</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleExportPdf}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-70"
                >
                  {isExporting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Exporting PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              {/* Left Column - Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-hidden">
                <div className="h-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Edit Resume
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Fill out your information and see the live preview update in real-time
                    </p>
                  </div>
                  <ResumeForm 
                    data={resumeData} 
                    onUpdate={updateResumeData}
                    isLoading={isLoading} 
                  />
                </div>
              </div>
              
              {/* Right Column - Preview */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-hidden">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Live Preview
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Template: {template.name}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Updates automatically
                  </div>
                </div>
                <div 
                  id={previewContainerId} 
                  className="overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 p-4" 
                  style={{ maxHeight: 'calc(100vh - 280px)' }}
                >
                  <DynamicResumePreview data={resumeData} template={template} />
                </div>
              </div>
            </div>
            
            {/* Template Switcher */}
            <div className="mt-8">
              <TemplateSwitcher currentTemplateId={templateId} />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Template not found</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
              The requested template does not exist. Please go back and choose a valid resume template.
            </p>
            <button
              onClick={() => router.push('/resume-templates')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Browse Templates
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

