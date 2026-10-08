export function CustomTripSection() {
  return (
    <section className="py-32 relative bg-[#050B14] text-surface-container-lowest overflow-hidden" id="sur-mesure">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full custom-gradient-brand opacity-20 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary opacity-20 blur-[130px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full custom-glass-dark border border-secondary-container/30 text-secondary-container font-label-sm text-label-sm uppercase tracking-widest mb-4">
            <span>HAUTE COUTURE DU VOYAGE</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight">YOUR TRIP. YOUR RULES.</h2>
          <p className="font-body-xl text-body-xl text-surface-variant font-light mt-4">
            Imaginez votre voyage. Nous nous occupons du reste. Un processus fluide et transparent pensé pour supprimer tout frottement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="custom-glass-dark rounded-3xl p-8 border border-white/10 hover:border-primary-container transition-all relative group">
              <div className={[
                'w-12 h-12 rounded-2xl flex items-center justify-center font-headline-sm text-headline-sm font-bold mb-6',
                step === 1 || step === 3 ? 'bg-primary-container/20 border border-primary-container text-primary-fixed' : step === 2 ? 'bg-secondary-container/20 border border-secondary-container text-secondary-container' : 'bg-tertiary-fixed/20 border border-tertiary-fixed text-tertiary-fixed',
              ].join(' ')}>
                {String(step).padStart(2, '0')}
              </div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">
                {step === 1 ? 'Destination' : step === 2 ? 'Durée' : step === 3 ? 'Expérience' : 'Budget'}
              </h4>
              <p className="font-body-md text-body-md text-surface-variant/80">
                {step === 1
                  ? 'Sélectionnez le décor de vos rêves : îles intimes, pistes sauvages ou parcs protégés.'
                  : step === 2
                    ? 'Une escapade ressourçante de 7 jours ou une grande odyssée de 3 semaines au bout du monde.'
                    : step === 3
                      ? 'Aventure active, farniente absolu, immersion animale ou gastronomie étoilée privée.'
                      : 'Des offres adaptées à vos exigences sans frais cachés ni mauvaises surprises.'}
              </p>
              <div className="mt-6 flex items-center gap-2 text-secondary-container font-label-sm text-label-sm uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                <span>{step === 1 ? 'Liberté totale' : step === 2 ? 'À votre cadence' : step === 3 ? '100% Personnalisé' : 'Clarté absolue'}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-glass-dark rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-fixed">
              <span className="material-symbols-outlined text-3xl">support_agent</span>
            </div>
            <div>
              <p className="font-headline-sm text-headline-sm font-bold">Conseiller dédié sous 24h</p>
              <p className="font-body-sm text-body-sm text-surface-variant">Votre carnet de voyage interactif et devis chiffré sans engagement.</p>
            </div>
          </div>
          <a className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-10 py-4 rounded-full shadow-[0_12px_32px_rgba(0,196,180,0.3)] hover:scale-105 active:scale-95 transition-all" href="#contact">
            Créer mon voyage sur mesure
          </a>
        </div>
      </div>
    </section>
  )
}
