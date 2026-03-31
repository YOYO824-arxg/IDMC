interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  chips?: string[]
}

export function PageHero({ eyebrow, title, subtitle, chips }: PageHeroProps) {
  return (
    <section
      className="pt-40 pb-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #102a43 0%, #0a1a2e 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,154,46,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px" style={{ backgroundColor: '#c49a2e' }} />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#c49a2e' }}>
            {eyebrow}
          </span>
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {chips && chips.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="px-5 py-2 rounded-full border text-sm"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' }}
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
