import { projects } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            number="03"
            label={t.projects.label}
            title={
              <>
                {t.projects.title}{" "}
                <span className="text-gradient">{t.projects.titleItalic}</span>
              </>
            }
            description={t.projects.description}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const content = t.projects.items[project.id];
            const isFeatured = i === 0;

            return (
              <Reveal
                key={project.id}
                delay={i * 80}
                className={isFeatured ? "sm:col-span-2" : ""}
              >
                <article className="card-hover glass group flex h-full flex-col overflow-hidden rounded-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={content.title}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        isFeatured ? "h-48 sm:h-56 md:h-64" : "h-44 sm:h-48"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-accent/90 px-2.5 py-1 text-xs font-semibold text-white">
                        {project.year}
                      </span>
                      <span className="rounded-lg glass px-2.5 py-1 text-xs font-medium text-ink">
                        {t.projects.roleLabels[project.role]}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="font-display text-lg font-bold text-ink sm:text-xl md:text-2xl">
                      {content.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted md:text-base">
                      {content.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
