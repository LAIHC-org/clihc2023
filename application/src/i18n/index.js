import { createI18n } from "vue-i18n";

import es from "./locales/es.json"
import en from "./locales/en.json"
import pt from "./locales/pt.json"

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {en, es, pt}
})