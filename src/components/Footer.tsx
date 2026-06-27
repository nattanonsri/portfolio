import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { locale } = useLanguage();
  const name = locale === "th" ? profile.name : profile.nameEn;

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-ink-faint">
        <p lang={locale}>
          © {new Date().getFullYear()}{" "}
          <span className={`font-medium text-ink-muted ${locale === "th" ? "font-thai" : ""}`}>
            {name}
          </span>
        </p>
      </div>
    </footer>
  );
}
