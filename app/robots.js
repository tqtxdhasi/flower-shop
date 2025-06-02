import { shopDomain } from "./data/mainData";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        // Allow the main roses category page
        allow: "/kwiaty/roze",
      },
      // {
      //   userAgent: "*",
      //   // Disallow individual variant pages under /kwiaty/roze/[slug]
      //   disallow: "/kwiaty/roze/bukiet-",
      // },
    ],
    sitemap: `${shopDomain}/sitemap.xml`,
    host: domain,
  };
}
