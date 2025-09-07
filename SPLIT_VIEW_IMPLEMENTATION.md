# Split-View Resume Builder Implementation

## Overview

The split-view resume builder will feature a form on the left side for users to input their resume information, and a live preview of the selected template on the right side that updates in real-time as the user types.

## Implementation Steps

1. **Update the Resume Builder Page Layout**
   - Modify the `/resume/builder/[id]` page to use a two-column layout
   - Left column: Resume form with sections for different resume parts
   - Right column: Live preview of the selected template

2. **Set Up State Management**
   - Create a Zustand store for resume data
   - Implement real-time synchronization between form inputs and preview
   - Add persistence to save user progress

3. **Integrate the ResumeForm Component**
   - Add the existing ResumeForm component to the left column
   - Connect it to the resume data store
   - Implement form section navigation

4. **Enhance the DynamicResumePreview Component**
   - Ensure the preview updates in real-time
   - Add responsive sizing for different screen sizes
   - Implement zoom controls for better preview visibility

5. **Add Export Functionality**
   - PDF export
   - Download options
   - Print functionality

## Code Changes

### 1. Update the Resume Builder Page

```tsx
// src/app/resume/builder/[id]/page.tsx
"use client"

import { useParams, useRouter } from "next/navigation"
import { getTemplateById } from "../../../../templates"
import { DynamicResumePreview } from "@/components/resume/DynamicResumePreview"
import { ResumeForm } from "@/components/resume/ResumeForm"
import { useState, useEffect } from "react"
import { PageWrapper } from "@/components/ui/PageLoader"
import { useTemplateStore } from "@/stores/templateStore"
import { TemplateSwitcher } from "@/components/resume/TemplateSwitcher"
import { useResumeStore } from "@/stores/resumeStore"

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
  
  // Get resume data from store
  const resumeData = useResumeStore(state => state.data)
  const updateResumeData = useResumeStore(state => state.updateSection)
  
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

  return (
    <PageWrapper isLoading={isLoading} loadingType="resume">
      <div className="min-h-screen py-10 px-4 md:px-10 bg-gray-50 dark:bg-gray-900 pt-32">
        {template ? (
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                <ResumeForm 
                  data={resumeData} 
                  onUpdate={updateResumeData}
                  isLoading={isLoading} 
                />
              </div>
              
              {/* Right Column - Preview */}
              <div className="sticky top-32 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-hidden" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                <DynamicResumePreview data={resumeData} template={template} />
              </div>
            </div>
            
            {/* Template Switcher */}
            <TemplateSwitcher currentTemplateId={templateId} />
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
```

### 2. Create Resume Data Store

```tsx
// src/stores/resumeStore.ts
"use client"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TemplateData } from '../templates'

// Default resume data
const defaultResumeData: TemplateData = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    summary: ""
  },
  experience: [],
  education: [],
  softSkills: [],
  technicalSkills: [],
  languages: [],
  customSections: [],
  projects: [],
  certifications: []
}

interface ResumeState {
  // Resume data
  data: TemplateData
  
  // Actions
  updateSection: (section: string, data: any) => void
  resetData: () => void
  loadSampleData: () => void
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      data: defaultResumeData,
      
      updateSection: (section, data) => set((state) => ({
        data: {
          ...state.data,
          [section]: data
        }
      })),
      
      resetData: () => set({ data: defaultResumeData }),
      
      loadSampleData: () => set({
        data: {
          personal: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "+1 555-123-4567",
            location: "San Francisco, CA",
            website: "johndoe.dev",
            linkedin: "linkedin.com/in/johndoe",
            summary: "Passionate professional with experience across multiple industries and a knack for problem-solving."
          },
          experience: [
            {
              id: "exp1",
              company: "Tech Innovations Inc.",
              position: "Senior Developer",
              location: "San Francisco, CA",
              startDate: "2020-01",
              endDate: "",
              current: true,
              description: "Lead developer for multiple high-impact projects. Improved system performance by 40% and mentored junior developers."
            },
            {
              id: "exp2",
              company: "Digital Solutions LLC",
              position: "Web Developer",
              location: "Austin, TX",
              startDate: "2017-03",
              endDate: "2019-12",
              current: false,
              description: "Developed and maintained client websites. Implemented responsive designs and optimized database queries."
            }
          ],
          education: [
            {
              id: "edu1",
              institution: "University of Technology",
              degree: "Bachelor of Science",
              field: "Computer Science",
              location: "Boston, MA",
              startDate: "2013-09",
              endDate: "2017-05",
              current: false,
              gpa: "3.8"
            }
          ],
          softSkills: ["Communication", "Teamwork", "Problem Solving", "Adaptability"],
          technicalSkills: ["JavaScript", "React", "Node.js", "TypeScript", "SQL", "Git"],
          languages: [
            { id: "lang1", name: "English", proficiency: "Native" },
            { id: "lang2", name: "Spanish", proficiency: "Intermediate" }
          ],
          customSections: [],
          projects: [
            {
              id: "proj1",
              name: "E-commerce Platform",
              description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB",
              technologies: "React, Node.js, Express, MongoDB",
              link: "https://github.com/johndoe/ecommerce"
            }
          ],
          certifications: []
        }
      })
    }),
    {
      name: 'resume-data-storage',
    }
  )
)
