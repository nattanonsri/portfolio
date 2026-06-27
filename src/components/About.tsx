import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad relative border-t border-border">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              number="01"
              label={t.about.label}
              title={
                <>
                  {t.about.title}{" "}
                  <span className="text-gradient">{t.about.titleItalic}</span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-ink-muted md:text-lg">
                {t.about.bio}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: t.about.locationLabel, value: t.about.location, icon: "📍" },
                  { label: t.about.interestLabel, value: t.about.interest, icon: "💼" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-hover glass rounded-2xl p-5"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-ink-faint">
                      {item.label}
                    </p>
                    <p className="mt-1.5 font-medium text-ink">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
