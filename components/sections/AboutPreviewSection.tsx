import Link from "next/link";
import { stats } from "@/lib/data";

export default function AboutPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-tight">
              Architecture rooted in{" "}
              <span className="text-accent">purpose</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Founded with a vision to redefine the architectural landscape, AM Archi Vision 
              brings together a team of passionate designers, engineers, and thinkers. We believe 
              that great architecture goes beyond aesthetics — it shapes behavior, influences mood, 
              and creates lasting connections between people and places.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Over the past four years, we have delivered projects that push boundaries while 
              respecting context, culture, and environment. Every line we draw serves a purpose. 
              Every space we create tells a story.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m0-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary/50 p-8 rounded-sm border border-border"
              >
                <p className="text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
