import { Locale } from "@/i18n/config";

const localeMap: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
};

export function formatLongDate(dateISO: string, locale: Locale): string {
  const date = new Date(`${dateISO}T00:00:00`);
  return new Intl.DateTimeFormat(localeMap[locale], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatShortDate(dateISO: string, locale: Locale): string {
  const date = new Date(`${dateISO}T00:00:00`);
  return new Intl.DateTimeFormat(localeMap[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}
