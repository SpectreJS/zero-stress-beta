import { experienceCards } from '../../data'

export function ExperienceSection() {
  return (
    <section data-reveal className="py-28 px-8 max-w-[1440px] mx-auto" id="experiences">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
          <span>UNIVERS DE VOYAGE</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface">EXPERIENCES TAILORED FOR YOU</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          Choisissez l'esprit de votre prochaine échappée. Chaque format est ciselé sur-mesure pour correspondre à votre rythme de vie.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {experienceCards.map((experience) => (
          <div data-reveal key={experience.type} className={`${experience.size} relative h-96 rounded-3xl overflow-hidden group shadow-md border border-outline-variant/30`}>
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={experience.type} src={experience.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/85 via-[#050B14]/30 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1 rounded-full custom-glass-dark text-secondary-container font-label-sm text-label-sm uppercase">{experience.meta}</span>
                <span className="material-symbols-outlined text-surface-container-lowest text-2xl">{experience.icon}</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-surface-container-lowest font-bold">{experience.type}</h3>
                <p className="font-body-md text-body-md text-surface-variant mt-2 max-w-lg">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
