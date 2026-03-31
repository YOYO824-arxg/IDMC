import Link from 'next/link'

interface ServiceCardProps {
  id: string
  emoji: string
  title: string
  shortDescription: string
  points: string[]
}

export function ServiceCard({ id, emoji, title, shortDescription, points }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-100 overflow-hidden card-lift group">
      {/* Header */}
      <div
        className="p-7 border-b border-slate-50"
        style={{ background: 'linear-gradient(135deg, #f8fafc, #ffffff)' }}
      >
        <div className="text-3xl mb-4" aria-hidden="true">{emoji}</div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-display)', color: '#102a43' }}
        >
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">{shortDescription}</p>
      </div>

      {/* Points */}
      <div className="p-7">
        <ul className="space-y-2.5 mb-7" aria-label={`Prestations — ${title}`}>
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ backgroundColor: 'rgba(196,154,46,0.12)' }}
              >
                <svg className="w-2.5 h-2.5" fill="none" stroke="#c49a2e" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-slate-600 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-full py-3 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
          style={{ backgroundColor: '#c49a2e' }}
        >
          Demander un devis
        </Link>
      </div>
    </article>
  )
}
