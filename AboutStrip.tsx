import Link from 'next/link'

interface ProjectCardProps {
  title: string
  category: string
  mission: string
  description: string
  sector: string
  emoji?: string
}

export function ProjectCard({ title, category, mission, description, sector, emoji }: ProjectCardProps) {
  return (
    <article className="group rounded-xl overflow-hidden border border-slate-100 bg-white card-lift">
      {/* Visual */}
      <div
        className="h-52 relative overflow-hidden flex items-end"
        style={{ background: 'linear-gradient(135deg, #102a43 0%, #243b53 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {emoji && (
          <div
            className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl select-none pointer-events-none"
            aria-hidden="true"
          >
            {emoji}
          </div>
        )}
        <div className="relative z-10 p-5 w-full flex items-center justify-between">
          <span
            className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full"
            style={{ backgroundColor: 'rgba(196,154,46,0.9)', color: 'white' }}
          >
            {category}
          </span>
          <span className="text-white/40 text-[10px] tracking-widest uppercase">{sector}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-[10px] text-slate-400 tracking-widest uppercase mb-2">{mission}</div>
        <h3
          className="text-lg font-bold mb-3"
          style={{ fontFamily: 'var(--font-display)', color: '#102a43' }}
        >
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c49a2e' }} />
            <span className="text-[11px] text-slate-400 font-medium">{sector}</span>
          </div>
          <Link
            href="/contact"
            className="text-xs font-semibold flex items-center gap-1.5 transition-all hover:gap-2.5"
            style={{ color: '#c49a2e' }}
          >
            Projet similaire
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
