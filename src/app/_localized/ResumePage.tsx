import Link from "next/link";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { withLocalePath } from "@/i18n/path";
import { getBioContent } from "@/data/content-i18n";

interface ResumePageProps {
  locale: Locale;
}

export default function ResumePage({ locale }: ResumePageProps) {
  const dict = getDictionary(locale);
  const bioContent = getBioContent(locale);
  const paragraphs = bioContent.full.split("\n\n").filter(Boolean);
  const alternateLocale = locale === "en" ? "zh" : "en";

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div
        className="fixed inset-0 bg-cover bg-center md:bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/resume.jpg')" }}
      />
      <div className="fixed inset-0 bg-black/70" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link
            href={withLocalePath(locale, "/")}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.common.back} ]
          </Link>
          <h1 className="text-white text-lg font-light">{dict.resume.pageTitle}</h1>
          <a
            href={withLocalePath(alternateLocale, "/resume")}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.header.language} ]
          </a>
        </div>
      </header>

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 text-white/80 text-base sm:text-lg leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <Link
            href={withLocalePath(locale, "/")}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ {dict.resume.backToHome} ]
          </Link>
        </div>
      </div>
    </main>
  );
}
