import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Our Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
              Featured <span className="text-accent">projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200 shrink-0"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m0-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-full min-h-[500px]" : "h-72"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-semibold tracking-wider uppercase rounded-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-primary/70 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-primary/50 text-xs">
                    <span>{project.year}</span>
                    <span>&bull;</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
