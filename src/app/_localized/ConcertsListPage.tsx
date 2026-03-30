import Link from "next/link";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { withLocalePath } from "@/i18n/path";
import { getPastConcerts, getUpcomingConcerts } from "@/data/content-i18n";
import { formatLongDate } from "@/i18n/format";

interface ConcertsListPageProps {
  locale: Locale;
}

export default function ConcertsListPage({ locale }: ConcertsListPageProps) {
  const dict = getDictionary(locale);
  const upcomingConcerts = getUpcomingConcerts(locale);
  const pastConcerts = getPastConcerts(locale);
  const alternateLocale = locale === "en" ? "zh" : "en";

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div
        className="fixed inset-0 bg-cover bg-center md:bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/concerts_list.jpg')" }}
      />
      <div className="fixed inset-0 bg-black/65" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link href={withLocalePath(locale, "/")} className="text-white text-sm hover:opacity-70 transition-opacity">
            [ {dict.common.back} ]
          </Link>
          <h1 className="text-white text-lg font-light">{dict.concerts.allConcerts}</h1>
          <a
            href={withLocalePath(alternateLocale, "/concerts")}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.header.language} ]
          </a>
        </div>
      </header>

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 text-white/90">
            {dict.concerts.upcomingConcerts}
          </h2>
          <div className="space-y-8">
            {upcomingConcerts.map((concert) => (
              <article
                key={concert.id}
                className="border-l-2 border-white/20 pl-6 hover:border-white/50 transition-colors"
              >
                <p className="text-white/50 text-sm mb-1">
                  {formatLongDate(concert.dateISO, locale)}
                </p>
                <p className="text-white/50 text-sm mb-2">{concert.time}</p>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                  {concert.title}
                </h3>
                <p className="text-white/70 text-sm mb-1">{concert.venue}</p>
                <p className="text-white/50 text-sm mb-4">{concert.address}</p>

                {concert.description && (
                  <p className="text-white/60 text-sm mb-4 whitespace-pre-line">{concert.description}</p>
                )}

                {concert.program && concert.program.length > 0 && (
                  <div className="mb-4">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                      {dict.concerts.program}
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      {concert.program.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {concert.ticketLink && (
                  <a
                    href={concert.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity mr-6"
                  >
                    [ {dict.common.getTickets} ]
                  </a>
                )}
                <Link
                  href={withLocalePath(locale, `/concerts/${concert.id}`)}
                  className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                >
                  [ {dict.common.viewDetails} ]
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-light mb-8 text-white/70">
            {dict.concerts.pastConcerts}
          </h2>
          <div className="space-y-6">
            {pastConcerts.map((concert) => (
              <article
                key={concert.id}
                className="border-l-2 border-white/10 pl-6 opacity-60 hover:opacity-80 transition-opacity"
              >
                <p className="text-white/40 text-sm mb-1">
                  {formatLongDate(concert.dateISO, locale)}
                </p>
                <h3 className="text-lg font-light text-white/80 mb-1">
                  {concert.title}
                </h3>
                <p className="text-white/50 text-sm">{concert.venue}</p>
                {concert.address && (
                  <p className="text-white/40 text-sm">{concert.address}</p>
                )}
                <Link
                  href={withLocalePath(locale, `/concerts/${concert.id}`)}
                  className="inline-block text-white text-sm hover:opacity-70 transition-opacity mt-3"
                >
                  [ {dict.common.viewDetails} ]
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
