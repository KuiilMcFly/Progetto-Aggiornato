import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      title: 'Ciao, mondo!',
      description: 'Sono un testo in Italiano',
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
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',                                                                                      
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
      description: 'Lorem Ipsum est simplement un faux texte de l industrie de l impression et de la composition. Le Lorem Ipsum est le texte factice standard de l industrie depuis les années 1500, lorsqu un imprimeur inconnu a pris une galère de caractères et l a brouillé pour en faire un livre de spécimens de caractères. Il a survécu non seulement à cinq siècles, mais aussi au saut dans la composition électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker comprenant des versions de Lorem Ipsum.Lorem Ipsum est simplement un faux texte de l industrie de l impression et de la composition. Le Lorem Ipsum est le texte factice standard de l industrie depuis les années 1500, lorsqu un imprimeur inconnu a pris une galère de caractères et l a brouillé pour en faire un livre de spécimens de caractères. Il a survécu non seulement à cinq siècles, mais aussi au saut dans la composition électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker comprenant des versions de Lorem Ipsum.Lorem Ipsum est simplement un faux texte de l industrie de l impression et de la composition. Le Lorem Ipsum est le texte factice standard de l industrie depuis les années 1500, lorsqu un imprimeur inconnu a pris une galère de caractères et l a brouillé pour en faire un livre de spécimens de caractères. Il a survécu non seulement à cinq siècles, mais aussi au saut dans la composition électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker comprenant des versions de Lorem Ipsum.Lorem Ipsum est simplement un faux texte de l industrie de l impression et de la composition. Le Lorem Ipsum est le texte factice standard de l industrie depuis les années 1500, lorsqu un imprimeur inconnu a pris une galère de caractères et l a brouillé pour en faire un livre de spécimens de caractères. Il a survécu non seulement à cinq siècles, mais aussi au saut dans la composition électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker comprenant des versions de Lorem Ipsum.',
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
      description: 'Lorem Ipsum ist lediglich ein Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 15. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere mit Schriften nahm und sie vermischte, um ein Schriftmusterbuch herzustellen. Es hat nicht nur fünf Jahrhunderte, sondern auch den Sprung in den elektronischen Schriftsatz im Wesentlichen unverändert überstanden. Es wurde in den 1960er Jahren mit der Veröffentlichung von Letraset-Blättern mit Lorem-Ipsum-Passagen und in jüngerer Zeit mit Desktop-Publishing-Software wie Aldus PageMaker, einschließlich Versionen von Lorem Ipsum, populär gemacht.Lorem Ipsum ist lediglich ein Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 15. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere mit Schriften nahm und sie vermischte, um ein Schriftmusterbuch herzustellen. Es hat nicht nur fünf Jahrhunderte, sondern auch den Sprung in den elektronischen Schriftsatz im Wesentlichen unverändert überstanden. Es wurde in den 1960er Jahren mit der Veröffentlichung von Letraset-Blättern mit Lorem-Ipsum-Passagen und in jüngerer Zeit mit Desktop-Publishing-Software wie Aldus PageMaker, einschließlich Versionen von Lorem Ipsum, populär gemacht.Lorem Ipsum ist lediglich ein Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 15. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere mit Schriften nahm und sie vermischte, um ein Schriftmusterbuch herzustellen. Es hat nicht nur fünf Jahrhunderte, sondern auch den Sprung in den elektronischen Schriftsatz im Wesentlichen unverändert überstanden. Es wurde in den 1960er Jahren mit der Veröffentlichung von Letraset-Blättern mit Lorem-Ipsum-Passagen und in jüngerer Zeit mit Desktop-Publishing-Software wie Aldus PageMaker, einschließlich Versionen von Lorem Ipsum, populär gemacht.Lorem Ipsum ist lediglich ein Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 15. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere mit Schriften nahm und sie vermischte, um ein Schriftmusterbuch herzustellen. Es hat nicht nur fünf Jahrhunderte, sondern auch den Sprung in den elektronischen Schriftsatz im Wesentlichen unverändert überstanden. Es wurde in den 1960er Jahren mit der Veröffentlichung von Letraset-Blättern mit Lorem-Ipsum-Passagen und in jüngerer Zeit mit Desktop-Publishing-Software wie Aldus PageMaker, einschließlich Versionen von Lorem Ipsum, populär gemacht.Lorem Ipsum ist lediglich ein Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 15. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere mit Schriften nahm und sie vermischte, um ein Schriftmusterbuch herzustellen. Es hat nicht nur fünf Jahrhunderte, sondern auch den Sprung in den elektronischen Schriftsatz im Wesentlichen unverändert überstanden. Es wurde in den 1960er Jahren mit der Veröffentlichung von Letraset-Blättern mit Lorem-Ipsum-Passagen und in jüngerer Zeit mit Desktop-Publishing-Software wie Aldus PageMaker, einschließlich Versionen von Lorem Ipsum, populär gemacht.',
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
