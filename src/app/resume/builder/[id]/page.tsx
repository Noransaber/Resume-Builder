"use client"

import { useParams } from "next/navigation"
import { getTemplateById, TemplateData } from "../../../../templates"
import { DynamicResumePreview } from "@/components/resume/DynamicResumePreview"
import { useState } from "react"
import { PageWrapper } from "@/components/ui/PageLoader"

// Minimal default resume data so the preview has something to render.
// In a real builder this would come from form/Zustand, but for now
// we just need valid placeholder data that satisfies TemplateData.
const defaultResumeData: TemplateData = {
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
  experience: [],
  education: [],
  softSkills: ["Communication", "Teamwork", "Problem Solving"],
  technicalSkills: ["React", "TypeScript", "Tailwind CSS"],
  languages: [
    { id: "en", name: "English", proficiency: "Native" }
  ],
  customSections: [],
  projects: [],
  certifications: []
}

export default function ResumeBuilderPage() {
  const params = useParams<{ id: string }>()
  const templateId = params?.id

  const template = getTemplateById(templateId)

  // Builder state would normally be editable; kept static for now
  const [resumeData] = useState<TemplateData>(defaultResumeData)

  return (
    <PageWrapper isLoading={false} loadingType="resume">
      <div className="min-h-screen py-10 px-4 md:px-10 flex flex-col items-center bg-gray-50 dark:bg-gray-900">
        {template ? (
          <div className="w-full max-w-4xl">
            {/* Resume preview */}
            <DynamicResumePreview data={resumeData} template={template} />
          </div>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Template not found</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              The requested template does not exist. Please go back and choose a valid resume template.
            </p>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

