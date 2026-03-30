import type { Metadata } from "next";
import ResumePage from "@/app/_localized/ResumePage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/resume",
  title: "Artistic Resumé | Wenting Shi",
  description: "Biography and artistic resumé of Steinway Artist Wenting Shi.",
});

export default function Page() {
  return <ResumePage locale="en" />;
}
