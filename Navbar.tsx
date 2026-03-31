import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(135deg, #102a43 0%, #0a1a2e 100%)' }}>
      <div className="text-center">
        <div className="text-8xl font-bold text-white/10 mb-4 select-none"
          style={{ fontFamily: 'var(--font-display)' }}>404</div>
        <h1 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          Page introuvable
        </h1>
        <p className="text-white/50 mb-8 text-sm">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm text-white rounded transition-all hover:opacity-90"
          style={{ backgroundColor: '#c49a2e' }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
