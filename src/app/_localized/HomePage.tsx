"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HeroSection,
  NewsSection,
  ConcertsSection,
  BiographySection,
  ContactSection,
} from "@/components/sections";
import { Locale } from "@/i18n/config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface HomePageProps {
  locale: Locale;
}

export default function HomePage({ locale }: HomePageProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <main className="scroll-container">
      <Header locale={locale} soundEnabled={soundEnabled} onSoundToggle={handleSoundToggle} />
      <Footer locale={locale} />

      <HeroSection locale={locale} soundEnabled={soundEnabled} onSoundToggle={handleSoundToggle} />

      <div className="news-container">
        <div
          className="news-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/news.JPG)` }}
        />
        <div className="news-sticky-overlay" />
        <div className="news-content-wrapper">
          <NewsSection locale={locale} soundEnabled={soundEnabled} />
        </div>
      </div>

      <div className="concerts-container">
        <div
          className="concerts-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/upcoming_concerts.JPG)` }}
        />
        <div className="concerts-sticky-overlay" />
        <div className="concerts-content-wrapper">
          <ConcertsSection locale={locale} soundEnabled={soundEnabled} />
        </div>
      </div>

      <div className="biography-container">
        <div
          className="biography-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/artist.JPG)` }}
        />
        <div className="biography-sticky-overlay" />
        <div className="biography-content-wrapper">
          <BiographySection locale={locale} soundEnabled={soundEnabled} />
        </div>
      </div>

      <section className="scroll-section overflow-hidden">
        <div
          className="image-background piano-studio-background bg-cover"
          style={{ backgroundImage: `url(${basePath}/images/upcoming_concerts.JPG)` }}
        />
        <div className="section-overlay bg-black/40" />
        <div className="section-content justify-center">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="mb-4 text-xs tracking-[0.18em] text-white/65">
              {locale === "en" ? "Chicago's North Shore" : "芝加哥北岸"}
            </p>
            <h2 className="text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              {locale === "en" ? "Private Piano Studio" : "私人钢琴工作室"}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {locale === "en"
                ? "Wenting maintains a private piano studio in Wilmette, Illinois, working with motivated students throughout Chicago's North Shore. Her teaching combines rigorous technical development with a strong emphasis on listening, musical understanding, and artistic individuality."
                : "石文婷在伊利诺伊州 Wilmette 设有私人钢琴工作室，与来自芝加哥北岸各社区、认真投入音乐学习的学生合作。她的教学结合严谨的技术训练、敏锐的聆听、音乐理解与个人艺术表达。"}
            </p>
            <Link
              href={locale === "en" ? "/piano-lessons-wilmette" : "/zh/piano-lessons-wilmette"}
              className="mt-8 inline-block border border-white px-5 py-3 text-sm tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black"
            >
              {locale === "en" ? "Private Piano Lessons in Wilmette" : "Wilmette 私人钢琴课"}
            </Link>
          </div>
        </div>
      </section>

      <div className="contact-container">
        <div
          className="contact-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/contact.jpg)` }}
        />
        <div className="contact-sticky-overlay" />
        <div className="contact-content-wrapper">
          <ContactSection locale={locale} />
        </div>
      </div>
    </main>
  );
}
