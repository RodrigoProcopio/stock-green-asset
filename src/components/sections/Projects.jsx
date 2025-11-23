import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoToProject = () => {
    navigate("/projects/mazuay-redd"); // rota da nova página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-black py-20 text-white scroll-mt-24 overflow-hidden"
    >
      {/* BACKGROUND ANIMADO MAIS FORTE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob emerald – canto superior esquerdo */}
        <motion.div
          initial={{ opacity: 1.0, scale: 1 }}
          animate={{
            opacity: [0.2, 0.45, 0.2],
            x: [-260, -120, -260],
            y: [-220, -80, -220],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-40 w-[680px] h-[680px] bg-emerald-500/45 rounded-full blur-[140px]"
        />

        {/* Blob cyan – canto inferior direito */}
        <motion.div
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [220, 80, 220],
            y: [220, 80, 220],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[720px] h-[720px] bg-cyan-500/45 rounded-full blur-[150px]"
        />

        {/* Glow central */}
        <motion.div
          initial={{ opacity: 0.1, scale: 1 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/30 blur-[180px]"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300/85">
              {t("projects.sectionEyebrow")}
            </p>

            <div className="mt-4">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/40">
                {t("projects.statusLine", { id: "5343" })}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {t("projects.projectName")}
              </h2>
              <h3 className="mt-1 text-2xl font-light">
                {t("projects.projectSubtitle")}
              </h3>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr,1fr]">
          <div>
            <motion.div
              className="flex flex-col justify-between rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 via-black to-black/90 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                  {t("projects.card.tag")}
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {t("projects.card.title")}
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  {t("projects.card.paragraph1")}
                </p>
                <p className="mt-2 text-sm text-white/70">
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
            className="group inline-flex flex-col gap-3 items-center cursor-pointer"
          >
            <span className="text-xs font-medium uppercase tracking-[0.26em] text-white/70">
              {t("projects.cta.kicker")}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-wide">
                {t("projects.cta.main")}
              </span>
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>

            <div className="mt-2 h-[2px] w-64 max-w-full bg-white/30 overflow-hidden">
              <div
                className="
                  h-full bg-lime-400
                  w-1/4
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
