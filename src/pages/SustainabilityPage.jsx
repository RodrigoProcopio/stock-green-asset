import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
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

// ODS
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
    image: "/images/Logos/8_decent.webp",
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
  const location = useLocation();
  const { t } = useTranslation();

  // scroll para o hash (#sustainabilitybonds, etc.)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Acordeões ONU
  const [openUN, setOpenUN] = useState(null);
  // Acordeões ICMA
  const [openICMA, setOpenICMA] = useState(null);

  // Listas de princípios (arrays vindos do i18n)
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

      <section className="relative min-h-screen overflow-x-hidden bg-[#f5f5f7] text-[#333846] pt-28 pb-24 px-4">
        {/* ---------- BACKGROUND INSTITUCIONAL ---------- */}
        <div className="pointer-events-none absolute inset-0">
          {/* gradiente base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7]" />

          {/* glows navy/slate suaves */}
          <motion.div
            className="absolute left-[-10%] top-[-12%] h-[420px] w-[420px] rounded-full bg-[#1c2846]/18 blur-[140px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-[-8%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-[#333846]/16 blur-[130px]"
            animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute left-1/2 top-[35%] h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-[#1c2846]/10 blur-[110px] opacity-60" />
        </div>

        {/* grid técnico bem sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.4)_1px,transparent_1px)] bg-[length:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-[length:80px_80px]" />
        </div>

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
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1c2846]">
                  {t("sustainability.badge")}
                </p>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1c2846]">
                  {t("sustainability.heading.line1")}{" "}
                  <span className="text-[#333846]">
                    {t("sustainability.heading.line2")}
                  </span>
                </h1>

                {/* Botão Manifesto */}
                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <a
                    href="https://sdgs.un.org/partnerships/stock-capital-holding-ltda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-[#1c2846]
                      bg-transparent
                      px-6 py-3
                      text-[0.7rem] font-semibold uppercase tracking-[0.25em]
                      text-[#1c2846]
                      transition-all duration-200
                      hover:bg-[#1c2846] hover:text-white
                    "
                  >
                    {t("sustainability.buttons.manifesto")}
                  </a>
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.intro.p1")}
                </p>

                <p className="max-w-xl text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.intro.p2")}
                </p>

                {/* Botão Veja mais */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href="https://unglobalcompact.org/what-is-gc/participants/161633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-[#1c2846]
                      bg-transparent
                      px-6 py-3
                      text-[0.7rem] font-semibold uppercase tracking-[0.25em]
                      text-[#1c2846]
                      transition-all duration-200
                      hover:bg-[#1c2846] hover:text-white
                    "
                  >
                    {t("sustainability.buttons.view")}
                  </a>
                </div>
              </div>

              {/* Coluna direita: acordeões ONU + logo */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
                  {t("sustainability.un.globalCompactLabel")}
                </p>

                <div className="space-y-3">
                  {/* Direitos Humanos */}
                  <AccordionItem
                    id="un-human-rights"
                    title={t("sustainability.principles.humanRights.title")}
                    isOpen={openUN === "humanRights"}
                    onToggle={() =>
                      setOpenUN(openUN === "humanRights" ? null : "humanRights")
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
                    title={t("sustainability.principles.environment.title")}
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
                        openUN === "anticorruption" ? null : "anticorruption"
                      )
                    }
                  >
                    {anticorruptionItems.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </AccordionItem>
                </div>

                <div className="flex justify-center pt-6">
                  <img
                    src="/images/Logos/ungc-logo.webp"
                    alt={t("sustainability.un.logoAlt")}
                    className="h-16 w-auto opacity-90 md:h-24"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ODS */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
                {t("sustainability.ods.badge")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#1c2846] md:text-3xl">
                {t("sustainability.ods.heading")}
              </h2>
              <p className="mt-2 max-w-6xl text-sm text-[#4b5563] md:text-base">
                {t("sustainability.ods.description")}
              </p>
            </div>

            {/* Lista dos ODS */}
            <div className="mt-4 space-y-3">
              {odsGoals.map((goal) => (
                <div
                  key={goal.id}
                  className="
                    group
                    flex items-center gap-4
                    rounded-2xl border border-[#d6d6d6]/70 bg-white/90
                    px-4 py-3
                    transition-all duration-200
                    hover:border-[#1c2846]/70 hover:bg-white
                  "
                >
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-white">
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
                    <p className="text-sm font-semibold text-[#1c2846]">
                      {t("sustainability.ods.goalLabel", {
                        id: goal.id,
                        title: t(goal.titleKey),
                      })}
                    </p>
                    <p className="mt-1 max-w-xl text-xs text-[#4b5563] md:text-sm">
                      {t(goal.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo + botão */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
              <img
                src="/images/Logos/goals_logo.webp"
                alt={t("sustainability.ods.logoAlt")}
                className="h-10 w-auto opacity-90 md:h-12"
                loading="lazy"
              />

              <a
                href="https://sdgs.un.org/goals"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 
                  rounded-full border border-[#d6d6d6] bg-white 
                  px-4 py-1.5 
                  text-[0.7rem] font-semibold uppercase tracking-[0.25em] 
                  text-[#333846] 
                  hover:border-[#1c2846] hover:text-[#1c2846]
                  transition-all
                "
              >
                {t("sustainability.ods.viewAll")}
                <span>↗</span>
              </a>
            </div>
          </motion.section>

          {/* ICMA */}
<motion.section
  id="sustainabilitybonds"
  variants={sectionVariant}
  initial="hidden"
  animate="visible"
  custom={2}
>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
              {/* Texto ICMA */}
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
                  {t("sustainability.icma.badge")}
                </p>

                <h2 className="text-2xl font-semibold text-[#1c2846] md:text-3xl">
                  {t("sustainability.icma.heading")}
                </h2>

                <p className="text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.icma.p1")}
                </p>

                <p className="text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.icma.p2")}
                </p>

                <p className="text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.icma.p3")}
                </p>

                <ul className="space-y-2 text-sm text-[#333846]">
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

                <p className="text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.icma.p4")}
                </p>

                <p className="text-sm leading-relaxed text-[#333846] md:text-base">
                  {t("sustainability.icma.p5")}
                </p>
              </div>

              {/* Acordeões ICMA */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
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
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.useOfProceeds.p1")}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#333846]">
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
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.projectSelection.p1")}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#333846]">
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
                  title={t("sustainability.icma.accordions.management.title")}
                  isOpen={openICMA === "management"}
                  onToggle={() =>
                    setOpenICMA(openICMA === "management" ? null : "management")
                  }
                >
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.management.p1")}
                  </p>
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.management.p2")}
                  </p>
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.management.p3")}
                  </p>
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.management.p4")}
                  </p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#333846]">
                    <li>
                      {t("sustainability.icma.accordions.management.ol1")}
                    </li>
                    <li>
                      {t("sustainability.icma.accordions.management.ol2")}
                    </li>
                  </ol>
                </AccordionItem>

                <AccordionItem
                  id="icma-reporting"
                  title={t("sustainability.icma.accordions.reporting.title")}
                  isOpen={openICMA === "reporting"}
                  onToggle={() =>
                    setOpenICMA(openICMA === "reporting" ? null : "reporting")
                  }
                >
                  <p className="text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.reporting.p1")}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#333846]">
                    <li>
                      {t("sustainability.icma.accordions.reporting.li1")}
                    </li>
                    <li>
                      {t("sustainability.icma.accordions.reporting.li2")}
                    </li>
                    <li>
                      {t("sustainability.icma.accordions.reporting.li3")}
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.reporting.p2")}
                  </p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#333846]">
                    <li>
                      {t("sustainability.icma.accordions.reporting.ol1")}
                    </li>
                    <li>
                      {t("sustainability.icma.accordions.reporting.ol2")}
                    </li>
                    <li>
                      {t("sustainability.icma.accordions.reporting.ol3")}
                    </li>
                  </ol>
                  <p className="mt-2 text-sm text-[#333846]">
                    {t("sustainability.icma.accordions.reporting.p3")}
                  </p>
                </AccordionItem>
              </div>
            </div>
          </motion.section>

          {/* LOGOS FINAIS */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col items-center justify-between gap-6 border-t border-[#d6d6d6] pt-8 md:flex-row"
          >
            <div className="flex items-center gap-8">
              <img
                src="/images/Logos/icma_logo.webp"
                alt={t("sustainability.icma.logoAlt")}
                className="h-10 w-auto opacity-90 md:h-24"
                loading="lazy"
              />
              <img
                src="/images/Logos/ungc-logo.webp"
                alt={t("sustainability.un.logoAlt")}
                className="h-10 w-auto opacity-90 md:h-24"
                loading="lazy"
              />
            </div>
          </motion.section>

          {/* BOTÃO VOLTAR */}
          <div className="mt-12 flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                inline-flex items-center gap-2
                rounded-full border border-[#d6d6d6]
                bg-white/90
                px-6 py-3
                text-[0.7rem] font-semibold uppercase tracking-[0.25em]
                text-[#333846]
                transition-all duration-200
                hover:border-[#1c2846] hover:text-[#1c2846] hover:bg-[#f5f5f7]
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
        border bg-white/95 shadow-[0_18px_40px_rgba(0,0,0,0.04)]
        ${
          isOpen
            ? "border-[#1c2846] shadow-[0_22px_55px_rgba(0,0,0,0.10)]"
            : "border-[#d6d6d6] hover:border-[#1c2846]/60"
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
        <h3 className="text-sm font-semibold text-[#1c2846] md:text-base">
          {title}
        </h3>

        <span
          className={`
            flex h-7 w-7 items-center justify-center rounded-full border
            border-[#d6d6d6]
            text-xs font-semibold text-[#333846]
            transition-all
            ${isOpen ? "rotate-45 bg-[#1c2846] text-white border-[#1c2846]" : ""}
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
            className="mt-4 space-y-2 text-sm text-[#333846] md:text-base"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
