export function AboutSection() {
  return (
    <section className="py-24 bg-surface-container-low/60 border-y border-outline-variant/30" id="madagascar">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-16 items-center">
        <div className="col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-white">
            <img className="w-full h-full object-cover" alt="Madagascar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3qvTeP-gp5zY43yblb5zrGpQiQVDPCgqg48g7eermB05pmgbTRG4CtkOMvg0qV4JkXP9BICepjzcsL_HyzVQPmCklifvjqk-ktYaQfR_a3A3If7Jb3Y00-cQH0sF6XImvxIiu8f7qBBhrNDsLtjJFIoUB_IRgbHa3IP5BaIp0vt4KnOlirpd75j05CwopMqwIL4SyPrpG2mIxf8L4epbw6n0UeBGniX8PRGvTlAzx" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-transparent to-transparent" />
            <div className="absolute top-8 left-8 custom-glass-card rounded-full px-5 py-2.5 shadow-lg flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-md text-label-md font-bold text-on-surface">Sanctuaire Préservé</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8 custom-glass-dark rounded-2xl p-6 border border-white/10">
              <p className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider">Biodiversité Exclusive</p>
              <p className="font-body-md text-body-md text-surface-container-lowest mt-1">Plus de 85% d'espèces végétales et animales uniques au globe.</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="col-span-6 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">stars</span>
            <span>SPÉCIALISTE NATIONAL MADAGASCAR &amp; RÉSEAU MONDIAL</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
            THE ISLAND <br />
            <span className="custom-gradient-text">OF WONDERS</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            Leader sur le voyage national à Madagascar avec un réseau direct d'écolodges, de chauffeurs certifiés et de vols intérieurs exclusifs. Cette rigueur locale est déployée avec la même perfection sur l'ensemble de nos programmes internationaux.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full pt-4">
            <div className="custom-glass-card rounded-2xl p-5 border border-outline-variant/30 hover:border-primary-container transition-all">
              <span className="font-headline-lg text-headline-lg font-extrabold text-primary">+100</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Destinations secrètes &amp; campements privés</p>
            </div>
            <div className="custom-glass-card rounded-2xl p-5 border border-outline-variant/30 hover:border-primary-container transition-all">
              <span className="font-headline-lg text-headline-lg font-extrabold text-secondary">+500</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Voyageurs émerveillés sans le moindre accroc</p>
            </div>
            <div className="custom-glass-card rounded-2xl p-5 border border-outline-variant/30 hover:border-primary-container transition-all">
              <span className="font-headline-lg text-headline-lg font-extrabold text-primary">+10</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Années d'expertise terrain et relations VIP</p>
            </div>
            <div className="custom-glass-card rounded-2xl p-5 border border-outline-variant/30 hover:border-primary-container transition-all bg-gradient-to-br from-surface-container-lowest to-secondary-container/10">
              <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface">100%</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Zéro Stress Garanti &amp; assistance 24/7</p>
            </div>
          </div>

          <div className="pt-4">
            <a className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3" href="#destinations">
              <span>Explorer Madagascar</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
