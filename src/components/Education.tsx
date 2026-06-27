import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            number="05"
            label={t.education.label}
            title={
              <>
                {t.education.title}{" "}
                <span className="text-gradient">{t.education.titleItalic}</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-16">
          {t.education.items.map((item, i) => (
            <Reveal key={item.institution} delay={i * 100}>
              <article className="card-hover glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 font-display text-lg font-bold text-white">
                      {profile.gpa}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                          {item.period}
                        </span>
                        <span className="text-xs text-ink-faint">
                          {t.education.gpa} {profile.gpa}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-ink-muted">{item.major}</p>
                      <p className="text-sm text-ink-faint">{item.faculty}</p>
                    </div>
                  </div>
                  <p className="max-w-sm text-sm leading-relaxed text-ink-muted md:text-right">
                    {item.institution}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
