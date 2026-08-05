import type { MetadataRoute } from "next";

const BASE = "https://vatule.com";

const ROUTES: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] =
  [
    ["", 1, "weekly"],
    ["/about", 0.9, "monthly"],
    ["/suites", 0.9, "monthly"],
    ["/amenities", 0.9, "monthly"],
    ["/gallery", 0.8, "monthly"],
    ["/location", 0.8, "monthly"],
    ["/rates", 0.9, "weekly"],
    ["/contact", 0.8, "monthly"],
    ["/privacy", 0.2, "yearly"],
    ["/terms", 0.2, "yearly"],
  ];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
