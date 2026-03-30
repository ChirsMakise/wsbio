"use client";

import { getDictionary } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";

interface FooterProps {
  ticketLink?: string;
  locale: Locale;
}

export default function Footer({
  ticketLink = "#concerts",
  locale,
}: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-t from-black/50 to-transparent">
      <div className="flex justify-center items-center gap-4 text-white text-xs sm:text-sm">
        <span className="tracking-wider">{dict.footer.upcomingConcerts}</span>
        <a
          href={ticketLink}
          className="bracket-link"
        >
          [ {dict.footer.viewDates} ]
        </a>
      </div>
    </footer>
  );
}
