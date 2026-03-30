import { Locale, defaultLocale } from "./config";

export function withLocalePath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) {
    throw new Error(`Path must start with '/': ${path}`);
  }

  if (locale === defaultLocale) {
    return path;
  }

  return `/${locale}${path}`;
}

export function swapLocaleInPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "en" || segments[0] === "zh") {
    segments.shift();
  }

  const joined = segments.join("/");
  const basePath = joined ? `/${joined}` : "/";
  return withLocalePath(locale, basePath);
}
