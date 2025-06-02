import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { shopDomain, shopName, shopPhone } from "./data/mainData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
  description:
    "Zamów kwiaty online w Krakowie z darmowym odbiorem osobistym lub ekspresową dostawą. Kwiaty na każdą okazję.",
  metadataBase: new URL(shopDomain),
  alternates: {
    canonical: shopDomain,
  },
  keywords: [
    "kwiaciarnia Kraków",
    "online kwiaciarnia Kraków",
    "kwiaciarnia internetowa Kraków",
    "kwiaty online Kraków",
    "dostawa kwiatów",
    "odbiór osobisty kwiatów",
  ],
  authors: [{ name: shopName }],
  publisher: shopName,
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
    title: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
    description:
      "Zamów kwiaty online z dostawą lub odbiorem osobistym w Krakowie.",
    url: shopDomain,
    images: [
      {
        url: `${shopDomain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
    description:
      "Zamów kwiaty online z dostawą lub odbiorem osobistym w Krakowie.",
    images: [`${shopDomain}/og-image.jpg`],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": `${shopDomain}#florist`,
  name: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
  url: shopDomain,
  description:
    "Zamów kwiaty online z dostawą lub darmowym odbiorem osobistym w Krakowie.",
  telephone: shopPhone,
  image: `${shopDomain}/og-image.jpg`,
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
        <Script
          id="florist-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
