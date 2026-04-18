import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ClientProviders from "@/components/ui/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AM Archi Vision — Architecture, Design & Urbanisme",
  description: "AM Archi Vision transforme les idées ambitieuses en réalités architecturales. Avec précision, créativité et excellence, nous concevons des environnements qui inspirent les générations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientProviders>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
