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
        rounded-2xl border border-[#d6d6d6]
        bg-white/95
        shadow-[0_14px_30px_rgba(0,0,0,0.04)]
        px-4 py-4 md:px-5 md:py-5
        flex flex-col gap-2
      "
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#1c2846]/80">
        {label}
      </p>

      <div className="text-2xl font-semibold text-[#1c2846] md:text-3xl">
        {formattedValue}
      </div>

      {helper && (
        <p className="text-[0.75rem] text-[#4b5563] leading-relaxed">
          {helper}
        </p>
      )}
    </div>
  );
}
