"use client";

import { Locale } from "@/data/localization";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type LanguageContextType = {
  locale: Locale;
  setLocale: (lang: Locale) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLocale
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (lang: Locale) => {
    setLocaleState(lang);
    localStorage.setItem("language", lang);
    const newPathname = pathname.replace(`/${locale}`, `/${lang}`);
    router.push(newPathname);
  };

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
