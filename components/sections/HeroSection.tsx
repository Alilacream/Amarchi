"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageProvider";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="City skyline at dusk"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-6">
            {t.hero.tag}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            {t.hero.h1}
            <br />
            {t.hero.h1b}{" "}
            <span className="text-accent">{t.hero.h1accent}</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-primary/80 max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-primary text-dark font-semibold rounded-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              {t.hero.btn1}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-dark transition-all duration-200"
            >
              {t.hero.btn2}
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {[
            { value: "4+", label: t.hero.statYears },
            { value: "10+", label: t.hero.statProjects },
            { value: "4+", label: t.hero.statPartners },
            { value: "6", label: t.hero.statTeam },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-primary/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
