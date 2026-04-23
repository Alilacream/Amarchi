"use client";

import Link from "next/link";
import AmastroyShowcase from "@/components/sections/AmastroyShowcase";
import { useLang } from "@/components/ui/LanguageProvider";

const iconMap: Record<string, React.ReactNode> = {
  architecture: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  interior: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  urban: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "3d": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

const serviceKeys = ["architecture", "interior", "urban", "3d"] as const;

export default function ServicesPage() {
  const { t } = useLang();
  const sl = t.services.serviceList;

  const services = serviceKeys.map((key) => ({
    key,
    title: sl[key].title,
    desc: sl[key].desc,
    items: sl[key].items,
    icon: key,
  }));

  return (
    <main className="pt-24">
      <section className="relative py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t.services.tag}
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-tight max-w-3xl">
            {t.services.h1a}{" "}
            <span className="text-accent">{t.services.h1accent}</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            {t.services.intro}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.key}
                className={`group p-10 rounded-sm border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${
                  index % 2 === 0 ? "bg-primary" : "bg-secondary/30"
                }`}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-dark">{service.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{service.desc}</p>
                <ul className="mt-6 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AmastroyShowcase />

      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              {t.services.processTag}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark">{t.services.processTitle}</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.process.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-6xl font-bold text-accent/20">{step.step}</span>
                <h3 className="mt-2 text-xl font-semibold text-dark">{step.title}</h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-dark text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              {t.services.ctaH2a}{" "}
              <span className="text-accent">{t.services.ctaH2accent}</span>
            </h2>
            <p className="mt-4 text-primary/70 leading-relaxed">
              {t.services.ctaDesc}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-dark font-semibold rounded-sm hover:bg-primary/90 transition-all duration-200"
              >
                {t.services.ctaBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
