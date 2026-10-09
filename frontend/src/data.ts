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
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
    alt: 'Madagascar Lagoon & Baobabs',
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
    alt: 'Afrique Sauvage Serengeti',
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
    alt: 'Seychelles Catamaran Lagoon',
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
    alt: 'Iceland Aurora Borealis Dome',
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
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '02',
    title: 'Afrique Sauvage',
    subtitle: 'SAFARI PRIVATIF',
    duration: '10 Jours',
    description: 'Kenya & Tanzanie, grande migration du Serengeti, lodges privatifs 5 étoiles.',
    price: 'Dès 5 400 €',
    image:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '03',
    title: 'Océan Indien',
    subtitle: 'ARCHIPELS PRIVÉS',
    duration: '8 Jours',
    description: 'Zanzibar, Seychelles, Île Maurice : lagons cristallins et cocoteraies intimes.',
    price: 'Dès 4 200 €',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '04',
    title: 'World Expeditions',
    subtitle: 'EXPÉDITION ULTIME',
    duration: '14 Jours',
    description: 'Islande boréale, Polynésie secrète, fjords et Patagonie sauvage.',
    price: 'Dès 6 100 €',
    image:
      'https://images.unsplash.com/photo-1517821362944-013858d41956?auto=format&fit=crop&w=1200&q=80',
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
