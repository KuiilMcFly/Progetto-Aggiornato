import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      title: 'Ciao, mondo!',
      description: 'Sono un testo',
      Lingua: 'Lingua',
      Italiano: 'Italiano',
      English: 'Inglese',
      Français: 'Francese',
      Deutsch: 'Tedesco',
      login: "Accedi",
      bluetooth: "Bluetooth"
    },
  },
  en: {
    translation: {
      title: 'Hello, world!',
      description: 'I am a text',                                                                                      
      Lingua: 'Language',
      Italiano: 'Italian',
      English: 'English',
      Français: 'French',
      Deutsch: 'German',
      login: "Login",
      bluetooth: "Bluetooth"
    },
  },
  fr: {
    translation: {
      title: 'Bonjour, monde!',
      description: 'je suis un texte',
      Lingua: 'Langue',
      Italiano: 'Italien',
      English: 'Anglais',
      Français: 'Français',
      Deutsch: 'Allemand',
      login: "Connexion",
      bluetooth: "Bluetooth"
    },
  },
  de: {
    translation: {
      title: 'Hallo Welt!',
      description: 'Ich bin ein Text',
      Lingua: 'Sprache',
      Italiano: 'Italienisch',
      English: 'Englisch',
      Français: 'Französisch',
      Deutsch: 'Deutsch',
      login: "Anmeldung",
      bluetooth: "Bluetooth"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;
