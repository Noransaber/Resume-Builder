"use client"
import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import '@/i18n/config'
import { useTranslation } from 'react-i18next'

export function Providers({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  useEffect(() => {
    const isRtl = ['ar', 'he', 'fa', 'ur'].includes(i18n.language)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    }
  }, [i18n.language])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
      <Toaster position="top-right" />
    </ThemeProvider>
  )
}


