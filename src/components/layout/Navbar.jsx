import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import logoStock from "../../assets/logo-stock-capital.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate, useLocation } from "react-router-dom";

// Agora guardamos só as KEYS, e não o texto direto
const navItems = [
  { key: "navbar.links.home", href: "#home" },
  { key: "navbar.links.about", href: "#about" },
  { key: "navbar.links.solutions", href: "#solutions" },
  { key: "navbar.links.projects", href: "#projects" },
  { key: "navbar.links.socialProjects", href: "/social-projects" },
  { key: "navbar.links.sustainability", href: "#sustainability" },
  { key: "navbar.links.governance", href: "#governance" },
  { key: "navbar.links.team", href: "#team" },
  { key: "navbar.links.advisoryBoard", href: "#advisory" },
  { key: "navbar.links.partners", href: "#partners" },
  { key: "navbar.links.contact", href: "#contact" },
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

    // Âncoras (#home, #about, etc.)
    if (href.startsWith("#")) {
      // Se NÃO estiver na home, navega para "/" com hash
      if (location.pathname !== "/") {
        navigate({
          pathname: "/",
          hash: href,
        });
      } else {
        // Já está na home: apenas faz scroll suave
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      return;
    }

    // Rotas normais (ex: /social-projects)
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Destaques da direita usam a mesma navegação
  const handleHighlightClick = (target) => {
    handleNavClick(target);
  };

  return (
    <>
      {/* Botão pill no topo direito (menu fechado) */}
      {!isOpen && (
        <div className="fixed right-4 top-5 z-40 md:right-8 md:top-8">
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
            <div className="mx-3 h-10 w-[1px] bg-black/15 transition-colors group-hover:bg-black/25" />

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
      {/* Topo do menu: label + idiomas + botão fechar */}
      <motion.div
        className="absolute left-0 right-0 top-4 flex items-center justify-between px-6 md:top-8 md:px-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col flex-shrink-0">
          <span className="mb-1 text-[10px] uppercase tracking-wide text-white/40">
            {t("navbar.language")}
          </span>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar navegação"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/70 hover:bg-white/10"
        >
          <span className="relative block h-5 w-5">
            <span
              className="
                absolute left-1/2 top-1/2
                h-[2px] w-full
                -translate-x-1/2 -translate-y-1/2
                rotate-45
                bg-white
              "
            />
            <span
              className="
                absolute left-1/2 top-1/2
                h-[2px] w-full
                -translate-x-1/2 -translate-y-1/2
                -rotate-45
                bg-white
              "
            />
          </span>
        </button>
      </motion.div>


            {/* Conteúdo do overlay */}
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-10 pt-20 md:flex-row md:items-stretch md:gap-12 md:pt-28">
              {/* Navegação principal */}
              <div className="flex-1 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  {t("navbar.navigation")}
                </p>

                <nav className="mt-6 space-y-4 text-2xl md:text-3xl">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="group relative block w-fit text-left font-medium text-white/80"
                    >
                      {/* Texto com glow + leve movimento */}
                      <span
                        className="
                          inline-block
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-white
                          group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.7)]
                        "
                      >
                        {t(item.key)}
                      </span>

                      {/* Linha verde animada embaixo */}
                      <span
                        className="
                          pointer-events-none
                          absolute -bottom-1 left-0
                          h-[2px] w-0
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
                      rel="noopener noreferrer"
                      className="
                        block 
                        transform
                        text-white/45 
                        transition-all 
                        duration-200 
                        hover:translate-x-1
                        hover:font-semibold
                        hover:text-emerald-400 
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
                      type="button"
                      onClick={() => handleHighlightClick(item.target)}
                      className="
                        group
                        flex w-full flex-col items-start
                        text-left
                        transition-all
                      "
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 * index }}
                    >
                      {/* Linha superior: título + seta */}
                      <div className="flex w-full items-center justify-between gap-4">
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

                          <p className="mt-1 max-w-xs text-sm leading-relaxed text-white/65">
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
                      <div className="mt-4 h-[2px] w-full overflow-hidden bg-white/15">
                        <div
                          className="
                            h-full w-[25%]
                            bg-emerald-400
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

