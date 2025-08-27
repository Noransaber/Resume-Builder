import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props }, ref
) {
  return (
    <input
      ref={ref}
      className={twMerge('block w-full rounded-md border-gray-200 bg-white/70 px-3 py-2 text-sm shadow-sm ring-0 placeholder:text-gray-400 focus:border-primary focus:ring-0 dark:border-white/10 dark:bg-white/10', className)}
      {...props}
    />
  )
})



