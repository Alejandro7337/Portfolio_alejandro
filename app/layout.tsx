import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alejandro Alba — Front-End Developer para progile",
  description:
    "Estudiante de Ingeniería de Sistemas en Universidad Central Bogotá con experiencia real en GCP + Azure, dos becas académicas y el stack de Next.js 14 + TypeScript que progile necesita.",
  openGraph: {
    title: "Alejandro Alba — Front-End Developer para progile",
    description:
      "Arquitectura multinube real, beca por mérito académico, inglés B2 y el stack exacto de progile. Disponibilidad 40–50 %.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body bg-ink-950 text-surface-text antialiased">
        {children}
      </body>
    </html>
  );
}
