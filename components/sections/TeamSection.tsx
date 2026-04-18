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
              className="group relative h-[420px] rounded-sm overflow-hidden cursor-pointer"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-[2px] bg-accent mb-6" />
                <h3 className="text-2xl font-semibold text-primary">{member.name}</h3>
                <p className="mt-2 text-accent text-sm font-medium tracking-wide uppercase">{member.role}</p>
                <p className="mt-4 text-primary/80 text-sm leading-relaxed max-w-xs text-center">{member.bio}</p>
                <div className="w-12 h-[2px] bg-accent mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
