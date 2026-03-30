import type { Metadata } from "next";
import NewsListPage from "@/app/_localized/NewsListPage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: "/news",
  title: "全部新闻 | 石文婷",
  description: "施坦威艺术家石文婷的新闻与公告。",
});

export default function Page() {
  return <NewsListPage locale="zh" />;
}
