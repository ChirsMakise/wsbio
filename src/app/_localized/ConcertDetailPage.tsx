import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { withLocalePath } from "@/i18n/path";
import { getAllConcerts } from "@/data/content-i18n";
import { isUpcoming } from "@/data/content";

interface ConcertDetailPageProps {
  locale: Locale;
  params: Promise<{ slug: string }>;
}

export default async function ConcertDetailPage({
  locale,
  params,
}: ConcertDetailPageProps) {
  const dict = getDictionary(locale);
  const allConcerts = getAllConcerts(locale);
  const alternateLocale = locale === "en" ? "zh" : "en";
  const { slug } = await params;
  const currentIndex = allConcerts.findIndex((item) => item.id === slug);
  const concert = allConcerts[currentIndex];

  if (!concert) {
    notFound();
  }

  const upcoming = isUpcoming(concert.dateISO);
  const prevConcert = currentIndex > 0 ? allConcerts[currentIndex - 1] : null;
  const nextConcert =
    currentIndex < allConcerts.length - 1 ? allConcerts[currentIndex + 1] : null;
  const showHeaderImage = concert.image.endsWith(".webp");
  const descriptionParagraphs = concert.description
    ? concert.description.split("\n\n").filter(Boolean)
    : [];

  return (
    <main className="h-dvh overflow-hidden bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link
            href={withLocalePath(locale, "/concerts")}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.common.back} ]
          </Link>
          <h1 className="text-white text-lg font-light">{dict.concerts.pageTitle}</h1>
          <a
            href={withLocalePath(alternateLocale, `/concerts/${slug}`)}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.header.language} ]
          </a>
        </div>
      </header>

      <div className="pt-24 pb-8 px-4 sm:px-8 h-full">
        <article className="h-[calc(100dvh-8rem)] max-w-6xl mx-auto flex flex-col">
          <div className="flex-1 overflow-y-auto pr-1 py-6">
            {showHeaderImage && (
              <div
                className="w-full h-72 sm:h-96 lg:h-[28rem] rounded-md mb-8 bg-contain bg-center bg-no-repeat bg-white/5"
                style={{ backgroundImage: `url(${concert.image})` }}
                role="img"
                aria-label={`${concert.title} header image`}
              />
            )}
            <p className="text-white/50 text-sm mb-2">
              {upcoming ? dict.concerts.upcomingConcert : dict.concerts.pastConcert}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
              {concert.title}
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-1">{concert.date}</p>
            <p className="text-white/70 text-sm sm:text-base mb-5">{concert.time}</p>
            <p className="text-white/80 text-base sm:text-lg mb-1">{concert.venue}</p>
            <p className="text-white/60 text-sm sm:text-base mb-8">{concert.address}</p>

            {descriptionParagraphs.length > 0 && (
              <div className="mb-8 space-y-4">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-white/80 text-base sm:text-lg leading-relaxed whitespace-pre-line"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {concert.program.length > 0 && (
              <div className="mb-8">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                  {dict.concerts.program}
                </p>
                <ul className="text-white/70 text-sm sm:text-base space-y-2">
                  {concert.program.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {concert.ticketLink && (
              <div className="mb-8">
                <a
                  href={concert.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                >
                  [ {upcoming ? dict.common.getTickets : dict.concerts.viewEventLink} ]
                </a>
              </div>
            )}
          </div>

          <div
            className="flex-none border-t border-white/20 pt-6 mt-4 bg-black safe-bottom-nav"
          >
            <div className="flex items-center justify-between mb-4 text-sm">
              {prevConcert ? (
                <a
                  href={withLocalePath(locale, `/concerts/${prevConcert.id}`)}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  [ {dict.common.last} ]
                </a>
              ) : (
                <span />
              )}
              {nextConcert ? (
                <a
                  href={withLocalePath(locale, `/concerts/${nextConcert.id}`)}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  [ {dict.common.next} ]
                </a>
              ) : (
                <span />
              )}
            </div>
            <a
              href={withLocalePath(locale, "/concerts")}
              className="text-white text-sm hover:opacity-70 transition-opacity"
            >
              [ {dict.concerts.viewAllConcerts} ]
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
