import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const coreTeam = [
  {
    name: "Augusto Lubian",
    roleKey: "team.core.augusto.role",
    image: "Augusto.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Axel Barrionuevo",
    roleKey: "team.core.axel.role",
    image: "Axel.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Igor Ville",
    roleKey: "team.core.igorVille.role",
    image: "Igor.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Igor Dudeque",
    roleKey: "team.core.igorDudeque.role",
    image: "IgorDudeque.webp",
    path: "Team",
    linkedin: "https://www.linkedin.com/",
  },
];

const advisory = [
  {
    name: "Celso C Souza",
    roleKey: "team.advisory.celso.role",
    image: "Celso.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Patrick Sousa",
    roleKey: "team.advisory.patrick.role",
    image: "Patrick.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Alberto Malta",
    roleKey: "team.advisory.alberto.role",
    image: "Alberto.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kaline Cassemiro",
    roleKey: "team.advisory.kaline.role",
    image: "Kaline.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ronaldo Ortiz",
    roleKey: "team.advisory.ortiz.role",
    image: "Ortiz.webp",
    path: "Advisory",
    linkedin: "https://www.linkedin.com/",
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
      className="relative border-t border-white/5 bg-black py-20 text-white scroll-mt-24"
    >
      {/* ===== DESKTOP: VÍDEO ===== */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-40 pointer-events-none"
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ===== OVERLAYS ===== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 md:from-black/70 md:via-black/80 md:to-black/90" />

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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            {t("team.badge")}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl">
            <span className="font-semibold text-white">
              {t("team.heading.strong")}
            </span>{" "}
            <span className="font-light text-white/80">
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
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
                  className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black to-black"
                >
                  <div className="aspect-[3/4] bg-black">
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
                      <p className="text-sm font-medium transition-colors group-hover:text-emerald-300">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs text-white/60 group-hover:text-white/80">
                        {t(member.roleKey)}
                      </p>
                      <div className="mt-2 h-px w-0 bg-emerald-400/80 transition-all duration-300 group-hover:w-full" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
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
                  className="overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 via-black to-black"
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
                      <p className="text-sm font-medium transition-colors group-hover:text-emerald-300">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs text-emerald-200/80 group-hover:text-emerald-50">
                        {t(member.roleKey)}
                      </p>
                      <div className="mt-2 h-px w-0 bg-emerald-400/80 transition-all duration-300 group-hover:w-full" />
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
