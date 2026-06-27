import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-pad border-t border-border bg-surface-2/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            number="04"
            label={t.experience.label}
            title={
              <>
                {t.experience.title}{" "}
                <span className="text-gradient">{t.experience.titleItalic}</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-16 space-y-6">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.company} delay={i * 100}>
              <article className="card-hover glass overflow-hidden rounded-2xl">
                <div className="border-b border-border bg-gradient-to-r from-accent/5 to-accent-2/5 px-6 py-5 md:px-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 font-medium text-accent">{item.company}</p>
                    </div>
                    <span className="w-fit rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="px-6 py-6 md:px-8">
                  <p className="leading-relaxed text-ink-muted">{item.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 rounded-xl bg-surface-2/60 p-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
