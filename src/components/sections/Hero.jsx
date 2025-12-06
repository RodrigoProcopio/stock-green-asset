import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const { t } = useTranslation();
  const titleControls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    let isCancelled = false;

    const loopAnimation = async () => {
      while (!isCancelled) {
        await titleControls.start((i) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.1,
            delay: i * 0.4,
            ease: "easeOut",
          },
        }));

        await new Promise((res) => setTimeout(res, 5000));

        await titleControls.start({
          opacity: 0,
          y: 30,
          transition: {
            duration: 0.4,
            ease: "easeIn",
          },
        });

        await new Promise((res) => setTimeout(res, 800));
      }
    };

    loopAnimation();
    return () => {
      isCancelled = true;
    };
  }, [titleControls]);<div
  className="
    absolute inset-0
    bg-gradient-to-b from-white/40 via-white/20 to-white/10
  "
/>


  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden scroll-mt-24
        bg-white text-[#333846]
        transition-colors duration-300
      "
    >
      {/* BACKGROUND DESKTOP (VÍDEO) */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/hero-forest.webm" type="video/webm" />
        </video>

        {/* overlay claro com leve tom institucional */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b bg-gradient-to-b from-[#1c2846]/90 via-[#1c2846]/60 to-[#1c2846]/90
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(28,40,70,0.20),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(51,56,70,0.16),transparent_60%)]
          "
        />
      </div>

      {/* BACKGROUND MOBILE (IMAGEM) */}
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <img
          src="/images/Hero.webp"
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute inset-0 
            bg-gradient-to-b bg-gradient-to-b from-[#1c2846]/90 via-[#1c2846]/60 to-[#1c2846]/90
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(28,40,70,0.20),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(51,56,70,0.16),transparent_60%)]
          "
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="relative max-w-6xl space-y-8">
          {/* Glow atrás do texto */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 1.5 }}
              className="
                absolute left-[-80px] top-[-60px] h-64 w-64 rounded-full
                bg-white/22 blur-3xl
              "
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="
                absolute right-[-60px] bottom-[-40px] h-64 w-64 rounded-full
                bg-white/18 blur-3xl
              "
            />
          </div>

          {/* TÍTULO */}
          <h1 className="text-4xl font-semibold leading-tight md:text-7xl md:leading-[1.15] select-none">
  {/* Linha 1 */}
  <motion.span
    className="
      block 
      text-[#e6e6e6]
      drop-shadow-[0_4px_14px_rgba(255,255,255,0.25)]
    "
    custom={0}
    initial={{ opacity: 0, y: 30 }}
    animate={titleControls}
    transition={{ duration: 1.1, ease: "easeOut" }}
  >
    {t("hero.line1")}
  </motion.span>

  {/* Linha 2 */}
  <motion.span
    className="
      block
      bg-gradient-to-r from-[#e6e6e6] via-[#b6b9c4] to-[#8d93a8]
      bg-clip-text text-transparent
      drop-shadow-[0_6px_22px_rgba(180,190,210,0.35)]
    "
    custom={1}
    initial={{ opacity: 0, y: 30 }}
    animate={titleControls}
    transition={{ duration: 1.1, ease: "easeOut" }}
  >
    {t("hero.line2")}
  </motion.span>

  {/* Linha 3 */}
  <motion.span
    className="
      block
      bg-gradient-to-r from-[#b6bcc7] via-[#e6e6e6] to-[#b6bcc7]
      bg-clip-text text-transparent
      drop-shadow-[0_5px_18px_rgba(200,200,200,0.28)]
    "
    custom={2}
    initial={{ opacity: 0, y: 30 }}
    animate={titleControls}
    transition={{ duration: 1.1, ease: "easeOut" }}
  >
    {t("hero.line3")}
  </motion.span>
</h1>

          {/* BOTÕES */}
          <motion.div
            className="mt-16 flex flex-wrap items-center gap-4 md:flex-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* CTA principal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                relative inline-flex items-center justify-center
                overflow-hidden
                rounded-full border
                border-[#d6d6d6]
                bg-[#1c2846]/75 hover:bg-[#1c2846]
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-white
                hover:bg-[#333846]
                transition-all
                shadow-[0_0_22px_rgba(28,40,70,0.35)]
                whitespace-nowrap
              "
              onClick={() => navigate("/projects/mazuay-redd")}
            >
              <span className="relative z-10">
                {t("hero.ctaCarbonCredit")}
              </span>

              <motion.span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-y-0 left-[-20%]
                  w-1/2
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  opacity-0
                "
                animate={{
                  x: ["-120%", "120%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatDelay: 2.0,
                  ease: "easeInOut",
                }}
              />
            </motion.button>

            {/* Botões secundários */}
            {[
              {
                label: t("hero.ctaSolutions"),
                onClick: () => scrollTo("#solutions"),
              },
              {
                label: t("hero.ctaSustainability"),
                onClick: () => scrollTo("#sustainability"),
              },
              {
                label: t("hero.ctaProjects"),
                onClick: () => navigate("/social-projects"),
              },
            ].map((btn) => (
              <motion.button
                key={btn.label}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex items-center justify-center
                  rounded-full border
                  bg-white/35
                  backdrop-blur-md
                  border-white/50
                  hover:bg-white/80
                  px-8 py-3
                  text-xs font-semibold uppercase tracking-[0.22em]
                  text-[#d6d6d6]
                  hover:border-[#1c2846] hover:bg-[#f5f5f7]
                  hover:text-[#1c2846]
                  transition-all backdrop-blur-sm
                  whitespace-nowrap
                "
                onClick={btn.onClick}
              >
                {btn.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
