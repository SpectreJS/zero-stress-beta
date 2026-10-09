import { type ChangeEvent, type FormEvent, useState } from 'react'

type FormState = {
  first_name: string
  last_name: string
  email: string
  phone: string
  traveler_count: string
  travel_type: string
  message: string
}

const initialForm: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  traveler_count: '2',
  travel_type: 'madagascar-signature',
  message: '',
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        const errorMessage = result?.message || 'Une erreur est survenue lors de l’envoi de votre demande.'
        throw new Error(errorMessage)
      }

      setStatus({
        type: 'success',
        message: result?.message || 'Votre demande a bien été enregistrée.',
      })
      setFormData(initialForm)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Impossible d’envoyer votre demande pour le moment.'
      setStatus({ type: 'error', message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section data-reveal className="py-28 px-8 bg-[#050B14] text-surface-container-lowest relative overflow-hidden border-t border-white/10" id="reservation-section">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full custom-gradient-brand opacity-15 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary opacity-20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full custom-glass-dark border border-secondary-container/30 text-secondary-container font-label-sm text-label-sm uppercase tracking-widest mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span>RÉSERVATION HAUTE COUTURE</span>
          </div>

          <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-white mb-4">
            CONCEVEZ VOTRE <span className="custom-gradient-text">VOYAGE D'EXCEPTION.</span>
          </h2>

          <p className="font-body-xl text-body-xl text-surface-variant font-light leading-relaxed">
            Remplissez ce formulaire confidentiel. Notre concierge expert prend en charge l&apos;intégralité de vos souhaits pour vous délivrer un itinéraire cousu main sous 24h.
          </p>
        </div>

        <div className="max-w-4xl mx-auto custom-glass-dark rounded-3xl p-8 md:p-12 border border-white/15 shadow-2xl relative">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary-fixed">person</span>
                  Prénom
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  placeholder="Ex. Alexandre"
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-white/40 focus:border-primary-container focus:bg-white/10 focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary-fixed">badge</span>
                  Nom
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  placeholder="Ex. De Rohan"
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-white/40 focus:border-primary-container focus:bg-white/10 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary-fixed">mail</span>
                  Adresse Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="alexandre.derohan@prestige.com"
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-white/40 focus:border-primary-container focus:bg-white/10 focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary-fixed">call</span>
                  Téléphone &amp; Indicatif
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+33 6 12 34 56 78"
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-white/40 focus:border-primary-container focus:bg-white/10 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary-container">group</span>
                  Nombre de Personnes
                </label>
                <select
                  name="traveler_count"
                  value={formData.traveler_count}
                  onChange={handleChange}
                  className="w-full bg-[#050B14] border border-white/15 rounded-2xl px-5 py-3.5 text-white focus:border-primary-container focus:outline-none transition-all cursor-pointer"
                >
                  <option value="1" className="bg-[#050B14] text-white">1 voyageur solo (Prestige)</option>
                  <option value="2" className="bg-[#050B14] text-white">2 voyageurs en couple</option>
                  <option value="3-5" className="bg-[#050B14] text-white">3 à 5 personnes (Famille &amp; Amis)</option>
                  <option value="6+" className="bg-[#050B14] text-white">6 personnes et plus (Groupe Privé VIP)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary-container">travel_explore</span>
                  Type de Service / Voyage
                </label>
                <select
                  name="travel_type"
                  value={formData.travel_type}
                  onChange={handleChange}
                  className="w-full bg-[#050B14] border border-white/15 rounded-2xl px-5 py-3.5 text-white focus:border-primary-container focus:outline-none transition-all cursor-pointer"
                >
                  <option value="madagascar-signature" className="bg-[#050B14] text-white">Expédition Madagascar Signature (12j)</option>
                  <option value="afrique-safari" className="bg-[#050B14] text-white">Safari Privatif Afrique Sauvage (10j)</option>
                  <option value="ocean-indien" className="bg-[#050B14] text-white">Croisière Privée Océan Indien (8j)</option>
                  <option value="world-expeditions" className="bg-[#050B14] text-white">World Expeditions &amp; Aurores (14j)</option>
                  <option value="sur-mesure-pur" className="bg-[#050B14] text-white">Voyage 100% Sur-Mesure &amp; Libre</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/90 font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary-fixed">notes</span>
                Message &amp; Demandes Particulières
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Précisez vos dates idéales, exigences diététiques, hébergements recherchés (villas avec piscine, bivouacs de luxe), transferts aériens ou célébrations particulières..."
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-white/40 focus:border-primary-container focus:bg-white/10 focus:outline-none transition-all resize-none"
              />
            </div>

            {status && (
              <div
                aria-live="polite"
                className={[
                  'rounded-2xl border px-4 py-3 text-sm',
                  status.type === 'success'
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                    : 'border-red-500/40 bg-red-500/10 text-red-200',
                ].join(' ')}
              >
                {status.message}
              </div>
            )}

            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
              <div className="flex flex-col gap-1 text-surface-variant/80 font-label-sm text-label-sm text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-secondary-container text-base">verified_user</span>
                  <span>Conseiller privé dédié attribué sous 24h chrono</span>
                </div>
                <p className="text-[11px] text-white/50">Garantie zéro stress · Devis gratuit et confidentiel sans engagement</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-10 py-4 rounded-full shadow-[0_12px_36px_rgba(0,196,180,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shrink-0 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Envoi en cours...' : 'Initier mon expédition sans stress'}</span>
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
