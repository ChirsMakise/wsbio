import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HtmlLangSync from "@/components/HtmlLangSync";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wentingshi.com"),
  title: "Wenting Shi 石文婷 | Steinway Artist - Official Website",
  description:
    "Steinway Artist Wenting Shi has performed extensively across the globe, captivating audiences in numerous countries. Prizewinner of prestigious international piano competitions.",
  keywords: [
    "Wenting Shi",
    "石文婷",
    "pianist",
    "Steinway Artist",
    "classical piano",
    "concert pianist",
    "piano recital",
  ],
  authors: [{ name: "Wenting Shi" }],
  openGraph: {
    title: "Wenting Shi 石文婷 | Steinway Artist",
    description:
      "Steinway Artist Wenting Shi - International concert pianist performing across the globe.",
    type: "website",
    locale: "en_US",
    siteName: "Wenting Shi Official Website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wenting Shi 石文婷 | Steinway Artist",
    description:
      "Steinway Artist Wenting Shi - International concert pianist performing across the globe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var p=location.pathname||'/';document.documentElement.lang=(p==='/zh'||p.indexOf('/zh/')===0)?'zh-CN':'en-US';})();",
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <HtmlLangSync />
        {children}
      </body>
    </html>
  );
}
