import { newsItems } from "@/data/content";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all news items
export async function generateStaticParams() {
  return newsItems.map((news) => ({
    slug: news.id,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = newsItems.find((item) => item.id === slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link
            href="/news"
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ BACK ]
          </Link>
          <h1 className="text-white text-lg font-light">News</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <article>
          {news.subtitle && (
            <p className="text-white/50 text-sm mb-2">{news.subtitle}</p>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            {news.title}
          </h2>

          {news.description && (
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
              {news.description}
            </p>
          )}

          {/* Video link if available */}
          {news.videoLink && (
            <div className="mb-8">
              <a
                href={news.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
              >
                [ WATCH VIDEO ]
              </a>
            </div>
          )}

          {/* Back to all news */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <Link
              href="/news"
              className="text-white text-sm hover:opacity-70 transition-opacity"
            >
              [ VIEW ALL NEWS ]
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
