import NewsDetailPage from "@/app/_localized/NewsDetailPage";
import { getNewsItems } from "@/data/content-i18n";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getNewsItems("en").map((news) => ({
    slug: news.id,
  }));
}

export default function Page({ params }: NewsPageProps) {
  return <NewsDetailPage locale="zh" params={params} />;
}
