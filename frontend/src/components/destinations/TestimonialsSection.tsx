import { testimonials } from '../../data'

export function TestimonialsSection() {
  return (
    <section className="py-28 px-8 max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
          <span>PAROLES D'ÉMERVEILLEMENT</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface">LE RETOUR DE NOS HÔTES</h2>
      </div>

      <div className="custom-glass-card rounded-3xl p-12 border border-outline-variant/30 shadow-xl relative overflow-hidden mb-12">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <img
                className="h-full w-full object-cover object-center"
                alt="Couple luxury travel"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'
                  event.currentTarget.onerror = null
                }}
              />
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-1 text-tertiary-container">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="material-symbols-outlined text-2xl fill-1">star</span>
              ))}
              <span className="ml-3 font-label-sm text-label-sm text-on-surface font-bold">5.0 / 5.0 EXPÉDITION PARFAITE</span>
            </div>
            <blockquote className="font-headline-md text-headline-md text-on-surface font-medium leading-relaxed italic">
              « Partir à Madagascar avec Zero Stress Travel a été la plus belle décision de notre vie. Chaque détail était anticipé, aucun stress, que de la pure magie. Notre chauffeur-guide connaissait les lieux secrets et la conciergerie a répondu à nos moindres caprices en quelques minutes. »
            </blockquote>
            <div className="pt-2 border-t border-outline-variant/30 flex justify-between items-center">
              <div>
                <p className="font-headline-sm text-headline-sm text-bold text-on-surface">Clara &amp; Alexandre D.</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Expédition Madagascar Signature 2024</p>
              </div>
              <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>Voyage Vérifié</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.name} className="custom-glass-card rounded-2xl p-6 border border-outline-variant/30 hover:border-primary-container transition-all cursor-pointer">
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">{item.quote}</p>
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-outline-variant/20">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${item.color}`}>{item.initials}</div>
              <div>
                <p className="font-label-sm text-label-sm font-bold text-on-surface">{item.name}</p>
                <p className="text-[10px] text-outline">{item.meta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
