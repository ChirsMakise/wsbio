import type { Metadata } from "next";
import ConcertsListPage from "@/app/_localized/ConcertsListPage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/concerts",
  title: "All Concerts | Wenting Shi",
  description: "Upcoming and past concerts by Steinway Artist Wenting Shi.",
});

export default function Page() {
  return <ConcertsListPage locale="en" />;
}
