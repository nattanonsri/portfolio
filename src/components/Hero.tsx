import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import type { Locale } from "../i18n/translations";
import SocialLinks from "./SocialLinks";

const codeLines = [
  { indent: 0, content: 'const dev = "Nattanon";' },
  { indent: 0, content: 'const stack = [' },
  { indent: 1, content: '"PHP", "Kotlin",' },
  { indent: 1, content: '"React", "DevOps"' },
  { indent: 0, content: '];' },
  { indent: 0, content: 'build(scalable);' },
];

function HeroName({ locale }: { locale: Locale }) {
  const baseClass =
    "font-bold leading-[1.15] tracking-tight text-ink";

  if (locale === "th") {
    return (
      <h1 lang="th" className={`font-thai text-4xl sm:text-5xl md:text-[2.75rem] lg:text-6xl xl:text-[3.5rem] ${baseClass}`}>
        <span className="block">{profile.nameFirst}</span>
        <span className="block">{profile.nameLast}</span>
      </h1>
    );
  }

  return (
    <h1 lang="en" className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${baseClass}`}>
      <span className="block">{profile.nameEnFirst}</span>
      <span className="block">{profile.nameEnLast}</span>
    </h1>
  );
}

export default function Hero() {
  const { locale, t } = useLanguage();

  const secondaryName = locale === "th" ? profile.nameEn : profile.name;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 animate-pulse-glow rounded-full bg-accent/10 blur-3xl" />
      <div
        className="pointer-events-none absolute bottom-[15%] left-[5%] h-56 w-56 animate-pulse-glow rounded-full bg-accent-2/10 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-24">
        <div className="min-w-0">
          {profile.available && (
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-ink-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.available}
            </div>
          )}

          <p
            lang={locale === "th" ? "en" : "th"}
            className="animate-fade-up animate-delay-1 mb-4 text-sm font-medium tracking-wide text-ink-faint"
          >
            {secondaryName}
          </p>

          <div className="animate-fade-up animate-delay-1">
            <HeroName locale={locale} />
          </div>

          <p className="animate-fade-up animate-delay-2 mt-5 font-display text-xl font-semibold sm:text-2xl md:text-3xl">
            <span className="text-gradient">{t.hero.title}</span>
          </p>
          <p className="animate-fade-up animate-delay-2 mt-1 text-base text-ink-muted md:text-lg">
            {t.hero.subtitle}
          </p>

          <p
            lang={locale}
            className="animate-fade-up animate-delay-2 text-balance mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:mt-6 md:text-lg"
          >
            {t.hero.tagline}
          </p>

          <div className="animate-fade-up animate-delay-3 mt-6 flex flex-wrap gap-2 md:mt-7">
            {t.hero.roles.map((role) => (
              <span
                key={role}
                className="rounded-lg border border-border bg-surface-2/80 px-3 py-1.5 text-xs font-medium text-ink-muted"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="animate-fade-up animate-delay-3 mt-7 flex flex-wrap gap-3 md:mt-8">
            <a href="#projects" className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold">
              {t.hero.viewWork}
            </a>
            <a href="#contact" className="btn-ghost rounded-xl px-6 py-3 text-sm font-semibold text-ink">
              {t.hero.getInTouch}
            </a>
          </div>

          <SocialLinks className="animate-fade-up animate-delay-4 mt-6" />

          <div className="animate-fade-up animate-delay-4 mt-10 grid grid-cols-3 gap-2 sm:gap-3 md:mt-12">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-3 text-center sm:p-4">
                <p className="font-display text-xl font-bold text-gradient sm:text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] text-ink-faint sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animate-delay-3 relative hidden min-w-0 lg:block">
          <div className="animate-float glass-strong relative overflow-hidden rounded-2xl p-1 shadow-2xl">
            <div className="flex items-center gap-2 rounded-t-xl bg-surface-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-ink-faint">portfolio.ts</span>
            </div>
            <pre className="overflow-x-auto rounded-b-xl bg-surface-2/50 p-5 font-mono text-xs leading-7 xl:p-6 xl:text-sm">
              {codeLines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 w-4 shrink-0 select-none text-ink-faint">{i + 1}</span>
                  <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    {line.content.includes("Nattanon") ? (
                      <>
                        <span className="text-accent-2">const</span>{" "}
                        <span className="text-accent">dev</span>
                        <span className="text-ink-muted"> = </span>
                        <span className="text-emerald-500">"Nattanon"</span>
                        <span className="text-ink-muted">;</span>
                      </>
                    ) : line.content.includes("build") ? (
                      <>
                        <span className="text-accent-2">build</span>
                        <span className="text-ink-muted">(</span>
                        <span className="text-emerald-500">scalable</span>
                        <span className="text-ink-muted">);</span>
                      </>
                    ) : (
                      <span className="text-ink-muted">{line.content}</span>
                    )}
                  </span>
                </div>
              ))}
            </pre>
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
