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
              <img className="w-full h-full object-cover" alt="Couple luxury travel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsquR3E1_WZsWzicKWm6fwqk3dCpnJ9GmwqZ6GZtCn8o3UwyjPasiNYwkPT1wGQzeWeezytrgib_MUydoo_gAKUeU546dLyxxDtHEwhT-ox-mQar2jaTFl-VeGPeCkHdwlJ74g5plepj0gEfHkrzI7xSgJF_2cf6sJo3Cx1jG8h0ZWeCi9ZXDZ_n2EFW7g-fMwtIlLNyCMVcszyMtdYGL8HHLG5R0PB_i4GSHweZx" />
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
