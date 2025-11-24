import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Sustainability() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // CTA da direita: ir para a página SustainabilityPage.jsx
  const handleGoToSustainabilityPage = useCallback(() => {
    navigate("/sustainability"); // ajuste a rota se for diferente
  }, [navigate]);

  return (
    <section
      id="sustainability"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-black via-[#05070b] to-black py-20 text-white scroll-mt-24"
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-8 top-10 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Watermarks ONU múltiplas */}
<div className="pointer-events-none absolute inset-0 hidden md:block z-0">
  
  {/* Logo 1 */}
  <motion.img
    src="/images/Logos/ungc-logo.webp"
    alt="UN Global Compact"
    loading="lazy"   // ✅ ADICIONADO
    className="absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.16]"
    initial={{ scale: 0.6, opacity: 0, x: 300, y: 0 }}
    animate={{
      opacity: [0.3, 0.2, 0.1],
      scale: [0.6, 1.9, 2.4],
      x: [300, 60, -380, 0],
      y: [-40, 60, -80, 0],
      filter: ["blur(0px)", "blur(3px)", "blur(6px)", "blur(2px)"],
    }}
    transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
  />

  {/* Logo 2 */}
  <motion.img
    src="/images/Logos/ungc-logo.webp"
    alt="UN Global Compact"
    loading="lazy"   // ✅ ADICIONADO
    className="absolute left-1/2 top-1/2 w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
    initial={{ scale: 0.5, opacity: 0, x: 0, y: -140 }}
    animate={{
      opacity: [0.3, 0.2, 0.1],
      scale: [0.5, 1.6, 2.1],
      x: [0, -180, 220, -140],
      y: [-140, 40, -20, 80],
      filter: ["blur(0px)", "blur(2px)", "blur(5px)", "blur(2px)"],
    }}
    transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
  />

  {/* Logo 3 */}
  <motion.img
    src="/images/Logos/ungc-logo.webp"
    alt="UN Global Compact"
    loading="lazy"   // ✅ ADICIONADO
    className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]"
    initial={{ scale: 0.45, opacity: 0, x: -320, y: 120 }}
    animate={{
      opacity: [0.2, 0.4, 0.3],
      scale: [0.45, 1.5, 2.0],
      x: [-320, -40, 260, 80],
      y: [120, -40, -120, 40],
      filter: ["blur(0px)", "blur(2px)", "blur(4px)", "blur(2px)"],
    }}
    transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
  />

</div>

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-14">
          {/* Coluna esquerda */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
              {t("sustainability.badge")}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {t("sustainability.heading.line1")}
              <br />
              <span className="text-white/90">
                {t("sustainability.heading.line2")}
              </span>
            </h2>

            {/* Botão Manifesto – link externo SDGs */}
            <a
              href="https://sdgs.un.org/partnerships/stock-capital-holding-ltda"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/90 ring-1 ring-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_28px_rgba(16,185,129,0.85)]"
            >
              {t("sustainability.buttons.manifesto")}
            </a>

            <p className="mt-8 text-sm text-white/70 md:text-base">
              {t("sustainability.intro.p1")}
            </p>

            <p className="mt-4 text-sm text-white/70 md:text-base">
              {t("sustainability.intro.p2")}
            </p>

            {/* Botão Ver – link externo UN Global Compact */}
            <a
              href="https://unglobalcompact.org/what-is-gc/participants/161633"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/90 ring-1 ring-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_28px_rgba(16,185,129,0.85)]"
            >
              {t("sustainability.buttons.view")}
            </a>
          </motion.div>

          {/* CTA à direita – ir para página SustainabilityPage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-end"
          >
            <button
              onClick={handleGoToSustainabilityPage}
              className="group inline-flex flex-col gap-3 items-center text-center cursor-pointer"
            >
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-white/70">
                {t("sustainability.cta.kicker")}
              </span>

              <div className="flex items-center gap-3 justify-center">
                <span className="text-base font-semibold tracking-wide">
                  {t("sustainability.cta.main")}
                </span>
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="mt-2 h-[2px] w-64 bg-white/30 overflow-hidden">
                <div className="h-full bg-lime-400 w-1/4 group-hover:w-full transition-[width] duration-500 ease-out" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
