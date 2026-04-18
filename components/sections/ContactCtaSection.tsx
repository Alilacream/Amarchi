import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-dark text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Commencez Votre Parcours
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Prêt à donner vie à votre{" "}
            <span className="text-accent">vision</span> ?
          </h2>
          <p className="mt-6 text-primary/70 text-lg leading-relaxed">
            Chaque grand projet commence par une conversation. Parlez-nous de vos idées, 
            et laissez-nous vous montrer comment nous pouvons les transformer en excellence architecturale.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              Contactez-Nous
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-dark transition-all duration-200"
            >
              Nos Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
