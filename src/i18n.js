import i18next from 'i18next';

import en from '../locales/en.json';
import es from '../locales/es.json';
import ua from '../locales/ua.json';

export default i18next.init({
  lng: 'en',
  fallbackLng: false,
  resources: {
    en: JSON.parse(en),
    es: JSON.parse(es),
    ua: JSON.parse(ua),
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
  global.console.log({ en, es, ua });
  global.console.error('Locales successfully initialized');
});
