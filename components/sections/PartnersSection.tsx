"use client";

import Image from "next/image";
import { partners } from "@/lib/data";
import { useLang } from "@/components/ui/LanguageProvider";

const partnerKeys = ["amastroy", "hassoune"] as const;

export default function PartnersSection() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t.partnersSection.tag}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
            {t.partnersSection.h2a}{" "}
            <span className="text-accent">{t.partnersSection.h2accent}</span>
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            {t.partnersSection.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {partners.map((partner, i) => {
            const key = partnerKeys[i];
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-sm border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="relative w-40 h-24 mb-4">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-dark text-center">{partner.name}</h3>
                <p className="mt-1 text-sm text-muted text-center">{t.partners[key]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
