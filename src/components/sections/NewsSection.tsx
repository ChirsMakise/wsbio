"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollIndicator from "../ScrollIndicator";
import { newsItems } from "@/data/content";

interface NewsSectionProps {
  imageSrc?: string;
  videoSrc?: string;
  soundEnabled?: boolean;
  newsIndex?: number; // Which news item to display (0, 1, or 2)
}

export default function NewsSection({
  imageSrc = "/images/news-placeholder.jpg",
  videoSrc,
  soundEnabled = false,
  newsIndex = 0,
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

  const currentNews = newsItems[newsIndex];
  const isFirstNews = newsIndex === 0;

  return (
    <section
      id={isFirstNews ? "news" : `news-${newsIndex}`}
      ref={sectionRef}
      className="scroll-section"
    >
      {/* Background */}
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
      ) : (
        <div
          className="image-background"
          style={{
            backgroundImage:
              imageSrc && !imageSrc.includes("placeholder")
                ? `url(${imageSrc})`
                : "linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 50%, #0d0d1a 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Overlay */}
      <div className="section-overlay" />

      {/* Content */}
      <div className="section-content min-h-screen">
        {/* Spacer for header */}
        <div className="h-16" />

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-2 sm:px-4">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8">
                News
              </h2>

              {/* Featured News */}
              {currentNews && (
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
                  {/* News Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl text-white mb-2">
                      {currentNews.title}
                    </h3>
                    {currentNews.subtitle && (
                      <p className="text-white/70 text-sm sm:text-base mb-4">
                        {currentNews.subtitle}
                      </p>
                    )}
                    {currentNews.description && (
                      <p className="text-white/80 text-sm sm:text-base mb-6 max-w-xl">
                        {currentNews.description}
                      </p>
                    )}

                    <Link
                      href={currentNews.link}
                      className="bracket-link text-white text-sm sm:text-base"
                    >
                      [ {currentNews.cta?.toUpperCase() || "READ MORE"} ]
                    </Link>
                  </div>

                  {/* News Navigation */}
                  <div className="flex flex-col gap-3 items-start">
                    {newsItems.slice(0, 3).map((news, index) => (
                      <a
                        key={news.id}
                        href={index === 0 ? "#news" : `#news-${index}`}
                        className={`text-left transition-opacity duration-300 ${
                          index === newsIndex
                            ? "opacity-100"
                            : "opacity-50 hover:opacity-75"
                        }`}
                      >
                        <span className="text-white text-xs sm:text-sm block">
                          {news.title}
                        </span>
                      </a>
                    ))}
                    <Link
                      href="/news"
                      className="bracket-link text-white text-xs mt-2"
                    >
                      [ VIEW ALL ]
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Spacer for footer */}
        <div className="h-16" />
      </div>
    </section>
  );
}
