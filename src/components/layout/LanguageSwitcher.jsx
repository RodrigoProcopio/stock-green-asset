import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "pt-BR", label: "PT" },
    { code: "en-US", label: "EN" },
    { code: "es-ES", label: "ES" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`
            px-3 py-1 text-[0.65rem] md:text-xs font-semibold rounded-full
            uppercase tracking-[0.18em]
            transition-all
            ${
              i18n.resolvedLanguage === lng.code
                ? "bg-emerald-400 text-black shadow-[0_0_14px_rgba(16,185,129,0.7)]"
                : "text-white/55 hover:text-white hover:bg-white/10"
            }
          `}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
}
