import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { movies } from './movies.en'
import { movie } from './movie.en'
import { actor } from './actor.en'
import { ui } from './ui.en'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        movies,
        movie,
        actor,
        ui,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
