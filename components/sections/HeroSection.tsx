import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-6">
            Architecture &bull; Design &bull; Innovation
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-dark leading-tight">
            We shape spaces
            <br />
            that shape{" "}
            <span className="text-accent">lives</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-muted max-w-2xl leading-relaxed">
            AM Archi Vision transforms ambitious ideas into architectural realities. 
            With precision, creativity, and a relentless pursuit of excellence, we design 
            environments that inspire generations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-dark text-dark font-semibold rounded-sm hover:bg-dark hover:text-primary transition-all duration-200"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {[
            { value: "4+", label: "Years" },
            { value: "10+", label: "Projects" },
            { value: "4+", label: "Partners" },
            { value: "6", label: "Team" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
