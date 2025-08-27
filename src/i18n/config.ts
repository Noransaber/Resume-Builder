import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: { translation: { app: { title: 'Resume Builder', jobs: 'Jobs', dashboard: 'Dashboard', theme: 'Theme' } } },
  fr: { translation: { app: { title: 'Créateur de CV', jobs: 'Emplois', dashboard: 'Tableau de bord', theme: 'Thème' } } },
  ar: { translation: { app: { title: 'منشئ السيرة الذاتية', jobs: 'الوظائف', dashboard: 'لوحة التحكم', theme: 'السمة' } } }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n


