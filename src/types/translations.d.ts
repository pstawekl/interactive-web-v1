type Language = 'pl' | 'en';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}