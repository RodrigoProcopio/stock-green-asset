import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import logoStock from "../../assets/logo-stock.webp";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate, useLocation } from "react-router-dom";

// KEYS das seções
const navItems = [
  { key: "navbar.links.home", href: "#home" },
  { key: "navbar.links.about", href: "#about" },
  { key: "navbar.links.solutions", href: "#solutions" },
  { key: "navbar.links.projects", href: "#projects" },
  { key: "navbar.links.socialProjects", href: "/social-projects" },
  { key: "navbar.links.sustainability", href: "#sustainability" },
  { key: "navbar.links.sustainabilitybonds", href: "#sustainabilitybonds" },
  { key: "navbar.links.governance", href: "#governance" },
  { key: "navbar.links.team", href: "#team" },
  { key: "navbar.links.partners", href: "#partners" },
  { key: "navbar.links.contact", href: "#contact" },
];

const sectionHighlights = [
  {
    key: "navbar.focus.solutions.title",
    descriptionKey: "navbar.focus.solutions.description",
    target: "#solutions",
  },
  {
    key: "navbar.focus.projects.title",
    descriptionKey: "navbar.focus.projects.description",
    target: "/projects/mazuay-redd",
  },
  {
    key: "navbar.focus.sustainability.title",
    descriptionKey: "navbar.focus.sustainability.description",
    target: "/sustainability",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoTopControls = useAnimation();
  const logoBottomControls = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleLogoSpin = async () => {
    await Promise.all([
      logoTopControls.start({
        y: ["0%", "100%"],
        transition: { duration: 0.45, ease: "easeInOut" },
      }),
      logoBottomControls.start({
        y: ["-100%", "0%"],
        transition: { duration: 0.45, ease: "easeInOut" },
      }),
    ]);

    logoTopControls.set({ y: "0%" });
    logoBottomControls.set({ y: "-100%" });
  };

  const handleNavClick = (href) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate({ pathname: "/", hash: href });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHighlightClick = (target) => {
    handleNavClick(target);
  };

  return (
    <>
      {/* ---------------------- */}
      {/* BOTÃO PILL             */}
      {/* ---------------------- */}
      {!isOpen && (
        <div className="fixed right-4 top-5 z-40 md:right-8 md:top-8">
          <motion.button
            onClick={() => setIsOpen(true)}
            onMouseEnter={handleLogoSpin}
            whileHover={{
              scale: 1.03,
              y: -2,
              boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="
              group flex h-14 items-center rounded-2xl 
              border border-[#d6d6d6] bg-white/95
              px-4 shadow-xl backdrop-blur-xl
            "
          >
            <div className="relative flex h-10 w-44 items-center overflow-hidden px-2">
              <motion.img
                src={logoStock}
                alt="Stock Capital"
                className="absolute left-0 h-10 w-auto"
                initial={{ y: "0%" }}
                animate={logoTopControls}
              />

              <motion.img
                src={logoStock}
                alt="Stock Capital"
                className="absolute left-0 h-10 w-auto"
                initial={{ y: "-100%" }}
                animate={logoBottomControls}
              />
            </div>

            <div className="mx-3 h-10 w-[1px] bg-[#333846]/20 group-hover:bg-[#333846]/40" />

            <div className="flex flex-col justify-center gap-1.5">
              <span className="h-[2px] w-6 rounded-full bg-[#333846] group-hover:w-7 group-hover:bg-[#1c2846]" />
              <span className="h-[2px] w-6 rounded-full bg-[#333846] group-hover:w-7 group-hover:bg-[#1c2846]" />
              <span className="h-[2px] w-6 rounded-full bg-[#333846] group-hover:w-7 group-hover:bg-[#1c2846]" />
            </div>
          </motion.button>
        </div>
      )}

      {/* ---------------------- */}
      {/* MENU FULLSCREEN NAVY   */}
      {/* ---------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#1c2846] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* TOP MOBILE */}
            <div className="absolute left-0 right-0 top-4 flex items-center justify-between px-6 md:hidden">
              <div className="flex flex-shrink-0 flex-col">
                <span className="mb-1 text-[10px] uppercase tracking-wide text-white/60">
                  {t("navbar.language")}
                </span>
                <LanguageSwitcher />
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/5 hover:bg-white/10"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-1/2 top-1/2 h-[2px] w-full rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white" />
                  <span className="absolute left-1/2 top-1/2 h-[2px] w-full -rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white" />
                </span>
              </button>
            </div>

            {/* BOTÃO FECHAR DESKTOP */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-8 top-8 hidden h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/5 hover:bg-white/10 md:flex"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 h-[2px] w-full rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white" />
                <span className="absolute left-1/2 top-1/2 h-[2px] w-full -rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white" />
              </span>
            </button>

            {/* ---------------------- */}
            {/* CONTEÚDO DO MENU      */}
            {/* ---------------------- */}
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-10 pt-20 md:flex-row md:gap-12 md:pt-28">
              {/* Coluna esquerda */}
              <div className="flex-1 border-b border-white/30 pb-8 md:border-b-0 md:border-r md:pr-10">
                {/* IDIOMA DESKTOP */}
                <div className="mb-8 hidden flex-col md:flex">
                  <span className="mb-1 text-[10px] uppercase tracking-wide text-white/60">
                    {t("navbar.language")}
                  </span>
                  <LanguageSwitcher />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  {t("navbar.navigation")}
                </p>

                <nav className="mt-6 space-y-4 text-2xl md:text-3xl">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="group relative block w-fit text-left font-medium text-white/85"
                    >
                      <span className="transition-all group-hover:translate-x-1 group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.7)]">
                        {t(item.key)}
                      </span>
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </button>
                  ))}
                </nav>

                {/* LINKS INFERIORES */}
                <div className="mt-10 space-y-2 text-sm">
                  {[
                    { label: "RI Portal", url: "https://ri-portal.super.site/" },
                    {
                      label: "Canal Confidencial",
                      url: "https://app.pipefy.com/public/form/dirpZ0Km",
                    },
                    {
                      label: "Canal Ambiental",
                      url: "https://app.pipefy.com/public/form/k2OJAxcz",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-white/70 transition-all hover:translate-x-1 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Coluna direita – Destaques */}
              <div className="mt-8 flex-1 md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  {t("navbar.ourFocus")}
                </p>

                <div className="mt-6 space-y-8">
                  {sectionHighlights.map((item, index) => (
                    <motion.button
                      key={item.key}
                      onClick={() => handleHighlightClick(item.target)}
                      className="group flex w-full flex-col items-start text-left"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 * index }}
                    >
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <p className="text-base font-semibold text-white group-hover:text-white">
                            {t(item.key)}
                          </p>
                          <p className="mt-1 max-w-xs text-sm text-white/85">
                            {t(item.descriptionKey)}
                          </p>
                        </div>

                        <span className="text-lg text-white/80 transition-all group-hover:translate-x-1 group-hover:text-white">
                          →
                        </span>
                      </div>

                      <div className="mt-4 h-[2px] w-full overflow-hidden bg-white/25">
                        <div className="h-full w-[25%] bg-white transition-all group-hover:w-full" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
