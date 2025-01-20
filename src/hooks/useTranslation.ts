import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translateUtils';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key: string): string => {
    return getTranslation(key, currentLanguage);
  };

  return { t, currentLanguage };
};