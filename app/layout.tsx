import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Recommended: use generateMetadata() if dynamic logic is needed
export const metadata: Metadata = {
  title: "Kwiaciarnia Kraków Online | Bukiety z Dostawą i Odbiorem",
  description:
    "Zamów kwiaty online w Krakowie z darmowym odbiorem osobistym lub ekspresową dostawą. Kwiaty na każdą okazję.",
  keywords: [
    "kwiaciarnia Kraków",
    "kwiaty online Kraków",
    "dostawa kwiatów",
    "odbiór osobisty kwiatów",
  ],
  metadataBase: new URL("https://krakow-kwiaciarnia.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kwiaciarnia Kraków Online",
    description:
      "Zamów kwiaty online z dostawą lub odbiorem osobistym w Krakowie.",
    url: "https://krakow-kwiaciarnia.pl",
    images: [
      {
        url: "https://krakow-kwiaciarnia.pl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwiaciarnia Kraków Online",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwiaciarnia Kraków Online",
    description:
      "Zamów kwiaty online z dostawą lub odbiorem osobistym w Krakowie.",
    images: ["https://krakow-kwiaciarnia.pl/images/og-image.jpg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Kwiaciarnia Kraków Online",
  url: "https://krakow-kwiaciarnia.pl",
  image: "https://krakow-kwiaciarnia.pl/images/og-image.jpg",
  telephone: "+48 123 456 789",
  description:
    "Zamów kwiaty online z dostawą lub darmowym odbiorem osobistym w Krakowie.",
  areaServed: {
    "@type": "Place",
    name: "Kraków",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStorePickup",
  },
  hasMap: "https://goo.gl/maps/YOUR_MAP_LINK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ SEO Schema - Correct placement */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
