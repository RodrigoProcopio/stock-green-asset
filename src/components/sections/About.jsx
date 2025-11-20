// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//
// FLOAT ANIMATIONS — OPÇÃO 2 (MÉDIA)
//
const mediumFloat = {
  shape1: {
    initial: { y: -60, x: -40, rotate: -12 },
    animate: {
      y: [-60, -10, -80, -60],
      x: [-40, -70, 20, -40],
      rotate: [-12, -9, -15, -12],
    },
    transition: { duration: 45, repeat: Infinity, ease: "easeInOut" }
  },
  shape2: {
    initial: { y: 40, x: 60, rotate: -12 },
    animate: {
      y: [40, -20, 60, 40],
      x: [60, 20, 100, 60],
      rotate: [-12, -8, -16, -12],
    },
    transition: { duration: 40, repeat: Infinity, ease: "easeInOut" }
  },
  shape3: {
    initial: { y: 30, x: -20, rotate: -12 },
    animate: {
      y: [30, 80, 0, 30],
      x: [-20, 30, -60, -20],
      rotate: [-12, -14, -10, -12],
    },
    transition: { duration: 50, repeat: Infinity, ease: "easeInOut" }
  }
};

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =============================== */}
      {/*           BACKGROUND            */}
      {/* =============================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-neutral-900" />

        {/* Shape diagonal 1 */}
        <motion.div
          initial={mediumFloat.shape1.initial}
          animate={mediumFloat.shape1.animate}
          transition={mediumFloat.shape1.transition}
          className="
            absolute -left-1/4 top-[-30%]
            h-[150%] w-[150%]
            bg-gradient-to-br from-neutral-800 via-neutral-900 to-black
            opacity-40
            -rotate-12
          "
        />

        {/* Shape diagonal 2 */}
        <motion.div
          initial={mediumFloat.shape2.initial}
          animate={mediumFloat.shape2.animate}
          transition={mediumFloat.shape2.transition}
          className="
            absolute -right-1/3 top-[10%]
            h-[140%] w-[120%]
            bg-gradient-to-tl from-black/70 via-neutral-900/60 to-black/70
            opacity-35
            -rotate-12
          "
        />

        {/* Shape diagonal 3 */}
        <motion.div
          initial={mediumFloat.shape3.initial}
          animate={mediumFloat.shape3.animate}
          transition={mediumFloat.shape3.transition}
          className="
            absolute left-1/4 bottom-[-20%]
            h-[120%] w-[80%]
            bg-gradient-to-br from-neutral-800/30 via-black/20 to-neutral-900/40
            opacity-25
            -rotate-12
          "
        />

        {/* Soft wave glow animado */}
        <motion.div
          initial={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.15, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-1/2
            w-[120vw] h-[120vw]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-emerald-300/10
            blur-[180px]
            pointer-events-none
          "
        />
      </div>

      {/* =============================== */}
      {/*         CONTENT SECTION         */}
      {/* =============================== */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-20 md:px-6 md:py-28 lg:py-32">
        {/* Intro text */}
        <div className="max-w-4xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300/85"
          >
            {t("navbar.about.badge")}
          </motion.p>

          <motion.p
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl leading-snug text-white/90 md:text-4xl md:leading-snug"
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
            rounded-3xl border border-white/10 
            bg-gradient-to-r from-neutral-900/95 via-black/95 to-neutral-900/95 
            px-4 py-10 
            shadow-[0_18px_60px_rgba(0,0,0,0.65)]
            backdrop-blur-xl
            md:px-8
          "
        >
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {/* Mission */}
            <div className="border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {t("navbar.about.mission.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {t("navbar.about.mission.text")}
              </p>
            </div>

            {/* Vision */}
            <div className="border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:px-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {t("navbar.about.vision.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {t("navbar.about.vision.text")}
              </p>
            </div>

            {/* Values */}
            <div className="md:pl-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {t("navbar.about.values.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {t("navbar.about.values.text")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
