export default function robots() {
  const domain = "https://www.krakow-kwiaciarnia.pl";

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
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
