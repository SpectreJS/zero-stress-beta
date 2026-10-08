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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX-eV5IpbpM-PMtnM2EP2AYIrVMhFlFQpUjyux28snWyDJxARj6csb6ZJvWoc2nCLz1Ck3wuHO2ZQVuaTTwJDdWEez6PVDSQlww8K3kj2-pEChfCbSURNiLhhZwSRYn6WXr55Eg07Dshsj9IKYDOmqtMQyssgYi0mTNuE-YB5BnlD2Tsm149kptN5XZJOZQ-aHjrfPxvJtaw9BAROUmqJga15--fq_ZStHDIbdrs5X',
    alt: 'Madagascar',
  },
  {
    title: 'Afrique',
    subtitle: 'Safaris Étoilés Serengeti',
    badge: 'International',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKrzPcGshxVCnM2QNHXzGiX1shOMhrutmD2aS2jGu3fq8N0CeRXyC6A0lNqY8QD6Bvx7GRDRlfqXQMth4uo752vuH_mJSKuWIVwxsrYykgZrA1lOc6WRDUF9d_Ew0nxPp1I5-uvcIdkvF_YOA-R3LM4Zmt5C8s8wx1XiNAe1hQC8IGAMfUgPIi-JftqXC1Q4c-Avl0CfQdcoSSO_N0O3ZTgLi5ljlKv7BnNSCXYdsA',
    alt: 'Afrique Sauvage',
  },
  {
    title: 'Océan Indien',
    subtitle: 'Atolls Secrets, Seychelles & Maurice',
    badge: 'International',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGteoxtQw449memFEbKwS2K9cTpTIMhtFmGTcreeS7iz0BocRITECkfjs21V3sHUPbHKRc_MDSW4bDBCWjEHClK-7OM7iF-v6hj8EQ6a3eur3qn3Z0nwBW1u9lFVLw5HzJ204d9PS9rVyQah1FO2d9DlFJ5tVHjQAzzqgA5l9nHFd960PKREfa2bB4cKbi0fTOkdG_NwIhga1OqrkDS2wMDZ321_oNkJ2YSPUNV3Bw',
    alt: 'Océan Indien',
  },
  {
    title: 'World Expeditions',
    subtitle: 'Fjords, Islande & Grands Espaces',
    badge: 'International',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8t4MgNUpEQWITQ7KGaUVUDlJPLKkm3FTMdiVZAcpsrcdHhzwOH2Q8kzQTb1t2SObV5UCVlS4CSXEy5_0iVbs6QIlz3Ka96t5DNKWQaCXe1NxQu3AbzF7UcATvoPTj4qz31gYcYi7L0VroQz3UqCmZmJ5RjyDK4IP37EoHRzKwqiI8iToHntT7UVsnMlArzpHCtaPz4Imw0SirsMXl2wkloJBJUNkTm9bi5IFn0685',
    alt: 'World Expeditions',
  },
]

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX-eV5IpbpM-PMtnM2EP2AYIrVMhFlFQpUjyux28snWyDJxARj6csb6ZJvWoc2nCLz1Ck3wuHO2ZQVuaTTwJDdWEez6PVDSQlww8K3kj2-pEChfCbSURNiLhhZwSRYn6WXr55Eg07Dshsj9IKYDOmqtMQyssgYi0mTNuE-YB5BnlD2Tsm149kptN5XZJOZQ-aHjrfPxvJtaw9BAROUmqJga15--fq_ZStHDIbdrs5X',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKrzPcGshxVCnM2QNHXzGiX1shOMhrutmD2aS2jGu3fq8N0CeRXyC6A0lNqY8QD6Bvx7GRDRlfqXQMth4uo752vuH_mJSKuWIVwxsrYykgZrA1lOc6WRDUF9d_Ew0nxPp1I5-uvcIdkvF_YOA-R3LM4Zmt5C8s8wx1XiNAe1hQC8IGAMfUgPIi-JftqXC1Q4c-Avl0CfQdcoSSO_N0O3ZTgLi5ljlKv7BnNSCXYdsA',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGteoxtQw449memFEbKwS2K9cTpTIMhtFmGTcreeS7iz0BocRITECkfjs21V3sHUPbHKRc_MDSW4bDBCWjEHClK-7OM7iF-v6hj8EQ6a3eur3qn3Z0nwBW1u9lFVLw5HzJ204d9PS9rVyQah1FO2d9DlFJ5tVHjQAzzqgA5l9nHFd960PKREfa2bB4cKbi0fTOkdG_NwIhga1OqrkDS2wMDZ321_oNkJ2YSPUNV3Bw',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8t4MgNUpEQWITQ7KGaUVUDlJPLKkm3FTMdiVZAcpsrcdHhzwOH2Q8kzQTb1t2SObV5UCVlS4CSXEy5_0iVbs6QIlz3Ka96t5DNKWQaCXe1NxQu3AbzF7UcATvoPTj4qz31gYcYi7L0VroQz3UqCmZmJ5RjyDK4IP37EoHRzKwqiI8iToHntT7UVsnMlArzpHCtaPz4Imw0SirsMXl2wkloJBJUNkTm9bi5IFn0685',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDP8RpPvPS433kLTDoV3SuZ-fjw_LSZxnmXnANeSPEim1XMsEU4XAupfHXUSOTI6HENcmmWXMJz6zQQZ-YZXQwf0SyGsuvcLDtA_CT642tOEOc33zUbQ_6SZyNEEN2vPxZXaZ0EUyfQAfSRYuUvEQzOJbMLm_VUyIexkyoDLxg-rwqz3EWEOzOB2NEL8FL_a0axgTCf2gBsTWguEMLr5IDSTv4yvAn63EZj2TgG0kp',
    size: 'col-span-8 row-span-2',
  },
  {
    title: 'Baie d\'Antongil',
    details: 'Safari Marin VIP',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7wh6A2gxTrpnOMpXE7EP9UJ3ShtqwY3EZnUctmuew6YQhAwRE99nqxLNJUvwcqNKQoNF_J8DqMwJvyOm-EXGo69SkQ-41PAEaf4c_wSEng126Jh0xIAxzICixGovW_ZrK2h7Y-2RoSMpIfT5OCHzI6v994NHsBR7NzKt9dPN9UARLLoBf46FYQqCmqdacj_0SQ9VhSx1Pr1VcJ_D02BnkD2HOdOGCcVu1XrqQjw_k',
    size: 'col-span-4 row-span-1',
  },
  {
    title: 'Allée des Géants',
    details: 'Crépuscule Minéral',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRyURhnT-LS7z8_dIiH-AZ7mq1_P07DmD2v8jVcxPiNuca4KBfDW-ygkMuSrRkKD65WucngQqSsIkRySrQXFBsuSARj1jkEe3yYHmuHWOx2BfyKbB5A2MRwfAwMjj7__En5hRrnZythVuzQiP05QbuR2VLaRFBLoT2Vgw70n8gljfV1k6w0_AHCSr-cl6HQx7_Df-yvhd8_Y-wfkWzXTEgdVoZJ_f3U47mV0R9-6bc',
    size: 'col-span-4 row-span-1',
  },
  {
    title: 'Nosy Saba Private Island',
    details: 'Refuge Éco-Luxe',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiK_OA4H7I48qY2aL09doieEDcZXAgzx8L7GbqnbbIBTA4CA__AmkuxfkNpzXPo4IByKbEERSD1LtPOH-VLg06Y2VaHpQCmvBlVznN9ojYKqG4FVr3L1_OkdvXjC5uVM6y2uNtRzvQBLTLOfFX8RteLbWRDr7-YrroM9AQI3ZSsHVc65Jsj7jy2fVm-AqZ6q9W5Dg-weh6GjuouMMHsh_kxe9pl70gG21p6_nyWvxH',
    size: 'col-span-4 row-span-1',
  },
  {
    title: 'Marché aux Épices d\'Hell-Ville',
    details: 'Immersion sensorielle & vanille Bourbon',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwYMylc_SUNGiipgqnKOjXuwz5djaYtw0ttJqVYr4BPMVUmfSmtk3bEu8Q0yLFoouB7Ni28i27FEtVURD2q_SfO3j8msEUXrCvuAWaJifpWHmgYs24vr2rmnrD0EahU1k7AAQQbTpheBT_cuuTnhTSkvCRMNjuCs9MxLf3EDsrarbMPKLWDQo5fI_uIzMJrpZQdhbS_0r72PTHt-s9_HxrlTEHj6JC6-vUJUcOqKD8',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX-eV5IpbpM-PMtnM2EP2AYIrVMhFlFQpUjyux28snWyDJxARj6csb6ZJvWoc2nCLz1Ck3wuHO2ZQVuaTTwJDdWEez6PVDSQlww8K3kj2-pEChfCbSURNiLhhZwSRYn6WXr55Eg07Dshsj9IKYDOmqtMQyssgYi0mTNuE-YB5BnlD2Tsm149kptN5XZJOZQ-aHjrfPxvJtaw9BAROUmqJga15--fq_ZStHDIbdrs5X',
  },
  {
    id: '02',
    title: 'Afrique Sauvage',
    subtitle: 'SAFARI PRIVATIF',
    duration: '10 Jours',
    description: 'Kenya & Tanzanie, grande migration du Serengeti, lodges privatifs 5 étoiles.',
    price: 'Dès 5 400 €',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKrzPcGshxVCnM2QNHXzGiX1shOMhrutmD2aS2jGu3fq8N0CeRXyC6A0lNqY8QD6Bvx7GRDRlfqXQMth4uo752vuH_mJSKuWIVwxsrYykgZrA1lOc6WRDUF9d_Ew0nxPp1I5-uvcIdkvF_YOA-R3LM4Zmt5C8s8wx1XiNAe1hQC8IGAMfUgPIi-JftqXC1Q4c-Avl0CfQdcoSSO_N0O3ZTgLi5ljlKv7BnNSCXYdsA',
  },
  {
    id: '03',
    title: 'Océan Indien',
    subtitle: 'ARCHIPELS PRIVÉS',
    duration: '8 Jours',
    description: 'Zanzibar, Seychelles, Île Maurice : lagons cristallins et cocoteraies intimes.',
    price: 'Dès 4 200 €',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGteoxtQw449memFEbKwS2K9cTpTIMhtFmGTcreeS7iz0BocRITECkfjs21V3sHUPbHKRc_MDSW4bDBCWjEHClK-7OM7iF-v6hj8EQ6a3eur3qn3Z0nwBW1u9lFVLw5HzJ204d9PS9rVyQah1FO2d9DlFJ5tVHjQAzzqgA5l9nHFd960PKREfa2bB4cKbi0fTOkdG_NwIhga1OqrkDS2wMDZ321_oNkJ2YSPUNV3Bw',
  },
  {
    id: '04',
    title: 'World Expeditions',
    subtitle: 'EXPÉDITION ULTIME',
    duration: '14 Jours',
    description: 'Islande boréale, Polynésie secrète, fjords et Patagonie sauvage.',
    price: 'Dès 6 100 €',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8t4MgNUpEQWITQ7KGaUVUDlJPLKkm3FTMdiVZAcpsrcdHhzwOH2Q8kzQTb1t2SObV5UCVlS4CSXEy5_0iVbs6QIlz3Ka96t5DNKWQaCXe1NxQu3AbzF7UcATvoPTj4qz31gYcYi7L0VroQz3UqCmZmJ5RjyDK4IP37EoHRzKwqiI8iToHntT7UVsnMlArzpHCtaPz4Imw0SirsMXl2wkloJBJUNkTm9bi5IFn0685',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxYMO1LWrcM4EIqsyQ69lu38Lsh-4QAfL1kqd-mw8Evm6zgcbO3yDSOpAYQq43JYS72_2eHuoG8jvO5wLXFbo9ojpWDlz6Yir3gegJCzmflaWq31WLAh_DP6kjw8PtKrrN4vwBFUgfTsvfu0F5EwoAFn4BaUxTx6PssIDwhDPBSFGeY60JfWXrpLyvhIK84MY7d317mHE69QFhk2aW_v-s-Li-za4Wue9i_WeXAYK6',
  },
  {
    type: 'BEACH ESCAPE',
    meta: '02 / Plénitude',
    icon: 'beach_access',
    description: 'Lagons calmes, villas overwater, massages en plein air et journées en catamaran entre îles secrètes.',
    size: 'col-span-5',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcXjVNuBo_SlIgGQNBL4E0XUXXXRW8lk5TdzHCEZ3AWs84Sd7qmW49AJEV3Mwk7PP4JYoLZKenQPRyFT7SPHohrBYVJSpAxVlLL-XxOJz5tuS3hx7x5thZjN7EGCkbqjDNAXFZiVXbOKzEROr89RPkK_R3pxEjDAqPWDFyk7-KyBuATUv_RgqOqXUwOubTno2uheOABMJPittbovSE3ixl6f3NKCUiDIcAYZUFdoWP',
  },
  {
    type: 'CULTURE',
    meta: '03 / Racines',
    icon: 'museum',
    description: 'Rencontres intimes avec les communautés locales, artisanat d\'art et patrimoines classés UNESCO.',
    size: 'col-span-4',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6xdwc3XV1LZCC05TGRNVnemN0DCIsBkZnHjBrK0-fZNpofWOIjkzcGU2aBZ-f0QT31TY009y4jfCwX6zf-dGArJTA1AS7NaH2pGHyfg6ITpJa5rJCDI-kfOXKsXzXv-LXCh9MqfHzX8M881JvjSXabpCTExJg-qNr4Y4jnEJlUMcb77x5_4WneECA4b1htgB9vwjyoxFjxxuNoDY3HG0MqptqxzwDMx3Z5ZZQ-Xsq',
  },
  {
    type: 'LUXURY',
    meta: '04 / Prestige',
    icon: 'diamond',
    description: 'Écolodges d\'exception, majordome personnel et tables gastronomiques sous la voûte étoilée.',
    size: 'col-span-4',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDaeZGZWX1GIIKXehl-sz_i9NgrEl8oA7_vK-lB8l7Fh6apSW4Q62yNgitdLItovhUIZO-AD_5g-hMz8QoCD49-ZwerguHCmX8rBq5tJsfaNdRR80vU6ZGAKY3L_Rq48tQ9vRvCqRMBR23ZnNaWqUqYKX7LYCJAtTi00CdLR5tV3MfkRW1IyPWw9i2oqGqdqZVnYLHysvjSGkINJc58ItKhXX1hOZIzju4XrUoThIn',
  },
  {
    type: 'NATURE & CUSTOM',
    meta: '05 / Faune',
    icon: 'nature_people',
    description: 'Observation respectueuse des baleines et lémuriens, combinée à votre itinéraire sur-mesure.',
    size: 'col-span-4',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHN5R_pp8Tarbkshckd84DgGraDigt46Ur-ZRmJHqGOL9kbF9i6MZ1PL7nSCwE1PjiMXLYZXQPy4XTsqEv3QsXrlbE38Ix8nctg8PP_f1JFWg-8nrtjW0qiLoXuR-uO41kYaDuDP_mCXrqupdGFthjaj7ZT5-JdxuGiZA6a8TIDR1BBBQpd0QsY_SWRIpu-vmGjNoK4brXYlFY9-yks74RzGZKpkzw2tRFZrAU9jtp',
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
