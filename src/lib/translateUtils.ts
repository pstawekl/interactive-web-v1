import { translations } from "./translations";

export type Language = 'pl' | 'en';

export type TranslationValue = string | number | boolean | Array<any> | { [key: string]: TranslationValue };
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

export const getTranslation = (key: string, language: Language): TranslationValue => {
    try {
        const translationsTyped = translations as TranslationsType;
        const keys = key.split('.');
        
        let translation: TranslationValue | null = translationsTyped[language];
        for (const k of keys) {
            if (typeof translation === 'object' && translation !== null && !Array.isArray(translation)) {
                translation = translation[k] || null;
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation === null) {
            // Fallback to default language
            translation = translationsTyped[DEFAULT_LANGUAGE];
            for (const k of keys) {
                if (typeof translation === 'object' && translation !== null && !Array.isArray(translation)) {
                    translation = translation[k] || null;
                } else {
                    translation = null;
                    break;
                }
            }
        }
        
        if (translation === null || translation === undefined) {
            console.warn(`Missing translation for key: ${key} in both ${language} and ${DEFAULT_LANGUAGE}`);
            return key;
        }
        
        return translation;
    } catch (error) {
        console.error(`Error getting translation for key: ${key}`, error);
        return key;
    }
};