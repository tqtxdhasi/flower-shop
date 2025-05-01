// app/sitemap.ts

import type { MetadataRoute } from "next";

const locales: string[] = []; // Przykład: ['pl', 'en', 'de']
const pages: string[] = ["", "kwiaty/roze"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.krakow-kwiaciarnia.pl";
  const urls: MetadataRoute.Sitemap = [];

  if (locales.length === 0) {
    for (const page of pages) {
      const path = page ? `/${page}` : "";
      urls.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      });
    }
  } else {
    for (const locale of locales) {
      for (const page of pages) {
        const path = page ? `/${locale}/${page}` : `/${locale}`;
        urls.push({
          url: `${baseUrl}${path}`,
          lastModified: new Date(),
          changeFrequency: "daily",
          priority: 0.8,
        });
      }
    }
  }

  return urls;
}
