"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

const categories = ["Tous", "Résidentiel", "Commercial", "Public", "Urbanisme", "Intérieur"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24">
      <section className="relative py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Notre Portfolio
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-tight max-w-3xl">
            Des projets qui{" "}
            <span className="text-accent">définissent</span> les espaces
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            Chaque projet de notre portfolio représente un défi unique rencontré avec des solutions créatives, 
            une précision technique et un engagement inébranlable envers l'excellence du design.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-secondary/50 text-muted hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-sm border border-border hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-semibold tracking-wider uppercase rounded-sm mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-primary">
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
