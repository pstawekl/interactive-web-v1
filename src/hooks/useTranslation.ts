import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationValue } from '@/lib/translateUtils';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key: string): TranslationValue => {
    return getTranslation(key, currentLanguage);
  };
  const ts = (key: string): string => {
    const value = getTranslation(key, currentLanguage);
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    return key;
  };

  return { t, ts, currentLanguage };
};