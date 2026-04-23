"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-dark text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/amarchi_logo.png"
                alt="AM Archi Vision"
                width={260}
                height={90}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary/70 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {t.footer.navLabel}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {t.footer.contactLabel}
            </h3>
            <ul className="space-y-3 text-primary/70">
              <li>Amarchi01@gmail.com</li>
              <li>+212 660364728</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/@34.6887966,-1.9160654,21z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Maroc, Oujda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary/50 text-sm">
            &copy; {new Date().getFullYear()} AM Archi Vision. {t.footer.copyright}
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary/70 hover:text-accent hover:border-accent/30 transition-all duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/212660364728?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services.%20J%27aimerais%20en%20savoir%20plus."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary/70 hover:text-accent hover:border-accent/30 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary/70 hover:text-accent hover:border-accent/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
