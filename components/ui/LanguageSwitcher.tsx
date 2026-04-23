"use client";

import { useLang } from "./LanguageProvider";
import type { Lang } from "@/lib/i18n";

const langLabels: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  ar: "عر",
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language switcher">
      {(["fr", "en", "ar"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-semibold tracking-wide rounded-sm transition-all duration-200 ${
            lang === l
              ? "bg-dark text-primary"
              : "text-muted hover:text-dark hover:bg-secondary"
          }`}
          aria-current={lang === l ? "true" : undefined}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  );
}
