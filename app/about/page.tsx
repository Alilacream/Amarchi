import Image from "next/image";
import Link from "next/link";
import { teamMembers, stats } from "@/lib/data";

export const metadata = {
  title: "À Propos | AM Archi Vision",
  description: "Découvrez AM Archi Vision — notre histoire, notre équipe et notre engagement envers l'excellence architecturale.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="relative py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            À Propos
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-tight max-w-3xl">
            Construire demain,{" "}
            <span className="text-accent">aujourd'hui</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            AM Archi Vision est plus qu'un cabinet d'architecture — nous sommes un collectif de rêveurs, 
            bâtisseurs et innovateurs engagés à façonner des espaces qui élèvent l'expérience humaine.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-dark">Notre Histoire</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  AM Archi Vision est née d'une conviction simple : l'architecture a le pouvoir 
                  de transformer les vies. Fondée par Amine Amara, notre firme s'est donnée pour mission de challenger 
                  la pensée design conventionnelle et de créer des espaces aussi fonctionnels qu' 
                  esthétiques.
                </p>
                <p>
                  Au cours des quatre dernières années, nous sommes passés d'un petit studio à un cabinet d'architecture 
                  full-service avec un portfolio diversifié couvrant des projets résidentiels, commerciaux 
                  et publics. Chaque projet reflète notre engagement envers la précision, 
                  l'innovation et la sensibilité contextuelle.
                </p>
                <p>
                  Notre partenariat avec Amastroy, dirigé par Abdoulhak Amara, renforce notre capacité 
                  à livrer des projets du concept à la construction avec une coordination fluide 
                  et une qualité sans compromis. Ensemble avec Salah din Amara et notre équipe en croissance, 
                  nous continuons à repousser les limites de ce que l'architecture peut accomplir.
                </p>
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-[400px] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
                alt="Modern architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-primary rounded-sm border border-border"
              >
                <p className="text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Direction
            </p>
            <h2 className="text-3xl font-bold text-dark">Rencontrez l'Équipe</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-secondary/30 rounded-sm border border-border overflow-hidden hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark">{member.name}</h3>
                  <p className="mt-1 text-accent text-sm font-medium">{member.role}</p>
                  <p className="mt-3 text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-dark text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Vous voulez travailler{" "}
              <span className="text-accent">avec nous</span> ?
            </h2>
            <p className="mt-4 text-primary/70 leading-relaxed">
              Nous sommes toujours à la recherche de talents qui partagent notre passion pour 
              le design exceptionnel. Que vous soyez architecte, designer ou ingénieur — 
              nous serions ravis de vous entendre.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all duration-200"
              >
                Contactez-Nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
