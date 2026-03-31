import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Nos Services — IDMC',
  description: 'Découvrez les services IDMC : immobilier, électrification, événementiel et formation professionnelle. Des solutions expertes pour vos projets.',
  openGraph: {
    title: 'Nos Services — IDMC',
    description: 'Immobilier, électrification, événementiel, formation. Des solutions complètes pour vos projets.',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #102a43 0%, #0a1a2e 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px" style={{ backgroundColor: '#c49a2e' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#c49a2e' }}>
              Nos services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            Quatre domaines d&apos;expertise à votre service
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
            Des solutions concrètes, portées par des équipes spécialisées, pour des projets immobiliers, techniques, événementiels et de développement des compétences.
          </p>
          {/* Service anchors */}
          <div className="mt-10 flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-5 py-2 rounded-full border text-sm transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
              >
                {s.emoji} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <div className="bg-white">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${index % 2 !== 0 ? 'bg-slate-50' : 'bg-white'}`}
            aria-labelledby={`service-title-${service.id}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div
                    className="rounded-2xl h-72 lg:h-96 flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #102a43 0%, #243b53 100%)' }}
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                    <div className="text-center relative z-10">
                      <div className="text-6xl mb-4" role="img" aria-label={service.title}>{service.emoji}</div>
                      <div className="text-white/30 text-xs tracking-[0.3em] uppercase">{service.title}</div>
                    </div>
                    {/* Index number watermark */}
                    <div className="absolute bottom-4 right-6 text-white/5 font-bold select-none"
                      style={{ fontSize: '120px', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block w-8 h-px" style={{ backgroundColor: '#c49a2e' }} />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#c49a2e' }}>
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 id={`service-title-${service.id}`}
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-display)', color: '#0a1a2e' }}>
                    {service.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>

                  <ul className="space-y-3 mb-8" aria-label={`Points clés — ${service.title}`}>
                    {service.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: 'rgba(196,154,46,0.12)' }}>
                          <svg className="w-3 h-3" fill="none" stroke="#c49a2e" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide text-white rounded transition-all hover:opacity-90"
                      style={{ backgroundColor: '#c49a2e' }}
                    >
                      Demander un devis
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide rounded border-2 transition-all hover:bg-navy-950 hover:text-white"
                      style={{ borderColor: '#102a43', color: '#102a43' }}
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        title="Un projet en tête ?"
        subtitle="Contactez nos équipes pour discuter de vos besoins et obtenir une proposition adaptée à votre situation."
        primaryLabel="Demander un devis gratuit"
      />
    </>
  )
}
