import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(function Select(
  { className, children, ...props }, ref
) {
  return (
    <select ref={ref} className={twMerge('block w-full rounded-md border-gray-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-0 dark:border-white/10 dark:bg-white/10', className)} {...props}>
      {children}
    </select>
  )
})



