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
  const concert = getAllConcerts("en").find((item) => item.id === slug);

  if (!concert) {
    return buildPageMetadata({
      locale: "en",
      path: "/concerts",
      title: "Concerts | Wenting Shi",
      description: "Upcoming and past concerts by Steinway Artist Wenting Shi.",
    });
  }

  return buildPageMetadata({
    locale: "en",
    path: `/concerts/${slug}`,
    title: `${concert.title} | Wenting Shi`,
    description: concert.description?.slice(0, 160) || `${concert.title} concert details.`,
  });
}

export default function Page({ params }: ConcertPageProps) {
  return <ConcertDetailPage locale="en" params={params} />;
}
