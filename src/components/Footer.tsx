import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { locale, t } = useLanguage();
  const name = locale === "th" ? profile.name : profile.nameEn;

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-faint md:flex-row">
        <p lang={locale}>
          © {new Date().getFullYear()}{" "}
          <span className={`font-medium text-ink-muted ${locale === "th" ? "font-thai" : ""}`}>
            {name}
          </span>
        </p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
