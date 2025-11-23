import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black py-24 text-white scroll-mt-24"
    >
      {/* 🎥 Vídeo de fundo */}
      <video
        src="/videos/solutions.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* 🔷 Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* 💎 Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* 🔹 ESQUERDA: Informações */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
              {t("contact.badge")}
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              {t("contact.title")}
            </h2>

            <p className="mt-3 max-w-lg text-sm text-white/70 md:text-base">
              {t("contact.subtitle")}
            </p>

            <div className="mt-6 grid gap-4 text-sm text-white/70">
              {/* Email Brasil */}
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  {t("contact.email.br.label")}
                </p>
                <a
                  href="mailto:contato@stockcapital.com.br"
                  className="mt-1 inline-block text-sm text-emerald-300 transition hover:text-emerald-200"
                >
                  contato@stockcapital.com.br
                </a>
              </div>

              {/* Email Argentina */}
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  {t("contact.email.ar.label")}
                </p>
                <a
                  href="mailto:contato@stockcapital.com.br"
                  className="mt-1 inline-block text-sm text-emerald-300 transition hover:text-emerald-200"
                >
                  contato@stockcapital.com.br
                </a>
              </div>

              {/* 🔗 Canais Institucionais */}
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  {t("contact.channels.label")}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href="https://ri-portal.super.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition hover:text-emerald-300"
                  >
                    {t("contact.channels.irPortal")}
                  </a>
                  <span className="text-white/40">·</span>

                  <a
                    href="https://app.pipefy.com/public/form/dirpZ0Km"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition hover:text-emerald-300"
                  >
                    {t("contact.channels.confidential")}
                  </a>
                  <span className="text-white/40">·</span>

                  <a
                    href="https://app.pipefy.com/public/form/k2OJAxcz"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition hover:text-emerald-300"
                  >
                    {t("contact.channels.environmental")}
                  </a>
                </div>

                {/* 🌍 Logo Global Compact — novo caminho */}
                <div className="mt-10 flex justify-left">
                  <img
                    src="/images/Logos/Global-Compact.webp"
                    alt="UN Global Compact"
                    className="h-54 w-auto opacity-90 transition hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 DIREITA: Formulário */}
          <motion.div
            className="h-fit rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg shadow-black/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {t("contact.form.badge")}
            </p>

            <form className="mt-4 space-y-4">
              {/* Nome */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.name.label")}
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.name.placeholder")}
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.email.label")}
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.email.placeholder")}
                />
              </div>

              {/* Assunto */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.subject.label")}
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.subject.placeholder")}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.message.label")}
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.message.placeholder")}
                />
              </div>

              {/* Botão */}
              <button
                type="button"
                className="w-full rounded-full border border-emerald-400/70 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition hover:bg-emerald-400 hover:text-black"
              >
                {t("contact.form.submit")}
              </button>

              <p className="text-[0.65rem] text-white/40">
                {t("contact.form.disclaimer")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
