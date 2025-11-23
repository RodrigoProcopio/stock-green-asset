import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { t } = useTranslation();

  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("⌛ Enviando formulário...");
    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

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

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-4 space-y-4"
            >
              {/* Nome */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.name.label")}
                </label>
                <input
                  type="text"
                  name="user_name" // 🔹 nome usado no template EmailJS
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.name.placeholder")}
                  required
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.email.label")}
                </label>
                <input
                  type="email"
                  name="user_email" // 🔹 nome usado no template EmailJS
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.email.placeholder")}
                  required
                />
              </div>

              {/* Assunto */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.subject.label")}
                </label>
                <input
                  type="text"
                  name="subject" // 🔹 usado no template
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.subject.placeholder")}
                  required
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="text-xs text-white/60">
                  {t("contact.form.fields.message.label")}
                </label>
                <textarea
                  rows={4}
                  name="message" // 🔹 usado no template
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-emerald-400/70"
                  placeholder={t("contact.form.fields.message.placeholder")}
                  required
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-full border border-emerald-400/70 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition hover:bg-emerald-400 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending
                  ? t("contact.form.sending") || "Enviando..."
                  : t("contact.form.submit")}
              </button>

              {/* Mensagens de status */}
              {status === "success" && (
                <p className="text-[0.7rem] text-emerald-300">
                  {t("contact.form.success") ||
                    "Mensagem enviada com sucesso. Entraremos em contato em breve."}
                </p>
              )}

              {status === "error" && (
                <p className="text-[0.7rem] text-red-400">
                  {t("contact.form.error") ||
                    "Ocorreu um erro ao enviar. Tente novamente mais tarde."}
                </p>
              )}

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
