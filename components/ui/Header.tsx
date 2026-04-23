"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "./LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLang();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/projects", label: t.nav.projects },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Logo />

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-dark hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-6 py-2.5 bg-dark text-white text-sm font-semibold rounded-sm hover:bg-dark/90 transition-colors duration-200"
            >
              {t.nav.cta}
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-dark hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-2">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-dark text-white text-sm font-semibold rounded-sm hover:bg-dark/90 transition-colors duration-200 mt-2"
              >
                {t.nav.mobileCta}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
