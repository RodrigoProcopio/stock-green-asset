import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/layout/Navbar"; // ajuste o caminho se for diferente

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.12 * i,
      ease: "easeOut",
    },
  }),
};

export default function SocialProjects() {
  const { t } = useTranslation();

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-28 pb-20 px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Eyebrow + título */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
              {t("socialProjects.eyebrow")}
            </span>

            <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
              {t("socialProjects.title")}
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
              {t("socialProjects.intro")}
            </p>
          </motion.div>

          {/* Sobre o projeto */}
          <motion.section
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="
              grid gap-6 
              rounded-2xl border border-white/10 
              bg-gradient-to-b from-white/5 to-transparent 
              p-6 
              md:grid-cols-[1.1fr,1.4fr]
            "
          >
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                {t("socialProjects.projectType.title")}
              </h2>
              <p className="mt-3 text-sm text-white/75 md:text-base">
                {t("socialProjects.projectType.text")}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                {t("socialProjects.targetAudience.title")}
              </h3>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                {t("socialProjects.targetAudience.text")}
              </p>
            </div>
          </motion.section>

          {/* Escala e Locais */}
          <motion.section
            custom={2}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                {t("socialProjects.scale.title")}
              </h2>
              <p className="mt-3 text-sm text-white/75 md:text-base">
                {t("socialProjects.scale.text1")}
              </p>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                {t("socialProjects.scale.text2")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                {t("socialProjects.locations.title")}
              </h2>
              <p className="mt-3 text-sm text-white/75 md:text-base">
                {t("socialProjects.locations.text1")}
              </p>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                {t("socialProjects.locations.text2")}
              </p>
            </div>
          </motion.section>

          {/* Investimento & Financiamento */}
          <motion.section
            custom={3}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t("socialProjects.investment.title")}
            </h2>
            <p className="mt-3 text-sm text-white/80 md:text-base">
              {t("socialProjects.investment.text1")}
            </p>
            <p className="mt-3 text-sm text-white/75 md:text-base">
              {t("socialProjects.investment.text2")}
            </p>
          </motion.section>

          {/* Objetivos & ODS */}
          <motion.section
            custom={4}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t("socialProjects.ods.title")}
            </h2>

            <p className="mt-3 text-sm text-white/75 md:text-base">
              {t("socialProjects.ods.description")}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-sm text-white/75">
                <li>• {t("socialProjects.ods.listLeft.item1")}</li>
                <li>• {t("socialProjects.ods.listLeft.item2")}</li>
                <li>• {t("socialProjects.ods.listLeft.item3")}</li>
                <li>• {t("socialProjects.ods.listLeft.item4")}</li>
              </ul>

              <ul className="space-y-2 text-sm text-white/75">
                <li>• {t("socialProjects.ods.listRight.item1")}</li>
                <li>• {t("socialProjects.ods.listRight.item2")}</li>
                <li>• {t("socialProjects.ods.listRight.item3")}</li>
                <li>• {t("socialProjects.ods.listRight.item4")}</li>
              </ul>
            </div>
          </motion.section>

          {/* Metodologia Educacional */}
          <motion.section
            custom={5}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t("socialProjects.methodology.title")}
            </h2>
            <p className="mt-3 text-sm text-white/75 md:text-base">
              {t("socialProjects.methodology.text1")}
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              {t("socialProjects.methodology.text2")}
            </p>
          </motion.section>

          {/* Monitoramento, Métricas & Qualidade */}
          <motion.section
            custom={6}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t("socialProjects.monitoring.title")}
            </h2>

            <p className="mt-3 text-sm text-white/75 md:text-base">
              {t("socialProjects.monitoring.description")}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {t("socialProjects.monitoring.studentLevel.title")}
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-white/75">
                  <li>• {t("socialProjects.monitoring.studentLevel.item1")}</li>
                  <li>• {t("socialProjects.monitoring.studentLevel.item2")}</li>
                  <li>• {t("socialProjects.monitoring.studentLevel.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {t("socialProjects.monitoring.institutionLevel.title")}
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-white/75">
                  <li>• {t("socialProjects.monitoring.institutionLevel.item1")}</li>
                  <li>• {t("socialProjects.monitoring.institutionLevel.item2")}</li>
                  <li>• {t("socialProjects.monitoring.institutionLevel.item3")}</li>
                  <li>• {t("socialProjects.monitoring.institutionLevel.item4")}</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Governança & Corpo Técnico */}
          <motion.section
            custom={7}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t("socialProjects.governance.title")}
            </h2>
            <p className="mt-3 text-sm text-white/75 md:text-base">
              {t("socialProjects.governance.text1")}
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              {t("socialProjects.governance.text2")}
            </p>
          </motion.section>

          {/* CTA PDF + Voltar */}
          <motion.div
            custom={8}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="
              pt-4 
              flex flex-col gap-4 
              md:flex-row md:items-center md:justify-between
            "
          >
            {/* Botão PDF */}
            <a
              href="/files/social-projects.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full border border-emerald-400/80
                bg-emerald-400/10
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-emerald-100
                hover:bg-emerald-400 hover:text-black
                transition-all
              "
            >
              {t("socialProjects.downloadPDF")}
            </a>

            {/* Botão Voltar */}
            <a
              href="/"
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/20
                bg-white/5
                px-6 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-white/80
                hover:border-emerald-400/70 hover:bg-emerald-400/10 hover:text-white
                transition-all
                backdrop-blur-sm
              "
            >
              ← {t("socialProjects.backHome")}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
