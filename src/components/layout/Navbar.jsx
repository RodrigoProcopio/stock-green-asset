import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import logoStock from "../../assets/logo-stock-capital.svg";
import LanguageSwitcher from "./LanguageSwitcher";

// Agora guardamos só as KEYS, e não o texto direto
const navItems = [
  { key: "navbar.links.home", href: "#home" },             // Hero
  { key: "navbar.links.about", href: "#about" },           // About.jsx
  { key: "navbar.links.solutions", href: "#solutions" },   // Solutions.jsx
  { key: "navbar.links.projects", href: "#projects" },     // Projects.jsx
  { key: "navbar.links.sustainability", href: "#sustainability" }, // Sustainability.jsx
  { key: "navbar.links.team", href: "#team" },             // Team.jsx
  { key: "navbar.links.contact", href: "#contact" },       // Contact.jsx
];

// Destaques da direita também em keys
const sectionHighlights = [
  {
    key: "navbar.focus.solutions.title",
    descriptionKey: "navbar.focus.solutions.description",
    target: "#solutions",
  },
  {
    key: "navbar.focus.projects.title",
    descriptionKey: "navbar.focus.projects.description",
    target: "#projects",
  },
  {
    key: "navbar.focus.sustainability.title",
    descriptionKey: "navbar.focus.sustainability.description",
    target: "#sustainability",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoTopControls = useAnimation();
  const logoBottomControls = useAnimation();

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
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHighlightClick = (target) => {
    setIsOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Botão pill no topo direito (menu fechado) */}
      {!isOpen && (
        <div className="fixed right-4 top-4 z-40 md:right-8 md:top-8">
          <motion.button
            onClick={() => setIsOpen(true)}
            onMouseEnter={handleLogoSpin}
            whileHover={{
              scale: 1.03,
              y: -2,
              boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="
              group
              flex items-center
              h-14
              rounded-2xl 
              border border-white/15 
              bg-white/95 
              px-4
              shadow-xl 
              backdrop-blur-xl
            "
          >
            {/* LOGO com efeito caça-níquel */}
            <div className="relative flex h-10 w-44 items-center overflow-hidden px-2">
              <motion.img
                src={logoStock}
                alt="Stock Capital"
                className="absolute left-0 top-1 h-8 w-auto"
                initial={{ y: "0%" }}
                animate={logoTopControls}
                style={{ willChange: "transform" }}
              />

              <motion.img
                src={logoStock}
                alt="Stock Capital"
                className="absolute left-0 top-0 h-8 w-auto"
                initial={{ y: "-100%" }}
                animate={logoBottomControls}
                style={{ willChange: "transform" }}
              />
            </div>

            {/* Divisor vertical */}
            <div className="mx-3 h-10 w-[1px] bg-black/15 group-hover:bg-black/25 transition-colors" />

            {/* Ícone Hamburguer */}
            <div className="flex flex-col justify-center gap-1.5">
              <span className="h-[2px] w-6 rounded-full bg-black transition-all group-hover:w-7" />
              <span className="h-[2px] w-6 rounded-full bg-black transition-all group-hover:w-7" />
              <span className="h-[2px] w-6 rounded-full bg-black transition-all group-hover:w-7" />
            </div>
          </motion.button>
        </div>
      )}

      {/* Overlay de navegação fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Seletor de idioma */}
<div className="absolute right-16 top-4 md:right-24 md:top-9">
  <LanguageSwitcher />
</div>

{/* Botão fechar */}
<div className="absolute right-16 top-4 md:right-8 md:top-8">
  <button
    onClick={() => setIsOpen(false)}
    aria-label="Fechar navegação"
    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/70 hover:bg-white/10"
  >
    <span className="relative block h-4 w-4">
      {/* traço 1 */}
      <span
        className="
          absolute left-1/2 top-1/2
          h-[1.5px] w-full
          -translate-x-1/2 -translate-y-1/2
          rotate-45
          bg-white
        "
      />
      {/* traço 2 */}
      <span
        className="
          absolute left-1/2 top-1/2
          h-[1.5px] w-full
          -translate-x-1/2 -translate-y-1/2
          -rotate-45
          bg-white
        "
      />
    </span>
  </button>
</div>

            {/* Conteúdo do overlay */}
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-10 pt-16 md:flex-row md:items-stretch md:gap-12 md:pt-24">
              {/* Navegação principal */}
              <div className="flex-1 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  {t("navbar.navigation")}
                </p>

                <nav className="mt-6 space-y-4 text-2xl md:text-3xl">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="group relative block w-fit text-left font-medium text-white/80"
                    >
                      {/* Texto com glow + leve movimento */}
                      <span
                        className="
                          inline-block
                          transition-all
                          duration-300
                          group-hover:text-white
                          group-hover:translate-x-1
                          group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.7)]
                        "
                      >
                        {t(item.key)}
                      </span>

                      {/* Linha verde animada embaixo */}
                      <span
                        className="
                          pointer-events-none
                          absolute -bottom-1 left-0 h-[2px] w-0
                          bg-emerald-400
                          transition-all duration-300 
                          group-hover:w-full
                        "
                      />
                    </button>
                  ))}
                </nav>

               {/* Links inferiores */}
<div className="mt-10 space-y-2 text-sm">
  {[
    { label: "IR Portal", url: "https://ri-portal.super.site/" },
    { label: "Canal Confidencial", url: "https://app.pipefy.com/public/form/dirpZ0Km" },
    { label: "Canal Ambiental", url: "https://app.pipefy.com/public/form/k2OJAxcz" },
  ].map((item) => (
    <a
      key={item.label}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block 
        text-white/45 
        transition-all 
        duration-200 
        hover:text-emerald-400 
        hover:font-semibold
        transform
        hover:translate-x-1
      "
    >
      {item.label}
    </a>
  ))}
</div>
              </div>

              {/* Destaques da direita – Our Focus */}
              <div className="mt-8 flex-1 md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  {t("navbar.ourFocus")}
                </p>

                <div className="mt-6 space-y-8">
                  {sectionHighlights.map((item, index) => (
                    <motion.button
                      key={item.key}
                      onClick={() => handleHighlightClick(item.target)}
                      className="
                        group
                        flex flex-col items-start
                        w-full text-left
                        transition-all
                      "
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 * index }}
                    >
                      {/* Linha superior: título + seta */}
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <p
                            className="
                              text-base 
                              font-semibold 
                              text-white
                              transition-all
                              group-hover:text-emerald-300
                            "
                          >
                            {t(item.key)}
                          </p>

                          <p className="mt-1 text-sm text-white/65 max-w-xs leading-relaxed">
                            {t(item.descriptionKey)}
                          </p>
                        </div>

                        <span
                          className="
                            text-lg
                            text-white/80
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:text-emerald-300
                          "
                        >
                          →
                        </span>
                      </div>

                      {/* Linha animada tipo CTA */}
                      <div className="mt-4 w-full h-[2px] bg-white/15 overflow-hidden">
                        <div
                          className="
                            h-full bg-emerald-400
                            w-[25%]
                            transition-all
                            duration-500
                            ease-out
                            group-hover:w-full
                          "
                        />
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
