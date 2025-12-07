// src/components/project/MetricCard.jsx
import { useEffect, useState } from "react";

export function MetricCard({
  label,
  value,
  helper,
  isNumber = false,
  isTyped = false,
  locale = "pt-BR",
  resetKey,
}) {
  const [displayValue, setDisplayValue] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!isNumber || typeof value !== "number") {
      setDisplayValue(value);
      return;
    }

    let frame;
    const duration = 900;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = value * progress;
      setDisplayValue(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, isNumber, resetKey]);

  const formattedValue = isNumber
    ? new Intl.NumberFormat(locale, {
        maximumFractionDigits: 2,
      }).format(displayValue)
    : displayValue;

  return (
    <div
      className="
        group relative flex flex-col gap-2
        rounded-2xl border border-[#d6d6d6]
        bg-white/95
        shadow-[0_14px_30px_rgba(0,0,0,0.04)]
        px-4 py-4 md:px-5 md:py-5
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
        hover:border-[#4FAF95]/80
      "
    >
      {/* Glow premium de fundo */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-[radial-gradient(circle_at_top_left,rgba(79,175,149,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(31,111,92,0.18),transparent_55%)]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      <p className="relative z-10 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#1F6F5C]">
        {label}
      </p>

      <div className="relative z-10 inline-flex items-baseline">
        {/* Glow atrás do valor */}
        <span
          className="
            pointer-events-none absolute inset-x-[-10px] top-1/2 z-0
            h-7 -translate-y-1/2 rounded-full
            bg-[#4FAF95]/30 blur-md
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />
        <span className="relative z-10 text-2xl font-semibold text-[#1c2846] md:text-3xl">
          {formattedValue}
        </span>
      </div>

      {helper && (
        <p className="relative z-10 text-[0.75rem] leading-relaxed text-[#4b5563]">
          {helper}
        </p>
      )}
    </div>
  );
}
