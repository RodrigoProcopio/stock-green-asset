import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const titleControls = useAnimation();

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
  }, [titleControls]);

  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white scroll-mt-24"
    >
      {/* Vídeo otimizado (.webm) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/hero-forest.webm"
            type="video/webm"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-emerald-400/12 blur-3xl" />
          <div className="absolute right-[-5%] bottom-[5%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="relative max-w-6xl space-y-8">
          {/* Glow atrás do texto */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 1.5 }}
              className="absolute left-[-80px] top-[-60px] h-64 w-64 rounded-full bg-emerald-400/40 blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute right-[-60px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/40 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 top-10 h-40 w-40 rounded-full bg-emerald-300/25 blur-2xl"
            />
          </div>

          {/* Título com animação */}
          <h1 className="text-4xl font-semibold leading-tight md:text-7xl md:leading-[1.15]">
            <motion.span
              className="block text-white"
              custom={0}
              initial={{ opacity: 0, y: 30 }}
              animate={titleControls}
            >
              {t("hero.line1")}
            </motion.span>

            <motion.span
              className="
                block 
                bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 
                bg-clip-text text-transparent
              "
              custom={1}
              initial={{ opacity: 0, y: 30 }}
              animate={titleControls}
            >
              {t("hero.line2")}
            </motion.span>

            <motion.span
              className="
                block 
                bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 
                bg-clip-text text-transparent
              "
              custom={2}
              initial={{ opacity: 0, y: 30 }}
              animate={titleControls}
            >
              {t("hero.line3")}
            </motion.span>
          </h1>

          {/* Botões */}
          <motion.div
            className="mt-16 flex flex-wrap items-center gap-4 md:flex-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center
                rounded-full border border-emerald-400/80
                bg-emerald-400/10
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-emerald-100
                hover:bg-emerald-400 hover:text-black
                transition-all
                shadow-[0_0_22px_rgba(16,185,129,0.45)]
                whitespace-nowrap
              "
              onClick={() => scrollTo("#contact")}
            >
              {t("hero.ctaTalkToTeam")}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/25
                bg-black/30
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-white/85
                hover:border-white/60 hover:bg-white/5 hover:text-white
                transition-all backdrop-blur-sm
                whitespace-nowrap
              "
              onClick={() => scrollTo("#solutions")}
            >
              {t("hero.ctaSolutions")}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/25
                bg-black/30
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-white/85
                hover:border-white/60 hover:bg-white/5 hover:text-white
                transition-all backdrop-blur-sm
                whitespace-nowrap
              "
              onClick={() => scrollTo("#sustainability")}
            >
              {t("hero.ctaSustainability")}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/25
                bg-black/30
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-white/85
                hover:border-white/60 hover:bg-white/5 hover:text-white
                transition-all backdrop-blur-sm
                whitespace-nowrap
              "
              onClick={() => scrollTo("#projects")}
            >
              {t("hero.ctaProjects")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
