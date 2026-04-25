"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLang } from "@/components/ui/LanguageProvider";

const showcaseImages = [
  {
    src: "/images/services/Amastroy/beton-arme.jpg",
  },
  {
    src: "/images/services/Amastroy/charpente-metallique.png",
  },
  {
    src: "/images/services/Amastroy/controle-suivi.jpg",
  },
];

const INTERVAL = 4000;

export default function AmastroyShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLang();

  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseImages.length);
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section className="py-24 lg:py-32 bg-dark text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              {t.services.partnerTag}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              {t.services.partnerH2a}{" "}
              <span className="text-accent">{t.services.partnerH2accent}</span>{" "}
              {t.services.partnerH2b}
            </h2>
            <p className="mt-6 text-primary/70 leading-relaxed">
              {t.services.partnerDesc}
            </p>
            <div className="mt-8">
              <a
                href="https://amastroy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-semibold rounded-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                {t.services.partnerBtn}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m0-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="relative h-[400px] rounded-sm overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {showcaseImages.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={t.amastroy.captions[i]}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-lg font-medium">{t.amastroy.captions[i]}</p>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 right-6 flex gap-2">
              {showcaseImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-accent w-6" : "bg-primary/40 hover:bg-primary/60"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
