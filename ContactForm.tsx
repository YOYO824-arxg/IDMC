import type { Metadata } from 'next'
import { ContactForm } from '@/components/ui/ContactForm'
import { COMPANY, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — IDMC',
  description: 'Contactez IDMC pour vos projets immobiliers, d\'électrification, événementiels ou de formation. Réponse sous 24h.',
  openGraph: {
    title: 'Contact — IDMC',
    description: 'Contactez nos équipes pour discuter de votre projet.',
  },
}

const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Téléphone',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresse',
    value: COMPANY.address,
    href: null,
  },
]

export default function ContactPage() {
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
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            Parlons de votre projet
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            Notre équipe est disponible pour répondre à vos questions et étudier votre besoin. Remplissez le formulaire ou contactez-nous directement.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0a1a2e' }}>
                  Nous joindre
                </h2>
                <div className="w-8 h-px mb-6" style={{ backgroundColor: '#c49a2e' }} />
                <p className="text-sm text-slate-500 leading-relaxed">
                  Nous traitons chaque demande avec soin et vous répondons dans un délai de 24 heures ouvrées. N&apos;hésitez pas à préciser votre projet pour que nous puissions vous proposer la meilleure approche.
                </p>
              </div>

              <div className="space-y-5">
                {INFO_ITEMS.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(196,154,46,0.1)', color: '#c49a2e' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium hover:opacity-70 transition-opacity"
                          style={{ color: '#102a43' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: '#102a43' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-xl border" style={{ borderColor: 'rgba(37,211,102,0.3)', backgroundColor: 'rgba(37,211,102,0.04)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-sm font-bold" style={{ color: '#102a43' }}>WhatsApp Business</span>
                </div>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Préférez-vous échanger directement ? Envoyez-nous un message WhatsApp, nous répondons rapidement.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Écrire sur WhatsApp
                </a>
              </div>

              {/* Horaires */}
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold mb-3" style={{ color: '#102a43' }}>Disponibilité</h3>
                <div className="space-y-2 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Lundi – Vendredi</span>
                    <span className="font-medium text-slate-700">08h00 – 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium text-slate-700">09h00 – 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-slate-400">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <div className="mb-7">
                  <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#0a1a2e' }}>
                    Formulaire de contact
                  </h2>
                  <div className="w-8 h-px" style={{ backgroundColor: '#c49a2e' }} />
                  <p className="text-sm text-slate-500 mt-3">
                    Remplissez ce formulaire et notre équipe reviendra vers vous rapidement.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 relative overflow-hidden" aria-label="Localisation IDMC">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #102a43 0%, #1e3a52 100%)' }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative text-center">
            <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="#c49a2e" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-white/70 text-sm">{COMPANY.address}</p>
            <p className="text-white/40 text-xs mt-1">Carte disponible sur demande</p>
          </div>
        </div>
      </section>
    </>
  )
}
