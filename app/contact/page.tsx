"use client";

import { useState } from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageProvider";

export default function ContactPage() {
  const { t } = useLang();
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
    alert(t.contact.successMsg);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <main className="pt-24">
      <section className="relative py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t.contact.tag}
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-tight max-w-3xl">
            {t.contact.h1a}{" "}
            <span className="text-accent">{t.contact.h1accent}</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-dark mb-8">{t.contact.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder={t.contact.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder={t.contact.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">{t.contact.servicePlaceholder}</option>
                      {t.contact.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-dark placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-dark text-white font-semibold rounded-sm hover:bg-dark/90 transition-all duration-200 hover:shadow-lg hover:shadow-dark/20"
                >
                  {t.contact.submitBtn}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-8">{t.nav.cta}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    {t.contact.officeLabel}
                  </h3>
                  <a
                    href="https://www.google.com/maps/place/@34.6887966,-1.9160654,21z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    AM Archi Vision
                    <br />
                    Maroc, Oujda
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    {t.contact.emailContactLabel}
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
                    {t.contact.phoneContactLabel}
                  </h3>
                  <a
                    href="tel:+212660364728"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    +212 660364728
                  </a>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                    {t.contact.socialLabel}
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
                      href="https://wa.me/212660364728?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services.%20J%27aimerais%20en%20savoir%20plus."
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
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t.contact.locationTag}
          </p>
          <h2 className="text-3xl font-bold text-dark">{t.contact.locationTitle}</h2>
        </div>
        <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-border">
          <Link
            href="https://www.google.com/maps/place/@34.6887966,-1.9160654,21z"
          >
          <Image
            src="/images/local/local.png"
            alt="Localisation AM Archi Vision - Oujda, Maroc"
            fill
            className="object-cover"
          />
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
