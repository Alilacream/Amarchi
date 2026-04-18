"use client";

import { useState } from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
      <main className="pt-24">
      <section className="relative py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Contact Us
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-tight max-w-3xl">
            Let us start a{" "}
            <span className="text-accent">conversation</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            Whether you have a project in mind or simply want to explore possibilities, 
            we would love to hear from you. Reach out and let us create something remarkable together.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-dark mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="+213 555 123 456"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="architecture">Architectural Design</option>
                      <option value="interior">Interior Design</option>
                      <option value="urban">Urban Planning</option>
                      <option value="3d">3D Visualization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    Office
                  </h3>
                  <p className="text-muted leading-relaxed">
                    AM Archi Vision
                    <br />
                    Algiers, Algeria
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:Amarchi01@gmail.com"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    Amarchi01@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+212606882624"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    +212 606882624
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    Working Hours
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                    <br />
                    Friday - Saturday: Closed
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary/50 border border-border rounded-sm flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://wa.me/212606882624"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary/50 border border-border rounded-sm flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary/50 border border-border rounded-sm flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
