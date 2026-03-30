import type { Metadata } from "next";
import HomePage from "@/app/_localized/HomePage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/",
  title: "Wenting Shi 石文婷 | Steinway Artist - Official Website",
  description:
    "Steinway Artist Wenting Shi is an internationally acclaimed pianist known for her refined artistry and distinctive musical voice.",
});

export default function Page() {
  return <HomePage locale="en" />;
}
