import Link from "next/link";
import { stats } from "@/lib/data";

export default function AboutPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Qui Sommes-Nous
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
              Une architecture enracinée dans{" "}
              <span className="text-accent">le propósito</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Fondée avec la vision de redéfinir le paysage architectural, AM Archi Vision 
              réunit une équipe de designers, ingénieurs et penseurs passionnés. Nous croyons 
              que la grande architecture va au-delà de l'esthétique — elle façonne les comportements, influence l'humeur, 
              et crée des connexions durables entre les personnes et les lieux.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Au cours des quatre dernières années, nous avons réalisé des projets qui repoussent les limites tout en 
              respectant le contexte, la culture et l'environnement. Chaque ligne que nous traçons sert un propósito. 
              Chaque espace que nous créons raconte une histoire.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
              >
                En savoir plus sur nous
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m0-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary/50 p-8 rounded-sm border border-border"
              >
                <p className="text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
