import type { MetadataRoute } from "next";
import { CLINIC } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${CLINIC.baseUrl}/sitemap.xml`,
  };
}
