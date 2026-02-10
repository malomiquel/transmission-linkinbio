import type { Metadata } from "next";
import Script from "next/script";
import { Audiowide, Inter } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transmission - L'art de faire revivre",
  description:
    "Association d'événements immersifs autour du Vin, de l'Art et de la Musique.",
  openGraph: {
    title: "Transmission - L'art de faire revivre",
    description: "Vin, Art, Musique - Découvrez nos événements immersifs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${audiowide.variable} ${inter.variable} antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            defer
            src="/stats/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </body>
    </html>
  );
}
