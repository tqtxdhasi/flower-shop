import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { shopPhone } from "./data/mainData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kwiaciarnia Kraków Online | Bukiety z Dostawą i Odbiorem",
  description:
    "Zamów kwiaty online w Krakowie z darmowym odbiorem osobistym lub ekspresową dostawą. Kwiaty na każdą okazję.",
  metadataBase: new URL("https://krakow-kwiaciarnia.pl"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "kwiaciarnia Kraków",
    "kwiaty online Kraków",
    "dostawa kwiatów",
    "odbiór osobisty kwiatów",
  ],
  authors: [{ name: "Kwiaciarnia Kraków" }],
  publisher: "Kwiaciarnia Kraków Online",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kwiaciarnia Kraków Online",
    description:
      "Zamów kwiaty online z dostawą lub odbiorem osobistym w Krakowie.",
    url: "https://krakow-kwiaciarnia.pl",
    images: [
      {
        url: "https://krakow-kwiaciarnia.pl/og-image.jpg",
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
    images: ["https://krakow-kwiaciarnia.pl/og-image.jpg"],
  },
};
const sitelinksSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Strona Główna",
    url: "https://krakow-kwiaciarnia.pl/",
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Regulamin",
    url: "https://krakow-kwiaciarnia.pl/regulamin",
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Róże i Bukiety",
    url: "https://krakow-kwiaciarnia.pl/kwiaty/roze",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": "https://krakow-kwiaciarnia.pl#florist",
  name: "Kwiaciarnia Kraków Online",
  url: "https://krakow-kwiaciarnia.pl",
  description:
    "Zamów kwiaty online z dostawą lub darmowym odbiorem osobistym w Krakowie.",
  telephone: shopPhone,
  image: "https://krakow-kwiaciarnia.pl/og-image.jpg",
  priceRange: "$",
  areaServed: {
    "@type": "Place",
    name: "Kraków",
  },
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Odbiór osobisty",
      },
      availability: "https://schema.org/InStorePickup",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0.00",
        priceCurrency: "PLN",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Dostawa kwiatów",
      },
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "DeliveryChargeSpecification",
        price: "20.00",
        priceCurrency: "PLN",
      },
    },
  ],
  pickupLocation: {
    "@type": "Place",
    name: "Punkt Odbioru – Urzędnicza 14",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Urzędnicza 14",
      addressLocality: "Kraków",
      postalCode: "30-051",
      addressCountry: "PL",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Urzędnicza 14",
    addressLocality: "Kraków",
    postalCode: "30-051",
    addressCountry: "PL",
  },
  hasMap:
    "https://www.google.com/maps/place/Urzędnicza+14,+30-051+Kraków/@50.0686091,19.9179472,21z",
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
          id="florist-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <Script
          id="sitelinks-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
