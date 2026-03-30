import type { Metadata } from "next";
import ResumePage from "@/app/_localized/ResumePage";
import { buildPageMetadata } from "@/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: "/resume",
  title: "艺术简历 | 石文婷",
  description: "施坦威艺术家石文婷的艺术简历与个人介绍。",
});

export default function Page() {
  return <ResumePage locale="zh" />;
}
