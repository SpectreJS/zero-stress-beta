import { Link, useParams } from 'react-router-dom'
import { Contact } from '../components/common/Contact'
import { ExperienceSection } from '../components/destinations/ExperienceSection'
import { projects } from '../data'

export default function DetailProjet() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug) ?? null

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-on-surface">
        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <p className="mb-3 font-label-lg text-label-lg uppercase tracking-widest text-primary">Projet introuvable</p>
            <h1 className="mb-6 font-headline-xl text-headline-xl font-bold text-on-surface">Cette destination n’existe pas.</h1>
            <Link
              to="/listProjet"
              className="inline-flex items-center gap-3 rounded-full bg-primary-container px-7 py-3.5 font-label-lg text-label-lg font-bold text-on-primary-container shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>Retour à la liste des projets</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <section className="relative mb-16">
        <img
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.92] contrast-[1.05]"
          src={project.coverImage}
          loading="eager"
          decoding="async"
          onError={(event) => {
            event.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80'
            event.currentTarget.onerror = null
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col justify-end overflow-hidden p-8 md:p-16">
          <div className="relative z-10 max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-container/40 bg-white/5 px-4 py-1.5 text-primary-fixed">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-fixed opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-container" />
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">{project.badge}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 font-label-lg text-label-lg text-surface-variant">
                <span className="material-symbols-outlined text-[20px] text-primary-fixed">pin_drop</span>
                <span>{project.location}</span>
              </div>

              <h1 className="font-extrabold leading-none tracking-tight text-surface-container-lowest font-display-hero text-headline-xl-mobile md:text-headline-xl lg:text-display-hero">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.stats.map((item, index) => (
                <span
                  key={`${project.slug}-${item.label}`}
                  className="glass-dark flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 font-label-md text-label-md text-surface-container-lowest"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed">{item.icon}</span>
                  <span>{item.value}</span>
                  {index === project.stats.length - 1 && <span className="text-[11px] text-surface-variant">(avis esthètes)</span>}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                className="flex items-center gap-3 rounded-full bg-primary-container px-8 py-4 font-label-lg text-label-lg font-bold text-on-primary-container shadow-xl shadow-primary-container/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                href="#reservation"
              >
                <span>Réserver cette expédition</span>
                <span className="material-symbols-outlined text-[20px]">east</span>
              </a>

              <a
                className="glass-dark rounded-full border border-white/30 px-8 py-4 font-label-lg text-label-lg text-surface-container-lowest transition-all hover:bg-white/10"
                href="#itineraire"
              >
                <span className="flex items-center gap-2">
                  <span>Découvrir l&apos;itinéraire</span>
                  <span className="material-symbols-outlined text-[18px]">south</span>
                </span>
              </a>

              <div className="ml-auto hidden text-right sm:block">
                <span className="block font-label-sm text-label-sm text-surface-variant">Tarif confidentiel</span>
                <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                  À partir de {project.price} <span className="font-normal text-body-sm text-surface-variant">/ voyageur</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-16">
        <nav className="flex flex-wrap items-center space-x-2 font-label-md text-label-md text-on-surface-variant">
          <Link className="flex items-center gap-1 transition-colors hover:text-primary" to="/">
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Accueil</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link className="transition-colors hover:text-primary" to="/listProjet">Projets</Link>
          <span className="text-outline-variant">/</span>
          <span className="font-semibold text-primary">{project.title}</span>
        </nav>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2 uppercase tracking-wider text-primary font-label-md text-label-md">
              <span className="h-0.5 w-6 bg-primary" />
              <span>Manifeste Émotionnel</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg font-bold leading-tight text-on-surface">
              L&apos;exploration sauvage portée par une sérénité absolue.
            </h2>

            <blockquote className="rounded-2xl border-l-4 border-primary-container bg-surface-container-low p-6 italic text-on-surface-variant font-body-lg text-body-lg">
              « {project.description} »
            </blockquote>

            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              À {project.location.split('·')[0].trim()}, la magie réside dans le gigantisme de sa nature intemporelle. Notre expédition signature réinvente chaque étape : chaque transfert s’effectue en appareils privatifs pour éviter les pistes éreintantes, nos hébergements partenaires sont sélectionnés pour votre repos, et vos journées sont sculptées au rythme de vos envies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {project.highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <h3 className="mb-2 font-headline-sm text-headline-sm font-semibold text-on-surface">{item.title}</h3>
                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section className="mx-auto my-6 max-w-7xl px-6 md:px-12">
        <div className="glass-specular grid grid-cols-2 gap-6 rounded-3xl p-6 shadow-sm divide-y divide-outline-variant/30 md:grid-cols-5 md:divide-x md:divide-y-0 md:p-8">
          {project.stats.map((item) => (
            <div key={`${project.slug}-${item.label}`} className="flex items-center gap-4 pt-3 md:pt-0 md:pl-6">
              <div className="rounded-full bg-surface-container p-3 text-primary">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{item.label}</span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-12" id="itineraire">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">route</span>
            <span>Parcours d&apos;élite</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">{project.duration} d’émerveillement fluide</h2>
          <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
            Chaque transition a été pensée pour supprimer la moindre friction temporelle ou logistique.
          </p>
        </div>

        <div className="relative ml-4 space-y-12 border-l-2 border-primary/20 md:ml-32">
          {project.itinerary.map((step, index) => (
            <div key={`${project.slug}-${step.period}`} className="group relative pl-8 md:pl-12">
              <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-primary bg-surface-container-lowest text-primary shadow-md transition-transform group-hover:scale-110">
                <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? 'bg-primary-container' : 'bg-secondary-container'}`} />
              </div>

              <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                    {step.period}
                  </span>
                  <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{step.location}</span>
                  </span>
                </div>

                <h3 className="mb-3 font-headline-md text-headline-md font-bold text-on-surface">{step.title}</h3>
                <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">{step.text}</p>

                <div className="grid grid-cols-1 gap-4 border-t border-outline-variant/20 pt-4 text-sm text-on-surface-variant sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">scuba_diving</span>
                    <span>Expérience clé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">restaurant</span>
                    <span>Gastronomie locale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">bed</span>
                    <span>Hébergement premium</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary">Formules de prestige</span>
          <h2 className="mt-1 font-headline-lg text-headline-lg font-bold text-on-surface">Choisissez votre degré d’immersion</h2>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            Trois approches du luxe sans friction, pensées pour votre manière d’explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {project.pricing.map((plan) => (
            <div
              key={`${project.slug}-${plan.name}`}
              className={[
                'relative flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl',
                plan.featured
                  ? 'scale-100 border-2 border-primary-container bg-inverse-surface text-surface-container-lowest lg:-translate-y-4'
                  : 'border-outline-variant/30 bg-surface-container-lowest',
              ].join(' ')}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary-container px-4 py-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-secondary-container shadow-md">
                  Recommandé
                </div>
              )}

              <div>
                <span className={['mb-2 block font-label-sm text-label-sm uppercase tracking-widest', plan.featured ? 'text-primary-fixed' : 'text-on-surface-variant'].join(' ')}>
                  {plan.name === 'Expédition Signature' ? 'Classique édition' : plan.name === 'Haute Couture Immersion' ? 'Haute couture' : 'Exclusivité totale'}
                </span>
                <h3 className={['font-headline-md text-headline-md font-bold', plan.featured ? 'text-surface-container-lowest' : 'text-on-surface'].join(' ')}>
                  {plan.name}
                </h3>
                <p className={['mt-2 mb-6 font-body-sm text-body-sm', plan.featured ? 'text-surface-variant' : 'text-on-surface-variant'].join(' ')}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={['font-headline-xl text-headline-xl font-extrabold', plan.featured ? 'text-secondary-fixed' : 'text-on-surface'].join(' ')}>
                    {plan.price}
                  </span>
                  <span className={plan.featured ? 'text-surface-variant' : 'text-on-surface-variant'}> / voyageur</span>
                </div>

                <ul className={['space-y-3.5 border-t pt-6 font-body-sm text-body-sm', plan.featured ? 'border-outline/30 text-surface-container-highest' : 'border-outline-variant/20 text-on-surface-variant'].join(' ')}>
                  {plan.features.map((feature) => (
                    <li key={`${project.slug}-${plan.name}-${feature}`} className="flex items-center gap-3">
                      <span className={['material-symbols-outlined text-[18px]', plan.featured ? 'text-secondary-fixed' : 'text-primary'].join(' ')}>
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#reservation"
                className={[
                  'mt-8 w-full rounded-full px-6 py-3.5 text-center font-label-lg text-label-lg font-bold transition-all duration-300',
                  plan.featured
                    ? 'bg-primary-container text-on-primary-container shadow-lg shadow-primary-container/30 hover:bg-primary-fixed'
                    : 'border border-primary text-primary hover:bg-primary hover:text-on-primary',
                ].join(' ')}
              >
                {plan.featured ? 'Réserver Haute Couture' : plan.name === 'Expédition Signature' ? 'Sélectionner Signature' : 'Demander une privatisation'}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary">Évasions alternatives</span>
            <h2 className="mt-1 font-headline-lg text-headline-lg font-bold text-on-surface">Autres expéditions phares</h2>
          </div>
          <Link className="hidden items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:underline sm:inline-flex" to="/listProjet">
            <span>Voir toutes les destinations</span>
            <span className="material-symbols-outlined text-[18px]">east</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {project.related.map(({ title, subtitle, price, image, tag, slug }) => (
            <Link key={`${project.slug}-${title}`} to={`/projets/${slug}`} className="group flex flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} alt={title} />
                <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 font-label-sm text-label-sm text-white">{tag}</div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface transition-colors group-hover:text-primary">{title}</h3>
                  <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">{subtitle}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                  <span className="font-bold text-primary">{price}</span>
                  <span className="material-symbols-outlined text-outline transition-all group-hover:translate-x-1 group-hover:text-primary">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="mb-8">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary">Galerie</span>
          <h2 className="mt-1 font-headline-lg text-headline-lg font-bold text-on-surface">Vues immersives du voyage</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.gallery.map((image, index) => (
            <div key={`${project.slug}-gallery-${index}`} className="overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
              <img src={image} alt={`${project.title} vue ${index + 1}`} className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  )
}
