"use client";

interface ScrollIndicatorProps {
  label?: string;
}

export default function ScrollIndicator({ label = "KEEP SCROLLING" }: ScrollIndicatorProps) {
  return (
    <div className="absolute scroll-indicator left-1/2 -translate-x-1/2 text-white text-xs tracking-widest animate-pulse">
      [ {label} ]
    </div>
  );
}
