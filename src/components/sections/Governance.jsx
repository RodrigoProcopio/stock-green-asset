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
      className="
        relative overflow-hidden scroll-mt-24
        border-t border-[#d6d6d6]
        bg-white py-24
        text-[#333846]
      "
    >
      {/* 🌌 BACKGROUND AURORA INSTITUCIONAL */}
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
        {/* Base clara com gradiente suave */}
        <div className="h-full w-full bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7]" />

        {/* Blob navy */}
        <motion.div
          className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#1c2846]/30 blur-3xl"
          initial={{ x: -120, y: 40, scale: 1 }}
          animate={{ x: 40, y: -40, scale: 1.2 }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Blob slate */}
        <motion.div
          className="absolute right-[-8rem] bottom-[-6rem] h-96 w-96 rounded-full bg-[#333846]/28 blur-3xl"
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
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          {/* COLUNA ESQUERDA */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {t("governance.badge")}
            </p>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://ri-portal.super.site/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="
                mt-8 inline-flex items-center justify-center
                rounded-full border border-[#1c2846]
                px-7 py-2.5 text-xs font-medium uppercase tracking-[0.22em]
                text-[#1c2846]
                ring-1 ring-[#1c2846]/35
                shadow-[0_0_18px_rgba(28,40,70,0.25)]
                transition-all duration-300
                hover:bg-[#1c2846] hover:text-white
                hover:shadow-[0_0_26px_rgba(28,40,70,0.45)]
              "
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
            <p className="text-sm md:text-base text-[#333846]">
              {t("governance.body.p1")}
            </p>

            <p className="mt-4 text-sm md:text-base text-[#333846]">
              {t("governance.body.p2")}
            </p>

            <p className="mt-4 text-sm md:text-base text-[#333846]">
              {t("governance.body.p3")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
