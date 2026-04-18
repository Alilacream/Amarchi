import Image from "next/image";
import { teamMembers } from "@/lib/data";

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Notre Équipe
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
            Les esprits derrière la{" "}
            <span className="text-accent">vision</span>
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Une équipe de professionnels dévoués unis par une passion commune pour le design exceptionnel 
            et un engagement à repousser les limites de ce que l'architecture peut accomplir.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-primary rounded-sm border border-border overflow-hidden hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
  );
}
