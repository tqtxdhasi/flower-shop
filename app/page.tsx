// app/page.tsx

import React from "react";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AvailableFlowers from "./components/AvailableFlowers";
import Regulamin from "../app/components/Regulamin";
import type { Metadata } from "next";
import { shopDomain, shopName } from "./data/mainData";

export const metadata: Metadata = {
  title: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
  description:
    "Zamów kwiaty online w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień. Kwiaty na każdą okazję.",
  metadataBase: new URL(shopDomain),
  alternates: {
    canonical: shopDomain,
  },
  openGraph: {
    title: ` ${shopName} | Kwiaty, Bukiety z Dostawą i Odbiorem`,
    description:
      "Zamów kwiaty online w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień. Kwiaty na każdą okazję.",
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
      "Zamów kwiaty online w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień. Kwiaty na każdą okazję.",
    images: [`${shopDomain}/og-image.jpg`],
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
