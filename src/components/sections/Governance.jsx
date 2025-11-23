import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Governance() {
  const { t } = useTranslation();

  const handleScrollToIR = useCallback(() => {
    const irElement = document.getElementById("ir-portal");
    if (irElement) {
      irElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="governance"
      className="relative overflow-hidden border-t border-white/5 bg-black py-24 text-white scroll-mt-24"
    >
      {/* 🌌 BACKGROUND AURORA (trocado do Team) */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* Blob emerald */}
        <motion.div
          className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-500/40 blur-3xl"
          initial={{ x: -120, y: 40, scale: 1 }}
          animate={{ x: 40, y: -40, scale: 1.2 }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Blob cyan */}
        <motion.div
          className="absolute right-[-8rem] bottom-[-6rem] h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl"
          initial={{ x: 120, y: 40, scale: 1 }}
          animate={{ x: -40, y: -10, scale: 1.25 }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-14">
          {/* COLUNA ESQUERDA */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
              {t("governance.badge")}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {t("governance.heading.line1")}
              <br />
              <span className="text-white/90">
                {t("governance.heading.line2")}
              </span>
            </h2>

<button
  type="button"
  onClick={() =>
    window.open("https://ri-portal.super.site/", "_blank", "noopener,noreferrer")
  }
  className="mt-8 inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-7 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-white/90 ring-1 ring-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_28px_rgba(16,185,129,0.85)]"
>
  {t("governance.buttonIr")}
</button>

          </motion.div>

          {/* COLUNA DIREITA – TEXTO INSTITUCIONAL */}
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-sm text-white/80 md:text-base">
              {t("governance.body.p1")}
            </p>

            <p className="mt-4 text-sm text-white/80 md:text-base">
              {t("governance.body.p2")}
            </p>

            <p className="mt-4 text-sm text-white/80 md:text-base">
              {t("governance.body.p3")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
