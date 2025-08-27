"use client"
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="rounded-md border px-3 py-2 text-sm hover:bg-primary hover:text-white"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}


