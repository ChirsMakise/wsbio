import type { MetadataRoute } from "next";
import { getAllConcerts, getNewsItems } from "@/data/content-i18n";

const siteUrl = "https://www.wentingshi.com";
const withTrailingSlash = (path: string) => `${siteUrl}${path}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const newsEntries = getNewsItems("en").flatMap((news) => [
    { url: withTrailingSlash(`/news/${news.id}`), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: withTrailingSlash(`/zh/news/${news.id}`), changeFrequency: "monthly" as const, priority: 0.5 },
  ]);
  const concertEntries = getAllConcerts("en").flatMap((concert) => [
    { url: withTrailingSlash(`/concerts/${concert.id}`), changeFrequency: "yearly" as const, priority: 0.6 },
    { url: withTrailingSlash(`/zh/concerts/${concert.id}`), changeFrequency: "yearly" as const, priority: 0.5 },
  ]);

  return [
    { url: withTrailingSlash(""), changeFrequency: "monthly", priority: 1 },
    { url: withTrailingSlash("/piano-lessons-wilmette"), changeFrequency: "monthly", priority: 0.9 },
    { url: withTrailingSlash("/news"), changeFrequency: "weekly", priority: 0.8 },
    { url: withTrailingSlash("/concerts"), changeFrequency: "weekly", priority: 0.8 },
    { url: withTrailingSlash("/resume"), changeFrequency: "yearly", priority: 0.6 },
    { url: withTrailingSlash("/zh"), changeFrequency: "monthly", priority: 0.7 },
    { url: withTrailingSlash("/zh/piano-lessons-wilmette"), changeFrequency: "monthly", priority: 0.7 },
    { url: withTrailingSlash("/zh/news"), changeFrequency: "weekly", priority: 0.6 },
    { url: withTrailingSlash("/zh/concerts"), changeFrequency: "weekly", priority: 0.6 },
    { url: withTrailingSlash("/zh/resume"), changeFrequency: "yearly", priority: 0.5 },
    ...newsEntries,
    ...concertEntries,
  ];
}