"use client";

import { useRef, useEffect, useState } from "react";
import ScrollIndicator from "../ScrollIndicator";
import { heroContent } from "@/data/content";

interface HeroSectionProps {
  videoSrc?: string;
  imageSrc?: string;
  soundEnabled?: boolean;
}

export default function HeroSection({
  videoSrc,
  imageSrc = "/images/hero-placeholder.jpg",
  soundEnabled = false,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !soundEnabled;
    }
  }, [soundEnabled]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="scroll-section">
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
              : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
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

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide mb-4 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {heroContent.headline}
          </h1>
          <p
            className={`text-2xl sm:text-3xl md:text-4xl text-white/80 font-light tracking-widest mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {heroContent.subheadline}
          </p>
          <a
            href={heroContent.cta.link}
            className={`bracket-link text-white text-sm sm:text-base transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            [ {heroContent.cta.text.toUpperCase()} ]
          </a>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Spacer for footer */}
        <div className="h-16" />
      </div>
    </section>
  );
}
