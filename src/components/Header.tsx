import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 shadow-sm">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          N<span className="text-gradient">.</span>S
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink xl:px-3"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden rounded-xl px-4 py-2 text-sm font-medium sm:inline-block">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
