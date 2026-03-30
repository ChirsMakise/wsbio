import type { Metadata } from "next";
import NewsDetailPage from "@/app/_localized/NewsDetailPage";
import { getNewsItems } from "@/data/content-i18n";
import { buildPageMetadata } from "@/i18n/seo";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getNewsItems("en").map((news) => ({
    slug: news.id,
  }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsItems("zh").find((item) => item.id === slug);

  if (!news) {
    return buildPageMetadata({
      locale: "zh",
      path: "/news",
      title: "新闻 | 石文婷",
      description: "施坦威艺术家石文婷的新闻与公告。",
    });
  }

  return buildPageMetadata({
    locale: "zh",
    path: `/news/${slug}`,
    title: `${news.title} | 石文婷`,
    description: news.description?.slice(0, 160) || "施坦威艺术家石文婷的新闻与公告。",
  });
}

export default function Page({ params }: NewsPageProps) {
  return <NewsDetailPage locale="zh" params={params} />;
}
