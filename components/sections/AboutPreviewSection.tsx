"use client";

import Link from "next/link";
import { useLang } from "@/components/ui/LanguageProvider";

const statValues = ["4+", "10+", "4+", "6"];

export default function AboutPreviewSection() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              {t.aboutPreview.tag}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
              {t.aboutPreview.h2a}{" "}
              <span className="text-accent">{t.aboutPreview.h2accent}</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              {t.aboutPreview.desc1}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              {t.aboutPreview.desc2}
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
              >
                {t.aboutPreview.link}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m0-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {t.stats.labels.map((label, i) => (
              <div
                key={label}
                className="bg-secondary/50 p-8 rounded-sm border border-border"
              >
                <p className="text-4xl font-bold text-accent">{statValues[i]}</p>
                <p className="mt-2 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
