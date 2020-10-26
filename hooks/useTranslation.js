import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import strings from '../config/i18n/strings';
import { defaultLocale } from '../config/i18n/config';

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function t(key) {
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || '';
  }

  return {
    t,
    locale,
  };
}
