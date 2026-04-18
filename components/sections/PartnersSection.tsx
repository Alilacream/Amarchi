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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-sm border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
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
