import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://vatule.com/sitemap.xml",
    host: "https://vatule.com",
  };
}
