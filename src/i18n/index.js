import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector';
import { messages } from './translations/languages';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(Languagedetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: messages,
    fallbackLng: 'pt',
    defaultNS: ['translations'],
    ns: ['translations'],
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
