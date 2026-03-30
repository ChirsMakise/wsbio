import ConcertDetailPage from "@/app/_localized/ConcertDetailPage";
import { getAllConcerts } from "@/data/content-i18n";

interface ConcertPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllConcerts("en").map((concert) => ({
    slug: concert.id,
  }));
}

export default function Page({ params }: ConcertPageProps) {
  return <ConcertDetailPage locale="zh" params={params} />;
}
