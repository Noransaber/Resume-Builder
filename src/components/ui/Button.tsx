"use client"
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:brightness-110',
        outline: 'border border-current hover:bg-primary hover:text-white',
        ghost: 'hover:bg-primary/10'
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-6'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props }, ref
) {
  return <button ref={ref} className={twMerge(buttonStyles({ variant, size }), className)} {...props} />
})



