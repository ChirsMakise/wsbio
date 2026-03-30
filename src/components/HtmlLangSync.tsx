"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
    document.documentElement.lang = isZh ? "zh-CN" : "en-US";
  }, [pathname]);

  return null;
}
