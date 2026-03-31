import type { Metadata } from 'next'
import Link from 'next/link'
import { PROJECTS, SERVICES } from '@/lib/constants'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Réalisations — IDMC',
  description: "Découvrez les projets et réalisations d'IDMC en immobilier, électrification, événementiel et formation professionnelle.",
  openGraph: {
    title: 'Réalisations — IDMC',
    description: "Projets et missions réalisés par IDMC dans ses quatre domaines d'expertise.",
  },
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #102a43 0%, #0a1a2e 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,154,46,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px" style={{ backgroundColor: '#c49a2e' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#c49a2e' }}>
              Réalisations
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Des projets qui témoignent de notre savoir-faire
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
            Chaque réalisation reflète notre engagement pour la qualité, le respect des délais
            et la satisfaction de nos clients. Découvrez quelques exemples de missions menées
            avec rigueur et ambition.
          </p>
          {/* Stats inline */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { val: '100+', lab: 'Projets accompagnés' },
              { val: '4', lab: 'Secteurs d\'activité' },
              { val: '10+', lab: 'Années d\'expérience' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#d4a843' }}>{s.val}</div>
                <div className="text-xs text-white/50 mt-1">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-24 bg-white" aria-label="Grille des réalisations">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nos missions"
            title="Exemples de projets accompagnés"
            subtitle="Un aperçu représentatif de nos interventions sur nos quatre domaines d'activité."
          />

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Filtres par catégorie">
            {['Tous', ...SERVICES.map((s) => s.title)].map((cat, i) => (
              <span
                key={cat}
                role="listitem"
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border"
                style={
                  i === 0
                    ? { backgroundColor: '#c49a2e', borderColor: '#c49a2e', color: 'white' }
                    : { backgroundColor: 'white', borderColor: '#e2e8f0', color: '#64748b' }
                }
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((project) => {
              const serviceEmoji = SERVICES.find((s) => s.title === project.category)?.emoji
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  mission={project.mission}
                  description={project.description}
                  sector={project.sector}
                  emoji={serviceEmoji}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Domain links */}
      <section className="py-16 bg-slate-50" aria-label="Nos domaines d'intervention">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 mb-8">
            Nous intervenons dans quatre domaines complémentaires pour couvrir l&apos;ensemble de vos besoins.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-slate-100 hover:border-transparent hover:shadow-lg transition-all duration-300 text-center group"
              >
                <span className="text-3xl" aria-hidden="true">{service.emoji}</span>
                <span className="text-sm font-semibold" style={{ color: '#102a43' }}>{service.title}</span>
                <span
                  className="text-[11px] tracking-wide uppercase transition-opacity group-hover:opacity-70"
                  style={{ color: '#c49a2e' }}
                >
                  Voir le service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Votre projet mérite la même attention"
        subtitle="Chaque mission est unique. Partagez-nous votre besoin pour que nous vous proposions la meilleure approche."
        primaryLabel="Discuter de mon projet"
      />
    </>
  )
}
