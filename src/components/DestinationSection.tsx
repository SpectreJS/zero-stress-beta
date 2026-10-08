import { destinationCards } from '../data'

export function DestinationSection() {
  return (
    <section className="py-28 px-8 max-w-7xl mx-auto" id="destinations">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
            <span>VOYAGES NATIONAUX &amp; EXPÉDITIONS INTERNATIONALES</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">EXPLORE THE WORLD</h2>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          Notre ancrage national historique à Madagascar allié à une sélection rigoureuse d'expéditions haut de gamme à l'international.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinationCards.map((card) => (
          <div key={card.title} className="group relative rounded-3xl overflow-hidden h-[540px] shadow-lg border border-outline-variant/30 flex flex-col justify-between p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={card.title} src={card.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex justify-between items-start">
              <span className="font-headline-lg text-headline-lg font-bold text-white/40 group-hover:text-secondary-container transition-colors">{card.id}</span>
              <span className="px-3.5 py-1 rounded-full custom-glass-card text-on-surface font-label-sm text-label-sm font-bold bg-secondary-container/90">{card.title}</span>
            </div>
            <div className="relative z-10 custom-glass-dark rounded-2xl p-5 border border-white/10 group-hover:border-primary-container/50 transition-all">
              <div className="flex items-center justify-between text-outline-variant font-label-sm text-label-sm mb-1">
                <span>{card.subtitle}</span>
                <span className="text-secondary-container">{card.duration}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-surface-container-lowest font-bold">{card.title}</h3>
              <p className="font-body-sm text-body-sm text-surface-variant/80 mt-1 line-clamp-2">{card.description}</p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">{card.price}</span>
                <a className="flex items-center gap-1.5 text-primary-fixed font-label-md text-label-md group-hover:underline" href="#contact">
                  <span>Discover Destination</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
