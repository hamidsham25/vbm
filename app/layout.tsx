import type { Metadata } from "next";
import { Barlow_Condensed, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const grotesk = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: "VB Medienkonzepte · Gebäudereinigung besser aufbauen",
  description:
    "Persönliche 1:1-Begleitung für Unternehmer aus der Gebäudereinigung. Vom Chaos zum klaren Unternehmen. Unternehmer zu Unternehmer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${grotesk.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--ink)] text-[var(--paper)]">
        {children}
      </body>
    </html>
  );
}
