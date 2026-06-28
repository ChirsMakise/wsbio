"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollIndicator from "../ScrollIndicator";
import { getPastConcerts, getUpcomingConcerts } from "@/data/content-i18n";
import { getDictionary } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { withLocalePath } from "@/i18n/path";
import { formatLongDate } from "@/i18n/format";

interface ConcertsSectionProps {
  imageSrc?: string;
  videoSrc?: string;
  soundEnabled?: boolean;
  locale: Locale;
}

export default function ConcertsSection({
  imageSrc,
  videoSrc,
  soundEnabled = false,
  locale,
}: ConcertsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !soundEnabled;
    }
  }, [soundEnabled]);
  const dict = getDictionary(locale);

  const upcomingConcerts = getUpcomingConcerts(locale);
  const pastConcerts = getPastConcerts(locale);
  const nextConcert = upcomingConcerts[0];
  const featuredConcert = nextConcert ?? pastConcerts[0];
  const featuredHeading = nextConcert
    ? dict.home.upcomingConcerts
    : dict.home.recentConcert;

  return (
    <section id="concerts" ref={sectionRef} className="scroll-section">
      {/* Background - only render if imageSrc or videoSrc provided */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          loop
          muted={!soundEnabled}
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <div
          className="image-background"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : null}

      {/* Overlay - only render if we have our own background */}
      {(videoSrc || imageSrc) && <div className="section-overlay" />}

      {/* Content */}
      <div className="section-content">
        {/* Spacer for header */}
        <div className="h-6 sm:h-16" />

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-2 sm:px-4">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8">
                {featuredHeading}
              </h2>

              <div className="flex flex-col gap-8">
                {/* Featured Concert */}
                {featuredConcert && (
                  <div>
                    <h3 className="text-2xl sm:text-3xl text-white mb-2">
                      {featuredConcert.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base mb-1">
                      {formatLongDate(featuredConcert.dateISO, locale)}
                    </p>
                    <p className="text-white/70 text-sm sm:text-base mb-4">
                      {featuredConcert.time}
                    </p>
                    <p className="text-white/80 text-sm sm:text-base mb-2">
                      {featuredConcert.venue}
                    </p>
                    <p className="text-white/60 text-sm mb-6">
                      {featuredConcert.address}
                    </p>

                    {/* Program Preview */}
                    {featuredConcert.program.length > 0 && (
                      <div className="mb-6">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                          {dict.home.program}
                        </p>
                        <ul className="text-white/70 text-sm space-y-1">
                          {featuredConcert.program.slice(0, 3).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                          {featuredConcert.program.length > 3 && (
                            <li className="text-white/50">...</li>
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-4">
                      {featuredConcert.ticketLink && (
                        <a
                          href={featuredConcert.ticketLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bracket-link text-white text-sm sm:text-base"
                        >
                          [ {dict.common.getTickets} ]
                        </a>
                      )}
                      <Link
                        href={withLocalePath(locale, `/concerts/${featuredConcert.id}`)}
                        className="bracket-link text-white text-sm sm:text-base"
                      >
                        [ {dict.common.viewDetails} ]
                      </Link>
                    </div>
                  </div>
                )}
                {/* View All Link */}
                <Link
                  href={withLocalePath(locale, "/concerts")}
                  className="bracket-link text-white text-sm mt-2"
                >
                  [ {dict.common.viewAll} ]
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator label={dict.common.keepScrolling} />

        {/* Spacer for footer */}
        <div className="h-16" />
      </div>
    </section>
  );
}
