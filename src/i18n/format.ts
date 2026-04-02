import { Locale } from "@/i18n/config";

const localeMap: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
};

export function formatLongDate(dateISO: string, locale: Locale): string {
  const date = new Date(`${dateISO}T00:00:00`);

  if (locale === "zh") {
    const parts = new Intl.DateTimeFormat("zh-CN", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(date);

    const year = parts.find((p) => p.type === "year")?.value ?? "";
    const month = parts.find((p) => p.type === "month")?.value ?? "";
    const day = parts.find((p) => p.type === "day")?.value ?? "";
    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
    return `${year}年${month}月${day}日 ${weekday}`;
  }

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
