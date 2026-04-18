import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
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
              We design spaces that inspire. From concept to completion, AM Archi Vision delivers architectural excellence that transforms how people live, work, and connect.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
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
              Contact
            </h3>
            <ul className="space-y-3 text-primary/70">
              <li>Amarchi01@gmail.com</li>
              <li>+212 606882624</li>
              <li>Algiers, Algeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary/50 text-sm">
            &copy; {new Date().getFullYear()} AM Archi Vision. All rights reserved.
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
              href="https://wa.me/212606882624"
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
