"use client";

import { newsItems } from "@/data/content";
import Link from "next/link";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link href="/" className="text-white text-sm hover:opacity-70 transition-opacity">
            [ BACK ]
          </Link>
          <h1 className="text-white text-lg font-light">All News</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-light mb-8 text-white/90">
          News & Announcements
        </h2>

        <div className="space-y-8">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="border-l-2 border-white/20 pl-6 hover:border-white/50 transition-colors"
            >
              {news.subtitle && (
                <p className="text-white/50 text-sm mb-1">{news.subtitle}</p>
              )}
              <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                {news.title}
              </h3>
              {news.description && (
                <p className="text-white/70 text-sm sm:text-base mb-4">
                  {news.description}
                </p>
              )}
              <a
                href={news.link}
                className="inline-block text-white text-sm hover:opacity-70 transition-opacity"
              >
                [ {news.cta?.toUpperCase() || "READ MORE"} ]
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
