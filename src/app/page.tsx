"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HeroSection,
  NewsSection,
  ConcertsSection,
  BiographySection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <main className="scroll-container">
      {/* Fixed Header */}
      <Header soundEnabled={soundEnabled} onSoundToggle={handleSoundToggle} />

      {/* Fixed Footer */}
      <Footer />

      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/hero-placeholder.jpg"
        soundEnabled={soundEnabled}
      />

      {/* News Sections - 3 scrollable pages */}
      <NewsSection
        imageSrc="/images/news-placeholder.jpg"
        soundEnabled={soundEnabled}
        newsIndex={0}
      />
      <NewsSection
        imageSrc="/images/news-placeholder.jpg"
        soundEnabled={soundEnabled}
        newsIndex={1}
      />
      <NewsSection
        imageSrc="/images/news-placeholder.jpg"
        soundEnabled={soundEnabled}
        newsIndex={2}
      />

      {/* Upcoming Concerts Section */}
      <ConcertsSection
        imageSrc="/images/concerts-placeholder.jpg"
        soundEnabled={soundEnabled}
      />

      {/* Biography Section */}
      <BiographySection
        imageSrc="/images/bio-placeholder.jpg"
        soundEnabled={soundEnabled}
      />

      {/* Contact Section */}
      <ContactSection
        imageSrc="/images/contact-placeholder.jpg"
        soundEnabled={soundEnabled}
      />
    </main>
  );
}
