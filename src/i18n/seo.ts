import type { Metadata } from "next";
import { Locale } from "@/i18n/config";
import { withLocalePath } from "@/i18n/path";

interface BuildMetadataOptions {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: BuildMetadataOptions): Metadata {
  const enPath = withLocalePath("en", path);
  const zhPath = withLocalePath("zh", path);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "zh" ? zhPath : enPath,
      languages: {
        en: enPath,
        zh: zhPath,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}
