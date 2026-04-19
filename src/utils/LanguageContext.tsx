'use client';

// C:\Users\styli\tirumala-mobile\src\utils\LanguageContext.tsx

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

// ✅ Exported so every component can import Lang directly
// instead of re-defining `type Lang = 'en' | 'te'` everywhere
export type Lang = 'en' | 'te';

interface LanguageContextValue {
  /** Current active language */
  lang:    Lang;
  /** Switch the active language */
  setLang: (lang: Lang) => void;
  /** Toggle between 'en' and 'te' */
  toggle:  () => void;
  /** True when Telugu is active */
  isTelugu: boolean;
}

// ─────────────────────────────────────────────
// Context — typed, NO more `any`
// ─────────────────────────────────────────────

// ✅ undefined default — forces useLanguage() to be used inside provider
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// ─────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────
interface LanguageProviderProps {
  children: React.ReactNode;
  /** Optional initial language — useful for SSR/testing */
  defaultLang?: Lang;
}

export const LanguageProvider = ({
  children,
  defaultLang = 'en',
}: LanguageProviderProps) => {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  // ✅ useCallback — stable reference, never changes on re-render
  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'te' : 'en'));
  }, []);

  // ✅ useMemo — value object only re-created when lang changes
  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      isTelugu: lang === 'te',
    }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// ─────────────────────────────────────────────
// Hook — typed, throws if used outside provider
// ─────────────────────────────────────────────
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  // ✅ Runtime guard — catches missing provider during development
  if (context === undefined) {
    throw new Error(
      'useLanguage() must be used inside a <LanguageProvider>.\n' +
      'Wrap your app in <LanguageProvider> in layout.tsx or _app.tsx.'
    );
  }

  return context;
};