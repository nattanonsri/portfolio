import { skills } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const categoryMeta: Record<string, { icon: string; gradient: string }> = {
  "Web & Backend": { icon: "🌐", gradient: "from-blue-500/20 to-cyan-500/20" },
  Mobile: { icon: "📱", gradient: "from-violet-500/20 to-purple-500/20" },
  "DevOps & Tools": { icon: "⚙️", gradient: "from-orange-500/20 to-amber-500/20" },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-pad border-t border-border bg-surface-2/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            number="02"
            label={t.skills.label}
            title={
              <>
                {t.skills.title}{" "}
                <span className="text-gradient">{t.skills.titleItalic}</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {skills.map((group, i) => {
            const meta = categoryMeta[group.category];
            return (
              <Reveal key={group.category} delay={i * 100}>
                <div className={`card-hover glass group relative overflow-hidden rounded-2xl p-6`}>
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-xl">
                        {meta.icon}
                      </span>
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                        {t.skills.categories[group.category]}
                      </h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 text-sm font-medium text-ink-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
