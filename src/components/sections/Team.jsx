import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const coreTeam = [
  {
    name: "Augusto Lubian",
    roleKey: "team.core.augusto.role",
    image: "Augusto.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/in/augustolubian/",
  },
  {
    name: "Axel Barrionuevo",
    roleKey: "team.core.axel.role",
    image: "Axel.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/in/axel-barrionuevo-3654b855/",
  },
  {
    name: "Igor Ville",
    roleKey: "team.core.igorVille.role",
    image: "Igor.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/in/igorvillelubian/",
  },
  {
    name: "Igor Dudeque",
    roleKey: "team.core.igorDudeque.role",
    image: "IgorDudeque.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/in/igor-dudeque-luiz-da-costa/",
  },
];

const advisory = [
  {
    name: "Celso C Souza",
    roleKey: "team.advisory.celso.role",
    image: "Celso.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/in/celso-c-souza-01255b52/",
  },
  {
    name: "Patrick Sousa",
    roleKey: "team.advisory.patrick.role",
    image: "Patrick.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/in/patrickasousa/",
  },
  {
    name: "Alberto Malta",
    roleKey: "team.advisory.alberto.role",
    image: "Alberto.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/in/albertomjunior/",
  },
  {
    name: "Kaline Cassemiro",
    roleKey: "team.advisory.kaline.role",
    image: "Kaline.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/in/kaline-cassemiro-lubian/",
  },
  {
    name: "Artêmio Picanço",
    roleKey: "team.advisory.ortiz.role",
    image: "Artemio.webp",
    path: "Advisory",
    linkedin:
      "https://www.linkedin.com/in/art%C3%AAmio-pican%C3%A7o-25a842115/",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Team() {
  const { t } = useTranslation();

  return (
    <section
      id="team"
      className="
        relative scroll-mt-24
        border-t border-[#d6d6d6]
        bg-white py-20
        text-[#333846]
      "
    >
      {/* ===== DESKTOP: VÍDEO ===== */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="pointer-events-none h-full w-full object-cover opacity-35"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/governance.webm" type="video/webm" />
          <source src="/videos/governance.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ===== MOBILE: IMAGEM ESTÁTICA ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/Team.webp')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/50" />
      </div>

      {/* ===== OVERLAY / GRADIENT GLOBAL ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-[#f5f5f7]/50 via-white/60 to-[#f5f5f7]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-3 text-3xl md:text-4xl">
            <span className="font-semibold text-[#1c2846]">
              {t("team.heading.strong")}
            </span>{" "}
            <span className="font-light text-[#333846]">
              {t("team.heading.light")}
            </span>
          </h2>
        </motion.div>

        {/* CORE TEAM */}
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
            {t("team.coreSection")}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreTeam.map((member) => {
              const handleClick = () => {
                if (member.linkedin) {
                  window.open(member.linkedin, "_blank", "noopener,noreferrer");
                }
              };

              return (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  className="
                    overflow-hidden rounded-3xl
                    border border-[#d6d6d6]
                    bg-white/90
                    backdrop-blur-sm
                    shadow-[0_18px_40px_rgba(0,0,0,0.04)]
                  "
                >
                  <div className="aspect-[3/4]">
                    <img
                      src={`/images/Team/${member.image}`}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <motion.button
                      type="button"
                      onClick={handleClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="group block w-full text-left"
                    >
                      <p className="text-sm font-medium text-[#1c2846] transition-colors group-hover:text-[#333846]">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs text-[#333846]/80 group-hover:text-[#1c2846]">
                        {t(member.roleKey)}
                      </p>
                      <div className="mt-2 h-px w-0 bg-[#1c2846] transition-all duration-300 group-hover:w-full" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ADVISORY */}
        <motion.div
          id="advisory"
          className="mt-16 scroll-mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1c2846]">
            {t("team.advisorySection")}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {advisory.map((member) => {
              const handleClick = () => {
                if (member.linkedin) {
                  window.open(member.linkedin, "_blank", "noopener,noreferrer");
                }
              };

              return (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  className="
                    overflow-hidden rounded-3xl
                    border border-[#d6d6d6]
                    bg-white/90
                    backdrop-blur-sm
                    shadow-[0_18px_40px_rgba(0,0,0,0.04)]
                  "
                >
                  <div className="aspect-[3/4]">
                    <img
                      src={`/images/Advisory/${member.image}`}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <motion.button
                      type="button"
                      onClick={handleClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="group block w-full text-left"
                    >
                      <p className="text-sm font-medium text-[#1c2846] transition-colors group-hover:text-[#333846]">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs text-[#333846]/80 group-hover:text-[#1c2846]">
                        {t(member.roleKey)}
                      </p>
                      <div className="mt-2 h-px w-0 bg-[#1c2846] transition-all duration-300 group-hover:w-full" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
