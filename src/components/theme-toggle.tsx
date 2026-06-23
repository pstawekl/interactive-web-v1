import { useTheme } from '@/hooks/useTheme'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="interactive-focus flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 text-zinc-700 shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-colors hover:border-purple-400/50 hover:bg-zinc-50 hover:text-zinc-950 dark:border-white/10 dark:bg-[#15151a] dark:text-zinc-100 dark:shadow-[0_10px_28px_rgba(0,0,0,0.28)] dark:hover:bg-white/10 dark:hover:text-white"
      aria-label={isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      title={isDark ? 'Jasny motyw' : 'Ciemny motyw'}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
