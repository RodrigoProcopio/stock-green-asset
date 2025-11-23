import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Partners() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleScrollToEcosystem = useCallback(() => {
    navigate("/partners-ecosystem"); // ✅ agora vai para a página
  }, [navigate]);

  return (
    <section
      id="partners"
      className="relative overflow-hidden border-t border-white/5 bg-black py-24 text-white scroll-mt-24"
    >
      {/* 🔁 CARROSSEL DE LOGOS COMO BACKGROUND */}
      <LogosMarquee />

      {/* BACKGROUND AURORA */}
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
          className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-emerald-500/35 blur-3xl"
          initial={{ x: 60, y: 20, scale: 1 }}
          animate={{ x: -40, y: -30, scale: 1.2 }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Blob cyan */}
        <motion.div
          className="absolute left-[-8rem] bottom-[-6rem] h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl"
          initial={{ x: -80, y: 40, scale: 1 }}
          animate={{ x: 40, y: -10, scale: 1.25 }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </motion.div>

      {/* MAIN CONTENT */}
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
              {t("partners.badge")}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              <span className="block md:whitespace-nowrap">
                {t("partners.heading.line1")}
              </span>
              <span className="block text-white/90 md:whitespace-nowrap">
                {t("partners.heading.line2")}
              </span>
            </h2>

            <button
              type="button"
              onClick={handleScrollToEcosystem}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-7 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-white/90 ring-1 ring-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_28px_rgba(16,185,129,0.85)]"
            >
              {t("partners.cta.label")}
            </button>
          </motion.div>

          {/* COLUNA DIREITA – TEXTO */}
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-sm text-white/80 md:text-base">
              {t("partners.body.p1")}
            </p>

            <p className="mt-4 text-sm text-white/80 md:text-base">
              {t("partners.body.p2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Carrossel de logos no fundo da seção
 * Usa imagens em: public/images/Logos
 */
function LogosMarquee() {
  const logos = [
    { file: "Abu Dhabi Global Market.png", name: "Abu Dhabi Global Market" },
    { file: "B3.png", name: "B3" },
    { file: "BACX Argentina.png", name: "BACX Argentina" },
    { file: "BUB preto.png", name: "BUB" },
    { file: "Bureau Veritas.png", name: "Bureau Veritas" },
    { file: "CIPÓ ENGENHARIA.png", name: "CIPÓ Engenharia" },
    { file: "Climate Impact.png", name: "Climate Impact X" },
    { file: "CTX.png", name: "CTX" },
    { file: "Earthood.png", name: "Earthood" },
    { file: "EPTV.png", name: "EPTV" },
    { file: "Martinelli.png", name: "Martinelli" },
    { file: "Office K-InTech.png", name: "Office K-InTech" },
    { file: "Perenar.png", name: "Perenar" },
    { file: "proph3t capital.png", name: "proph3t capital" },
    { file: "spotsat.png", name: "Spotsat" },
    { file: "studio.png", name: "Grupo Studio" },
    { file: "Verra.png", name: "Verra" },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-28 overflow-hidden opacity-30">
      <motion.div
        className="flex items-center gap-16"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={`${logo.name}-${index}`}
            src={`/images/Logos/${logo.file}`}
            alt={logo.name}
            className="h-20 w-auto md:h-24 object-contain grayscale"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Partners;
