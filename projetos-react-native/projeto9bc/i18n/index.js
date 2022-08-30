import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules} from 'react-native';
import {enUS, ptBR} from './translations';

const resources = {
  en_US: {translation: enUS},
  pt_BR: {translation: ptBR},
};

i18n.use(initReactI18next).init({
  lng: NativeModules.I18nManager.localeIdentifier,
  resources,
  fallbackLng: 'en_US',
  interpolation: {escapeValue: false},
  compatibilityJSON: 'v3',
});

export default i18n;
