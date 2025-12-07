// src/components/sections/Solutions.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Solutions() {
  const { t } = useTranslation();

  const handleScrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white text-[#1c2846]"
    >
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      >
        <source src="/videos/solutions.webm" type="video/webm" />
      </video>

      {/* Overlay institucional claro */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b from-white/70 via-white/40 to-white/20
          backdrop-blur-[1px]
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6 md:py-28 lg:py-32">
        {/* TÍTULO */}
        <div className="max-w-3xl space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            <span className="font-bold text-[#1c2846]">
              {t("solutions.heading.strong")}{" "}
            </span>
            <span className="font-light text-[#333846]">
              {t("solutions.heading.light")}
            </span>
          </motion.h2>
        </div>

        {/* GRID DE SOLUÇÕES */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-12 md:grid-cols-3 md:gap-16"
        >
          {/* CARBON CREDITS */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1c2846]">
              <span className="font-bold">
                {t("solutions.carbon.titleStrong")}
              </span>{" "}
              <span className="font-light text-[#333846]">
                {t("solutions.carbon.titleLight")}
              </span>
            </h3>

            <ul className="space-y-3 text-sm md:text-base leading-relaxed text-[#333846]/90">
              <li>• {t("solutions.carbon.item1")}</li>
              <li>• {t("solutions.carbon.item2")}</li>
              <li>• {t("solutions.carbon.item3")}</li>
              <li>• {t("solutions.carbon.item4")}</li>
              <li>• {t("solutions.carbon.item5")}</li>
            </ul>
          </div>

          {/* GHG PROTOCOL */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1c2846]">
              <span className="font-bold">
                {t("solutions.ghg.titleStrong")}
              </span>{" "}
              <span className="font-light text-[#333846]">
                {t("solutions.ghg.titleLight")}
              </span>
            </h3>

            <ul className="space-y-3 text-sm md:text-base leading-relaxed text-[#333846]/90">
              <li>• {t("solutions.ghg.item1")}</li>
              <li>• {t("solutions.ghg.item2")}</li>
              <li>• {t("solutions.ghg.item3")}</li>
              <li>• {t("solutions.ghg.item4")}</li>
            </ul>
          </div>

          {/* ESG GOVERNANCE */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1c2846]">
              <span className="font-bold">
                {t("solutions.esg.titleStrong")}
              </span>{" "}
              <span className="font-light text-[#333846]">
                {t("solutions.esg.titleLight")}
              </span>
            </h3>

            <ul className="space-y-3 text-sm md:text-base leading-relaxed text-[#333846]/90">
              <li>• {t("solutions.esg.item1")}</li>
              <li>• {t("solutions.esg.item2")}</li>
              <li>• {t("solutions.esg.item3")}</li>
              <li>• {t("solutions.esg.item4")}</li>
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={handleScrollToContact}
            className="group inline-flex flex-col items-center gap-3 cursor-pointer"
          >
            <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#333846]/80">
              {t("solutions.cta.small")}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-wide text-[#1c2846]">
                {t("solutions.cta.main")}
              </span>
              <span className="text-lg text-[#1c2846] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>

            <div className="mt-2 h-[2px] w-64 max-w-full bg-[#d6d6d6] overflow-hidden">
              <div
                className="
                  h-full w-1/4
                  bg-[#1c2846]
                  transition-[width] duration-500 ease-out
                  group-hover:w-full
                "
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
