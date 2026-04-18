import Image from "next/image";
import Link from "next/link";
import { teamMembers, stats } from "@/lib/data";

export const metadata = {
  title: "About Us | AM Archi Vision",
  description: "Learn about AM Archi Vision — our story, team, and commitment to architectural excellence.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="relative py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            About Us
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-tight max-w-3xl">
            Building tomorrow,{" "}
            <span className="text-accent">today</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            AM Archi Vision is more than an architecture firm — we are a collective of dreamers, 
            builders, and innovators committed to shaping spaces that elevate the human experience.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-dark">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  AM Archi Vision was born from a simple belief: that architecture has the power 
                  to transform lives. Founded by Amine Amara, our firm set out to challenge 
                  conventional design thinking and create spaces that are as functional as they 
                  are beautiful.
                </p>
                <p>
                  Over the past four years, we have grown from a small studio into a full-service 
                  architecture practice with a diverse portfolio spanning residential, commercial, 
                  and public projects. Each project reflects our commitment to precision, 
                  innovation, and contextual sensitivity.
                </p>
                <p>
                  Our partnership with Amastroy, led by Abdoulhak Amara, strengthens our ability 
                  to deliver projects from concept through construction with seamless coordination 
                  and uncompromising quality. Together with Salah din Amara and our growing team, 
                  we continue to push the boundaries of what architecture can achieve.
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
              Leadership
            </p>
            <h2 className="text-3xl font-bold text-dark">Meet the Team</h2>
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
              Want to work with{" "}
              <span className="text-accent">us</span>?
            </h2>
            <p className="mt-4 text-primary/70 leading-relaxed">
              We are always looking for talented individuals who share our passion for 
              exceptional design. Whether you are an architect, designer, or engineer — 
              we would love to hear from you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
