import type { Metadata } from "next";
import HomePage from "@/app/_localized/HomePage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: "/",
  title: "石文婷 | 施坦威艺术家 - 官方网站",
  description: "施坦威艺术家石文婷是一位享誉国际的钢琴家，以细腻的艺术表现力与独特的音乐语言而闻名。",
});

export default function Page() {
  return <HomePage locale="zh" />;
}
