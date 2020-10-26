import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { isLocale } from '../config/i18n/types';

export const LocaleContext = createContext({
  locale: 'en',
  setLocale: () => null,
});

export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  useEffect(() => {
    console.log(locale);
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
