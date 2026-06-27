import type { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  number?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  number,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        {number && (
          <span className="font-display text-sm font-bold text-gradient">{number}</span>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
      </div>
      <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
