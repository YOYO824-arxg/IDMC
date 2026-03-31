interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({ badge, title, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      {badge && <span className="badge mb-4 inline-block">{badge}</span>}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-navy-900"}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div className={`section-divider ${centered ? "mx-auto" : ""} mb-5`} />
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-navy-200" : "text-navy-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
