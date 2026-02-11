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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
        soundEnabled={soundEnabled}
        onSoundToggle={handleSoundToggle}
      />

      {/* News Section - single page with 2 featured items */}
      <div className="news-container">
        <div
          className="news-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/news.JPG)` }}
        />
        <div className="news-sticky-overlay" />
        <div className="news-content-wrapper">
          <NewsSection soundEnabled={soundEnabled} />
        </div>
      </div>

      {/* Upcoming Concerts Section - with shared background for multiple concert pages */}
      <div className="concerts-container">
        <div
          className="concerts-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/upcoming_concerts.JPG)` }}
        />
        <div className="concerts-sticky-overlay" />
        <div className="concerts-content-wrapper">
          <ConcertsSection soundEnabled={soundEnabled} />
        </div>
      </div>

      {/* Biography / Artistic Resume Section */}
      <div className="biography-container">
        <div
          className="biography-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/artist.JPG)` }}
        />
        <div className="biography-sticky-overlay" />
        <div className="biography-content-wrapper">
          <BiographySection soundEnabled={soundEnabled} />
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div
          className="contact-sticky-background"
          style={{ backgroundImage: `url(${basePath}/images/contact.jpg)` }}
        />
        <div className="contact-sticky-overlay" />
        <div className="contact-content-wrapper">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
