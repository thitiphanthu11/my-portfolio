import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", ...(portfolio.siteUrl ? { allow: "/" } : { disallow: "/" }) }, ...(portfolio.siteUrl ? { sitemap: `${portfolio.siteUrl.replace(/\/$/, "")}/sitemap.xml` } : {}) };
}
