import i18next from 'i18next';

// to copy all locale files in the build folder
// const locales = require.context('../locales', true, /.json$/);
// locales.keys().forEach(filename => locales(filename));

export default i18next.init({
  lng: 'en',
  fallbackLng: false,
  resources: {
    en: {
      translation: {
        logo: 'BithelaEN',
      },
    },
    es: {
      translation: {
        logo: 'BithelaES',
      },
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
}, (error) => {
  // debugger; // eslint-disable-line
  if (error) {
    global.console.error('Error while locale was loading.', error);
  }
  global.console.error('Locales successfully initialized');
});
