"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations["fr"];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

function HtmlSync({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("amarchi-lang") as Lang | null;
    if (saved && ["fr", "en", "ar"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("amarchi-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <HtmlSync lang={lang} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
