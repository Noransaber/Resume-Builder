import '../app/globals.css'
import { ReactNode } from 'react'
import { Providers } from '@/app/providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Resume Builder + Jobs Portal',
  description: 'Build resumes, browse jobs, and apply seamlessly.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black dark:bg-dark dark:text-white">
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}


