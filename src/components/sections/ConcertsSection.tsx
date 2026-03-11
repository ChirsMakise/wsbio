"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollIndicator from "../ScrollIndicator";
import { getPastConcerts, getUpcomingConcerts } from "@/data/content";

interface ConcertsSectionProps {
  imageSrc?: string;
  videoSrc?: string;
  soundEnabled?: boolean;
}

export default function ConcertsSection({
  imageSrc,
  videoSrc,
  soundEnabled = false,
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

  const upcomingConcerts = getUpcomingConcerts();
  const pastConcerts = getPastConcerts();
  const nextConcert = upcomingConcerts[0];
  const featuredConcert = nextConcert ?? pastConcerts[0];
  const featuredHeading = nextConcert ? "Upcoming Concerts" : "Recent Concert";

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
      <div className="section-content min-h-screen">
        {/* Spacer for header */}
        <div className="h-10 sm:h-16" />

        {/* Main Content */}
        <div className="flex-1 flex items-start sm:items-center pt-3 sm:pt-0">
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
                      {featuredConcert.date}
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
                    <div className="mb-6">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                        Program
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

                    {featuredConcert.ticketLink && (
                      <a
                        href={featuredConcert.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bracket-link text-white text-sm sm:text-base"
                      >
                        [ {nextConcert ? "GET TICKETS" : "VIEW DETAILS"} ]
                      </a>
                    )}
                  </div>
                )}
                {/* View All Link */}
                <Link
                  href="/concerts"
                  className="bracket-link text-white text-sm mt-2"
                >
                  [ VIEW ALL ]
                </Link>
              </div>
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
