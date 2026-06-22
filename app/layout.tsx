import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
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
  title: "Alejandro Alba — Front-End Developer | progile",
  description:
    "Systems Engineering student at Universidad Central, Bogotá. Scholarship recipient, Google Cloud certified, currently building with Next.js 14.2 + TinaCMS. Applying for the Front-End Developer role at progile / TestResults.",
  openGraph: {
    title: "Alejandro Alba — Front-End Developer | progile",
    description:
      "Real cloud architecture experience, two academic scholarships, B2 English, and the exact stack progile ships. Available 40–50%.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body bg-ink-950 text-surface-text antialiased overflow-x-hidden">
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
