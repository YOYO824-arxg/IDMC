import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'À propos — IDMC',
  description: 'Découvrez l\'histoire, la vision, la mission et les valeurs d\'IDMC — International Development Management Construction.',
  openGraph: {
    title: 'À propos — IDMC',
    description: 'L\'histoire, la vision, la mission et les valeurs d\'IDMC.',
  },
}

const VALEURS = [
  { label: 'Rigueur', description: 'Chaque projet est conduit avec méthode, précision et un souci constant de la qualité à chaque étape.' },
  { label: 'Intégrité', description: 'Nous bâtissons nos relations sur la transparence, l\'honnêteté et le respect de nos engagements.' },
  { label: 'Excellence', description: 'Nous visons le meilleur résultat possible, en mobilisant les meilleures compétences et les meilleures pratiques.' },
  { label: 'Innovation', description: 'Nous intégrons les meilleures solutions techniques et organisationnelles pour créer de la valeur.' },
  { label: 'Partenariat', description: 'Nous construisons des relations durables fondées sur la confiance et la compréhension des besoins de nos clients.' },
  { label: 'Durabilité', description: 'Nos projets intègrent une dimension environnementale et sociale pour un développement responsable.' },
]

export default function AProposPage() {
  return (
    <>
      {/* Page Hero */}
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
              À propos
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            Une entreprise bâtie sur l&apos;expertise et la confiance
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
            IDMC a été fondée avec la conviction que des projets ambitieux méritent un accompagnement rigoureux, structuré et humain. Aujourd&apos;hui, nous sommes fiers de porter cette promesse sur quatre domaines stratégiques.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle
                eyebrow="Notre histoire"
                title="Qui est IDMC ?"
              />
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-navy-900" style={{ color: '#102a43' }}>International Development Management Construction</strong> est un groupe multidisciplinaire intervenant dans les domaines de l&apos;immobilier, de l&apos;électrification, de l&apos;événementiel et de la formation professionnelle.
                </p>
                <p>
                  Née de la volonté de proposer une réponse globale aux défis de développement auxquels font face les entreprises, les institutions et les particuliers, IDMC s&apos;est imposée comme un partenaire fiable, capable d&apos;intervenir de l&apos;étude à la livraison.
                </p>
                <p>
                  Notre organisation repose sur des équipes spécialisées, coordonnées par une direction de projet expérimentée. Chaque mission est traitée comme une mission unique, avec une attention particulière aux détails, aux délais et aux exigences qualité de nos clients.
                </p>
                <p>
                  Forts de plus de dix années de présence et d&apos;un portefeuille de plus de cent projets accompagnés, nous avons développé un savoir-faire reconnu et un réseau de partenaires de premier plan.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  eyebrow: 'Notre vision',
                  title: 'Être le partenaire de référence du développement en Afrique',
                  text: 'IDMC ambitionne de devenir le groupe incontournable pour tout porteur de projet souhaitant bénéficier d\'un accompagnement complet, rigoureux et adapté aux réalités du marché africain, avec les standards de qualité internationaux.',
                },
                {
                  eyebrow: 'Notre mission',
                  title: 'Des solutions concrètes pour des projets durables',
                  text: 'Notre mission est d\'accompagner nos clients dans la réalisation de leurs projets en mobilisant les meilleures compétences, les méthodologies les plus adaptées et un engagement total sur les résultats.',
                },
              ].map((block, i) => (
                <div key={i} className="p-7 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="block w-6 h-px" style={{ backgroundColor: '#c49a2e' }} />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#c49a2e' }}>
                      {block.eyebrow}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#102a43' }}>
                    {block.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Les principes qui guident chacune de nos actions"
            subtitle="Nos valeurs ne sont pas de simples mots. Elles se traduisent concrètement dans notre manière de travailler, de communiquer et de livrer chaque projet."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALEURS.map((v, i) => (
              <div key={i} className="bg-white p-7 rounded-xl border border-slate-100 group hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#c49a2e' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-8 h-px mb-4" style={{ backgroundColor: '#e2e8f0' }} />
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#102a43' }}>
                  {v.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-2xl h-80 lg:h-96 flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #102a43 0%, #243b53 100%)' }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative text-center px-10">
                <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Notre approche</p>
                <p className="text-white text-xl font-medium leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                  &ldquo;Management, construction et développement au service de vos ambitions.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Notre approche"
                title="Une méthode rigoureuse, un suivi transparent"
              />
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Écoute & Analyse', text: 'Nous prenons le temps de comprendre vos besoins, contraintes et objectifs avant toute proposition.' },
                  { step: '02', title: 'Conception & Proposition', text: 'Nous élaborons des solutions sur mesure, documentées et argumentées, adaptées à votre contexte.' },
                  { step: '03', title: 'Exécution & Suivi', text: 'Nous pilotons la mise en œuvre avec rigueur, reporting régulier et coordination de tous les intervenants.' },
                  { step: '04', title: 'Livraison & Évaluation', text: 'Nous nous assurons de la conformité du résultat et mesurons la satisfaction à chaque livraison.' },
                ].map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: '#c49a2e' }}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: '#102a43' }}>{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement qualité */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #102a43 0%, #0a1a2e 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '10+', lab: 'Années d\'expérience' },
              { val: '100+', lab: 'Projets réalisés' },
              { val: '4', lab: 'Domaines d\'expertise' },
              { val: '24h', lab: 'Délai de réponse' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#d4a843' }}>
                  {s.val}
                </div>
                <div className="text-xs text-white/50 leading-snug">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Travaillons ensemble"
        subtitle="Partagez-nous votre projet. Notre équipe vous propose une étude personnalisée et gratuite."
      />
    </>
  )
}
