import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '@/locales/en.json'
import cs from '@/locales/cs.json'
import de from '@/locales/de.json'
import es from '@/locales/es.json'
import pl from '@/locales/pl.json'
import sk from '@/locales/sk.json'
import fr from '@/locales/fr.json'
import it from '@/locales/it.json'
import nl from '@/locales/nl.json'
import pt from '@/locales/pt.json'
import hu from '@/locales/hu.json'
import ro from '@/locales/ro.json'

export const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  cs: { name: 'Čeština', flag: '🇨🇿' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Español', flag: '🇪🇸' },
  pl: { name: 'Polski', flag: '🇵🇱' },
  sk: { name: 'Slovenčina', flag: '🇸🇰' },
  fr: { name: 'Français', flag: '🇫🇷' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  pt: { name: 'Português', flag: '🇵🇹' },
  hu: { name: 'Magyar', flag: '🇭🇺' },
  ro: { name: 'Română', flag: '🇷🇴' },
}

const resources = {
  en: { translation: en },
  cs: { translation: cs },
  de: { translation: de },
  es: { translation: es },
  pl: { translation: pl },
  sk: { translation: sk },
  fr: { translation: fr },
  it: { translation: it },
  nl: { translation: nl },
  pt: { translation: pt },
  hu: { translation: hu },
  ro: { translation: ro },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
