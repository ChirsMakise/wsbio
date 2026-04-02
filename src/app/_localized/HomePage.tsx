"use client";

import { useEffect, useState } from "react";
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
  const [soundEnabled, setSoundEnabled] = useState(locale === "zh");

  useEffect(() => {
    setSoundEnabled(locale === "zh");
  }, [locale]);

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
