import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Button } from './ui/button'

interface MapItem {
  id: string
  name: string
  onlyMobile?: boolean
}

interface ViewMapProps {
  items: MapItem[]
}

export const ViewMap: React.FC<ViewMapProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('')
  const [availableIds, setAvailableIds] = useState<Set<string>>(new Set())

  const visibleItems = useMemo(
    () => items.filter((item) => availableIds.has(item.id)),
    [items, availableIds]
  )

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  useEffect(() => {
    const refreshAvailableItems = () => {
      setAvailableIds(new Set(items.filter((item) => document.getElementById(item.id)).map((item) => item.id)))
    }

    refreshAvailableItems()
    const timeout = window.setTimeout(refreshAvailableItems, 600)

    return () => window.clearTimeout(timeout)
  }, [items])

  useEffect(() => {
    if (visibleItems.length === 0) return

    const handleScroll = () => {
      const activationLine = window.innerHeight * 0.35
      let current = visibleItems[0]?.id ?? ''

      for (const item of visibleItems) {
        const element = document.getElementById(item.id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= activationLine) {
          current = item.id
        }
      }

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [visibleItems])

  if (visibleItems.length === 0) return null

  return (
    <motion.nav
      className={cn(
        'fixed left-4 top-1/2 z-50 hidden flex-col items-center gap-4 lg:flex',
        'rounded-full border border-white/10 bg-[#09090b]/72 px-3 py-4 shadow-[0_18px_70px_rgba(8,8,12,0.5)] backdrop-blur-xl'
      )}
      initial={{ opacity: 0, x: -16, y: '-50%' }}
      animate={{ opacity: 1, x: 0, y: '-50%' }}
      transition={{ delay: 0.35, duration: 0.35 }}
      aria-label="Mapa sekcji"
    >
      <motion.div
        className="absolute bottom-6 top-6 w-px [background:linear-gradient(180deg,rgba(37,99,235,0.2),rgba(147,51,234,0.6),rgba(219,39,119,0.2))]"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      />

      {visibleItems.map((item, index) => {
        const isActive = activeId === item.id

        return (
          <motion.div
            key={item.id}
            className="group relative z-10"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 + index * 0.05, duration: 0.22 }}
          >
            <Button
              onClick={() => handleDotClick(item.id)}
              title={item.name}
              aria-label={`Przejdź do sekcji ${item.name}`}
              variant="ghost"
              className={cn(
                'relative h-4 w-4 min-w-0 rounded-full border p-0 transition-all duration-300',
                isActive
                  ? 'scale-125 border-transparent [background:var(--gradient-cta)] shadow-[0_0_24px_rgba(147,51,234,0.75)]'
                  : 'border-white/25 bg-[#09090b] hover:border-purple-300/70 hover:bg-white/[0.06]',
                item.onlyMobile && 'lg:hidden'
              )}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full [background:var(--gradient-cta)]"
                    initial={{ scale: 1, opacity: 0.35 }}
                    animate={{ scale: 2.25, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
              </AnimatePresence>
            </Button>

            <div className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded-xl border border-white/10 bg-[#09090b]/92 px-3 py-1.5 font-body text-xs font-semibold text-zinc-200 opacity-0 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-opacity group-hover:opacity-100">
              {item.name}
            </div>
          </motion.div>
        )
      })}
    </motion.nav>
  )
}
