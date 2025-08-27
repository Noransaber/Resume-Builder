"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { PageTransitionLoader } from '../ui/ModernLoaders'

/**
 * Global Loading Provider
 * 
 * Features:
 * - Route change loading states
 * - Global loading context
 * - Smooth page transitions
 * - Minimum loading time for UX
 */

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  showRouteLoading: (show: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isRouteLoading, setIsRouteLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Handle route changes
  useEffect(() => {
    const handleStart = () => {
      setIsRouteLoading(true)
    }

    const handleComplete = () => {
      // Minimum loading time for better UX
      setTimeout(() => {
        setIsRouteLoading(false)
      }, 300)
    }

    handleStart()
    
    // Complete loading after route change
    const timer = setTimeout(handleComplete, 100)
    
    return () => {
      clearTimeout(timer)
      handleComplete()
    }
  }, [pathname, searchParams])

  const showRouteLoading = (show: boolean) => {
    setIsRouteLoading(show)
  }

  const contextValue: LoadingContextType = {
    isLoading: isLoading || isRouteLoading,
    setIsLoading,
    showRouteLoading
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      {(isLoading || isRouteLoading) && <PageTransitionLoader />}
      {children}
    </LoadingContext.Provider>
  )
}

/**
 * Hook for route loading states
 */
export function useRouteLoading() {
  const { showRouteLoading } = useLoading()
  
  const startLoading = () => showRouteLoading(true)
  const stopLoading = () => showRouteLoading(false)
  
  return { startLoading, stopLoading }
}
