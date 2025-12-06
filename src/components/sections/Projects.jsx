// src/components/sections/Projects.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoToProject = () => {
    navigate("/projects/mazuay-redd");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden scroll-mt-24
        border-t border-[#d6d6d6]
        bg-white py-20
        text-[#333846]
      "
    >
      {/* BACKGROUND ANIMADO INSTITUCIONAL */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob navy – canto superior esquerdo */}
        <motion.div
          initial={{ opacity: 1.0, scale: 1 }}
          animate={{
            opacity: [0.18, 0.35, 0.18],
            x: [-260, -120, -260],
            y: [-220, -80, -220],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-40 h-[680px] w-[680px] rounded-full bg-[#1c2846]/35 blur-[140px]"
        />

        {/* Blob slate – canto inferior direito */}
        <motion.div
          initial={{ opacity: 0.18, scale: 1 }}
          animate={{
            opacity: [0.18, 0.4, 0.18],
            x: [220, 80, 220],
            y: [220, 80, 220],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 h-[720px] w-[720px] rounded-full bg-[#333846]/32 blur-[150px]"
        />

        {/* Glow central suave */}
        <motion.div
          initial={{ opacity: 0.1, scale: 1 }}
          animate={{
            opacity: [0.1, 0.22, 0.1],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1c2846]/18 blur-[180px]"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
              {t("projects.sectionEyebrow")}
            </p>

            <div className="mt-4">
              <div className="space-y-1 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#333846]/70">
                <p>{t("projects.status.validation")}</p>
                <p>
                  <a
                    href="https://registry.verra.org/app/projectDetail/VCS/5343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#1c2846]"
                  >
                    {t("projects.status.verraId", { id: "5343" })}
                  </a>
                </p>
              </div>

              <h2 className="mt-2 text-3xl font-bold text-[#1c2846]">
                {t("projects.projectName")}
              </h2>
              <h3 className="mt-1 text-2xl font-light text-[#333846]">
                {t("projects.projectSubtitle")}
              </h3>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr,1fr]">
          <div>
            <motion.div
              className="
                flex h-full flex-col justify-between
                rounded-3xl border border-[#d6d6d6]
                bg-white/85
                p-5 backdrop-blur-sm
                shadow-[0_18px_40px_rgba(0,0,0,0.04)]
              "
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#1c2846]">
                  {t("projects.card.tag")}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[#1c2846]">
                  {t("projects.card.title")}
                </h3>

                <p className="mt-2 text-sm text-[#333846]">
                  {t("projects.card.paragraph1")}
                </p>
                <p className="mt-2 text-sm text-[#333846]">
                  {t("projects.card.paragraph2")}
                </p>
              </div>
            </motion.div>
          </div>

          <div />
        </div>

        {/* CTA: Conheça o Projeto → página de detalhes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={handleGoToProject}
            className="group inline-flex cursor-pointer flex-col items-center gap-3"
          >
            <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#333846]/75">
              {t("projects.cta.kicker")}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-wide text-[#1c2846]">
                {t("projects.cta.main")}
              </span>
              <span className="text-lg text-[#1c2846] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>

            <div className="mt-2 h-[2px] w-64 max-w-full overflow-hidden bg-[#d6d6d6]">
              <div
                className="
                  h-full w-1/4 bg-[#1c2846]
                  transition-[width] duration-500 ease-out
                  group-hover:w-full
                "
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
