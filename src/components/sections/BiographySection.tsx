"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollIndicator from "../ScrollIndicator";
import { bioContent } from "@/data/content";

interface BiographySectionProps {
  imageSrc?: string;
  videoSrc?: string;
  soundEnabled?: boolean;
}

export default function BiographySection({
  imageSrc = "/images/bio-placeholder.jpg",
  videoSrc,
  soundEnabled = false,
}: BiographySectionProps) {
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

  return (
    <section id="resume" ref={sectionRef} className="scroll-section">
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
            backgroundImage: imageSrc && !imageSrc.includes('placeholder')
              ? `url(${imageSrc})`
              : 'linear-gradient(135deg, #3d2914 0%, #1a1410 50%, #0a0a0a 100%)',
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
            <div className="max-w-4xl mx-auto">
              {/* Quote */}
              <blockquote
                className={`text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                &ldquo;{bioContent.quote}&rdquo;
              </blockquote>

              {/* Bio Excerpt */}
              <p
                className={`text-white/80 text-sm sm:text-base leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {bioContent.short}
              </p>

              {/* CTA */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  href="/resume"
                  className="bracket-link text-white text-sm sm:text-base"
                >
                  [ READ FULL BIOGRAPHY ]
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
