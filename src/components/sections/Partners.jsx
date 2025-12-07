import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Partners() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleScrollToEcosystem = useCallback(() => {
    navigate("/partners-ecosystem");
  }, [navigate]);

  return (
    <section
      id="partners"
      className="
        relative overflow-hidden scroll-mt-24
        border-t border-[#d6d6d6]
        bg-white pt-24 pb-40
        text-[#333846]
      "
    >
      {/* ---- BACKGROUND INSTITUCIONAL ---- */}
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
        {/* Gradiente institucional */}
        <div className="h-full w-full bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7]" />

        {/* Blob navy */}
        <motion.div
          className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#1c2846]/28 blur-3xl"
          initial={{ x: -120, y: 40, scale: 1 }}
          animate={{ x: 40, y: -40, scale: 1.15 }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Blob slate */}
        <motion.div
          className="absolute right-[-8rem] bottom-[-6rem] h-96 w-96 rounded-full bg-[#333846]/24 blur-3xl"
          initial={{ x: 120, y: 40, scale: 1 }}
          animate={{ x: -40, y: -10, scale: 1.2 }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </motion.div>

      {/* ---- CARROSSEL INSTITUCIONAL DE LOGOS ---- */}
      <LogosMarquee />

      {/* ---- CONTEÚDO ---- */}
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
              {t("partners.badge")}
            </p>
            <button
              type="button"
              onClick={handleScrollToEcosystem}
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
              {t("partners.cta.label")}
            </button>
          </motion.div>

          {/* COLUNA DIREITA */}
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-sm md:text-base text-[#333846]">
              {t("partners.body.p1")}
            </p>
            <p className="mt-4 text-sm md:text-base text-[#333846]">
              {t("partners.body.p2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   LOGOS MARQUEE (CARROSSEL) – VERSÃO LIMPA
-------------------------------------------- */
function LogosMarquee() {
  const logos = [
    { file: "Abu Dhabi Global Market.webp", name: "ADGM" },
    { file: "B3.webp", name: "B3" },
    { file: "BACX Argentina.webp", name: "BACX" },
    { file: "BUB preto.webp", name: "BUB" },
    { file: "Bureau Veritas.webp", name: "Bureau Veritas" },
    { file: "CIPÓ ENGENHARIA.webp", name: "CIPÓ" },
    { file: "Climate Impact.webp", name: "Climate Impact X" },
    { file: "CTX.webp", name: "CTX" },
    { file: "Earthood.webp", name: "Earthood" },
    { file: "EPTV.webp", name: "EPTV" },
    { file: "Martinelli.webp", name: "Martinelli" },
    { file: "Office K-InTech.webp", name: "K-InTech" },
    { file: "Perenar.webp", name: "Perenar" },
    { file: "proph3t capital.webp", name: "Proph3t" },
    { file: "spotsat.webp", name: "Spotsat" },
    { file: "studio.webp", name: "Grupo Studio" },
    { file: "Verra.webp", name: "Verra" },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden opacity-40 md:h-28 z-0">
      <motion.div
        className="flex items-center gap-16"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={`/images/Logos/${logo.file}`}
            alt={logo.name}
            loading="lazy"
            className="
              h-20 md:h-24 w-auto object-contain
              filter grayscale contrast-[0.85] brightness-[1.15]
            "
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Partners;
