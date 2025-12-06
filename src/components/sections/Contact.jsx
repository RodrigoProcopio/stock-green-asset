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
      formRef.current?.reset();
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
      className="
        relative overflow-hidden scroll-mt-24
        border-t border-[#d6d6d6]
        bg-white pt-24 pb-24
        text-[#333846]
      "
    >
      {/* 🎥 Vídeo de fundo */}
      <video
        src="/videos/solutions.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Overlay claro institucional */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#f5f5f7]/92 via-white/100 to-white/60
        "
      />

      {/* Glows navy/slate */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-1/2 top-1/2 h-[110vw] w-[110vw]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#1c2846]/20
            blur-[160px]
            mix-blend-multiply
          "
        />
        <div
          className="
            absolute -left-20 top-40 h-72 w-72 rounded-full
            bg-[#1c2846]/26 blur-3xl
            mix-blend-multiply
          "
        />
        <div
          className="
            absolute right-0 bottom-20 h-72 w-72 rounded-full
            bg-[#333846]/22 blur-3xl
            mix-blend-multiply
          "
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* 🔹 ESQUERDA: Informações */}
          <div>
            <p
              className="
                text-xs font-semibold uppercase tracking-[0.25em]
                text-[#1c2846]
              "
            >
              {t("contact.badge")}
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#1c2846] md:text-3xl">
              {t("contact.title")}
            </h2>

            <p className="mt-3 max-w-lg text-sm text-[#333846] md:text-base">
              {t("contact.subtitle")}
            </p>

            <div className="mt-6 grid gap-4 text-sm text-[#333846]">
              {/* Email Brasil */}
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#333846]/70">
                  {t("contact.email.br.label")}
                </p>
                <a
                  href="mailto:contato@stockcapital.com.br"
                  className="
                    mt-1 inline-block text-sm
                    text-[#1c2846] hover:text-[#333846]
                    transition
                  "
                >
                  contato@stockcapital.com.br
                </a>
              </div>

              {/* Email Argentina */}
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#333846]/70">
                  {t("contact.email.ar.label")}
                </p>
                <a
                  href="mailto:contato@stockcapital.com.br"
                  className="
                    mt-1 inline-block text-sm
                    text-[#1c2846] hover:text-[#333846]
                    transition
                  "
                >
                  contato@stockcapital.com.br
                </a>
              </div>

              {/* 🔗 Canais Institucionais */}
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#333846]/70">
                  {t("contact.channels.label")}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href="https://ri-portal.super.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-[#333846] hover:text-[#1c2846]
                      transition
                    "
                  >
                    {t("contact.channels.irPortal")}
                  </a>
                  <span className="text-[#333846]/60">·</span>

                  <a
                    href="https://app.pipefy.com/public/form/dirpZ0Km"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-[#333846] hover:text-[#1c2846]
                      transition
                    "
                  >
                    {t("contact.channels.confidential")}
                  </a>
                  <span className="text-[#333846]/60">·</span>

                  <a
                    href="https://app.pipefy.com/public/form/k2OJAxcz"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-[#333846] hover:text-[#1c2846]
                      transition
                    "
                  >
                    {t("contact.channels.environmental")}
                  </a>
                </div>

                <div className="mt-10 flex justify-left">
                  <img
                    src="/images/Logos/Global-Compact.webp"
                    alt="UN Global Compact"
                    className="
                      h-48 w-auto opacity-85
                      transition hover:opacity-100
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 DIREITA: Formulário */}
          <motion.div
            className="
              h-fit rounded-3xl border border-[#d6d6d6]
              bg-white/92 p-6 backdrop-blur-xl
              shadow-[0_18px_40px_rgba(0,0,0,0.06)]
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="
                text-xs font-semibold uppercase tracking-[0.22em]
                text-[#1c2846]
              "
            >
              {t("contact.form.badge")}
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-4 space-y-4"
            >
              {/* Nome */}
              <div>
                <label className="text-xs text-[#333846]/80">
                  {t("contact.form.fields.name.label")}
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="
                    mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none
                    border-[#d6d6d6] bg-white/95
                    placeholder:text-slate-400
                    focus:border-[#1c2846] focus:ring-0
                  "
                  placeholder={t("contact.form.fields.name.placeholder")}
                  required
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="text-xs text-[#333846]/80">
                  {t("contact.form.fields.email.label")}
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="
                    mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none
                    border-[#d6d6d6] bg-white/95
                    placeholder:text-slate-400
                    focus:border-[#1c2846] focus:ring-0
                  "
                  placeholder={t("contact.form.fields.email.placeholder")}
                  required
                />
              </div>

              {/* Assunto */}
              <div>
                <label className="text-xs text-[#333846]/80">
                  {t("contact.form.fields.subject.label")}
                </label>
                <input
                  type="text"
                  name="subject"
                  className="
                    mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none
                    border-[#d6d6d6] bg-white/95
                    placeholder:text-slate-400
                    focus:border-[#1c2846] focus:ring-0
                  "
                  placeholder={t("contact.form.fields.subject.placeholder")}
                  required
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="text-xs text-[#333846]/80">
                  {t("contact.form.fields.message.label")}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="
                    mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none
                    border-[#d6d6d6] bg-white/95
                    placeholder:text-slate-400
                    focus:border-[#1c2846] focus:ring-0
                  "
                  placeholder={t("contact.form.fields.message.placeholder")}
                  required
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={isSending}
                className="
                  w-full rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.2em]
                  border border-[#1c2846]
                  bg-transparent text-[#1c2846]
                  hover:bg-[#1c2846] hover:text-white
                  disabled:cursor-not-allowed disabled:opacity-60
                  transition
                  shadow-[0_0_16px_rgba(0,0,0,0.08)]
                "
              >
                {isSending
                  ? t("contact.form.sending") || "Enviando..."
                  : t("contact.form.submit")}
              </button>

              {/* Mensagens de status */}
              {status === "success" && (
                <p className="text-[0.7rem] text-[#1c2846]">
                  {t("contact.form.success") ||
                    "Mensagem enviada com sucesso. Entraremos em contato em breve."}
                </p>
              )}

              {status === "error" && (
                <p className="text-[0.7rem] text-red-500">
                  {t("contact.form.error") ||
                    "Ocorreu um erro ao enviar. Tente novamente mais tarde."}
                </p>
              )}

              <p className="text-[0.65rem] text-[#333846]/80">
                {t("contact.form.disclaimer")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
