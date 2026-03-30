import type { Metadata } from "next";
import NewsListPage from "@/app/_localized/NewsListPage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/news",
  title: "All News | Wenting Shi",
  description: "News and announcements from Steinway Artist Wenting Shi.",
});

export default function Page() {
  return <NewsListPage locale="en" />;
}
