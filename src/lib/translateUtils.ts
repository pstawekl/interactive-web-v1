import { translations } from "./translations";

export type Language = 'pl' | 'en';

type TranslationValue = string | { [key: string]: TranslationValue };
type TranslationsType = {
    [K in Language]: {
        [key: string]: TranslationValue;
    };
};

const LANGUAGE_KEY = 'app-language';
const DEFAULT_LANGUAGE: Language = 'pl';

export const getStoredLanguage = (): Language => {
    const storedLang = localStorage.getItem(LANGUAGE_KEY);
    return (storedLang as Language) || DEFAULT_LANGUAGE;
};

export const setStoredLanguage = (lang: Language): void => {
    localStorage.setItem(LANGUAGE_KEY, lang);
};

export const getTranslation = (key: string, language: Language): string => {
    try {
        const translationsTyped = translations as TranslationsType;
        const keys = key.split('.');
        
        let translation: TranslationValue | null = translationsTyped[language];
        for (const k of keys) {
            if (typeof translation === 'object' && translation !== null) {
                translation = translation[k] || null;
            } else {
                translation = null;
                break;
            }
        }
        
        if (typeof translation !== 'string') {
            // Fallback to default language
            translation = translationsTyped[DEFAULT_LANGUAGE];
            for (const k of keys) {
                if (typeof translation === 'object' && translation !== null) {
                    translation = translation[k] || null;
                } else {
                    translation = null;
                    break;
                }
            }
        }
        
        if (typeof translation !== 'string') {
            console.warn(`Missing translation for key: ${key} in both ${language} and ${DEFAULT_LANGUAGE}`);
            return key;
        }
        
        return translation;
    } catch (error) {
        console.error(`Error getting translation for key: ${key}`, error);
        return key;
    }
};