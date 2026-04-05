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
  destroy?: () => void;
}

interface HeroSectionProps {
  youtubeVideoId?: string;
  imageSrc?: string;
  zhImageSrc?: string;
  zhAudioSrc?: string;
  soundEnabled?: boolean;
  onSoundToggle?: () => void;
  locale: Locale;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeroSection({
  youtubeVideoId = "lB38Kqyc9XM",
  imageSrc = "/images/hero-placeholder.jpg",
  zhImageSrc = "/images/hero.PNG",
  zhAudioSrc = "/audios/clip.mp3",
  soundEnabled = false,
  onSoundToggle,
  locale,
}: HeroSectionProps) {
  const zhMode = locale === "zh";
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [showVideo, setShowVideo] = useState(!zhMode);
  const [sourceNotice, setSourceNotice] = useState("");

  const [audioLoading, setAudioLoading] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");

  const playerRef = useRef<YTPlayer | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrlRef = useRef<string | null>(null);

  const heroContent = getHeroContent(locale);
  const dict = getDictionary(locale);
  const zhAudioUrl = `${basePath}${zhAudioSrc}`;
  const zhNowPlayingText = "正在播放：斯特拉文斯基《彼得鲁什卡》三乐章（第二乐章）";

  const destroyYoutubePlayer = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy?.();
      playerRef.current = null;
    }
    setPlayerReady(false);
  }, []);

  const initPlayer = useCallback(() => {
    if (zhMode || !showVideo || !window.YT || playerRef.current) return;

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
  }, [showVideo, youtubeVideoId, zhMode]);

  const loadZhAudio = useCallback(async () => {
    if (audioRef.current || audioLoading) return true;

    setAudioLoading(true);
    setAudioProgress(0);
    setAudioError("");

    try {
      const response = await fetch(zhAudioUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch audio");
      }

      const total = Number(response.headers.get("content-length") || 0);
      let blob: Blob;

      if (response.body && total > 0) {
        const reader = response.body.getReader();
        const chunks: BlobPart[] = [];
        let loaded = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (!value) continue;
          const copy = new Uint8Array(value.byteLength);
          copy.set(value);
          chunks.push(copy);
          loaded += value.length;
          setAudioProgress(Math.min(100, Math.round((loaded / total) * 100)));
        }

        blob = new Blob(chunks, { type: "audio/mpeg" });
      } else {
        blob = await response.blob();
        setAudioProgress(100);
      }

      const objectUrl = URL.createObjectURL(blob);
      audioBlobUrlRef.current = objectUrl;

      const audio = new Audio(objectUrl);
      audio.loop = true;
      audio.preload = "auto";

      await new Promise<void>((resolve, reject) => {
        audio.addEventListener("canplaythrough", () => resolve(), { once: true });
        audio.addEventListener("error", () => reject(new Error("Audio cannot play")), { once: true });
      });

      audioRef.current = audio;
      setAudioProgress(100);
      setAudioLoading(false);
      return true;
    } catch {
      setAudioLoading(false);
      setAudioError(locale === "zh" ? "音频加载失败，请稍后重试。" : "Audio failed to load.");
      return false;
    }
  }, [audioLoading, locale, zhAudioUrl]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setShowVideo(!zhMode);
    setSourceNotice("");
    if (zhMode) {
      destroyYoutubePlayer();
    } else if (audioRef.current) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  }, [destroyYoutubePlayer, zhMode]);

  useEffect(() => {
    if (zhMode || !showVideo) return;

    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = () => {
        setShowVideo(false);
        setSourceNotice("Video background unavailable on this browser. Using static image.");
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
  }, [initPlayer, showVideo, zhMode]);

  useEffect(() => {
    if (zhMode || !showVideo) return;

    const timeout = window.setTimeout(() => {
      if (playerReady) return;
      setShowVideo(false);
      setSourceNotice("Video autoplay is blocked on this browser. Using static image.");
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [playerReady, showVideo, zhMode]);

  useEffect(() => {
    if (!zhMode && showVideo && playerReady && playerRef.current) {
      if (soundEnabled) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
    }
  }, [playerReady, showVideo, soundEnabled, zhMode]);

  useEffect(() => {
    return () => {
      destroyYoutubePlayer();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioBlobUrlRef.current) {
        URL.revokeObjectURL(audioBlobUrlRef.current);
        audioBlobUrlRef.current = null;
      }
    };
  }, [destroyYoutubePlayer]);

  const handleListenToggle = useCallback(async () => {
    if (zhMode) {
      if (!audioRef.current) {
        const ok = await loadZhAudio();
        if (!ok || !audioRef.current) return;
      }

      try {
        if (audioPlaying) {
          audioRef.current.pause();
          setAudioPlaying(false);
        } else {
          await audioRef.current.play();
          setAudioPlaying(true);
        }
      } catch {
        setAudioError(locale === "zh" ? "音频播放受限，请再点一次重试。" : "Audio playback is blocked. Tap again to retry.");
      }
      return;
    }

    if (onSoundToggle) {
      onSoundToggle();
    }
  }, [audioPlaying, loadZhAudio, locale, onSoundToggle, zhMode]);

  const renderBackground = () => {
    if (zhMode) {
      return (
        <div
          className="image-background hero-static-background"
          style={{
            backgroundImage: `url(${basePath}${zhImageSrc})`,
            backgroundSize: "cover",
          }}
        />
      );
    }

    if (showVideo && youtubeVideoId) {
      return (
        <div className="youtube-background">
          <div id="youtube-player" />
        </div>
      );
    }

    return (
      <div
        className="image-background hero-static-background"
        style={{
          backgroundImage:
            imageSrc && !imageSrc.includes("placeholder")
              ? `url(${imageSrc})`
              : "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
          backgroundSize: "cover",
        }}
      />
    );
  };

  return (
    <section id="home" className="scroll-section">
      {renderBackground()}

      <div className="section-overlay" />

      <div className="section-content">
        {(sourceNotice || audioError) && (
          <p className="text-center text-xs sm:text-sm text-white/75 tracking-wide">
            {sourceNotice || audioError}
          </p>
        )}

        {zhMode && audioLoading && (
          <div className="mx-auto w-56 sm:w-72 mb-2">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 transition-all duration-150"
                style={{ width: `${audioProgress}%` }}
              />
            </div>
            <p className="text-center text-xs text-white/70 mt-2">加载音频 {audioProgress}%</p>
          </div>
        )}

        <div className="h-16" />

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

          {zhMode && audioPlaying && (
            <div className="mb-6 transition-all duration-500">
              <div className="audio-rhythm-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <p className="mt-3 text-sm sm:text-base text-white/85 tracking-wide">
                {zhNowPlayingText}
              </p>
            </div>
          )}

          <button
            onClick={handleListenToggle}
            className={`bracket-link text-white text-sm sm:text-base transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            [
            {zhMode
              ? audioLoading
                ? `加载中 ${audioProgress}%`
                : audioPlaying
                  ? "暂停播放"
                  : "立即聆听"
              : soundEnabled
                ? dict.home.mute
                : heroContent.cta.text.toUpperCase()}
            ]
          </button>
        </div>

        <ScrollIndicator label={dict.common.keepScrolling} />

        <div className="h-16" />
      </div>
    </section>
  );
}
