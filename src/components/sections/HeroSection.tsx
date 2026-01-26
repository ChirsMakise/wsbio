"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ScrollIndicator from "../ScrollIndicator";
import { heroContent } from "@/data/content";

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars: Record<string, number | string>;
          events: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  mute: () => void;
  unMute: () => void;
  playVideo: () => void;
  isMuted: () => boolean;
}

interface HeroSectionProps {
  youtubeVideoId?: string;
  imageSrc?: string;
  soundEnabled?: boolean;
  onSoundToggle?: () => void;
}

export default function HeroSection({
  youtubeVideoId = "lB38Kqyc9XM",
  imageSrc = "/images/hero-placeholder.jpg",
  soundEnabled = false,
  onSoundToggle,
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);

  const initPlayer = useCallback(() => {
    if (window.YT && !playerRef.current) {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: youtubeVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: youtubeVideoId,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          disablekb: 1,
          origin: typeof window !== "undefined" ? window.location.origin : "",
        },
        events: {
          onReady: (event) => {
            setPlayerReady(true);
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    }
  }, [youtubeVideoId]);

  useEffect(() => {
    setIsLoaded(true);

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, [initPlayer]);

  useEffect(() => {
    if (playerReady && playerRef.current) {
      if (soundEnabled) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
    }
  }, [soundEnabled, playerReady]);

  const handleListenToggle = () => {
    if (onSoundToggle) {
      onSoundToggle();
    }
  };

  return (
    <section id="home" className="scroll-section">
      {/* YouTube Video Background */}
      {youtubeVideoId ? (
        <div className="youtube-background">
          <div id="youtube-player" />
        </div>
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
          <button
            onClick={handleListenToggle}
            className={`bracket-link text-white text-sm sm:text-base transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            [ {soundEnabled ? "MUTE" : heroContent.cta.text.toUpperCase()} ]
          </button>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Spacer for footer */}
        <div className="h-16" />
      </div>
    </section>
  );
}
