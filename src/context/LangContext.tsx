'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import es from '@/translations/es';
import en from '@/translations/en';

type Lang = 'es' | 'en';
type Translations = typeof es;

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof Translations) => string;
}

const translations: Record<Lang, Translations> = { es, en };

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('portfolio-lang') as Lang | null;
      if (stored === 'es' || stored === 'en') {
        setLangState(stored);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('portfolio-lang', newLang);
    } catch {
      // localStorage not available
    }
  }, []);

  const t = useCallback(
    (key: keyof Translations): string => {
      return translations[lang][key] ?? key;
    },
    [lang]
  );

  // Prevent hydration mismatch: render with default 'es' until mounted
  const value: LangContextValue = {
    lang: mounted ? lang : 'es',
    setLang,
    t,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return ctx;
}
