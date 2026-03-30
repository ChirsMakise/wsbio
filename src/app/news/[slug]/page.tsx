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
  const news = getNewsItems("en").find((item) => item.id === slug);

  if (!news) {
    return buildPageMetadata({
      locale: "en",
      path: "/news",
      title: "News | Wenting Shi",
      description: "News and announcements from Steinway Artist Wenting Shi.",
    });
  }

  return buildPageMetadata({
    locale: "en",
    path: `/news/${slug}`,
    title: `${news.title} | Wenting Shi`,
    description: news.description?.slice(0, 160) || "News and announcements from Steinway Artist Wenting Shi.",
  });
}

export default function Page({ params }: NewsPageProps) {
  return <NewsDetailPage locale="en" params={params} />;
}
