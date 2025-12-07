// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//
// FLOAT ANIMATIONS — OPÇÃO 2 (MÉDIA)
// (mantida igual, reaproveitando o movimento)
//
const mediumFloat = {
  shape1: {
    initial: { y: -60, x: -40, rotate: -12 },
    animate: {
      y: [-60, -10, -80, -60],
      x: [-40, -70, 20, -40],
      rotate: [-12, -9, -15, -12],
    },
    transition: { duration: 45, repeat: Infinity, ease: "easeInOut" },
  },
  shape2: {
    initial: { y: 40, x: 60, rotate: -12 },
    animate: {
      y: [40, -20, 60, 40],
      x: [60, 20, 100, 60],
      rotate: [-12, -8, -16, -12],
    },
    transition: { duration: 40, repeat: Infinity, ease: "easeInOut" },
  },
  shape3: {
    initial: { y: 30, x: -20, rotate: -12 },
    animate: {
      y: [30, 80, 0, 30],
      x: [-20, 30, -60, -20],
      rotate: [-12, -14, -10, -12],
    },
    transition: { duration: 50, repeat: Infinity, ease: "easeInOut" },
  },
};

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-white text-[#333846]"
    >
      {/* =============================== */}
      {/*           BACKGROUND            */}
      {/* =============================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base clara suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7]" />

        {/* Shape diagonal 1 (navy suave) */}
        <motion.div
          initial={mediumFloat.shape1.initial}
          animate={mediumFloat.shape1.animate}
          transition={mediumFloat.shape1.transition}
          className="
            absolute -left-1/4 top-[-30%]
            h-[150%] w-[150%]
            bg-gradient-to-br from-[#1c2846]/18 via-white/30 to-transparent
            opacity-70
            -rotate-12
            mix-blend-multiply
          "
        />

        {/* Shape diagonal 2 (slate translúcido) */}
        <motion.div
          initial={mediumFloat.shape2.initial}
          animate={mediumFloat.shape2.animate}
          transition={mediumFloat.shape2.transition}
          className="
            absolute -right-1/3 top-[10%]
            h-[140%] w-[120%]
            bg-gradient-to-tl from-[#333846]/18 via-white/20 to-transparent
            opacity-65
            -rotate-12
            mix-blend-multiply
          "
        />

        {/* Shape diagonal 3 (mancha de luz no rodapé) */}
        <motion.div
          initial={mediumFloat.shape3.initial}
          animate={mediumFloat.shape3.animate}
          transition={mediumFloat.shape3.transition}
          className="
            absolute left-1/4 bottom-[-20%]
            h-[120%] w-[80%]
            bg-gradient-to-br from-white/40 via-[#f5f5f7]/60 to-[#1c2846]/12
            opacity-55
            -rotate-12
            mix-blend-multiply
          "
        />

        {/* Soft wave glow animado (halo institucional) */}
        <motion.div
          initial={{ opacity: 0.22, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.08, 1],
            x: [0, 26, -18, 0],
            y: [0, -14, 20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-1/2
            h-[110vw] w-[110vw]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#1c2846]/16
            blur-[160px]
          "
        />
      </div>

      {/* =============================== */}
      {/*         CONTENT SECTION         */}
      {/* =============================== */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-20 md:px-6 md:py-28 lg:py-32">
        {/* Intro text */}
        <div className="max-w-5xl space-y-4">
          {/* Título "Quem Somos" */}
          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold leading-tight text-[#1c2846] md:text-4xl"
          >
            {t("navbar.about.badge")}
          </motion.h2>

          {/* Parágrafo institucional (texto longo) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              mt-3
              text-sm md:text-base
              leading-relaxed
              text-[#333846]
              max-w-4xl lg:max-w-5xl
            "
          >
            {t("navbar.about.headline")}
          </motion.p>
        </div>

        {/* =============================== */}
        {/*   MISSION / VISION / VALUES    */}
        {/* =============================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            rounded-3xl border border-[#d6d6d6]
            bg-white/85
            px-4 py-10
            shadow-[0_18px_40px_rgba(0,0,0,0.06)]
            backdrop-blur-xl
            md:px-8
          "
        >
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {/* Mission */}
            <div className="border-b border-[#d6d6d6]/60 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
                {t("navbar.about.mission.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#333846]">
                {t("navbar.about.mission.text")}
              </p>
            </div>

            {/* Vision */}
            <div className="border-b border-[#d6d6d6]/60 pb-6 md:border-b-0 md:border-r md:pb-0 md:px-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
                {t("navbar.about.vision.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#333846]">
                {t("navbar.about.vision.text")}
              </p>
            </div>

            {/* Values */}
            <div className="md:pl-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
                {t("navbar.about.values.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#333846]">
                {t("navbar.about.values.text")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
