"use client";

import Link from "next/link";
import { useLang } from "@/components/ui/LanguageProvider";

export default function ContactCtaSection() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 bg-dark text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t.contactCta.tag}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {t.contactCta.h2a}{" "}
            <span className="text-accent">{t.contactCta.h2accent}</span>{" "}
            {t.contactCta.h2b}
          </h2>
          <p className="mt-6 text-primary/70 text-lg leading-relaxed">
            {t.contactCta.description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-dark font-semibold rounded-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              {t.contactCta.btn1}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-dark transition-all duration-200"
            >
              {t.contactCta.btn2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
