import type { MetadataRoute } from "next";

import { getAllServiceSlugs } from "@/lib/services/registry";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://orxio.ai";

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
}

const STATIC_ROUTES: RouteConfig[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

/**
 * Derived from the Service Engine registry rather than hardcoded, so the
 * sitemap can never drift from the routes `app/services/[slug]/page.tsx`
 * actually generates via `generateStaticParams`.
 */
const SERVICE_ROUTES: RouteConfig[] = getAllServiceSlugs().map((slug) => ({
  path: `/services/${slug}`,
  priority: 0.8,
  changeFrequency: "monthly",
}));

const ROUTES: RouteConfig[] = [...STATIC_ROUTES, ...SERVICE_ROUTES];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
