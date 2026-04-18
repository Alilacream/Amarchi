import Image from "next/image";
import { partners } from "@/lib/data";

export default function PartnersSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Collaborations de Confiance
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
            Nos <span className="text-accent">partenaires</span>
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Nous travaillons aux côtés d'entreprises et de spécialistes leaders de l'industrie pour livrer des projets 
            qui surpassent les attentes à chaque étape.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {partners.map((partner) => (
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
              <p className="mt-1 text-sm text-muted text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
