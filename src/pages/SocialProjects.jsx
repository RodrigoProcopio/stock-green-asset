import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/layout/Navbar";

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
      <Navbar />

      <section className="min-h-screen bg-[#f5f5f7] text-[#333846] pt-28 pb-20 px-4">
        <div className="mx-auto max-w-5xl space-y-12">

          {/* Eyebrow + título */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
            <span className="text-xs uppercase tracking-[0.35em] text-[#1c2846]">
              {t("socialProjects.eyebrow")}
            </span>

            <h1 className="mt-4 text-3xl font-semibold md:text-5xl text-[#1c2846]">
              {t("socialProjects.title")}
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-[#333846]">
              {t("socialProjects.intro")}
            </p>
          </motion.div>

          {/* SOBRE O PROJETO */}
          <motion.section
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="
              grid gap-6 
              rounded-2xl border border-[#d6d6d6]
              bg-white/95 backdrop-blur-md
              shadow-[0_18px_40px_rgba(0,0,0,0.04)]
              p-6 
              md:grid-cols-[1.1fr,1.4fr]
            "
          >
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
                {t("socialProjects.projectType.title")}
              </h2>
              <p className="mt-3 text-sm md:text-base">
                {t("socialProjects.projectType.text")}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
                {t("socialProjects.targetAudience.title")}
              </h3>
              <p className="mt-3 text-sm md:text-base">
                {t("socialProjects.targetAudience.text")}
              </p>
            </div>
          </motion.section>

          {/* ESCALA & LOCAIS */}
          <motion.section
            custom={2}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-2xl border border-[#d6d6d6] bg-white/95 p-6 shadow-[0_12px_25px_rgba(0,0,0,0.04)]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
                {t("socialProjects.scale.title")}
              </h2>
              <p className="mt-3">{t("socialProjects.scale.text1")}</p>
              <p className="mt-3">{t("socialProjects.scale.text2")}</p>
            </div>

            <div className="rounded-2xl border border-[#d6d6d6] bg-white/95 p-6 shadow-[0_12px_25px_rgba(0,0,0,0.04)]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
                {t("socialProjects.locations.title")}
              </h2>
              <p className="mt-3">{t("socialProjects.locations.text1")}</p>
              <p className="mt-3">{t("socialProjects.locations.text2")}</p>
            </div>
          </motion.section>

          {/* INVESTIMENTO */}
          <motion.section
            custom={3}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-[#1c2846]/30 bg-[#1c2846]/5 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
              {t("socialProjects.investment.title")}
            </h2>
            <p className="mt-3">{t("socialProjects.investment.text1")}</p>
            <p className="mt-3">{t("socialProjects.investment.text2")}</p>
          </motion.section>

          {/* ODS */}
          <motion.section
            custom={4}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-[#d6d6d6] bg-white/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
              {t("socialProjects.ods.title")}
            </h2>

            <p className="mt-3">{t("socialProjects.ods.description")}</p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-sm">
                <li>• {t("socialProjects.ods.listLeft.item1")}</li>
                <li>• {t("socialProjects.ods.listLeft.item2")}</li>
                <li>• {t("socialProjects.ods.listLeft.item3")}</li>
                <li>• {t("socialProjects.ods.listLeft.item4")}</li>
              </ul>

              <ul className="space-y-2 text-sm">
                <li>• {t("socialProjects.ods.listRight.item1")}</li>
                <li>• {t("socialProjects.ods.listRight.item2")}</li>
                <li>• {t("socialProjects.ods.listRight.item3")}</li>
                <li>• {t("socialProjects.ods.listRight.item4")}</li>
              </ul>
            </div>
          </motion.section>

          {/* METODOLOGIA */}
          <motion.section
            custom={5}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-[#d6d6d6] bg-white/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
              {t("socialProjects.methodology.title")}
            </h2>
            <p className="mt-3">{t("socialProjects.methodology.text1")}</p>
            <p className="mt-3">{t("socialProjects.methodology.text2")}</p>
          </motion.section>

          {/* MONITORAMENTO */}
          <motion.section
            custom={6}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-[#d6d6d6] bg-white/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
              {t("socialProjects.monitoring.title")}
            </h2>

            <p className="mt-3">{t("socialProjects.monitoring.description")}</p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
                  {t("socialProjects.monitoring.studentLevel.title")}
                </h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• {t("socialProjects.monitoring.studentLevel.item1")}</li>
                  <li>• {t("socialProjects.monitoring.studentLevel.item2")}</li>
                  <li>• {t("socialProjects.monitoring.studentLevel.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
                  {t("socialProjects.monitoring.institutionLevel.title")}
                </h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• {t("socialProjects.monitoring.institutionLevel.item1")}</li>
                  <li>• {t("socialProjects.monitoring.institutionLevel.item2")}</li>
                  <li>• {t("socialProjects.monitoring.institutionLevel.item3")}</li>
                  <li>• {t("socialProjects.monitoring.institutionLevel.item4")}</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* GOVERNANÇA */}
          <motion.section
            custom={7}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="rounded-2xl border border-[#d6d6d6] bg-white/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
              {t("socialProjects.governance.title")}
            </h2>

            <p className="mt-3">{t("socialProjects.governance.text1")}</p>
            <p className="mt-3">{t("socialProjects.governance.text2")}</p>
          </motion.section>

          {/* CTA FINAL */}
          <motion.div
            custom={8}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="pt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            {/* PDF */}
            <a
              href="/files/social-projects.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full border border-[#1c2846]
                bg-[#1c2846]/10
                px-8 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-[#1c2846]
                hover:bg-[#1c2846] hover:text-white
                transition-all
              "
            >
              {t("socialProjects.downloadPDF")}
            </a>

            {/* VOLTAR */}
            <a
              href="/?scroll=projects"
              className="
                inline-flex items-center gap-2
                rounded-full border border-[#d6d6d6]
                bg-white/90
                px-6 py-3
                text-xs font-semibold uppercase tracking-[0.22em]
                text-[#333846]
                hover:border-[#1c2846] hover:bg-[#f5f5f7]
                transition-all
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
