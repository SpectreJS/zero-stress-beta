import { heroSlides } from '../data'

type HeroSectionProps = {
  activeSlide: number
  setActiveSlide: (index: number) => void
}

export function HeroSection({ activeSlide, setActiveSlide }: HeroSectionProps) {
  const currentSlide = heroSlides[activeSlide]

  return (
    <section className="relative min-h-[960px] h-screen w-full flex items-center justify-center overflow-hidden bg-on-surface">
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
              <img
                className="w-full h-full object-cover object-center scale-[1.03] brightness-[0.9] contrast-[1.08] saturate-110"
                alt={slide.alt}
                src={slide.image}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/80 via-[#050B14]/35 to-[#050B14]/20" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-8 w-full h-full flex flex-col justify-between">
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

          <div className="col-span-5 relative card-carousel">
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
                    <img
                      className="w-full h-full object-cover object-center scale-[1.03] brightness-[0.9] contrast-[1.08] saturate-110 transform duration-700 group-hover:scale-105"
                      alt={slide.alt}
                      src={slide.image}
                    />
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

      </div>
    </section>
  )
}
