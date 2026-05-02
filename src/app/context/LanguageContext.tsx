"use client";

import { Locale } from "@/data/localization";
import React, { createContext, useState, useEffect, ReactNode } from "react";

type LanguageContextType = {
  locale: Locale;
  setLocale: (lang: Locale) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("hu");

  useEffect(() => {
    const savedLocale = localStorage.getItem("language") as Locale;
    if (savedLocale && ["hu", "en", "de"].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (lang: Locale) => {
    setLocaleState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
