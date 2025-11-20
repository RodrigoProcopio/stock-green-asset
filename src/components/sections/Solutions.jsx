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
      className="relative overflow-hidden bg-black text-white"
    >
      {/* 🎥 Vídeo de fundo */}
      <video
        src="/videos/solutions.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:px-6 md:py-28 lg:py-32">
        {/* Título principal */}
        <div className="max-w-3xl space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300/85"
          >
            {t("solutions.badge")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            <span className="font-bold">{t("solutions.heading.strong")} </span>
            <span className="font-light text-white/90">
              {t("solutions.heading.light")}
            </span>
          </motion.h2>
        </div>

        {/* Grid das soluções */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-12 md:grid-cols-3 md:gap-16"
        >
          {/* Créditos de Carbono */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <span className="text-white">
                {t("solutions.carbon.titleStrong")}
              </span>{" "}
              <span className="text-white/80">
                {t("solutions.carbon.titleLight")}
              </span>
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
              <li>• {t("solutions.carbon.item1")}</li>
              <li>• {t("solutions.carbon.item2")}</li>
              <li>• {t("solutions.carbon.item3")}</li>
              <li>• {t("solutions.carbon.item4")}</li>
              <li>• {t("solutions.carbon.item5")}</li>
            </ul>
          </div>

          {/* Inventário GEE (GHG Protocol) */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <span className="text-white">
                {t("solutions.ghg.titleStrong")}
              </span>{" "}
              <span className="text-white/80">
                {t("solutions.ghg.titleLight")}
              </span>
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
              <li>• {t("solutions.ghg.item1")}</li>
              <li>• {t("solutions.ghg.item2")}</li>
              <li>• {t("solutions.ghg.item3")}</li>
              <li>• {t("solutions.ghg.item4")}</li>
            </ul>
          </div>

          {/* Governança ESG */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <span className="text-white">
                {t("solutions.esg.titleStrong")}
              </span>{" "}
              <span className="text-white/80">
                {t("solutions.esg.titleLight")}
              </span>
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-white/80 leading-relaxed">
              <li>• {t("solutions.esg.item1")}</li>
              <li>• {t("solutions.esg.item2")}</li>
              <li>• {t("solutions.esg.item3")}</li>
              <li>• {t("solutions.esg.item4")}</li>
            </ul>
          </div>
        </motion.div>

        {/* CTA único ao final */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={handleScrollToContact}
            className="group inline-flex flex-col gap-3 items-center cursor-pointer"
          >
            <span className="text-xs font-medium uppercase tracking-[0.26em] text-white/70">
              {t("solutions.cta.small")}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-wide">
                {t("solutions.cta.main")}
              </span>
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>

            <div className="mt-2 h-[2px] w-64 max-w-full bg-white/30 overflow-hidden">
              <div
                className="
                  h-full bg-lime-400
                  w-1/4
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
