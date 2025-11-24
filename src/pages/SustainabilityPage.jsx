import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

// Cards com look premium / glass (reservado para uso futuro se quiser)
const baseCard =
  "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_45px_rgba(0,0,0,0.7)] hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_22px_60px_rgba(0,0,0,0.8)] transition-all duration-300";

const accentCard =
  "rounded-2xl border border-emerald-400/40 bg-emerald-400/12 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.22)] hover:shadow-[0_0_48px_rgba(16,185,129,0.35)] hover:bg-emerald-400/18 transition-all duration-300";

// Agora os ODS usam keys de i18n
const odsGoals = [
  {
    id: 5,
    titleKey: "sustainability.ods.goals.5.title",
    descriptionKey: "sustainability.ods.goals.5.description",
    image: "/images/Logos/5_gender.webp",
  },
  {
    id: 6,
    titleKey: "sustainability.ods.goals.6.title",
    descriptionKey: "sustainability.ods.goals.6.description",
    image: "/images/Logos/6_clean.webp",
  },
  {
    id: 8,
    titleKey: "sustainability.ods.goals.8.title",
    descriptionKey: "sustainability.ods.goals.8.description",
    image: "/images/Logos/8_decent.wepb",
  },
  {
    id: 13,
    titleKey: "sustainability.ods.goals.13.title",
    descriptionKey: "sustainability.ods.goals.13.description",
    image: "/images/Logos/13_climate.webp",
  },
  {
    id: 17,
    titleKey: "sustainability.ods.goals.17.title",
    descriptionKey: "sustainability.ods.goals.17.description",
    image: "/images/Logos/17_partner.webp",
  },
];

export default function SustainabilityPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Acordeões ONU (todos fechados por padrão)
  const [openUN, setOpenUN] = useState(null);

  // Acordeões ICMA (todos fechados por padrão)
  const [openICMA, setOpenICMA] = useState(null);

  // Listas de princípios já vindo do JSON (sustainability.principles.*.items)
  const humanRightsItems =
    t("sustainability.principles.humanRights.items", {
      returnObjects: true,
    }) || [];

  const labourItems =
    t("sustainability.principles.labour.items", {
      returnObjects: true,
    }) || [];

  const environmentItems =
    t("sustainability.principles.environment.items", {
      returnObjects: true,
    }) || [];

  const anticorruptionItems =
    t("sustainability.principles.anticorruption.items", {
      returnObjects: true,
    }) || [];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white pt-28 pb-24 px-4 overflow-hidden">
        {/* ---------- BACKGROUND PREMIUM ---------- */}

        {/* Glows principais */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-[-8%] h-[420px] w-[420px] rounded-full bg-emerald-500/22 blur-[140px]" />
          <div className="absolute bottom-[-18%] right-[-10%] h-[380px] w-[380px] rounded-full bg-cyan-400/18 blur-[130px]" />
          <div className="absolute top-[35%] left-1/2 h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[110px]" />
        </div>

        {/* Grid técnico sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-[length:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-[length:80px_80px]" />
        </div>

        {/* Vinheta */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_40%,_rgba(0,0,0,0.9)_80%)]" />

        {/* Partículas */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2.5 }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300/35 blur-[2px]"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 61) % 100}%`,
              }}
              animate={{
                y: [0, -18, 10, -8, 0],
                x: [0, 12, -14, 6, 0],
                opacity: [0.2, 0.6, 0.4, 0.7, 0.3],
                scale: [0.7, 1.2, 0.9, 1.3, 0.8],
              }}
              transition={{
                duration: 18 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* ---------- CONTEÚDO ---------- */}
        <div className="relative z-10 mx-auto max-w-6xl space-y-16 md:space-y-20">
          {/* HERO / ONU GLOBAL COMPACT */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
              {/* Coluna esquerda: texto principal */}
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/90">
                  {t("sustainability.badge")}
                </p>

                <h1
                  className="
                    text-4xl md:text-6xl 
                    font-extrabold 
                    tracking-tight 
                    text-white 
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]
                  "
                >
                  {t("sustainability.heading.line1")}{" "}
                  <span className="text-emerald-300 drop-shadow-[0_4px_12px_rgba(0,255,200,0.25)]">
                    {t("sustainability.heading.line2")}
                  </span>
                </h1>

                {/* 👉 Botão Acessar Manifesto logo abaixo do título */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-emerald-400/80 bg-transparent
                      px-6 py-3
                      text-[0.7rem] font-semibold uppercase tracking-[0.25em]
                      text-emerald-200
                      transition-all duration-200
                      hover:bg-emerald-400 hover:text-black
                    "
                  >
                    {t("sustainability.buttons.manifesto")}
                  </button>
                </div>

                <p className="text-sm md:text-base text-white/75 max-w-xl leading-relaxed">
                  {t("sustainability.intro.p1")}
                </p>

                <p className="text-sm md:text-base text-white/75 max-w-xl leading-relaxed">
                  {t("sustainability.intro.p2")}
                </p>

                {/* Botão Veja mais (mesmo estilo) – usando key existente */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href="https://unglobalcompact.org/what-is-gc/participants/161633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-emerald-400/80 bg-transparent
                      px-6 py-3
                      text-[0.7rem] font-semibold uppercase tracking-[0.25em]
                      text-emerald-200
                      transition-all duration-200
                      hover:bg-emerald-400 hover:text-black
                    "
                  >
                    {t("sustainability.buttons.view")}
                  </a>
                </div>
              </div>

              {/* Coluna direita: acordeões ONU + logo */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  {t("sustainability.un.globalCompactLabel")}
                </p>

                <div className="space-y-3">
                  {/* Direitos Humanos */}
                  <AccordionItem
                    id="un-human-rights"
                    title={t(
                      "sustainability.principles.humanRights.title"
                    )}
                    isOpen={openUN === "humanRights"}
                    onToggle={() =>
                      setOpenUN(
                        openUN === "humanRights" ? null : "humanRights"
                      )
                    }
                  >
                    {humanRightsItems.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </AccordionItem>

                  {/* Trabalho */}
                  <AccordionItem
                    id="un-labour"
                    title={t("sustainability.principles.labour.title")}
                    isOpen={openUN === "labour"}
                    onToggle={() =>
                      setOpenUN(openUN === "labour" ? null : "labour")
                    }
                  >
                    {labourItems.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </AccordionItem>

                  {/* Meio Ambiente */}
                  <AccordionItem
                    id="un-environment"
                    title={t(
                      "sustainability.principles.environment.title"
                    )}
                    isOpen={openUN === "environment"}
                    onToggle={() =>
                      setOpenUN(
                        openUN === "environment" ? null : "environment"
                      )
                    }
                  >
                    {environmentItems.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </AccordionItem>

                  {/* Anticorrupção */}
                  <AccordionItem
                    id="un-anticorruption"
                    title={t(
                      "sustainability.principles.anticorruption.title"
                    )}
                    isOpen={openUN === "anticorruption"}
                    onToggle={() =>
                      setOpenUN(
                        openUN === "anticorruption"
                          ? null
                          : "anticorruption"
                      )
                    }
                  >
                    {anticorruptionItems.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </AccordionItem>
                </div>

                <div className="pt-6 flex justify-center">
                  <img
                    src="/images/Logos/ungc-logo.webp"
                    alt={t("sustainability.un.logoAlt")}
                    className="h-16 md:h-24 w-auto opacity-90"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ODS – OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="space-y-6"
          >
            {/* Texto + logo / botão um embaixo do outro */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                  {t("sustainability.ods.badge")}
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                  {t("sustainability.ods.heading")}
                </h2>
                <p className="mt-2 max-w-2xl text-sm md:text-base text-white/70">
                  {t("sustainability.ods.description")}
                </p>
              </div>
            </div>

            {/* Lista dos ODS */}
            <div className="mt-4 space-y-3">
              {odsGoals.map((goal) => (
                <div
                  key={goal.id}
                  className="
                    group
                    flex items-center gap-4
                    rounded-2xl border border-white/5 bg-white/[0.02]
                    px-4 py-3
                    transition-all duration-200
                    hover:border-emerald-400/60 hover:bg-white/[0.04]
                  "
                >
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-black/40">
                    <img
                      src={goal.image}
                      alt={t("sustainability.ods.goalAlt", {
                        id: goal.id,
                        title: t(goal.titleKey),
                      })}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t("sustainability.ods.goalLabel", {
                        id: goal.id,
                        title: t(goal.titleKey),
                      })}
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-white/70 max-w-xl">
                      {t(goal.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo + botão embaixo do texto */}
            <div className="flex flex-col items-center justify-center gap-4 text-center mt-10">
              <img
                src="/images/Logos/goals_logo.webp"
                alt={t("sustainability.ods.logoAlt")}
                className="h-10 md:h-12 w-auto opacity-90"
                loading="lazy"
              />

              <a
                href="https://sdgs.un.org/goals"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 
                  rounded-full border border-white/20 bg-white/5 
                  px-4 py-1.5 
                  text-[0.7rem] font-semibold uppercase tracking-[0.25em] 
                  text-white/80 
                  hover:border-emerald-400/60 hover:bg-emerald-400/10 
                  transition-all
                "
              >
                {t("sustainability.ods.viewAll")}
                <span>↗</span>
              </a>
            </div>
          </motion.section>

          {/* COMPROMISSOS ICMA + ACORDEÕES */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
              {/* Texto ICMA */}
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                  {t("sustainability.icma.badge")}
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold">
                  {t("sustainability.icma.heading")}
                </h2>

                <p className="text-sm md:text-base text-white/75 leading-relaxed">
                  {t("sustainability.icma.p1")}
                </p>

                <p className="text-sm md:text-base text-white/75 leading-relaxed">
                  {t("sustainability.icma.p2")}
                </p>

                <p className="text-sm md:text-base text-white/75 leading-relaxed">
                  {t("sustainability.icma.p3")}
                </p>

                <ul className="space-y-2 text-sm text-white/75">
                  <li>
                    <strong>
                      {t("sustainability.icma.guideline1.title")}
                    </strong>{" "}
                    {t("sustainability.icma.guideline1.text")}
                  </li>
                  <li>
                    <strong>
                      {t("sustainability.icma.guideline2.title")}
                    </strong>{" "}
                    {t("sustainability.icma.guideline2.text")}
                  </li>
                </ul>

                <p className="text-sm md:text-base text-white/75 leading-relaxed">
                  {t("sustainability.icma.p4")}
                </p>

                <p className="text-sm md:text-base text-white/75 leading-relaxed">
                  {t("sustainability.icma.p5")}
                </p>
              </div>

              {/* Acordeões ICMA */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  {t("sustainability.icma.principlesLabel")}
                </p>

                <AccordionItem
                  id="icma-use-of-proceeds"
                  title={t(
                    "sustainability.icma.accordions.useOfProceeds.title"
                  )}
                  isOpen={openICMA === "useOfProceeds"}
                  onToggle={() =>
                    setOpenICMA(
                      openICMA === "useOfProceeds" ? null : "useOfProceeds"
                    )
                  }
                >
                  <p className="text-sm text-white/75">
                    {t(
                      "sustainability.icma.accordions.useOfProceeds.p1"
                    )}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">
                    <li>
                      {t(
                        "sustainability.icma.accordions.useOfProceeds.li1"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.useOfProceeds.li2"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.useOfProceeds.li3"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.useOfProceeds.li4"
                      )}
                    </li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  id="icma-project-selection"
                  title={t(
                    "sustainability.icma.accordions.projectSelection.title"
                  )}
                  isOpen={openICMA === "projectSelection"}
                  onToggle={() =>
                    setOpenICMA(
                      openICMA === "projectSelection"
                        ? null
                        : "projectSelection"
                    )
                  }
                >
                  <p className="text-sm text-white/75">
                    {t(
                      "sustainability.icma.accordions.projectSelection.p1"
                    )}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">
                    <li>
                      {t(
                        "sustainability.icma.accordions.projectSelection.li1"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.projectSelection.li2"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.projectSelection.li3"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.projectSelection.li4"
                      )}
                    </li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  id="icma-management"
                  title={t(
                    "sustainability.icma.accordions.management.title"
                  )}
                  isOpen={openICMA === "management"}
                  onToggle={() =>
                    setOpenICMA(
                      openICMA === "management" ? null : "management"
                    )
                  }
                >
                  <p>
                    {t(
                      "sustainability.icma.accordions.management.p1"
                    )}
                  </p>
                  <p>
                    {t(
                      "sustainability.icma.accordions.management.p2"
                    )}
                  </p>
                  <p>
                    {t(
                      "sustainability.icma.accordions.management.p3"
                    )}
                  </p>
                  <p>
                    {t(
                      "sustainability.icma.accordions.management.p4"
                    )}
                  </p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-white/75">
                    <li>
                      {t(
                        "sustainability.icma.accordions.management.ol1"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.management.ol2"
                      )}
                    </li>
                  </ol>
                </AccordionItem>

                <AccordionItem
                  id="icma-reporting"
                  title={t(
                    "sustainability.icma.accordions.reporting.title"
                  )}
                  isOpen={openICMA === "reporting"}
                  onToggle={() =>
                    setOpenICMA(
                      openICMA === "reporting" ? null : "reporting"
                    )
                  }
                >
                  <p>
                    {t(
                      "sustainability.icma.accordions.reporting.p1"
                    )}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">
                    <li>
                      {t(
                        "sustainability.icma.accordions.reporting.li1"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.reporting.li2"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.reporting.li3"
                      )}
                    </li>
                  </ul>
                  <p className="mt-2">
                    {t(
                      "sustainability.icma.accordions.reporting.p2"
                    )}
                  </p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-white/75">
                    <li>
                      {t(
                        "sustainability.icma.accordions.reporting.ol1"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.reporting.ol2"
                      )}
                    </li>
                    <li>
                      {t(
                        "sustainability.icma.accordions.reporting.ol3"
                      )}
                    </li>
                  </ol>
                  <p className="mt-2">
                    {t(
                      "sustainability.icma.accordions.reporting.p3"
                    )}
                  </p>
                </AccordionItem>
              </div>
            </div>
          </motion.section>

          {/* LOGO ICMA + ONU FINAL */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row"
          >
            <div className="flex items-center gap-8">
              <img
                src="/images/Logos/icma_logo.webp"
                alt={t("sustainability.icma.logoAlt")}
                className="h-10 md:h-24 w-auto opacity-90"
                loading="lazy"
              />
              <img
                src="/images/Logos/ungc-logo.webp"
                alt={t("sustainability.un.logoAlt")}
                className="h-10 md:h-24 w-auto opacity-90"
                loading="lazy"
              />
            </div>
          </motion.section>

          {/* BOTÃO VOLTAR PARA HOME – FINAL DA PÁGINA */}
          <div className="mt-16 flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/20 
                bg-black/40 backdrop-blur-md
                px-6 py-3
                text-[0.7rem] font-semibold uppercase tracking-[0.25em]
                text-white/80
                hover:border-emerald-400/60 hover:text-emerald-300
                transition-all duration-200
                shadow-[0_0_15px_rgba(0,0,0,0.4)]
              "
            >
              <span className="text-sm">←</span>
              {t("socialProjects.backHome")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------
   COMPONENTE DE ACORDEÃO genérico
--------------------------------*/
function AccordionItem({ id, title, isOpen, onToggle, children }) {
  return (
    <motion.div
      id={id}
      className={`
        rounded-2xl p-3 transition-all duration-300
        border backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_45px_rgba(0,0,0,0.7)]
        ${
          isOpen
            ? "bg-emerald-400/10 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
        }
      `}
      whileHover={!isOpen ? { y: -3, scale: 1.01 } : {}}
    >
      {/* HEADER */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        {/* TÍTULO */}
        <h3 className="text-sm md:text-base font-semibold text-white">
          {title}
        </h3>

        {/* BOTÃO DE ABRIR/FECHAR (NÃO FICA VERDE) */}
        <span
          className={`
            flex h-7 w-7 items-center justify-center rounded-full border border-white/25
            text-xs font-semibold text-white
            transition-all
            ${isOpen ? "rotate-45 bg-black/30 border-black/40 text-white" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* CONTEÚDO */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-4 space-y-2 text-sm md:text-base text-white"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
