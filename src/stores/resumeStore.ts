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
