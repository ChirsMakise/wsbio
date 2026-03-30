import type { Metadata } from "next";
import ConcertsListPage from "@/app/_localized/ConcertsListPage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: "/concerts",
  title: "全部音乐会 | 石文婷",
  description: "施坦威艺术家石文婷的近期与往期音乐会信息。",
});

export default function Page() {
  return <ConcertsListPage locale="zh" />;
}
