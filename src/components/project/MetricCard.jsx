import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(target, duration = 1.6, resetKey = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const end = Number(target);
    if (Number.isNaN(end)) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;
    let frameId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(end * progress);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, resetKey]);

  return value;
}

function Typewriter({ text, speed = 35, resetKey = 0 }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed, resetKey]);

  return <>{out}</>;
}

const formatNumber = (num, locale = "pt-BR") =>
  new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  }).format(num);

export function MetricCard({
  label,
  value,
  helper,
  isNumber = false,
  isTyped = false,
  locale = "pt-BR",
  resetKey = 0,
}) {
  const count = isNumber ? useCountUp(value, 1.6, resetKey) : null;
  const displayValue = isNumber ? formatNumber(count, locale) : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        rounded-2xl
        border border-emerald-400/20
        bg-white/[0.02]
        backdrop-blur-sm
        shadow-[0_0_15px_rgba(16,185,129,0.15)]
        hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
        transition-all
        p-6
      "
    >
      <div className="text-xs uppercase tracking-[0.25em] text-emerald-300 mb-3">
        {label}
      </div>

      <div className="text-2xl md:text-3xl font-semibold text-white">
        {isTyped ? (
          <Typewriter text={String(value)} resetKey={resetKey} />
        ) : (
          displayValue
        )}
      </div>

      {helper && (
        <div className="mt-1 text-sm text-white/60">
          {helper}
        </div>
      )}
    </motion.div>
  );
}
