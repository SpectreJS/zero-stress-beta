const highlights = [
   {
      title: 'Éco-lodges 5* exclusifs',
      text: 'Nidifications d’exception au cœur de réserves privées, villas sur pilotis et bivouacs raffinés.',
      icon: 'hotel_class',
   },
   {
      title: 'Guide & naturaliste privé',
      text: 'Observation privilégiée des lémuriens, caméléons et paysages sauvages avec un expert local.',
      icon: 'hiking',
   },
   {
      title: 'Avion privé & catamaran',
      text: 'Gain de temps royal avec vols intérieurs et navigation douce entre escales emblématiques.',
      icon: 'sailing',
   },
   {
      title: 'Zéro stress & concierge 24/7',
      text: 'Formalités, bagagerie, protocoles et assistance en temps réel, sans friction ni attente.',
      icon: 'headset_mic',
   },
]

const itinerary = [
   {
      period: 'Jours 01 à 03',
      title: 'Sanctuaire marin de Nosy Tanikely',
      text: 'Accueil VIP à l’aéroport, embarquement immédiat sur catamaran privatisé, snorkeling dans un lagon turquoise et villa en front de mer.',
   },
   {
      period: 'Jours 04 à 06',
      title: 'Morondava & l’Allée des Baobabs',
      text: 'Vol privé vers Morondava, exploration des baobabs millénaires et séance cocktail au coucher du soleil.',
   },
   {
      period: 'Jours 07 à 09',
      title: 'Forêt primaire & faune endémique',
      text: 'Randonnée guidée, observation des lémuriens et nuits sous un ciel étoilé dans un lodge de charme.',
   },
   {
      period: 'Jours 10 à 12',
      title: 'Détente ultime au bord de l’eau',
      text: 'Villa privée sur pilotis, massage, piscine et fast-track aéroportuaire pour retrouver le confort absolu.',
   },
]

const pricing = [
   {
      name: 'Expédition Signature',
      price: '3 850 €',
      description: 'Le classique premium avec tous les fondamentaux zéro stress.',
      features: ['Vols VIP', 'Transferts 4x4', 'Hôtels 4* / 5*', 'Conciergerie 24/7'],
      featured: false,
   },
   {
      name: 'Haute Couture Immersion',
      price: '5 400 €',
      description: 'Le parfait équilibre entre vitesse de déplacement et intimité totale.',
      features: ['Vols privatifs', 'Villas de luxe', 'Majordome', 'Expériences exclusives'],
      featured: true,
   },
   {
      name: 'Privatisation Complète',
      price: '8 900 €',
      description: 'Pour les voyageurs qui veulent une autonomie aérienne et maritime totale.',
      features: ['Catamaran privé', 'Hélicoptère', 'Île privée', 'Directeur de voyage dédié'],
      featured: false,
   },
]

export default function DetailProjet() {
   return (
      <div className="min-h-screen bg-background text-on-surface">
         <section className="relative px-4 pb-16 md:px-12">
            <div className="relative flex min-h-[85vh] w-full flex-col justify-end overflow-hidden rounded-3xl border border-white/20 p-8 shadow-2xl md:p-16">
               <img
                  alt="Madagascar Sanctuaire et Baobabs"
                  className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.92] contrast-[1.05]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1U4Gd0hkMV-cy0VSIT-0tzmnnU5JgXpHRnboWMgu0VQZGoNRrRhWTOPgpi_bCVuNId-tzXfF3Y1jH3_oFighe83Jtea-_xsJNY2EYMrn7MEla6t7Dl7w2bJDAPZHi_-_QbyoeJdT6psHeGfhREFHOkDxAIRuYVn_bybn756N-BsBJGLMBQQJfvr-XNRqE5bRU4E-YdcdCP0g3uFRprngPc8J1TyoLRhpu_6kz8POoaEQklqFJCmmzvQe8zl"
               />

               <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent" />
               <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/70 via-transparent to-transparent" />

               <div className="relative z-10 max-w-5xl space-y-6">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-container/40 bg-white/5 px-4 py-1.5 text-primary-fixed">
                     <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-fixed opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-container" />
                     </span>
                     <span className="font-label-sm text-label-sm uppercase tracking-widest">Expédition Signature Nationale</span>
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-center gap-2 font-label-lg text-label-lg text-surface-variant">
                        <span className="material-symbols-outlined text-[20px] text-primary-fixed">pin_drop</span>
                        <span>Canal de Mozambique · Menabe &amp; Nosy Be</span>
                     </div>

                     <h1 className="font-extrabold leading-none tracking-tight text-surface-container-lowest font-display-hero text-headline-xl-mobile md:text-headline-xl lg:text-display-hero">
                        MADAGASCAR : L&apos;ÉVEIL DES BAOBABS &amp; SANCTUAIRES MARINS
                     </h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                     {[
                        '12 Jours / 11 Nuits',
                        'Vol Privé Inclus',
                        '100% Zéro Stress',
                        '4.98/5',
                     ].map((item, index) => (
                        <span
                           key={item}
                           className="glass-dark flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 font-label-md text-label-md text-surface-container-lowest"
                        >
                           <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                              {index === 0 ? 'schedule' : index === 1 ? 'flight' : index === 2 ? 'verified' : 'star'}
                           </span>
                           <span>{item}</span>
                           {index === 3 && <span className="text-[11px] text-surface-variant">(38 avis esthètes)</span>}
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
                           À partir de 3 850 € <span className="font-normal text-body-sm text-surface-variant">/ voyageur</span>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="mx-auto max-w-7xl px-6 pb-4 pt-32 md:px-16">
            <nav className="flex items-center space-x-2 font-label-md text-label-md text-on-surface-variant">
               <a className="flex items-center gap-1 transition-colors hover:text-primary" href="#">
                  <span className="material-symbols-outlined text-[15px]">home</span>
                  <span>Accueil</span>
               </a>
               <span className="text-outline-variant">/</span>
               <a className="transition-colors hover:text-primary" href="#destinations">Destinations</a>
               <span className="text-outline-variant">/</span>
               <span className="font-semibold text-primary">Madagascar : Sanctuaire Nosy Tanikely &amp; Allée des Baobabs</span>
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
                     « Voir la terre rouge s&apos;embraser sous les troncs colonnaires des Baobabs Grandidier, puis glisser en catamaran sur le lagon de Nosy Tanikely sans jamais avoir à vérifier une montre ou une formalité. C’est l’essence même de Zero Stress. »
                  </blockquote>

                  <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                     À Madagascar, la magie réside dans le gigantisme de sa nature intemporelle. Notre expédition signature réinvente l’île sanctuaire : chaque transfert s’effectue en appareils privatifs pour éviter les pistes éreintantes, nos éco-lodges partenaires sont privatisés pour votre repos, et vos journées sont sculptées au rythme de vos envies.
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
                  {highlights.map((item) => (
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

         <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
            <div className="mb-10 flex flex-col justify-between md:flex-row md:items-end">
               <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary">Perspectives Visuelles</span>
                  <h2 className="mt-1 font-headline-lg text-headline-lg font-bold text-on-surface">Écrins &amp; atmosphères immortalisées</h2>
               </div>
               <p className="mt-2 max-w-md font-body-sm text-body-sm text-on-surface-variant md:mt-0">
                  Des eaux saphir de Nosy Tanikely aux cathédrales végétales du Menabe, chaque image raconte un instant rare.
               </p>
            </div>

            <div className="grid h-auto grid-cols-1 gap-6 md:h-[620px] md:grid-cols-12">
               <div className="group relative h-80 overflow-hidden rounded-3xl shadow-md md:col-span-7 md:h-full">
                  <img
                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                     src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                     alt="Allée des Baobabs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                     <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">Canopée Millénaire</span>
                        <h4 className="font-headline-md text-headline-md font-bold text-surface-container-lowest">L&apos;Allée des Baobabs à l&apos;Heure Dorée</h4>
                     </div>
                     <span className="rounded-full bg-white/10 px-3 py-1 font-label-sm text-label-sm text-white">20°15&apos;04&quot;S</span>
                  </div>
               </div>

               <div className="grid h-full grid-cols-2 gap-6 md:col-span-5">
                  {[
                     ['Sanctuaire Marin', 'Lagons Cristallins', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80'],
                     ['Faune Protégée', 'Maki Catta en Liberté', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80'],
                     ['Hôtellerie Privée', 'Villas sur Pilotis', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'],
                     ['Nuit Étoilée', 'Bivouac d&apos;Exception', 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80'],
                  ].map(([label, title, src], index) => (
                     <div key={label + title} className="group relative h-64 overflow-hidden rounded-2xl shadow-sm md:h-auto">
                        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} alt={title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                           <span className="block font-label-sm text-label-sm uppercase text-primary-fixed">{label}</span>
                           <p className="font-headline-sm text-[16px] font-semibold text-white">{title}</p>
                        </div>
                        {index === 3 && <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white">Nuit</span>}
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="mx-auto max-w-7xl px-6 md:px-12 my-6">
            <div className="glass-specular grid grid-cols-2 gap-6 rounded-3xl p-6 shadow-sm divide-y divide-outline-variant/30 md:grid-cols-5 md:divide-x md:divide-y-0 md:p-8">
               {[
                  ['Durée', '12 Jours / 11 N.', 'timelapse'],
                  ['Saison Idéale', 'Mai à Novembre', 'sunny'],
                  ['Climat', '28°C tropical doux', 'thermostat'],
                  ['Effort', 'Tout confort', 'sentiment_satisfied'],
                  ['Prix Base', 'Dès 3 850 €', 'payments'],
               ].map(([label, value, icon]) => (
                  <div key={label} className="flex items-center gap-4 pt-3 md:pt-0 md:pl-6">
                     <div className="rounded-full bg-surface-container p-3 text-primary">
                        <span className="material-symbols-outlined text-[24px]">{icon}</span>
                     </div>
                     <div>
                        <span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{label}</span>
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">{value}</span>
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
               <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">12 jours d’émerveillement fluide</h2>
               <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                  Chaque transition a été pensée pour supprimer la moindre friction temporelle ou logistique.
               </p>
            </div>

            <div className="relative ml-4 space-y-12 border-l-2 border-primary/20 md:ml-32">
               {itinerary.map((step, index) => (
                  <div key={step.period} className="group relative pl-8 md:pl-12">
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
                              <span>Nosy Be · Menabe</span>
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
               {pricing.map((plan) => (
                  <div
                     key={plan.name}
                     className={[
                        'flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl',
                        plan.featured
                           ? 'scale-100 border-2 border-primary-container bg-inverse-surface text-surface-container-lowest lg:-translate-y-4'
                           : 'border-outline-variant/30 bg-surface-container-lowest',
                     ].join(' ')}
                  >
                     <div>
                        {plan.featured && (
                           <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary-container px-4 py-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-secondary-container shadow-md">
                              Recommandé
                           </div>
                        )}

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
                              <li key={feature} className="flex items-center gap-3">
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

         <section className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 md:px-12" id="reservation">
            <div className="relative overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-low p-8 shadow-xl md:p-14">
               <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />

               <div className="relative z-10 mb-10 max-w-2xl">
                  <span className="mb-1 block font-label-md text-label-md uppercase tracking-wider text-primary">Réservation sérénité</span>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Initiez votre voyage sans engagement</h2>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                     Remplissez ces quelques repères. Un travel designer dédié vous contacte sous 2 heures avec un projet sur-mesure chiffré.
                  </p>
               </div>

               <form className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                     <div>
                        <label className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Prénom &amp; Nom *</label>
                        <input
                           className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3.5 text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20"
                           placeholder="ex. Alexandre de Rohan"
                           required
                           type="text"
                        />
                     </div>

                     <div>
                        <label className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Adresse Email *</label>
                        <input
                           className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3.5 text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20"
                           placeholder="alexandre@domaine.com"
                           required
                           type="email"
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                     <div>
                        <label className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Téléphone / WhatsApp</label>
                        <input
                           className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3.5 text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20"
                           placeholder="+33 6 12 34 56 78"
                           type="tel"
                        />
                     </div>

                     <div>
                        <label className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Dates envisagées</label>
                        <input
                           className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3.5 text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20"
                           type="date"
                        />
                     </div>

                     <div>
                        <label className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Nombre de voyageurs</label>
                        <select className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3.5 text-body-md text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                           <option>2 Voyageurs</option>
                           <option>Voyageur Solo</option>
                           <option>3 à 5 personnes</option>
                           <option>6+ personnes</option>
                        </select>
                     </div>
                  </div>

                  <div>
                     <label className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Formule souhaitée</label>
                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {['Expédition Signature', 'Haute Couture Immersion', 'Privatisation Complète'].map((plan, idx) => (
                           <label
                              key={plan}
                              className={[
                                 'flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all',
                                 idx === 1 ? 'border-primary bg-primary/5' : 'border-outline-variant/30 bg-surface-container-lowest hover:border-primary',
                              ].join(' ')}
                           >
                              <input defaultChecked={idx === 0} name="plan" type="radio" className="text-primary focus:ring-primary" />
                              <span className={['text-body-sm font-medium', idx === 1 ? 'font-bold text-primary' : ''].join(' ')}>{plan}</span>
                           </label>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
                     <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px] text-secondary">lock</span>
                        <span>Données confidentielles · Garantie sans relance intempestive</span>
                     </div>

                     <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 font-label-lg text-label-lg font-bold text-on-primary shadow-xl transition-all duration-300 hover:bg-primary/90 sm:w-auto"
                     >
                        <span>Valider ma pré-réservation</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                     </button>
                  </div>
               </form>
            </div>
         </section>

         <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
            <div className="mb-10 flex items-end justify-between">
               <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary">Évasions alternatives</span>
                  <h2 className="mt-1 font-headline-lg text-headline-lg font-bold text-on-surface">Autres expéditions phares</h2>
               </div>
               <a className="hidden items-center gap-1.5 font-label-lg text-label-lg font-semibold text-primary hover:underline sm:inline-flex" href="#">
                  <span>Voir toutes les destinations</span>
                  <span className="material-symbols-outlined text-[18px]">east</span>
               </a>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
               {[
                  ['Afrique Sauvage & Grande Migration', '10 Jours · Tented camp privé & survol en montgolfière.', 'Dès 4 200 €', 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80', 'Tanzanie Sauvage'],
                  ['Sanctuaires Granitiques des Seychelles', '8 Jours · Île privée Felicité & cabotage secret.', 'Dès 5 150 €', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80', 'Océan Indien'],
                  ['Islande : Aurores & Lagons Géothermiques', '7 Jours · Superjeep dédiée & chalets de verre d’exception.', 'Dès 3 600 €', 'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1200&q=80', 'Terres Boréales'],
               ].map(([title, subtitle, price, src, tag]) => (
                  <a key={title} href="#" className="group flex flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-xl">
                     <div className="relative h-64 overflow-hidden">
                        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} alt={title} />
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
                  </a>
               ))}
            </div>
         </section>
      </div>
   )
}
