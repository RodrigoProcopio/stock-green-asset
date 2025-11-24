import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";

const partners = [
  {
    id: "ctx",
    logo: "/images/Logos/CTX.webp",
    website: "https://ctxglobal.com/",
    scale: 3.0,
  },
  {
    id: "cipo",
    logo: "/images/Logos/CIPÓ ENGENHARIA.webp",
    website: "https://www.xn--ciposoluesambientais-b1b22a.com.br/",
    scale: 1.1,
  },
  {
    id: "officeK",
    logo: "/images/Logos/Office K-InTech.webp",
    website:
      "https://www.linkedin.com/in/albertomjunior/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    scale: 2.0,
  },
  {
    id: "bub",
    logo: "/images/Logos/BUB preto.webp",
    website: "https://betteruseblockchain.com/",
    scale: 1.0,
  },
  {
    id: "spotsat",
    logo: "/images/Logos/spotsat.webp",
    website: "https://spotsat.com.br/",
    scale: 1.8,
  },
  {
    id: "bacx",
    logo: "/images/Logos/BACX Argentina.webp",
    website: "https://www.bacx.com.ar/en/",
    scale: 1.1,
  },
  {
    id: "martinelli",
    logo: "/images/Logos/Martinelli.webp",
    website: "https://martinelliguimaraes.com.br/",
    scale: 1.8,
  },
  {
    id: "perenar",
    logo: "/images/Logos/Perenar.webp",
    website:
      "https://www.linkedin.com/in/eduardo-eugenio-assmann-2a597b239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    scale: 1.5,
  },
  {
    id: "grupoStudio",
    logo: "/images/Logos/studio.webp",
    website: "https://grupostudio.com.br/",
    scale: 1.1,
  },
  {
    id: "eptv",
    logo: "/images/Logos/EPTV.webp",
    website: "https://institucional.eptv.com.br/televisao/aeptv.aspx",
    scale: 1.05,
  },
  {
    id: "adgm",
    logo: "/images/Logos/Abu Dhabi Global Market.webp",
    website: "https://www.adgm.com/",
    scale: 1.0,
  },
  {
    id: "proph3t",
    logo: "/images/Logos/proph3t capital.webp",
    website: "https://www.proph3t.xyz/lander",
    scale: 2.0,
  },
  {
    id: "b3",
    logo: "/images/Logos/B3.webp",
    website: "https://www.b3.com.br/pt_br/para-voce",
    scale: 1.0,
  },
  {
    id: "earthood",
    logo: "/images/Logos/Earthood.webp",
    website: "https://www.earthood.com/",
    scale: 1.8,
  },
  {
    id: "bureauVeritas",
    logo: "/images/Logos/Bureau Veritas.webp",
    website: "https://group.bureauveritas.com/",
    scale: 1.2,
  },
  {
    id: "verra",
    logo: "/images/Logos/Verra.webp",
    website: "https://verra.org/",
    scale: 1.0,
  },
  {
    id: "climateImpactX",
    logo: "/images/Logos/Climate Impact.webp",
    website: "https://climateimpactx.com/",
    scale: 1.0,
  },
];

export function PartnersEcosystem() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR FIXO NO TOPO (MESMO DA HOME) */}
      <Navbar />

      <main>
        <section className="relative overflow-hidden py-24 md:py-28">
          {/* Aurora leve no fundo */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-60"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.div
              className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-500/30 blur-3xl"
              initial={{ x: -60, y: 0, scale: 1 }}
              animate={{ x: 40, y: -20, scale: 1.1 }}
              transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute right-[-8rem] bottom-[-4rem] h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl"
              initial={{ x: 40, y: 40, scale: 1 }}
              animate={{ x: -40, y: -10, scale: 1.15 }}
              transition={{
                duration: 22,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
            {/* Header animado */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                {t("partnersPage.badge")}
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                {t("partnersPage.title.line1")}
                <br />
                <span className="text-white/90">
                  {t("partnersPage.title.line2")}
                </span>
              </h1>

              <p className="mt-4 text-sm text-white/80 md:text-base">
                {t("partnersPage.intro")}
              </p>
            </motion.div>

            {/* Lista de parceiros */}
            <div className="mt-8 space-y-12 md:mt-12 md:space-y-20">
              {partners.map((partner, index) => {
                const nameKey = `partnersPage.partners.${partner.id}.name`;
                const descriptionKey = `partnersPage.partners.${partner.id}.description`;

                return (
                  <motion.article
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] md:items-center"
                  >
                    {/* Logo clicável — card branco translúcido com hover premium */}
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("partnersPage.visitPartner", {
                        name: t(nameKey),
                      })}
                      className="flex items-center justify-center md:justify-start"
                    >
                      <div
                        className="
                          flex items-center justify-center
                          h-28 w-52
                          rounded-2xl
                          p-4
                          bg-white/40
                          border border-emerald-400/40
                          shadow-[0_0_15px_rgba(16,185,129,0.35)]
                          backdrop-blur-md
                          transition-transform transition-shadow duration-300
                          hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(16,185,129,0.55)]
                        "
                      >
                        <img
                          src={partner.logo}
                          alt={t(nameKey)}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain"
                          style={{ transform: `scale(${partner.scale || 1})` }}
                        />
                      </div>
                    </a>

                    {/* Texto */}
                    <div className="text-sm text-white/80 md:text-base">
                      <h2 className="text-base font-semibold text-emerald-400 md:text-lg">
                        {t(nameKey)}
                      </h2>
                      <p className="mt-2 leading-relaxed">
                        {t(descriptionKey)}
                      </p>
                    </div>
                  </motion.article>
                );
              })}

              {/* Botão voltar para Home — ANCORADO no final, alinhado à direita */}
              <div className="pt-8 border-t border-white/10 mt-8 flex justify-end">
                <Link
                  to="/"
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-emerald-300/40 
                    px-6 py-3 
                    text-xs font-medium uppercase tracking-[0.22em]
                    text-emerald-200 
                    bg-emerald-500/10 
                    backdrop-blur-md
                    shadow-[0_0_20px_rgba(16,185,129,0.25)]
                    hover:bg-emerald-400 hover:text-black 
                    hover:border-emerald-300 
                    transition-all
                  "
                >
                  {t("partnersPage.backHome")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PartnersEcosystem;
