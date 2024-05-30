import { default as i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';

import translations from '@/locales/en/translations.json';

// Set-up react-i18next Type support
// https://react.i18next.com/latest/typescript
export const defaultNS = 'translations';
export const resources = {
  en: {
    translations
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
