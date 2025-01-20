import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
}

const LANGUAGE_KEY = 'app-language';
const DEFAULT_LANGUAGE: Language = 'pl';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
        return (savedLanguage as Language) || DEFAULT_LANGUAGE;
    });

    const setLanguage = (lang: Language) => {
        setCurrentLanguage(lang);
        localStorage.setItem(LANGUAGE_KEY, lang);
    };

    // Ensure localStorage is synced with state
    useEffect(() => {
        localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    }, [currentLanguage]);

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}