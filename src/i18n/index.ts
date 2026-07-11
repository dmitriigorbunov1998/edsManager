/**
 * =====================================================
 * i18n — Интернационализация
 * =====================================================
 */

import ru from './locales/ru.json';
import en from './locales/en.json';

export type Language = 'ru' | 'en';

const translations: Record<Language, Record<string, string>> = {
  ru,
  en,
};

let currentLanguage: Language = 'ru';

export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  localStorage.setItem('eds_language', lang);
  document.documentElement.setAttribute('lang', lang);
}

export function getLanguage(): Language {
  const saved = localStorage.getItem('eds_language') as Language | null;

  if (saved && (saved === 'ru' || saved === 'en')) {
    currentLanguage = saved;
  }

  return currentLanguage;
}

export function t(key: string, params?: Record<string, string | number>): string {
  const translation = translations[currentLanguage][key] || translations['ru'][key] || key;

  if (!params) return translation;

  return Object.entries(params).reduce(
    (acc, [k, v]) => acc.replace(`{${k}}`, String(v)),
    translation
  );
}

import { useState, useEffect, useCallback } from 'react';

export function useTranslation() {
  const [lang, setLang] = useState<Language>(getLanguage);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const changeLanguage = useCallback((newLang: Language) => {
    setLanguage(newLang);
    setLang(newLang);
  }, []);

  const translate = useCallback((key: string, params?: Record<string, string | number>) => {
    return t(key, params);
  }, []);

  return {
    t: translate,
    lang,
    setLang: changeLanguage,
    isRu: lang === 'ru',
    isEn: lang === 'en',
  };
}