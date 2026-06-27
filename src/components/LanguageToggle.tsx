import { useLanguage } from "../context/LanguageContext";
import type { Locale } from "../i18n/translations";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const options: { value: Locale; label: string }[] = [
    { value: "th", label: "TH" },
    { value: "en", label: "EN" },
  ];

  return (
    <div className="flex rounded-xl border border-border bg-surface-2/80 p-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setLocale(opt.value)}
          aria-label={opt.value === "th" ? "ภาษาไทย" : "English"}
          className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
            locale === opt.value
              ? "bg-gradient-to-r from-accent to-accent-2 text-white shadow-sm"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
