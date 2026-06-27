import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();

  const methods = [
    {
      label: t.contact.phone,
      value: profile.phone,
      href: `tel:${profile.phone}`,
      external: false,
    },
    {
      label: t.contact.line,
      value: profile.lineId,
      href: `https://line.me/ti/p/~${profile.lineId}`,
      external: true,
    },
    profile.social.github && {
      label: t.contact.github,
      value: "nattanonsri",
      href: profile.social.github,
      external: true,
    },
    {
      label: t.contact.location,
      value: t.about.location,
      href: undefined,
      external: false,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string | undefined;
    external: boolean;
  }[];

  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-2 to-accent opacity-90" />
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative px-6 py-16 md:px-12 md:py-20">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {t.contact.label}
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {t.contact.title}{" "}
                  <span className="opacity-80">{t.contact.titleItalic}</span>
                </h2>
                <p className="mt-4 text-base text-white/80 md:text-lg">
                  {t.contact.description}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {methods.map((method, i) => (
                <Reveal key={method.label} delay={i * 100}>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="group flex flex-col rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-[1.02]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        {method.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{method.value}</p>
                    </a>
                  ) : (
                    <div className="flex flex-col rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        {method.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{method.value}</p>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
