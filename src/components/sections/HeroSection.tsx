"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ScrollIndicator from "../ScrollIndicator";
import { getHeroContent } from "@/data/content-i18n";
import { getDictionary } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";

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
  destroy?: () => void;
}

interface HeroSectionProps {
  youtubeVideoId?: string;
  bilibiliBvid?: string;
  imageSrc?: string;
  soundEnabled?: boolean;
  onSoundToggle?: () => void;
  locale: Locale;
}

export default function HeroSection({
  youtubeVideoId = "lB38Kqyc9XM",
  bilibiliBvid = "BV1qy9pBFEZL",
  imageSrc = "/images/hero-placeholder.jpg",
  soundEnabled = false,
  onSoundToggle,
  locale,
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [sourceReady, setSourceReady] = useState(false);
  const [sourceNotice, setSourceNotice] = useState("");
  const [fallbackUsed, setFallbackUsed] = useState(false);
  const [activeVideoSource, setActiveVideoSource] = useState<"youtube" | "bilibili">(
    locale === "zh" ? "bilibili" : "youtube"
  );
  const playerRef = useRef<YTPlayer | null>(null);
  const heroContent = getHeroContent(locale);
  const dict = getDictionary(locale);
  const zhMode = locale === "zh";
  const bilibiliPlayerSrc =
    `https://player.bilibili.com/player.html?bvid=${bilibiliBvid}` +
    `&page=1&t=0&autoplay=1&muted=${soundEnabled ? 0 : 1}&danmaku=false&poster=0&high_quality=1&isOutside=true`;

  useEffect(() => {
    setActiveVideoSource(locale === "zh" ? "bilibili" : "youtube");
    setSourceReady(false);
    setPlayerReady(false);
    setSourceNotice("");
    setFallbackUsed(false);
  }, [locale]);

  useEffect(() => {
    if (activeVideoSource !== "youtube" && playerRef.current) {
      playerRef.current.destroy?.();
      playerRef.current = null;
      setPlayerReady(false);
    }
    setSourceReady(false);
  }, [activeVideoSource]);

  const initPlayer = useCallback(() => {
    if (activeVideoSource !== "youtube") return;

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
            setSourceReady(true);
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    }
  }, [activeVideoSource, youtubeVideoId]);

  useEffect(() => {
    setIsLoaded(true);

    if (activeVideoSource !== "youtube") {
      return;
    }

    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = () => {
        if (!fallbackUsed) {
          setFallbackUsed(true);
          setActiveVideoSource("bilibili");
          setSourceNotice(
            locale === "zh"
              ? "YouTube 加载失败，已自动切换到 Bilibili 备用播放源。"
              : "YouTube failed to load. Switched to Bilibili fallback source."
          );
        } else {
          setSourceNotice(
            locale === "zh"
              ? "备用播放源也不可用，请稍后重试。"
              : "Fallback source is also unavailable. Please try again later."
          );
        }
      };
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, [activeVideoSource, fallbackUsed, initPlayer, locale]);

  useEffect(() => {
    if (!isLoaded) return;

    const timeout = window.setTimeout(() => {
      if (sourceReady) return;

      if (!fallbackUsed) {
        setFallbackUsed(true);
        if (activeVideoSource === "youtube") {
          setActiveVideoSource("bilibili");
          setSourceNotice(
            locale === "zh"
              ? "YouTube 连接超时，已自动切换到 Bilibili 备用播放源。"
              : "YouTube timed out. Switched to Bilibili fallback source."
          );
        } else {
          setActiveVideoSource("youtube");
          setSourceNotice(
            locale === "zh"
              ? "Bilibili 连接超时，已自动切换到 YouTube 备用播放源。"
              : "Bilibili timed out. Switched to YouTube fallback source."
          );
        }
      } else {
        setSourceNotice(
          locale === "zh"
            ? "备用播放源也不可用，请稍后重试。"
            : "Fallback source is also unavailable. Please try again later."
        );
      }
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, [activeVideoSource, fallbackUsed, isLoaded, locale, sourceReady]);

  useEffect(() => {
    if (activeVideoSource === "youtube" && playerReady && playerRef.current) {
      if (soundEnabled) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
    }
  }, [activeVideoSource, soundEnabled, playerReady]);

  const handleListenToggle = () => {
    if (zhMode) {
      window.open(`https://www.bilibili.com/video/${bilibiliBvid}/`, "_blank", "noopener,noreferrer");
      return;
    }
    if (onSoundToggle) {
      onSoundToggle();
    }
  };

  return (
    <section id="home" className="scroll-section">
      {/* YouTube Video Background */}
      {activeVideoSource === "youtube" && youtubeVideoId ? (
        <div className="youtube-background">
          <div id="youtube-player" />
        </div>
      ) : activeVideoSource === "bilibili" ? (
        <div className="bilibili-background">
          <iframe
            key={`bili-${soundEnabled ? "unmuted" : "muted"}`}
            src={bilibiliPlayerSrc}
            title="Bilibili Video Background"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            onLoad={() => setSourceReady(true)}
          />
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
      <div className="section-content">
        {sourceNotice && (
          <p className="text-center text-xs sm:text-sm text-white/75 tracking-wide">
            {sourceNotice}
          </p>
        )}
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
            [ {zhMode ? heroContent.cta.text.toUpperCase() : soundEnabled ? dict.home.mute : heroContent.cta.text.toUpperCase()} ]
          </button>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator label={dict.common.keepScrolling} />

        {/* Spacer for footer */}
        <div className="h-16" />
      </div>
    </section>
  );
}
