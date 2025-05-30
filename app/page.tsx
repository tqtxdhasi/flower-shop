// app/page.tsx

import React from "react";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AvailableFlowers from "./components/AvailableFlowers";
import Regulamin from "../app/components/Regulamin";
import type { Metadata } from "next";

// ✅ Static metadata — App Router compatible
export const metadata: Metadata = {
  title: "Kwiaciarnia Kraków Online | Bukiety z Dostawą i Odbiorem",
  description:
    "Zamów kwiaty online z ekspresową dostawą lub darmowym odbiorem osobistym w Krakowie. Najpiękniejsze bukiety na każdą okazję.",
  metadataBase: new URL("https://www.krakow-kwiaciarnia.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kwiaciarnia Kraków Online | Bukiety z Dostawą",
    description:
      "Zamów kwiaty online z darmowym odbiorem osobistym lub ekspresową dostawą w Krakowie.",
    url: "https://www.krakow-kwiaciarnia.pl",
    images: [
      {
        url: "https://www.krakow-kwiaciarnia.pl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwiaty w Krakowie",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwiaciarnia Kraków Online",
    description:
      "Bukiety z dostawą lub odbiorem osobistym. Zamów online w Krakowie.",
    images: ["https://www.krakow-kwiaciarnia.pl/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="font-sans bg-white p-3 flex flex-col gap-3">
      <HeroSection />
      <WhyChooseUs />
      <AvailableFlowers />
      <Regulamin />
    </main>
  );
}
