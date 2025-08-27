import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={twMerge('rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5', className)}>
      {children}
    </div>
  )
}



