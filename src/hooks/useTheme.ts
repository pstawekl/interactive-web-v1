import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_EVENT = 'interactive-theme-change'

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark'

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'

  const savedTheme = localStorage.getItem('theme')
  return isTheme(savedTheme) ? savedTheme : 'dark'
}

const applyTheme = (theme: Theme) => {
  const root = document.documentElement

  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  localStorage.setItem('theme', theme)
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
    window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: theme }))
  }, [theme])

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<Theme>).detail
      if (isTheme(nextTheme)) {
        setTheme(nextTheme)
      }
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'theme' && isTheme(event.newValue)) {
        setTheme(event.newValue)
      }
    }

    window.addEventListener(THEME_EVENT, handleThemeChange)
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener(THEME_EVENT, handleThemeChange)
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme }
}
