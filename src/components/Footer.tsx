"use client";

interface FooterProps {
  ticketLink?: string;
  ticketText?: string;
}

export default function Footer({
  ticketLink = "#concerts",
  ticketText = "UPCOMING CONCERTS"
}: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-t from-black/50 to-transparent">
      <div className="flex justify-center items-center gap-4 text-white text-xs sm:text-sm">
        <span className="tracking-wider">{ticketText}</span>
        <a
          href={ticketLink}
          className="bracket-link"
        >
          [ VIEW DATES ]
        </a>
      </div>
    </footer>
  );
}
