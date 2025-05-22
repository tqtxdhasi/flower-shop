import type { MetadataRoute } from "next";
import { HEIGHTS, QUANTITIES, COLOR_OPTIONS } from "./kwiaty/roze/roseData";

const baseUrl = "https://www.krakow-kwiaciarnia.pl";

const locales: string[] = []; // e.g., ['pl', 'en']
const pages: string[] = ["", "kwiaty/roze"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Static pages
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

  // Dynamic product pages
  for (const height of HEIGHTS) {
    for (const quantity of QUANTITIES) {
      for (const color of COLOR_OPTIONS) {
        const slug = `bukiet-${quantity}-${color.slug}-roz-${height}-cm`;
        urls.push({
          url: `${baseUrl}/${slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  return urls;
}
