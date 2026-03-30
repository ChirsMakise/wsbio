import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { withLocalePath } from "@/i18n/path";
import { getNewsItems } from "@/data/content-i18n";

interface NewsDetailPageProps {
  locale: Locale;
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ locale, params }: NewsDetailPageProps) {
  const dict = getDictionary(locale);
  const newsItems = getNewsItems(locale);
  const alternateLocale = locale === "en" ? "zh" : "en";

  const { slug } = await params;
  const currentIndex = newsItems.findIndex((item) => item.id === slug);
  const news = newsItems[currentIndex];

  if (!news) {
    notFound();
  }

  const prevNews = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextNews =
    currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;
  const isSteinwayArtist = news.id === "steinway-artist";
  const specialBackgroundImage =
    news.id === "steinway-artist"
      ? "/images/steinway_artist.jpg"
      : news.id === "thaviu-isaak-2023"
        ? "/images/news-thaviu.jpg"
        : null;
  const usesSpecialBackground = Boolean(specialBackgroundImage);

  return (
    <main className="relative h-dvh overflow-hidden bg-black text-white">
      {usesSpecialBackground && (
        <>
          <div
            className="fixed inset-0 bg-cover bg-center md:bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${specialBackgroundImage})` }}
          />
          <div className="fixed inset-0 bg-black/35" />
          <div className="fixed inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
        </>
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link
            href={withLocalePath(locale, "/news")}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.common.back} ]
          </Link>
          <h1 className="text-white text-lg font-light">{dict.news.pageTitle}</h1>
          <a
            href={withLocalePath(alternateLocale, `/news/${slug}`)}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.header.language} ]
          </a>
        </div>
      </header>

      <div className="relative z-10 pt-24 pb-8 px-4 sm:px-8 h-full">
        <article className="h-[calc(100dvh-8rem)] max-w-6xl mx-auto flex flex-col">
          <div className="flex-1 overflow-y-auto pr-1 py-6">
            {news.subtitle && (
              <p className="text-white/50 text-sm mb-2">{news.subtitle}</p>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              {news.title}
            </h2>

            {isSteinwayArtist && (
              <blockquote className="max-w-4xl mx-auto text-center mb-10 py-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-white">
                  {locale === "zh"
                    ? "“对我而言，施坦威始终像一种纯粹的魔法——黑白琴键能化作斑斓的世界，每个音符都在讲述故事，每段旋律都在点亮想象。”"
                    : "“Steinway has always felt like pure magic to me—turning the black and white keys into a world of color, where every note tells a story and every melody sparks a dream.”"}
                </p>
                <footer className="mt-4 text-white/80 text-base sm:text-lg">
                  - Wenting Shi
                </footer>
              </blockquote>
            )}

            {!usesSpecialBackground && news.detailImages && news.detailImages.length > 0 && (
              <div className="mb-8 overflow-x-auto pb-2">
                <div className="flex gap-4 w-max pr-1">
                  {news.detailImages.map((imageSrc, index) => (
                    <div
                      key={`${news.id}-image-${index}`}
                      className="w-[18rem] sm:w-[24rem] lg:w-[30rem] h-52 sm:h-64 lg:h-72 rounded-md bg-contain bg-center bg-no-repeat bg-white/5 flex-none"
                      style={{ backgroundImage: `url(${imageSrc})` }}
                      role="img"
                      aria-label={`${news.title} image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {news.description && (
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 whitespace-pre-line">
                {news.description}
              </p>
            )}

            {(news.externalLink || news.secondaryExternalLink || news.tertiaryExternalLink) && (
              <div className="mb-8 flex flex-wrap gap-4">
                {news.externalLink && (
                  <a
                    href={news.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                  >
                    [ {(news.externalLinkLabel || dict.common.learnMore).toUpperCase()} ]
                  </a>
                )}
                {news.secondaryExternalLink && (
                  <a
                    href={news.secondaryExternalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                  >
                    [ {(news.secondaryExternalLinkLabel || dict.common.learnMore).toUpperCase()} ]
                  </a>
                )}
                {news.tertiaryExternalLink && (
                  <a
                    href={news.tertiaryExternalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                  >
                    [ {(news.tertiaryExternalLinkLabel || dict.common.learnMore).toUpperCase()} ]
                  </a>
                )}
              </div>
            )}

            {news.videoLink && (
              <div className="mb-8">
                <a
                  href={news.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                >
                  [ {dict.news.watchVideo} ]
                </a>
              </div>
            )}
          </div>

          <div
            className={`flex-none border-t border-white/20 pt-6 mt-4 ${
              usesSpecialBackground ? "" : "bg-black"
            } safe-bottom-nav`}
          >
            <div className="flex items-center justify-between mb-4 text-sm">
              {prevNews ? (
                <a
                  href={withLocalePath(locale, prevNews.link)}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  [ {dict.common.last} ]
                </a>
              ) : (
                <span />
              )}
              {nextNews ? (
                <a
                  href={withLocalePath(locale, nextNews.link)}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  [ {dict.common.next} ]
                </a>
              ) : (
                <span />
              )}
            </div>
            <a
              href={withLocalePath(locale, "/news")}
              className="text-white text-sm hover:opacity-70 transition-opacity"
            >
              [ {dict.news.viewAllNews} ]
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
