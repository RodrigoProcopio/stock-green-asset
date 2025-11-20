import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const coreTeam = [
  {
    name: "Augusto Lubian",
    roleKey: "team.core.augusto.role",
    image: "Augusto.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Axel Barrionuevo",
    roleKey: "team.core.axel.role",
    image: "Axel.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Igor Ville",
    roleKey: "team.core.igorVille.role",
    image: "Igor.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Igor Dudeque",
    roleKey: "team.core.igorDudeque.role",
    image: "IgorDudeque.png",
    linkedin: "https://www.linkedin.com/",
  },
];

const advisory = [
  {
    name: "Celso C Souza",
    roleKey: "team.advisory.celso.role",
    image: "Celso.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Patrick Sousa",
    roleKey: "team.advisory.patrick.role",
    image: "patricknew.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Alberto Malta",
    roleKey: "team.advisory.alberto.role",
    image: "Alberto.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kaline Cassemiro",
    roleKey: "team.advisory.kaline.role",
    image: "Kaline.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ronaldo Ortiz",
    roleKey: "team.advisory.ortiz.role",
    image: "Ortiz.png",
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
      className="relative border-t border-white/5 bg-black py-20 text-white scroll-mt-24 overflow-hidden"
    >
      {/* --- BACKGROUND VIDEO (trocado do Governance) --- */}
      <video
        src="/videos/governance.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* --- DARK OVERLAY GRADIENT --- */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

      {/* --- GLOW EFFECTS --- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[140px]" />
      </div>

      {/* WATERMARK EFFECTS */}
      <div className="pointer-events-none absolute inset-0 hidden md:block z-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: [0.1, 0.18, 0.12],
            scale: [0.7, 1, 1.2],
            rotate: [0, 6, -4, 0],
          }}
          transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.05, 0.12, 0.08],
            scale: [0.9, 1.15, 1.3],
            rotate: [0, -10, 8, 0],
          }}
          transition={{ duration: 32, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
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

        {/* EQUIPE EXECUTIVA */}
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            {t("team.coreSection")}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreTeam.map((member) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

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
                    {member.image ? (
                      <img
                        src={`/images/${member.image}`}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-3xl font-semibold">{initials}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <motion.button
                      type="button"
                      onClick={handleClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="group block text-left"
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

        {/* ADVISORY BOARD */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
            {t("team.advisorySection")}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {advisory.map((member) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

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
                    {member.image ? (
                      <img
                        src={`/images/${member.image}`}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-3xl font-semibold">{initials}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <motion.button
                      type="button"
                      onClick={handleClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="group block text-left"
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
