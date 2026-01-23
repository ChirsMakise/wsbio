"use client";

import { useEffect, useState, useRef } from "react";
import { contactInfo, siteConfig } from "@/data/content";

interface ContactSectionProps {
  imageSrc?: string;
  videoSrc?: string;
  soundEnabled?: boolean;
}

export default function ContactSection({
  imageSrc = "/images/contact-placeholder.jpg",
  videoSrc,
  soundEnabled = false,
}: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${contactInfo.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formState.firstName} ${formState.lastName}`,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="scroll-section">
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
              : 'linear-gradient(135deg, #141414 0%, #0a0a0a 50%, #000000 100%)',
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
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div
                className={`text-center mb-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
                  {contactInfo.headline}
                </h2>
                <p className="text-white/70 text-sm sm:text-base mb-2">
                  {contactInfo.description}
                </p>
                <p className="text-white/60 text-sm">
                  {contactInfo.cta}
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className={`space-y-6 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formState.firstName}
                      onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formState.lastName}
                      onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bracket-link text-white text-sm sm:text-base disabled:opacity-50"
                  >
                    [ {isSubmitting ? "SENDING..." : "SEND MESSAGE"} ]
                  </button>
                </div>

                {submitStatus === "success" && (
                  <p className="text-center text-green-400 text-sm">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              {/* Social Links */}
              <div
                className={`flex justify-center gap-6 mt-12 transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socialLinks.email}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for footer */}
        <div className="h-16" />
      </div>
    </section>
  );
}
