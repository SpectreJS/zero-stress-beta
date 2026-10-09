import { serviceRows } from '../data'

export function ServicesSection() {
  return (
    <section className="py-28 bg-surface-container-low/50 border-t border-outline-variant/30" id="services">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
              <span>ZÉRO CHARGE MENTALE</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">NOTRE ENGAGEMENT TOUT INCLUS</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Chaque volet de votre voyage est sécurisé et géré par notre équipe d'experts dévoués.
          </p>
        </div>

        <div className="divide-y divide-outline-variant/30">
          {serviceRows.map((service) => (
            <div key={service.number} className="group py-8 flex items-center justify-between hover:bg-surface-container/50 px-6 rounded-2xl transition-all cursor-pointer">
              <div className="flex items-center gap-8">
                <span className="font-headline-md text-headline-md font-bold text-outline-variant group-hover:text-primary transition-colors">{service.number}</span>
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">{service.description}</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-fixed group-hover:border-primary-container transition-all">
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
