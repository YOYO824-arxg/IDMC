'use client'
import { useState, FormEvent } from 'react'
import { SERVICES } from '@/lib/constants'

interface FormData {
  nom: string
  prenom: string
  email: string
  telephone: string
  sujet: string
  service: string
  message: string
}

const INITIAL: FormData = {
  nom: '', prenom: '', email: '', telephone: '', sujet: '', service: '', message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulation — connectez ici votre backend (API Route, Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
    setForm(INITIAL)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-slate-100 bg-white">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: 'rgba(196,154,46,0.1)' }}>
          <svg className="w-8 h-8" fill="none" stroke="#c49a2e" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#102a43' }}>
          Message envoyé !
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
          Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais, généralement sous 24 heures ouvrées.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold transition-colors"
          style={{ color: '#c49a2e' }}
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:border-navy-700 focus:ring-1 focus:ring-navy-700 transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Formulaire de contact">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="prenom" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
            Prénom <span aria-hidden="true" style={{ color: '#c49a2e' }}>*</span>
          </label>
          <input
            id="prenom" name="prenom" type="text" required
            value={form.prenom} onChange={handleChange}
            placeholder="Votre prénom"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
            Nom <span aria-hidden="true" style={{ color: '#c49a2e' }}>*</span>
          </label>
          <input
            id="nom" name="nom" type="text" required
            value={form.nom} onChange={handleChange}
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
            Email <span aria-hidden="true" style={{ color: '#c49a2e' }}>*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder="votre@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
            Téléphone
          </label>
          <input
            id="telephone" name="telephone" type="tel"
            value={form.telephone} onChange={handleChange}
            placeholder="+225 00 00 00 00"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
          Service concerné
        </label>
        <select
          id="service" name="service"
          value={form.service} onChange={handleChange}
          className={inputClass}
          style={{ cursor: 'pointer' }}
        >
          <option value="">Sélectionnez un service</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
          <option value="autre">Autre / Non précisé</option>
        </select>
      </div>

      <div>
        <label htmlFor="sujet" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
          Sujet <span aria-hidden="true" style={{ color: '#c49a2e' }}>*</span>
        </label>
        <input
          id="sujet" name="sujet" type="text" required
          value={form.sujet} onChange={handleChange}
          placeholder="Objet de votre demande"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
          Message <span aria-hidden="true" style={{ color: '#c49a2e' }}>*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={form.message} onChange={handleChange}
          placeholder="Décrivez votre projet ou votre besoin..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 font-semibold text-sm tracking-wide text-white rounded-lg transition-all duration-200 hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ backgroundColor: '#c49a2e' }}
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="3" strokeOpacity="0.2" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Envoi en cours…
          </>
        ) : (
          'Envoyer le message'
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        * Champs obligatoires. Vos données sont traitées de manière confidentielle.
      </p>
    </form>
  )
}
