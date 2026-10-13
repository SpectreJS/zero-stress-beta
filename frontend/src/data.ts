export const fallbackImage =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80'

export type HeroSlide = {
  id: number
  image: string
  alt: string
  counter: string
  icon: string
  flight: string
  tag: string
  expedition: string
}

export type MegamenuCard = {
  title: string
  subtitle: string
  badge: string
  image: string
  alt: string
}

export const megaCards: MegamenuCard[] = [
  {
    title: 'Madagascar',
    subtitle: 'Baobabs & Lagons de Nosy Be',
    badge: 'Nationale',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Madagascar',
  },
  {
    title: 'Afrique',
    subtitle: 'Safaris Étoilés Serengeti',
    badge: 'International',
    image:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Afrique Sauvage',
  },
  {
    title: 'Océan Indien',
    subtitle: 'Atolls Secrets, Seychelles & Maurice',
    badge: 'International',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    alt: 'Océan Indien',
  },
  {
    title: 'World Expeditions',
    subtitle: 'Fjords, Islande & Grands Espaces',
    badge: 'International',
    image:
      'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1600&q=80',
    alt: 'World Expeditions',
  },
]

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    alt: 'Paysage tropical de Madagascar aux baobabs et lagon',
    counter: '01 / 04',
    icon: 'flight_takeoff',
    flight: 'Vol Privé Nosy Be',
    tag: '100% ZÉRO STRESS',
    expedition: 'Expédition Sanctuaire Nosy Tanikely',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1800&q=80',
    alt: 'Safari africain dans la savane avec animaux au lever du soleil',
    counter: '02 / 04',
    icon: 'travel_explore',
    flight: 'Cessna Serengeti VIP',
    tag: 'SAFARI EXCLUSIF',
    expedition: 'Grande Migration & Cratère Ngorongoro',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=80',
    alt: 'Lagons turquoise des Seychelles avec eau cristalline',
    counter: '03 / 04',
    icon: 'sailing',
    flight: 'Catamaran Privatif Mahé',
    tag: 'LAGONS & ATOLLS',
    expedition: 'Sanctuaire Préservé des Seychelles',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1800&q=80',
    alt: 'Paysage islandais de fjords avec lumière naturelle épique',
    counter: '04 / 04',
    icon: 'ac_unit',
    flight: 'Hélico Fjord Boréal',
    tag: 'EXPÉDITION ARCTIQUE',
    expedition: 'Aurores Boréales & Dôme de Verre',
  },
]

export const serviceRows = [
  {
    number: '01',
    title: 'Voyage sur mesure',
    description: 'Conception chirurgicale de votre itinéraire de A à Z selon vos désirs précis.',
  },
  {
    number: '02',
    title: 'Réservation d\'hotel & écolodges',
    description: 'Accès privilégié aux plus beaux établissements, surclassements VIP garantis.',
  },
  {
    number: '03',
    title: 'Billets d\'avion & transferts privés',
    description:
      'Vols nationaux à Madagascar (vols réguliers & aviation privée) et liaisons internationales tout confort, transferts VIP fluides sans attente.',
  },
  {
    number: '04',
    title: 'Assistance visa & formalités',
    description:
      'Gestion complète des visas et autorisations nationales malgaches ainsi que des formalités sanitaires et consulaires internationales.',
  },
  {
    number: '05',
    title: 'Transfert & transport VIP',
    description: 'Chauffeurs-guides francophones certifiés, flottes de 4x4 neuves et climatisées.',
  },
  {
    number: '06',
    title: 'Conciergerie 24/7 pendant tout le voyage',
    description: 'Un ange-gardien joignable sur WhatsApp en temps réel, réactif à chaque seconde.',
  },
]

export const galleryPhotos = [
  {
    title: 'Banc de Sable d\'Ankao',
    details: 'S 12° 49\' 18" · E 49° 42\' 33" — Archipel Miavana',
    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924b5713?auto=format&fit=crop&w=1600&q=80',
    size: 'col-span-8 row-span-2',
  },
  {
    title: 'Baie d\'Antongil',
    details: 'Safari Marin VIP',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    size: 'col-span-4 row-span-1',
  },
  {
    title: 'Allée des Géants',
    details: 'Crépuscule Minéral',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    size: 'col-span-4 row-span-1',
  },
  {
    title: 'Nosy Saba Private Island',
    details: 'Refuge Éco-Luxe',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
    size: 'col-span-4 row-span-1',
  },
  {
    title: 'Marché aux Épices d\'Hell-Ville',
    details: 'Immersion sensorielle & vanille Bourbon',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80',
    size: 'col-span-8 row-span-1',
  },
]

export const destinationCards = [
  {
    id: '01',
    title: 'Madagascar',
    subtitle: 'CIRCUITS NATIONAUX & VOLS INTERNES',
    duration: '12 Jours VIP',
    description: 'Allée des Baobabs, lagons de Nosy Be, Tsingy de Bemaraha & faune endémique.',
    price: 'Dès 3 850 €',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '02',
    title: 'Afrique Sauvage',
    subtitle: 'SAFARI PRIVATIF',
    duration: '10 Jours',
    description: 'Kenya & Tanzanie, grande migration du Serengeti, lodges privatifs 5 étoiles.',
    price: 'Dès 5 400 €',
    image:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '03',
    title: 'Océan Indien',
    subtitle: 'ARCHIPELS PRIVÉS',
    duration: '8 Jours',
    description: 'Zanzibar, Seychelles, Île Maurice : lagons cristallins et cocoteraies intimes.',
    price: 'Dès 4 200 €',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '04',
    title: 'World Expeditions',
    subtitle: 'EXPÉDITION ULTIME',
    duration: '14 Jours',
    description: 'Islande boréale, Polynésie secrète, fjords et Patagonie sauvage.',
    price: 'Dès 6 100 €',
    image:
      'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1400&q=80',
  },
]

export type ProjectStat = {
  label: string
  value: string
  icon: string
}

export type ProjectHighlight = {
  title: string
  text: string
  icon: string
}

export type ProjectItineraryStep = {
  period: string
  title: string
  text: string
  location: string
}

export type ProjectPlan = {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export type Project = {
  id: number
  slug: string
  title: string
  subtitle: string
  location: string
  description: string
  coverImage: string
  gallery: string[]
  price: string
  duration: string
  badge: string
  transport: string
  highlight?: string
  category: string
  layout: 'wide' | 'card'
  stats: ProjectStat[]
  highlights: ProjectHighlight[]
  itinerary: ProjectItineraryStep[]
  pricing: ProjectPlan[]
  related: Array<{
    title: string
    subtitle: string
    price: string
    image: string
    tag: string
    slug: string
  }>
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'decouverte-madagascar',
    title: 'MADAGASCAR : L’ÉVEIL DES BAOBABS & SANCTUAIRES MARINS',
    subtitle: 'Expédition Signature Nationale',
    location: 'Canal de Mozambique · Menabe & Nosy Be',
    description:
      'Une immersion privative exclusive à la rencontre des allées de baobabs millénaires, des lémuriens sacrés et des îlots coralliens translucides de Nosy Be en catamaran dédié.',
    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924b5713?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    ],
    price: '3 850 €',
    duration: '12 Jours / 11 Nuits',
    badge: 'Expédition Signature',
    transport: 'Vol Privé Inclus',
    highlight: 'Coup de Cœur',
    category: 'sanctuaires plage luxe',
    layout: 'wide',
    stats: [
      { label: 'Durée', value: '12 Jours / 11 Nuits', icon: 'schedule' },
      { label: 'Transport', value: 'Vol Privé Inclus', icon: 'flight' },
      { label: 'Confort', value: '100% Zéro Stress', icon: 'verified' },
      { label: 'Avis', value: '4.98/5', icon: 'star' },
    ],
    highlights: [
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
    ],
    itinerary: [
      {
        period: 'Jours 01 à 03',
        title: 'Sanctuaire marin de Nosy Tanikely',
        text: 'Accueil VIP à l’aéroport, embarquement immédiat sur catamaran privatisé, snorkeling dans un lagon turquoise et villa en front de mer.',
        location: 'Nosy Be · Menabe',
      },
      {
        period: 'Jours 04 à 06',
        title: 'Morondava & l’Allée des Baobabs',
        text: 'Vol privé vers Morondava, exploration des baobabs millénaires et séance cocktail au coucher du soleil.',
        location: 'Morondava',
      },
      {
        period: 'Jours 07 à 09',
        title: 'Forêt primaire & faune endémique',
        text: 'Randonnée guidée, observation des lémuriens et nuits sous un ciel étoilé dans un lodge de charme.',
        location: 'Forêt primaire',
      },
      {
        period: 'Jours 10 à 12',
        title: 'Détente ultime au bord de l’eau',
        text: 'Villa privée sur pilotis, massage, piscine et fast-track aéroportuaire pour retrouver le confort absolu.',
        location: 'Nosy Be',
      },
    ],
    pricing: [
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
    ],
    related: [
      { title: 'Afrique Sauvage & Grande Migration', subtitle: '10 Jours · Tented camp privé & survol en montgolfière.', price: 'Dès 4 200 €', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80', tag: 'Tanzanie Sauvage', slug: 'safari-afrique' },
      { title: 'Sanctuaires Granitiques des Seychelles', subtitle: '8 Jours · Île privée Felicité & cabotage secret.', price: 'Dès 5 150 €', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80', tag: 'Océan Indien', slug: 'atolls-ocean-indien' },
      { title: 'Islande : Aurores & Lagons Géothermiques', subtitle: '7 Jours · Superjeep dédiée & chalets de verre d’exception.', price: 'Dès 3 600 €', image: 'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1200&q=80', tag: 'Terres Boréales', slug: 'islande-aurores' },
    ],
  },
  {
    id: 2,
    slug: 'safari-afrique',
    title: 'AFRIQUE SAUVAGE : LA GRANDE MIGRATION',
    subtitle: 'Safari Privatif',
    location: 'Tanzanie & Maasai Mara',
    description: 'Survol des plaines immenses en Cessna Grand Caravan privatif et hébergement en tentes safaris 5 étoiles au cœur du bush.',
    coverImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    ],
    price: '5 400 €',
    duration: '10 Jours / 9 Nuits',
    badge: 'Populaire',
    transport: 'Cessna inclus',
    highlight: 'Grande Migration',
    category: 'aventure sanctuaires',
    layout: 'card',
    stats: [
      { label: 'Durée', value: '10 Jours / 9 Nuits', icon: 'schedule' },
      { label: 'Transport', value: 'Cessna inclus', icon: 'flight' },
      { label: 'Confort', value: 'Lodges 5*', icon: 'hotel_class' },
      { label: 'Avis', value: '4.9/5', icon: 'star' },
    ],
    highlights: [
      { title: 'Ciel ouvert & savane', text: 'Survols privés au-dessus des herds et des plaines immenses.', icon: 'travel_explore' },
      { title: 'Tentes safari ultra-luxe', text: 'Établissements privés avec service premium et vue directe sur les troupeaux.', icon: 'hotel_class' },
      { title: 'Guide safariste expert', text: 'Observation des grands mammifères avec un naturaliste local.', icon: 'hiking' },
      { title: 'Conciergerie 24/7', text: 'Tous les détails sont anticipés pour une expérience sans effort.', icon: 'headset_mic' },
    ],
    itinerary: [
      { period: 'Jours 01 à 03', title: 'Arrivée & acclimatation safari', text: 'Accueil VIP, transfert privé, installation dans un lodge panoramique avec dîner sous les étoiles.', location: 'Serengeti' },
      { period: 'Jours 04 à 06', title: 'Grande Migration', text: 'Heures de rencontre des troupeaux, chasse photographique au lever du soleil et safaris en 4x4 privé.', location: 'Masai Mara' },
      { period: 'Jours 07 à 08', title: 'Cratère & relai', text: 'Exploration des cratères, halte dans un camp de luxe et soirée privée au bord de la rivière.', location: 'Ngorongoro' },
      { period: 'Jours 09 à 10', title: 'Retour & détente', text: 'Derniers instants à la lisière du bush suivis d’un départ VIP sans attente.', location: 'Arusha' },
    ],
    pricing: [
      { name: 'Safari Signature', price: '5 400 €', description: 'Le confort essentiel pour des paysages époustouflants.', features: ['Lodges 5*', 'Transfers VIP', 'Safaris privés', 'Guide local'], featured: false },
      { name: 'Immersion Safari Premium', price: '6 900 €', description: 'Le voyage le plus chic, intime et complet.', features: ['Lodges premium', 'Montgolfière', 'Chef privé', 'Expériences exclusives'], featured: true },
      { name: 'Safari Privatisation Totale', price: '9 200 €', description: 'Le plus haut niveau d’intimité et de luxe absolu.', features: ['Camp privé', 'Véhicule dédié', 'Conciergerie', 'Survol privé'], featured: false },
    ],
    related: [
      { title: 'Madagascar : L’Éveil des Baobabs', subtitle: '12 Jours · Lagons & sanctuaires sauvages.', price: 'Dès 3 850 €', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', tag: 'Madagascar', slug: 'decouverte-madagascar' },
      { title: 'Océan Indien : Atolls & Sanctuaires', subtitle: '8 Jours · Îles et lagons privés.', price: 'Dès 4 200 €', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80', tag: 'Océan Indien', slug: 'atolls-ocean-indien' },
      { title: 'Islande : Aurores & Fjords', subtitle: '7 Jours · Fjords et chalets de verre.', price: 'Dès 3 600 €', image: 'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1200&q=80', tag: 'Boréale', slug: 'islande-aurores' },
    ],
  },
  {
    id: 3,
    slug: 'atolls-ocean-indien',
    title: 'OCÉAN INDIEN : ATOLLS & SANCTUAIRES',
    subtitle: 'Archipels Privés',
    location: 'Praslin & La Digue',
    description: 'Navigation intime d’île en île sans croiser la foule, mouillages secrets et dîners gastronomiques sur le pont supérieur.',
    coverImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924b5713?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    ],
    price: '4 200 €',
    duration: '8 Jours / 7 Nuits',
    badge: 'Atolls Privés',
    transport: 'Yacht Catamaran',
    highlight: 'Plage privée',
    category: 'plage luxe',
    layout: 'card',
    stats: [
      { label: 'Durée', value: '8 Jours / 7 Nuits', icon: 'schedule' },
      { label: 'Transport', value: 'Yacht Catamaran', icon: 'directions_boat' },
      { label: 'Ambiance', value: 'Plages isolées', icon: 'beach_access' },
      { label: 'Avis', value: '4.95/5', icon: 'star' },
    ],
    highlights: [
      { title: 'Lagons transparents', text: 'Eaux cristallines, plages à l’abri des foules et atmosphère d’évasion pure.', icon: 'travel_explore' },
      { title: 'Catamaran exclusif', text: 'Navigation douce d’île en île avec service en continu à bord.', icon: 'sailing' },
      { title: 'Spas en pleine nature', text: 'Massage, hammam et séances de bien-être en plein air sur la plage.', icon: 'spa' },
      { title: 'Cuisine gastronomique', text: 'Menus créatifs inspirés de la mer et des saveurs locales.', icon: 'restaurant' },
    ],
    itinerary: [
      { period: 'Jours 01 à 02', title: 'Accueil & island-hopping', text: 'Transfert privé et installation dans une villa front de mer avant le premier départ en catamaran.', location: 'Mahé' },
      { period: 'Jours 03 à 05', title: 'Mouillages secrets', text: 'Escales isolées, baignades, snorkeling et nuits à bord dans un cadre quasi inédit.', location: 'Seychelles' },
      { period: 'Jours 06 à 07', title: 'Luxe discret & restauration', text: 'Resto privé, massages et proches de la nature au cœur des aiguilles de granit.', location: 'Praslin' },
      { period: 'Jours 08', title: 'Départ VIP', text: 'Retour sécurisé et assistance complète jusqu’au prochain vol international.', location: 'La Digue' },
    ],
    pricing: [
      { name: 'Atolls Signature', price: '4 200 €', description: 'Le best of des îles au calme absolu.', features: ['Catamaran', 'Villa 4*', 'Spa', 'Transfers'], featured: false },
      { name: 'Atolls Prestige', price: '5 600 €', description: 'Le niveau de sérénité le plus élevé.', features: ['Villa privée', 'Chef de bord', 'Dîner exclusif', 'Excursions premium'], featured: true },
      { name: 'Île Privée Totale', price: '7 800 €', description: 'L’atoll entier pour votre cercle intime.', features: ['Île privée', 'Conciergerie', 'Câble VIP', 'Navette privée'], featured: false },
    ],
    related: [
      { title: 'Madagascar : L’Éveil des Baobabs', subtitle: '12 Jours · Sanctuaires & lagons.', price: 'Dès 3 850 €', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', tag: 'Madagascar', slug: 'decouverte-madagascar' },
      { title: 'Afrique Sauvage & Grande Migration', subtitle: '10 Jours · Safaris & nuits au bord du bush.', price: 'Dès 4 200 €', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80', tag: 'Safari', slug: 'safari-afrique' },
      { title: 'Islande : Aurores & Fjords', subtitle: '7 Jours · Fjords et chalets de verre.', price: 'Dès 3 600 €', image: 'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1200&q=80', tag: 'Boréale', slug: 'islande-aurores' },
    ],
  },
  {
    id: 4,
    slug: 'islande-aurores',
    title: 'ISLANDE : SOUS LES AURORES BORÉALES',
    subtitle: 'Expédition Boréale',
    location: 'Hautes Terres & Fjords',
    description: 'Nuits en dôme géodésique transparent 5 étoiles, lagons chauds réservés en exclusivité et 4x4 Super-Jeep avec chauffeur-guide.',
    coverImage: 'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    ],
    price: '3 600 €',
    duration: '7 Jours / 6 Nuits',
    badge: 'Nouveau',
    transport: '4x4 Super-Jeep',
    highlight: 'Aurores',
    category: 'aventure sanctuaires',
    layout: 'card',
    stats: [
      { label: 'Durée', value: '7 Jours / 6 Nuits', icon: 'schedule' },
      { label: 'Transport', value: '4x4 Super-Jeep', icon: 'flight' },
      { label: 'Ambiance', value: 'Aurores & fjords', icon: 'ac_unit' },
      { label: 'Avis', value: '4.9/5', icon: 'star' },
    ],
    highlights: [
      { title: 'Fjords glacés', text: 'Paysages de légendes avec vues spectaculaires et silence absolu.', icon: 'landscape' },
      { title: 'Dômes transparents', text: 'Nuit sous les étoiles dans des logements premium d’exception.', icon: 'nightlight' },
      { title: 'Aurores boréales', text: 'Observation privée du ciel à la meilleure période de l’année.', icon: 'auto_awesome' },
      { title: 'Cuisine locale', text: 'Menus inspirés de la nature et des traditionnels pays de la mer.', icon: 'restaurant' },
    ],
    itinerary: [
      { period: 'Jours 01 à 02', title: 'Hautes terres & hébergement premium', text: 'Accueil au chalet, explorations et préparation pour les prochains paysages glaciaires.', location: 'Reykjavik' },
      { period: 'Jours 03 à 04', title: 'Fjords & route panoramique', text: 'Traversées privatives en 4x4 sur les routes les plus belles avec pauses photos sur les neiges.', location: 'Fjords' },
      { period: 'Jours 05 à 06', title: 'Aurores & dômes cinématographiques', text: 'Nuits dans des dômes transparent avec service privé et observation du ciel nocturne.', location: 'Hautes Terres' },
      { period: 'Jours 07', title: 'Départ & souvenir', text: 'Retour à l’aéroport avec assistance ultime.', location: 'Keflavík' },
    ],
    pricing: [
      { name: 'Aurores Signature', price: '3 600 €', description: 'Le voyage rêvé pour les amateurs de nature épique.', features: ['Dômes premium', 'Superjeep', 'Photos privées', 'Chef local'], featured: false },
      { name: 'Aurores Prestige', price: '4 800 €', description: 'L’expérience givrante la plus exclusive.', features: ['Chalets premium', 'Aurores privées', 'Guides experts', 'Cocooning'], featured: true },
      { name: 'Grand Nord Privé', price: '6 700 €', description: 'L’aventure la plus intime et totale.', features: ['Véhicule dédié', 'Lodges exclusifs', 'Planning complet', 'Conciergerie'], featured: false },
    ],
    related: [
      { title: 'Madagascar : L’Éveil des Baobabs', subtitle: '12 Jours · Lagons & sanctuaires sauvages.', price: 'Dès 3 850 €', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', tag: 'Madagascar', slug: 'decouverte-madagascar' },
      { title: 'Afrique Sauvage & Grande Migration', subtitle: '10 Jours · Safaris & nuits au bord du bush.', price: 'Dès 4 200 €', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80', tag: 'Safari', slug: 'safari-afrique' },
      { title: 'Océan Indien : Atolls & Sanctuaires', subtitle: '8 Jours · Îles et lagons privés.', price: 'Dès 4 200 €', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80', tag: 'Océan Indien', slug: 'atolls-ocean-indien' },
    ],
  },
]

export const experienceCards = [
  {
    type: 'ADVENTURE',
    meta: '01 / Odyssée',
    icon: 'hiking',
    description:
      'Treks exclusifs sur falaises millénaires, pistes sauvages en 4x4 tout confort et survols des merveilles en hélicoptère privé.',
    size: 'col-span-7',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    type: 'BEACH ESCAPE',
    meta: '02 / Plénitude',
    icon: 'beach_access',
    description: 'Lagons calmes, villas overwater, massages en plein air et journées en catamaran entre îles secrètes.',
    size: 'col-span-5',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    type: 'CULTURE',
    meta: '03 / Racines',
    icon: 'museum',
    description: 'Rencontres intimes avec les communautés locales, artisanat d\'art et patrimoines classés UNESCO.',
    size: 'col-span-4',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80',
  },
  {
    type: 'LUXURY',
    meta: '04 / Prestige',
    icon: 'diamond',
    description: 'Écolodges d\'exception, majordome personnel et tables gastronomiques sous la voûte étoilée.',
    size: 'col-span-4',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
  },
  {
    type: 'NATURE & CUSTOM',
    meta: '05 / Faune',
    icon: 'nature_people',
    description: 'Observation respectueuse des baleines et lémuriens, combinée à votre itinéraire sur-mesure.',
    size: 'col-span-4',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80',
  },
]

export const testimonials = [
  {
    quote:
      '« Un safari en Tanzanie au-delà de toutes nos espérances. Les lodges étaient sublimes. »',
    initials: 'ML',
    name: 'Marc L.',
    meta: 'Afrique Sauvage — Oct 2024',
    color: 'bg-primary-container/30 text-primary',
  },
  {
    quote:
      '« Zéro stress porte vraiment bien son nom. Transferts en hydravion et service 24/7 irréprochable. »',
    initials: 'SB',
    name: 'Sophie B.',
    meta: 'Seychelles Atolls — Nov 2024',
    color: 'bg-secondary-container/30 text-secondary',
  },
  {
    quote:
      '« Nous avons pu observer les aurores en Islande depuis un igloo de verre privatif. Féerique. »',
    initials: 'TM',
    name: 'Thomas M.',
    meta: 'World Expeditions — Jan 2024',
    color: 'bg-tertiary-fixed/30 text-tertiary',
  },
]
