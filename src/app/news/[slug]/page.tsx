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
  const currentIndex = newsItems.findIndex((item) => item.id === slug);
  const news = newsItems[currentIndex];

  if (!news) {
    notFound();
  }

  const prevNews = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextNews =
    currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;

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
      <div className="pt-24 pb-8 px-4 sm:px-8">
        <article className="h-[calc(100vh-8rem)] max-w-6xl mx-auto flex flex-col">
          <div className="flex-1 overflow-y-auto pr-1 py-6">
            {news.subtitle && (
              <p className="text-white/50 text-sm mb-2">{news.subtitle}</p>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              {news.title}
            </h2>

            {news.detailImages && news.detailImages.length > 0 && (
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {news.detailImages.map((imageSrc, index) => (
                  <div
                    key={`${news.id}-image-${index}`}
                    className="w-full h-64 sm:h-80 lg:h-96 rounded-md bg-contain bg-center bg-no-repeat bg-white/5"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                    role="img"
                    aria-label={`${news.title} image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {news.description && (
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                {news.description}
              </p>
            )}

            {(news.externalLink || news.secondaryExternalLink) && (
              <div className="mb-8 flex flex-wrap gap-4">
                {news.externalLink && (
                  <a
                    href={news.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                  >
                    [ {(news.externalLinkLabel || "LEARN MORE").toUpperCase()} ]
                  </a>
                )}
                {news.secondaryExternalLink && (
                  <a
                    href={news.secondaryExternalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                  >
                    [ {(news.secondaryExternalLinkLabel || "LEARN MORE").toUpperCase()} ]
                  </a>
                )}
              </div>
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
          </div>

          {/* Back to all news */}
          <div className="flex-none border-t border-white/20 pt-6 mt-4 bg-black">
            <div className="flex items-center justify-between mb-4 text-sm">
              {prevNews ? (
                <Link
                  href={prevNews.link}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  [ LAST ]
                </Link>
              ) : (
                <span />
              )}
              {nextNews ? (
                <Link
                  href={nextNews.link}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  [ NEXT ]
                </Link>
              ) : (
                <span />
              )}
            </div>
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
