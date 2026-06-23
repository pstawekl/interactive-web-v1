import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

type Language = 'pl' | 'en'

export default function LanguagePicker() {
  const { currentLanguage, setLanguage } = useLanguage()

  const handleLanguageChange = (language: Language) => {
    setLanguage(language)
    document.documentElement.lang = language
  }

  return (
    <div
      className="inline-flex h-9 items-center gap-1 rounded-full border border-zinc-200/80 bg-white/90 p-1 shadow-[0_10px_28px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#15151a] dark:shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
      aria-label="Wybór języka"
    >
      {(['pl', 'en'] as const).map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => handleLanguageChange(language)}
          className={cn(
            'interactive-focus h-7 min-w-9 rounded-full px-3 font-mono text-[11px] font-bold uppercase tracking-normal transition-colors',
            currentLanguage === language
              ? '[background:var(--gradient-cta)] text-white shadow-[0_8px_18px_-10px_rgba(147,51,234,0.9)]'
              : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
          )}
          aria-pressed={currentLanguage === language}
        >
          {language === 'pl' ? 'PL' : 'EN'}
        </button>
      ))}
    </div>
  )
}
