import type { Metadata } from "next";
import ConcertDetailPage from "@/app/_localized/ConcertDetailPage";
import { getAllConcerts } from "@/data/content-i18n";
import { buildPageMetadata } from "@/i18n/seo";

interface ConcertPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllConcerts("en").map((concert) => ({
    slug: concert.id,
  }));
}

export async function generateMetadata({ params }: ConcertPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concert = getAllConcerts("zh").find((item) => item.id === slug);

  if (!concert) {
    return buildPageMetadata({
      locale: "zh",
      path: "/concerts",
      title: "音乐会 | 石文婷",
      description: "施坦威艺术家石文婷的近期与往期音乐会信息。",
    });
  }

  return buildPageMetadata({
    locale: "zh",
    path: `/concerts/${slug}`,
    title: `${concert.title} | 石文婷`,
    description: concert.description?.slice(0, 160) || `${concert.title} 音乐会详情。`,
  });
}

export default function Page({ params }: ConcertPageProps) {
  return <ConcertDetailPage locale="zh" params={params} />;
}
