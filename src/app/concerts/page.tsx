"use client";

import { getUpcomingConcerts, getPastConcerts } from "@/data/content";
import Link from "next/link";

export default function ConcertsPage() {
  const upcomingConcerts = getUpcomingConcerts();
  const pastConcerts = getPastConcerts();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link href="/" className="text-white text-sm hover:opacity-70 transition-opacity">
            [ BACK ]
          </Link>
          <h1 className="text-white text-lg font-light">All Concerts</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Upcoming Concerts */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 text-white/90">
            Upcoming Concerts
          </h2>
          <div className="space-y-8">
            {upcomingConcerts.map((concert) => (
              <article
                key={concert.id}
                className="border-l-2 border-white/20 pl-6 hover:border-white/50 transition-colors"
              >
                <p className="text-white/50 text-sm mb-1">{concert.date}</p>
                <p className="text-white/50 text-sm mb-2">{concert.time}</p>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                  {concert.title}
                </h3>
                <p className="text-white/70 text-sm mb-1">{concert.venue}</p>
                <p className="text-white/50 text-sm mb-4">{concert.address}</p>

                {concert.description && (
                  <p className="text-white/60 text-sm mb-4">{concert.description}</p>
                )}

                {concert.program && concert.program.length > 0 && (
                  <div className="mb-4">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                      Program
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
                    className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
                  >
                    [ GET TICKETS ]
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Past Concerts */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-light mb-8 text-white/70">
            Past Concerts
          </h2>
          <div className="space-y-6">
            {pastConcerts.map((concert) => (
              <article
                key={concert.id}
                className="border-l-2 border-white/10 pl-6 opacity-60 hover:opacity-80 transition-opacity"
              >
                <p className="text-white/40 text-sm mb-1">{concert.date}</p>
                <h3 className="text-lg font-light text-white/80 mb-1">
                  {concert.title}
                </h3>
                <p className="text-white/50 text-sm">{concert.venue}</p>
                {concert.address && (
                  <p className="text-white/40 text-sm">{concert.address}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
