import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";

/**
 * Lista de parceiros exibidos na página de Ecossistema.
 * Cada item controla:
 * - `logo`: caminho da imagem
 * - `website`: link externo
 * - `scale`: ajuste fino de tamanho do logo no card
 */
const partners = [
  {
    id: "adgm",
    logo: "/images/Logos/Abu Dhabi Global Market.webp",
    website: "https://www.adgm.com/",
    scale: 1.0,
  },
  {
    id: "b3",
    logo: "/images/Logos/B3.webp",
    website: "https://www.b3.com.br/pt_br/para-voce",
    scale: 1.0,
  },
  {
    id: "bacx",
    logo: "/images/Logos/BACX Argentina.webp",
    website: "https://www.bacx.com.ar/en/",
    scale: 1.1,
  },
  {
    id: "climateImpactX",
    logo: "/images/Logos/Climate Impact.webp",
    website: "https://climateimpactx.com/",
    scale: 1.0,
  },
  {
    id: "ctx",
    logo: "/images/Logos/CTX.webp",
    website: "https://ctxglobal.com/",
    scale: 3.0,
  },
  {
    id: "bureauVeritas",
    logo: "/images/Logos/Bureau Veritas.webp",
    website: "https://group.bureauveritas.com/",
    scale: 1.2,
  },
  {
    id: "earthood",
    logo: "/images/Logos/Earthood.webp",
    website: "https://www.earthood.com/",
    scale: 1.8,
  },
  {
    id: "verra",
    logo: "/images/Logos/Verra.webp",
    website: "https://verra.org/",
    scale: 1.0,
  },
  {
    id: "grupoStudio",
    logo: "/images/Logos/studio.webp",
    website: "https://grupostudio.com.br/",
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
    id: "perenar",
    logo: "/images/Logos/Perenar.webp",
    website:
      "https://www.linkedin.com/in/eduardo-eugenio-assmann-2a597b239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    scale: 1.5,
  },
  {
    id: "bub",
    logo: "/images/Logos/BUB preto.webp",
    website: "https://betteruseblockchain.com/",
    scale: 1.0,
  },
  {
    id: "cipo",
    logo: "/images/Logos/CIPÓ ENGENHARIA.webp",
    website: "https://www.xn--ciposoluesambientais-b1b22a.com.br/",
    scale: 1.1,
  },
  {
    id: "spotsat",
    logo: "/images/Logos/spotsat.webp",
    website: "https://spotsat.com.br/",
    scale: 1.8,
  },
  {
    id: "proph3t",
    logo: "/images/Logos/proph3t capital.webp",
    website: "https://www.proph3t.xyz/lander",
    scale: 2.0,
  },
  {
    id: "martinelli",
    logo: "/images/Logos/Martinelli.webp",
    website: "https://martinelliguimaraes.com.br/",
    scale: 1.8,
  },
  {
    id: "eptv",
    logo: "/images/Logos/EPTV.webp",
    website: "https://institucional.eptv.com.br/televisao/aeptv.aspx",
    scale: 1.05,
  },
];

export function PartnersEcosystem() {
  const { t } = useTranslation();

  /**
   * Ao entrar nesta rota, garante que a página sempre inicie no topo.
   * Útil quando o usuário vem de outra rota já rolada.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#333846]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden py-24 md:py-28">
          {/* Fundo animado tipo "aurora" com blobs nas cores institucionais */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {/* Gradiente base suave */}
            <div className="h-full w-full bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7]" />

            {/* Blob azul marinho */}
            <motion.div
              className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#1c2846]/26 blur-3xl"
              initial={{ x: -60, y: 0, scale: 1 }}
              animate={{ x: 40, y: -20, scale: 1.1 }}
              transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            {/* Blob cinza/azul escuro */}
            <motion.div
              className="absolute right-[-8rem] bottom-[-4rem] h-96 w-96 rounded-full bg-[#333846]/22 blur-3xl"
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
            {/* Cabeçalho da página (título + intro) */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1c2846] md:text-4xl">
                {t("partnersPage.title.line1")}
                <br />
                <span className="text-[#333846]">
                  {t("partnersPage.title.line2")}
                </span>
              </h1>

              <p className="mt-4 text-sm text-[#333846] md:text-base">
                {t("partnersPage.intro")}
              </p>
            </motion.div>

            {/* Lista de parceiros – conteúdo vem do array `partners` + traduções i18next */}
            <div className="mt-8 space-y-12 md:mt-12 md:space-y-20">
              {partners.map((partner, index) => {
                // Chaves de tradução derivadas do `id` do parceiro
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
                    {/* Card do logo (clicável) do parceiro */}
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
                          flex h-28 w-52 items-center justify-center
                          rounded-2xl border border-[#d6d6d6]
                          bg-white/95 p-4
                          shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                          backdrop-blur-md
                          transition-transform transition-shadow duration-300
                          hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
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

                    {/* Bloco de texto do parceiro (nome + descrição) */}
                    <div className="text-sm text-[#333846] md:text-base">
                      <h2 className="text-base font-semibold text-[#1c2846] md:text-lg">
                        {t(nameKey)}
                      </h2>
                      <p className="mt-2 leading-relaxed">
                        {t(descriptionKey)}
                      </p>
                    </div>
                  </motion.article>
                );
              })}

              {/* Ação final: botão para voltar à seção inicial/home do site */}
              <div className="mt-8 border-t border-[#d6d6d6] pt-8 flex justify-end">
                <Link
                  to="/#home"
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-[#1c2846]
                    px-6 py-3
                    text-xs font-medium uppercase tracking-[0.22em]
                    text-[#1c2846]
                    bg-transparent
                    backdrop-blur-md
                    shadow-[0_0_16px_rgba(0,0,0,0.08)]
                    hover:bg-[#1c2846] hover:text-white
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
