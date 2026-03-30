"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollIndicator from "../ScrollIndicator";
import { getNewsItems } from "@/data/content-i18n";
import { getDictionary } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { withLocalePath } from "@/i18n/path";

interface NewsSectionProps {
  imageSrc?: string;
  videoSrc?: string;
  soundEnabled?: boolean;
  locale: Locale;
}

export default function NewsSection({
  imageSrc,
  videoSrc,
  soundEnabled = false,
  locale,
}: NewsSectionProps) {
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
  const newsItems = getNewsItems(locale);

  // Get top 2 news items
  const topNews = newsItems.slice(0, 2);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="scroll-section"
    >
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
                {dict.home.news}
              </h2>

              {/* Two News Items */}
              <div className="flex flex-col gap-8">
                {topNews.map((news) => (
                  <div key={news.id}>
                    <h3 className="text-xl sm:text-2xl text-white mb-1">
                      {news.title}
                    </h3>
                    {news.subtitle && (
                      <p className="text-white/70 text-sm sm:text-base mb-2">
                        {news.subtitle}
                      </p>
                    )}
                    {news.description && (
                      <p className="text-white/80 text-sm sm:text-base mb-4 max-w-xl">
                        {news.description}
                      </p>
                    )}
                    <Link
                      href={withLocalePath(locale, news.link)}
                      className="bracket-link text-white text-sm sm:text-base"
                    >
                      [ {news.cta?.toUpperCase() || dict.common.readMore} ]
                    </Link>
                  </div>
                ))}

                {/* View All Link */}
                <Link
                  href={withLocalePath(locale, "/news")}
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
