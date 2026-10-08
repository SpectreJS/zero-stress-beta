import { heroSlides } from '../data'

type HeroSectionProps = {
  activeSlide: number
  setActiveSlide: (index: number) => void
}

export function HeroSection({ activeSlide, setActiveSlide }: HeroSectionProps) {
  const currentSlide = heroSlides[activeSlide]

  return (
    <section className="relative min-h-[960px] h-screen w-full flex items-center justify-center overflow-hidden bg-on-surface pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden" id="hero-bg-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={[
                'hero-bg-slide absolute inset-0 transition-opacity duration-1000 ease-in-out',
                activeSlide === index ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            >
              <img className="w-full h-full object-cover" alt={slide.alt} src={slide.image} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/80 via-[#050B14]/35 to-[#050B14]/20" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-between pt-28 pb-10">
        <div className="grid grid-cols-12 gap-12 items-center my-auto">
          <div className="col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full custom-glass-dark border border-primary-container/30 text-primary-fixed shadow-[0_0_24px_rgba(0,196,180,0.2)]">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                EXPERT NATIONAL (MADAGASCAR) &amp; INTERNATIONAL
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero text-surface-container-lowest leading-none tracking-tight">
              VOYAGEZ <br />
              <span className="custom-gradient-text">SANS STRESS.</span>
            </h1>

            <p className="font-body-xl text-body-xl text-surface-variant max-w-xl font-light leading-relaxed">
              Des voyages nationaux d'exception à Madagascar et de grandes odyssées internationales sur-mesure. Nous orchestrons chaque détail sur place comme à l'autre bout du monde pour vous libérer de toute charge mentale.
            </p>

            <div className="flex items-center gap-5 pt-4">
              <a className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-8 py-4 rounded-full shadow-[0_12px_32px_rgba(0,196,180,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3" href="#destinations">
                <span>Explorer les destinations</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
              <a className="custom-glass-dark hover:bg-surface-container-lowest/15 text-surface-container-lowest font-label-lg text-label-lg px-8 py-4 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-2 group" href="#sur-mesure">
                <span>Créer mon voyage</span>
                <span className="material-symbols-outlined text-lg text-secondary-container transition-transform duration-300 group-hover:translate-x-1">north_east</span>
              </a>
            </div>
          </div>

          <div className="col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group" id="hero-carousel">
              <div className="absolute inset-0 overflow-hidden">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={[
                      'hero-card-slide absolute inset-0 transition-opacity duration-700 ease-in-out',
                      activeSlide === index ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                  >
                    <img className="w-full h-full object-cover transform duration-700 group-hover:scale-105" alt={slide.alt} src={slide.image} />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-[#050B14]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                <div className="rounded-2xl border border-white/10 bg-[#050B14]/55 backdrop-blur-lg p-4">
                  <div className="flex items-center justify-between mb-3 text-primary-fixed/90">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">{currentSlide.counter}</span>
                    <span className="material-symbols-outlined text-xl">{currentSlide.icon}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">{currentSlide.tag}</p>
                      <h3 className="font-headline-md text-headline-md text-surface-container-lowest font-bold mt-1">{currentSlide.flight}</h3>
                    </div>
                    <div className="flex gap-2">
                      {heroSlides.map((slide, index) => (
                        <button
                          key={slide.id}
                          type="button"
                          className={[
                            'h-2.5 w-2.5 rounded-full transition-all',
                            activeSlide === index ? ' bg-secondary-container w-8' : 'bg-white/35',
                          ].join(' ')}
                          onClick={() => setActiveSlide(index)}
                          aria-label={`Aller à la diapositive ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 font-body-sm text-body-sm text-surface-variant/80">{currentSlide.expedition}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 mt-10">
          <div className="w-full max-w-5xl custom-glass-card rounded-full p-2.5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-between border border-white/80">
            <div className="flex-1 px-6 py-2 border-r border-on-surface/10 cursor-pointer group">
              <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                <span>Destination : National &amp; International</span>
              </div>
              <p className="font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors"><br /></p>
            </div>
            <div className="flex-1 px-6 py-2 border-r border-on-surface/10 cursor-pointer group">
              <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-primary">calendar_month</span>
                <span>Période</span>
              </div>
              <p className="font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Octobre — Décembre</p>
            </div>
            <div className="flex-1 px-6 py-2 border-r border-on-surface/10 cursor-pointer group">
              <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-primary">travel_explore</span>
                <span>Type de voyage</span>
              </div>
              <p className="font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Éco-Luxe &amp; Aventure</p>
            </div>
            <div className="flex-1 px-6 py-2 cursor-pointer group">
              <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-primary">payments</span>
                <span>Budget Estimé</span>
              </div>
              <p className="font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Sur-mesure illimité</p>
            </div>
            <button type="button" className="custom-gradient-brand text-on-primary-fixed h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold">search</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-surface-variant font-label-sm text-label-sm tracking-widest uppercase opacity-75">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-4 h-7 rounded-full border-2 border-surface-variant/40 flex items-start justify-center p-1">
              <div className="w-1 h-1.5 rounded-full bg-secondary-container animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
