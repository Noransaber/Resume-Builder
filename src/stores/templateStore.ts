"use client"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Template } from '../templates'

interface TemplateState {
  // Selected template ID
  selectedTemplateId: string | null
  
  // Template selection history
  recentTemplates: string[]
  
  // Actions
  selectTemplate: (templateId: string) => void
  clearSelectedTemplate: () => void
  
  // User preferences
  preferredCategories: string[]
  addPreferredCategory: (category: string) => void
  removePreferredCategory: (category: string) => void
}

export const useTemplateStore = create<TemplateState>()(
  persist(
    (set) => ({
      selectedTemplateId: null,
      recentTemplates: [],
      preferredCategories: [],
      
      selectTemplate: (templateId: string) => set((state) => {
        // Add to recent templates (avoid duplicates and limit to 5)
        const updatedRecent = [
          templateId,
          ...state.recentTemplates.filter(id => id !== templateId)
        ].slice(0, 5)
        
        return {
          selectedTemplateId: templateId,
          recentTemplates: updatedRecent
        }
      }),
      
      clearSelectedTemplate: () => set({ selectedTemplateId: null }),
      
      addPreferredCategory: (category: string) => set((state) => ({
        preferredCategories: [...state.preferredCategories, category]
      })),
      
      removePreferredCategory: (category: string) => set((state) => ({
        preferredCategories: state.preferredCategories.filter(c => c !== category)
      }))
    }),
    {
      name: 'resume-template-storage',
    }
  )
)
