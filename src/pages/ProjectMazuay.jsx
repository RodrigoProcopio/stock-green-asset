import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { useTranslation } from "react-i18next";
import { MetricCard } from "../components/project/MetricCard";

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

// Cards com look premium / glass
const baseCard =
  "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_45px_rgba(0,0,0,0.7)] hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_22px_60px_rgba(0,0,0,0.8)] transition-all duration-300";
const accentCard =
  "rounded-2xl border border-emerald-400/40 bg-emerald-400/12 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.22)] hover:shadow-[0_0_48px_rgba(16,185,129,0.35)] hover:bg-emerald-400/18 transition-all duration-300";

const satelliteImages = [
  {
    src: "/images/Monitoramento/DEZEMBRO 2024.webp",
    altKey: "projectMazuay.satellite.images.dec2024.alt",
    captionKey: "projectMazuay.satellite.images.dec2024.caption",
  },
  {
    src: "/images/Monitoramento/JANEIRO 2025.webp",
    altKey: "projectMazuay.satellite.images.jan2025.alt",
    captionKey: "projectMazuay.satellite.images.jan2025.caption",
  },
  {
    src: "/images/Monitoramento/ABRIL 2025.webp",
    altKey: "projectMazuay.satellite.images.apr2025.alt",
    captionKey: "projectMazuay.satellite.images.apr2025.caption",
  },
  {
    src: "/images/Monitoramento/JULHO 2025.webp",
    altKey: "projectMazuay.satellite.images.jul2025.alt",
    captionKey: "projectMazuay.satellite.images.jul2025.caption",
  },
];

/* ---------- UI SUBCOMPONENTES ---------- */

function AccordionItem({ id, title, eyebrow, children, isOpen, onToggle }) {
  return (
    <motion.div
      id={id}
      className={`${baseCard} overflow-hidden`}
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left"
      >
        <div className="flex-1 min-w-0">
          {eyebrow && (
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-emerald-300/80">
              {eyebrow}
            </span>
          )}
          <h3 className="mt-1 text-sm md:text-base font-semibold text-white break-words pr-3">
            {title}
          </h3>
        </div>

        <span
          className={`
            flex-shrink-0
            flex h-7 w-7 items-center justify-center rounded-full border border-white/20
            text-xs font-semibold
            transition-transform
            ${isOpen ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-white/75 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="inline-flex rounded-full bg-white/5 border border-white/10 p-1 text-xs md:text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            px-3 md:px-4 py-1.5 rounded-full font-medium transition-all
            ${
              active === tab.id
                ? "bg-emerald-400 text-black shadow-[0_0_0_1px_rgba(16,185,129,0.7)]"
                : "text-white/70 hover:text-white"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- PÁGINA PRINCIPAL ---------- */

export default function ProjectMazuay() {
  const { t, i18n } = useTranslation();

  const sectionIds = ["about", "nature", "monitoring", "impacts", "governance"];

  const [activeSection, setActiveSection] = useState("about");
  const [accordionOpen, setAccordionOpen] = useState({
    about: true,
    nature: false,
    monitoring: false,
    impacts: false,
    governance: false,
  });

  // ciclo das métricas (re-anima a cada 5s)
  const [metricsCycle, setMetricsCycle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setMetricsCycle((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // clique no menu: scroll + abre apenas a sanfona correspondente
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActiveSection(id);
    setAccordionOpen({
      about: false,
      nature: false,
      monitoring: false,
      impacts: false,
      governance: false,
      [id]: true,
    });
  };

  const [monitoringTab, setMonitoringTab] = useState("realtime");

  // 👉 estados do lightbox
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? satelliteImages.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === satelliteImages.length - 1 ? 0 : prev + 1
    );
  };

  const locale =
    i18n.language === "en"
      ? "en-US"
      : i18n.language === "es"
      ? "es-AR"
      : "pt-BR";

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white pt-28 pb-20 px-3 sm:px-4 overflow-x-hidden">
        {/* ---------- BACKGROUND PREMIUM ---------- */}

        {/* Glows principais */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-[-8%] h-[420px] w-[420px] rounded-full bg-emerald-500/22 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan-400/18 blur-[130px]" />
          <div className="absolute top-[35%] left-1/2 h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[110px]" />
        </div>

        {/* Grid técnico sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-screen">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-[length:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-[length:80px_80px]" />
        </div>

        {/* Vinheta */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_40%,_rgba(0,0,0,0.9)_80%)]" />

        {/* Light sweep */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-24 h-40 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent"
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Partículas */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2.8 }}
        >
          {Array.from({ length: 14 }).map((_, i) => (
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

        <div className="relative z-10 mx-auto w-full max-w-6xl space-y-10 md:space-y-12">
          {/* HEADER / HERO */}
          <motion.header
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
              {t("projects.sectionEyebrow")}
            </span>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                  {t("projects.projectName")}
                </h1>
                <h2 className="mt-1 text-2xl font-light text-white/85">
                  {t("projects.projectSubtitle")}
                </h2>
              </div>
            </div>

            <p className="mt-4 max-w-6xl text-sm text-white/70 md:text-base">
              {t("projectMazuay.header.lead")}
            </p>

            {/* MÉTRICAS PRINCIPAIS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                label={t("projectMazuay.metrics.locationLabel") || "Localização"}
                value="Silves, AM"
                helper={t("projectMazuay.location.p1")}
                isTyped
                locale={locale}
                resetKey={metricsCycle}
              />

              <MetricCard
                label={t("projectMazuay.metrics.areaTotal") || "Área total"}
                value={989.34}
                helper={
                  t("projectMazuay.metrics.areaHelper") ||
                  "Área do projeto (ha)"
                }
                isNumber
                locale={locale}
                resetKey={metricsCycle}
              />

              <MetricCard
                label={
                  t("projectMazuay.metrics.nativeCover") || "Cobertura nativa"
                }
                value={966.42}
                helper="≈ 97% vegetação nativa"
                isNumber
                locale={locale}
                resetKey={metricsCycle}
              />

              <MetricCard
                label={
                  t("projectMazuay.metrics.carbonPotential") ||
                  "Potencial de créditos"
                }
                value={718455.73}
                helper={t("projectMazuay.carbonPotential.highlight")}
                isNumber
                locale={locale}
                resetKey={metricsCycle}
              />
            </div>
          </motion.header>

          {/* LAYOUT: SIDEBAR + CONTEÚDO */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="grid gap-8 md:grid-cols-[230px_minmax(0,1fr)] max-w-full"
          >
            {/* SIDEBAR */}
            <aside className="md:pt-4 min-w-0">
              {/* Mobile: navegação horizontal */}
              <div className="md:hidden mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                {t("projectMazuay.ui.sectionsLabel") || "Navegação do projeto"}
              </div>
              <div className="md:hidden mb-2 overflow-x-auto no-scrollbar">
                <div className="inline-flex gap-2">
                  {sectionIds.map((id) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className={`
                        whitespace-nowrap rounded-full border px-3 py-1.5 text-xs
                        ${
                          activeSection === id
                            ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                            : "border-white/15 bg-white/[0.02] text-white/60 hover:text-white"
                        }
                      `}
                    >
                      {id === "about" &&
                        (t("projectMazuay.nav.about") ||
                          t("projectMazuay.about.titleStrong"))}
                      {id === "nature" &&
                        (t("projectMazuay.nav.nature") ||
                          t("projectMazuay.biodiversity.heading"))}
                      {id === "monitoring" &&
                        (t("projectMazuay.nav.monitoring") ||
                          t("projectMazuay.monitoringGovernance.heading"))}
                      {id === "impacts" &&
                        (t("projectMazuay.nav.impacts") ||
                          t("projectMazuay.impacts.heading"))}
                      {id === "governance" &&
                        (t("projectMazuay.nav.governance") ||
                          t("projectMazuay.blockchain.heading"))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: lista vertical */}
              <div className="hidden md:block sticky top-28 space-y-3 text-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-emerald-300">
                  {t("projectMazuay.ui.sectionsLabel") ||
                    "Navegação do projeto"}
                </p>

                <div className="space-y-1.5">
                  {sectionIds.map((id) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className={`
                        w-full flex items-center justify-between rounded-xl px-3 py-2
                        text-xs font-medium uppercase tracking-[0.18em]
                        transition-all border
                        ${
                          activeSection === id
                            ? "border-emerald-400 bg-emerald-400/10 text-emerald-100 shadow-[0_0_0_1px_rgba(16,185,129,0.45)]"
                            : "border-white/10 bg-white/[0.02] text-white/55 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
                        }
                      `}
                    >
                      <span className="truncate">
                        {id === "about" &&
                          (t("projectMazuay.nav.about") ||
                            t("projectMazuay.about.titleStrong"))}
                        {id === "nature" &&
                          (t("projectMazuay.nav.nature") ||
                            t("projectMazuay.biodiversity.heading"))}
                        {id === "monitoring" &&
                          (t("projectMazuay.nav.monitoring") ||
                            t("projectMazuay.monitoringGovernance.heading"))}
                        {id === "impacts" &&
                          (t("projectMazuay.nav.impacts") ||
                            t("projectMazuay.impacts.heading"))}
                        {id === "governance" &&
                          (t("projectMazuay.nav.governance") ||
                            t("projectMazuay.blockchain.heading"))}
                      </span>
                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          ${
                            activeSection === id
                              ? "bg-emerald-400"
                              : "bg-white/25"
                          }
                        `}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* CONTEÚDO PRINCIPAL EM ACORDEÕES */}
            <div className="space-y-5 md:space-y-6 min-w-0">
              {/* 1. SOBRE O PROJETO */}
              <AccordionItem
                id="about"
                eyebrow={t("projectMazuay.sectionGroups.about") || "Sobre"}
                title={
                  t("projectMazuay.about.titleStrong") +
                  " " +
                  t("projectMazuay.about.titleLight")
                }
                isOpen={accordionOpen.about}
                onToggle={() =>
                  setAccordionOpen((prev) => ({
                    ...prev,
                    about: !prev.about,
                  }))
                }
              >
                <div className="space-y-4">
                  <p>{t("projectMazuay.about.p1")}</p>
                  <p>{t("projectMazuay.about.p2")}</p>

                  <div className="grid gap-4 md:grid-cols-2 pt-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                        {t("projectMazuay.description.heading")}
                      </h4>
                      <p className="mt-2 text-sm text-white/75">
                        {t("projectMazuay.description.p1")}
                      </p>
                      <p className="mt-2 text-sm text-white/75">
                        {t("projectMazuay.description.p2")}
                      </p>
                      <p className="mt-2 text-sm text-white/75">
                        {t("projectMazuay.description.p3")}
                      </p>
                      <p className="mt-2 text-sm text-white/75">
                        {t("projectMazuay.description.p4")}
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-white/75">
                        <li>{t("projectMazuay.description.list.app")}</li>
                        <li>{t("projectMazuay.description.list.arl")}</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                          {t("projectMazuay.location.heading")}
                        </h4>
                        <p className="mt-2 text-sm text-white/75">
                          {t("projectMazuay.location.p1")}
                        </p>
                        <p className="mt-2 text-sm text-white/70">
                          {t("projectMazuay.location.p2")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                          {t("projectMazuay.structure.heading")}
                        </h4>
                        <p className="mt-2 text-sm text-white/75">
                          {t("projectMazuay.structure.p1")}
                        </p>
                        <p className="mt-2 text-sm text-white/70">
                          {t("projectMazuay.structure.p2")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* 2. NATUREZA & CRÉDITOS */}
              <AccordionItem
                id="nature"
                eyebrow={
                  t("projectMazuay.sectionGroups.nature") ||
                  "Natureza & Créditos"
                }
                title={t("projectMazuay.biodiversity.heading")}
                isOpen={accordionOpen.nature}
                onToggle={() =>
                  setAccordionOpen((prev) => ({
                    ...prev,
                    nature: !prev.nature,
                  }))
                }
              >
                <div className="space-y-6">
                  {/* Biodiversidade */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      {t("projectMazuay.biodiversity.heading")}
                    </h4>
                    <p className="mt-2 text-sm text-white/75">
                      {t("projectMazuay.biodiversity.intro")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/75">
                      <li>{t("projectMazuay.biodiversity.list.trees")}</li>
                      <li>{t("projectMazuay.biodiversity.list.species")}</li>
                      <li>
                        {t("projectMazuay.biodiversity.list.monitoring")}
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-white/70">
                      {t("projectMazuay.biodiversity.closing")}
                    </p>
                  </div>

                  {/* Potencial de créditos – card destacado */}
                  <div className={`${accentCard} p-5 md:p-6`}>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                      {t("projectMazuay.carbonPotential.heading")}
                    </h4>
                    <p className="mt-3 text-sm text-emerald-50">
                      {t("projectMazuay.carbonPotential.p1")}
                    </p>
                    <p className="mt-3 text-sm">
                      <span className="font-semibold text-emerald-100">
                        {t("projectMazuay.carbonPotential.highlight")}
                      </span>
                    </p>
                    <p className="mt-3 text-sm text-emerald-50/90">
                      {t("projectMazuay.carbonPotential.p2")}
                    </p>
                  </div>
                </div>
              </AccordionItem>

              {/* 3. MONITORAMENTO (TEMPO REAL + SATÉLITE) */}
              <AccordionItem
                id="monitoring"
                eyebrow={
                  t("projectMazuay.sectionGroups.monitoring") || "Monitoramento"
                }
                title={t("projectMazuay.monitoringGovernance.heading")}
                isOpen={accordionOpen.monitoring}
                onToggle={() =>
                  setAccordionOpen((prev) => ({
                    ...prev,
                    monitoring: !prev.monitoring,
                  }))
                }
              >
                <div className="space-y-6">
                  {/* Texto geral de monitoramento & governança tecnológica */}
                  <div>
                    <p className="text-sm text-white/75">
                      {t("projectMazuay.monitoringGovernance.intro")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/75">
                      <li>
                        {t("projectMazuay.monitoringGovernance.items.realtime")}
                      </li>
                      <li>
                        {t(
                          "projectMazuay.monitoringGovernance.items.traceability"
                        )}
                      </li>
                      <li>
                        {t("projectMazuay.monitoringGovernance.items.audits")}
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-white/70">
                      {t("projectMazuay.monitoringGovernance.closing")}
                    </p>
                  </div>

                  {/* Tabs: Tempo real / Satélite */}
                  <div className="pt-2">
                    <Tabs
                      active={monitoringTab}
                      onChange={setMonitoringTab}
                      tabs={[
                        {
                          id: "realtime",
                          label:
                            t("projectMazuay.realtime.tabLabel") ||
                            t("projectMazuay.realtime.heading"),
                        },
                        {
                          id: "satellite",
                          label:
                            t("projectMazuay.satellite.tabLabel") ||
                            t("projectMazuay.satellite.heading"),
                        },
                      ]}
                    />

                    <div className="mt-5">
                      <AnimatePresence mode="wait">
                        {monitoringTab === "realtime" && (
                          <motion.div
                            key="realtime"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4 text-sm md:text-base text-white/75"
                          >
                            <h4 className="text-sm md:text-base font-semibold text-white">
                              {t("projectMazuay.realtime.heading")}
                            </h4>
                            <p>{t("projectMazuay.realtime.p1")}</p>
                            <p>{t("projectMazuay.realtime.p2")}</p>
                          </motion.div>
                        )}

                        {monitoringTab === "satellite" && (
                          <motion.div
                            key="satellite"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-5"
                          >
                            <div className="text-sm md:text-base text-white/75 text-center md:text-left">
                              <h4 className="font-semibold">
                                {t("projectMazuay.satellite.heading")}
                              </h4>
                              <p className="mt-2 text-white/70">
                                {t("projectMazuay.satellite.description")}
                              </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              {satelliteImages.map((img, index) => (
                                <button
                                  key={img.src}
                                  type="button"
                                  onClick={() => openLightbox(index)}
                                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                                >
                                  <img
                                    src={img.src}
                                    alt={t(img.altKey)}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                    loading="lazy"
                                  />
                                  <figcaption className="px-3 py-2 text-xs text-white/70 text-left">
                                    {t(img.captionKey)}
                                  </figcaption>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* 4. IMPACTOS */}
              <AccordionItem
                id="impacts"
                eyebrow={
                  t("projectMazuay.sectionGroups.impacts") || "Impactos"
                }
                title={t("projectMazuay.impacts.heading")}
                isOpen={accordionOpen.impacts}
                onToggle={() =>
                  setAccordionOpen((prev) => ({
                    ...prev,
                    impacts: !prev.impacts,
                  }))
                }
              >
                <div className="space-y-4 text-sm md:text-base">
                  <p>{t("projectMazuay.impacts.intro")}</p>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl bg-white/[0.02] border border-white/10 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                        {t("projectMazuay.impacts.climate.title")}
                      </h4>
                      <ul className="mt-2 space-y-1 text-white/75 text-sm">
                        <li>{t("projectMazuay.impacts.climate.items.0")}</li>
                        <li>{t("projectMazuay.impacts.climate.items.1")}</li>
                        <li>{t("projectMazuay.impacts.climate.items.2")}</li>
                      </ul>
                    </div>

                    <div className="rounded-xl bg-white/[0.02] border border-white/10 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                        {t("projectMazuay.impacts.society.title")}
                      </h4>
                      <ul className="mt-2 space-y-1 text-white/75 text-sm">
                        <li>{t("projectMazuay.impacts.society.items.0")}</li>
                        <li>{t("projectMazuay.impacts.society.items.1")}</li>
                        <li>{t("projectMazuay.impacts.society.items.2")}</li>
                      </ul>
                    </div>

                    <div className="rounded-xl bg-white/[0.02] border border-white/10 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                        {t("projectMazuay.impacts.environment.title")}
                      </h4>
                      <ul className="mt-2 space-y-1 text-white/75 text-sm">
                        <li>{t("projectMazuay.impacts.environment.items.0")}</li>
                        <li>{t("projectMazuay.impacts.environment.items.1")}</li>
                        <li>{t("projectMazuay.impacts.environment.items.2")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* 5. GOVERNANÇA & TRANSPARÊNCIA */}
              <AccordionItem
                id="governance"
                eyebrow={
                  t("projectMazuay.sectionGroups.governance") ||
                  "Governança & Transparência"
                }
                title={t("projectMazuay.blockchain.heading")}
                isOpen={accordionOpen.governance}
                onToggle={() =>
                  setAccordionOpen((prev) => ({
                    ...prev,
                    governance: !prev.governance,
                  }))
                }
              >
                <div className="space-y-6">
                  {/* Blockchain */}
                  <div>
                    <p className="text-sm text-white/75">
                      {t("projectMazuay.blockchain.p1")}
                    </p>
                    <p className="mt-3 text-sm text-white/75">
                      {t("projectMazuay.blockchain.p2")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/75">
                      <li>{t("projectMazuay.blockchain.items.tracking")}</li>
                      <li>{t("projectMazuay.blockchain.items.duplication")}</li>
                      <li>{t("projectMazuay.blockchain.items.authenticity")}</li>
                      <li>{t("projectMazuay.blockchain.items.governance")}</li>
                      <li>{t("projectMazuay.blockchain.items.engagement")}</li>
                    </ul>
                    <p className="mt-4 text-sm text-white/75">
                      {t("projectMazuay.blockchain.ctaText")}
                    </p>
                    <a
                      href="https://dash.betteruseblockchain.com/transparency-portal/9e826be8-4b83-45db-a11a-4cc10ba04677"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                    >
                      {t("projectMazuay.blockchain.ctaLabel")}
                    </a>
                  </div>

                  {/* Relatório */}
                  <div className="border-t border-white/10 pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      {t("projectMazuay.report.heading")}
                    </h4>
                    <p className="mt-3 text-sm text-white/75">
                      {t("projectMazuay.report.p1")}
                    </p>
                    <p className="mt-3 text-sm text-white/75">
                      {t("projectMazuay.report.p2")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/75">
                      <li>{t("projectMazuay.report.items.climate")}</li>
                      <li>{t("projectMazuay.report.items.environment")}</li>
                      <li>{t("projectMazuay.report.items.social")}</li>
                      <li>{t("projectMazuay.report.items.compliance")}</li>
                    </ul>
                  </div>

                  {/* ODS */}
                  <div className="border-t border-white/10 pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      {t("projectMazuay.sdgs.heading")}
                    </h4>
                    <p className="mt-3 text-sm text-white/70 max-w-3xl">
                      {t("projectMazuay.sdgs.description")}
                    </p>

                    <div className="mt-4 flex justify-center">
                      <img
                        src="/images/Logos/goals_logo.webp"
                        alt="Sustainable Development Goals Logo"
                        className="w-full max-w-xs md:max-w-sm"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-3 flex justify-center">
                      <img
                        src="/images/Logos/ods.webp"
                        alt={t("projectMazuay.sdgs.imageAlt")}
                        className="w-full max-w-3xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* CTA FINAL */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={sectionVariant}
                className="pt-4 flex flex-col gap-4"
              >
                {/* Logo CCB */}
                <div className="flex justify-center mb-8">
                  <img
                    src="/images/Logos/ccb.webp"
                    alt="Certificação CCB"
                    className="w-64 md:w-[28rem] opacity-90"
                    loading="lazy"
                  />
                </div>

                {/* Botões */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="
                      w-full md:w-auto
                      inline-flex items-center justify-center
                      rounded-full border border-emerald-400/80 bg-emerald-400/10
                      px-6 md:px-8 py-3
                      text-xs font-semibold uppercase tracking-[0.22em]
                      text-emerald-100 hover:bg-emerald-400 hover:text-black
                      transition-all text-center
                    "
                  >
                    {t("projectMazuay.cta.talkToTeam")}
                  </button>

                  <a
                    href="/"
                    className="
                      w-full md:w-auto
                      inline-flex items-center justify-center gap-2
                      rounded-full border border-white/20 bg-white/5
                      px-6 py-3
                      text-xs font-semibold uppercase tracking-[0.22em]
                      text-white/80 hover:border-emerald-400/70 hover:bg-emerald-400/10
                      hover:text-white transition-all backdrop-blur-sm text-center
                    "
                  >
                    {t("projectMazuay.cta.backHome")}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* LIGHTBOX DE IMAGENS DE SATÉLITE */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botão fechar */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/60 text-xs text-white hover:bg-white/10"
                >
                  ✕
                </button>

                {/* Imagem */}
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/60">
                  <img
                    src={satelliteImages[lightboxIndex].src}
                    alt={t(satelliteImages[lightboxIndex].altKey)}
                    className="w-full max-h-[70vh] object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Caption + navegação */}
                <div className="mt-3 flex items-center justify-between gap-4 text-xs text-white/75">
                  <span className="truncate">
                    {t(satelliteImages[lightboxIndex].captionKey)}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={showPrev}
                      className="rounded-full border border-white/30 bg-white/5 px-3 py-1 hover:bg-white/10 text-[0.7rem] uppercase tracking-[0.18em]"
                    >
                      ← {t("projectMazuay.satellite.ui.prev") || "Anterior"}
                    </button>
                    <button
                      onClick={showNext}
                      className="rounded-full border border-emerald-400/70 bg-emerald-400/10 px-3 py-1 hover:bg-emerald-400/20 text-[0.7rem] uppercase tracking-[0.18em]"
                    >
                      {t("projectMazuay.satellite.ui.next") || "Próxima"} →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
