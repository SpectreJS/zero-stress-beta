import { Contact } from '../components/common/Contact'
import { FilterSearch } from '../components/widget/FilterSearch'

const destinations = [
	{
		id: 1,
		name: 'MADAGASCAR : L’ÉVEIL DES BAOBABS',
		region: 'Canal de Mozambique & Nosy Be',
		category: 'sanctuaires plage luxe',
		price: '3 850 €',
		duration: '12 Jours / 11 Nuits',
		transport: 'Catamaran Privatif',
		badge: 'Expédition Signature',
		highlight: 'Coup de Cœur',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuAeeJ06WSPjbkKPnKk315X8pc69BvZMrCioBt3-VJK30H-8q3s6m_ccXAinpdGpgM4px9CmcIzu29dY4FBMrQIlYcBRx0UXFZI1yXI-U-kZRG7unhxuBzV5y2bvE4Z088GR2xt2c2m00ROLgHgR-HWV93Qu_3t63KeAPvhVYKWTlnSs2PLAHpdjiFevn5qtd8rYt9_qmhGyQ4KLOdBP8JBWzpefzBegFprc7duAbsfufmQFbkuasCUveQ',
		description:
			'Une immersion privative exclusive à la rencontre des allées de baobabs millénaires, des lémuriens sacrés et des îlots coralliens translucides de Nosy Be en catamaran dédié.',
		layout: 'wide',
	},
	{
		id: 2,
		name: 'AFRIQUE SAUVAGE : LA GRANDE MIGRATION',
		region: 'Tanzanie & Maasai Mara',
		category: 'aventure sanctuaires',
		price: '5 400 €',
		duration: '10 Jours / 9 Nuits',
		transport: 'Cessna inclus',
		badge: 'Populaire',
		highlight: '',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCL-Cm24xSQgARFEFwcyeFqM5PYjxUEuP84VOXyYisqjQKgyQyy8tu9lf84Ro8ciHMrZmon-DMkXdxS287XHFGLcr4qPJz8VDRiIsQnASZIQ7rWp6HNBPPmHun53iQ60B8umLHUxrAYPWJQR6HHrjZTfbuMi8aNtvEuvdBj8Wa1Yy5iIveaijdPhCIllcRniqeq__9ujKbTDOz5RlzT755-KBCwKt_KYi8OyIzPkXRWvZMdHh3m32yN6g',
		description:
			'Survol des plaines immenses en Cessna Grand Caravan privatif et hébergement en tentes safaris 5 étoiles au cœur du bush.',
		layout: 'card',
	},
	{
		id: 3,
		name: 'OCÉAN INDIEN : ATOLLS & SANCTUAIRES',
		region: 'Praslin & La Digue',
		category: 'plage luxe',
		price: '4 200 €',
		duration: '8 Jours / 7 Nuits',
		transport: 'Yacht Catamaran',
		badge: 'Atolls Privés',
		highlight: '',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDK7exmyQsG4ZjmisRbJZgOiwqhl6kV7PMN6UZ52LFSIUegYp2tMoPc8tHMxVgBX4ySuFYy5YimDig1xpwGS8r3RlmJW7OxLvfBYFintRpvxzLN4s10Y__1R_RAF-AuuspchrELJW44PqTnW_RHC5tbyz3CKLks9NLCOErpAFnd1kksVqQDxV0V9oxGFvUNwOCCnlpea6cZ2B8mJbskjMxRJ-Y_qPvkfqG1kKSZUzy1hvcBF3FOwvY9og',
		description:
			'Navigation intime d’île en île sans croiser la foule, mouillages secrets et dîners gastronomiques sur le pont supérieur.',
		layout: 'card',
	},
	{
		id: 4,
		name: 'ISLANDE : SOUS LES AURORES BORÉALES',
		region: 'Hautes Terres & Fjords',
		category: 'aventure sanctuaires',
		price: '3 600 €',
		duration: '7 Jours / 6 Nuits',
		transport: '4x4 Super-Jeep',
		badge: 'Nouveau',
		highlight: '',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCmnKSRjrx-4NYZ_wZQZkCxyqg-KSQX9XTOH8bLZGLHV9z58C_7Qw7-CwLuWPBTldyhwpcrpzC3GerjU___PGa2hjQY5Hax8is3Wvazjoz9KCoyfEr33YrNNLyBc8v1rxilKbckHmtYTHIBRyVo2qqYfVXfaUG_5j1AycioxplhUhQGBEsvEgdBknHwDnR_-mGWhkV9pd5R0HlYMeocjzEBFR3sxiVC65BamCYLxP5EPrc_7Dk9ZwoFKA',
		description:
			'Nuits en dôme géodésique transparent 5 étoiles, lagons chauds réservés en exclusivité et 4x4 Super-Jeep avec chauffeur-guide.',
		layout: 'card',
	},
	{
		id: 5,
		name: 'INDONÉSIE SECRÈTE : RAJA AMPAT & DRAGONS DE KOMODO',
		region: 'Archipel Préservé',
		category: 'plage luxe culture sanctuaires',
		price: '6 800 €',
		duration: '14 Jours',
		transport: 'Phinisi Privé',
		badge: 'Privatisation Totale',
		highlight: 'Maître Plongeur Dédié',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuARIzIMyPf2pDgHkPisukUKjuHXyi--sbumkQLTtBfFi8F29W-A0qQNvBR-sokVmU8bJPiHCD-Pa0UtMutn64dHKAs85TlbWZ9yNtH-a2u0xC2kxCZtd1xOjjAvEjSs5CU1a47uOSfyH2YzYUOqgstATCEftDCnPPjlFhCwFblsKsD8vi9LQ7JgIOLLQd1s6wO9N6nnl9dhfx01msmnqtypPN83ajSM8PrBHiFSMlh0JYfXSJqSTPgDCQ',
		description:
			'Croisière d’exception à bord d’un Phinisi d’ébène et de teck de 45 mètres. Plongées privées avec raies mantas et randonnées privatisées sur les crêtes de Komodo.',
		layout: 'wide',
	},
	{
		id: 6,
		name: 'PATAGONIE : LES GLACIERS DU SUD',
		region: 'Chili & Argentine',
		category: 'aventure sanctuaires',
		price: '5 900 €',
		duration: '12 Jours / 11 Nuits',
		transport: 'Hélicoptère & 4x4',
		badge: 'Bout du Monde',
		highlight: '',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuAuoiKAukzJ7Ge4LeoLgD69hDQqiJPPMrFJzyrxoSKqZWUNqJBHd2SQjMVr85Gp2z4_3fyagsihVEIMSBeSSiPlolsly45a-YvHnTv9lZgYabnIrAH3TRrxC_bQqnFyzMnZ4FL3R98JfNteQ71XxDFIEQ6YXsNi7yeqWIlHcN5hbn8fVbGqdsiv4b29oc2v0wBgaFB2rVsMMr7Pnl3LZwtarsjAdN1F5cunhJ0VC02lGDugUnZsPo6RTg',
		description:
			'Lodges d’altitude Relais & Châteaux, marche privée sur les glaces millénaires et traversée des fjords australs en hélicoptère.',
		layout: 'card',
	},
]

const experiencePillars = [
	{
		id: 1,
		title: 'Le survol au-dessus des Tsingy',
		label: '01 / PERSPECTIVE AÉRIENNE',
		description:
			'Hélicoptère privatisé au ras des cathédrales minérales acérées de Madagascar, champagne servi au sommet d’une gorge inaccessible.',
		icon: 'flight',
		iconClass: 'bg-primary/30 text-primary-fixed',
	},
	{
		id: 2,
		title: 'Bivouac étoilé sous les baobabs',
		label: '02 / IMMERSION NOCTURNE',
		description:
			'Dîner gastronomique préparé par un chef privé au pied des géants centenaires, drap de lin immaculé et observation des constellations du sud.',
		icon: 'nightlight',
		iconClass: 'bg-secondary/30 text-secondary-fixed',
	},
	{
		id: 3,
		title: 'Requins-baleines à Nosy Be',
		label: '03 / SANCTUAIRE SAUVAGE',
		description:
			'Approche silencieuse avec biologiste marin privé. Nage au cœur de l’océan Indien dans le respect absolu de la faune aquatique.',
		icon: 'scuba_diving',
		iconClass: 'bg-primary-container/20 text-primary-fixed-dim',
	},
]

export default function ListProjet() {
	return (
		<>
			<section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
				<div className="absolute inset-0 z-0">
					<img
						className="h-full w-full scale-105 transform object-cover object-center motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
						data-alt="Breathtaking high-altitude panoramic view of a tropical coastal paradise with emerald lagoons, majestic ancient baobabs on red earth headlands, and a luxurious white private expedition yacht anchored in turquoise waters under a golden glowing sunset sky with cinematic mist."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdVh_ONuemQ8cK4n8AAydb8VbMYdrp0CMV1Of3QBgSHI5zbeXwdBLx73IH0lIORCK2fYb9plCKS53AFn0F3Bq8THX9z4rpHLWm1_ZQclqnbfNyAofe0EfQBkBTn5-4jTmAe9JLSazH5wZhKUQ0zhdLEakF2hGTDm0odSFyAYToiXeoTX7BvUMnsYDp0ThN48PrmETlr8lkltckzWbhqfJFxoSX6g7PixlPdJ-CI8FrQO0P0sbjT9u7uQ"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/75 via-[#050B14]/40 to-surface" />
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
				</div>

				<div className="relative  flex flex-col items-center text-center">
					<div className="mb-6 flex flex-wrap items-center justify-center gap-3">
						<span className="glass-dark-specular flex items-center gap-2 rounded-full px-4 py-1.5 text-label-sm font-medium uppercase text-inverse-on-surface shadow-sm">
							<span className="h-2 w-2 rounded-full bg-secondary-container animate-ping" />
							Collection 2024-2025
						</span>
						<span className="glass-dark-specular flex items-center gap-1.5 rounded-full px-4 py-1.5 text-label-sm font-medium uppercase text-primary-fixed">
							<span className="material-symbols-outlined text-xs" data-icon="verified">verified</span>
							Expéditions Sur-Mesure &amp; Privatives
						</span>
					</div>

					<h1 className="mb-6 max-w-5xl text-headline-xl font-extrabold tracking-tight text-inverse-on-surface drop-shadow-md md:text-display-hero">
						EXPLOREZ LE MONDE <br />
						<span className="bg-gradient-to-r from-primary-fixed via-primary-container to-secondary-container bg-clip-text text-transparent">
							AUTREMENT.
						</span>
					</h1>

					<p className="mb-12 max-w-3xl text-body-xl font-light leading-relaxed text-surface-container-high/90">
						Des sanctuaires préservés de Madagascar aux confins du monde. Des odyssées conçues sans la moindre friction logistique, pensées pour les esthètes du voyage.
					</p>
				</div>
			</section>
			< FilterSearch />
			<section className="mx-auto mb-24 max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-12" id="destinations-grid">
					{destinations.map((destination) => {
						const isWide = destination.layout === 'wide'

						return (
							<article
								key={destination.id}
								className={[
									'group relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg transition-all duration-500 hover:shadow-2xl',
									isWide ? 'flex flex-col md:flex-row md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4',
								].join(' ')}
								data-category={destination.category}
								data-name={destination.name.toLowerCase()}
								data-popular={destination.id >= 5 ? '9' : '8'}
								data-price={destination.price.replace(/\s/g, '').replace('€', '')}
							>
								{isWide ? (
									<>
										<div className="relative min-h-[300px] overflow-hidden md:w-1/2">
											<img
												className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
												src={destination.image}
												alt={destination.name}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent md:hidden" />
											<div className="absolute left-4 top-4">
												<span className="rounded-full bg-primary px-3 py-1 text-label-sm font-bold uppercase text-on-primary shadow-md">
													{destination.badge}
												</span>
											</div>
											<div className="absolute bottom-4 left-4 right-4 text-inverse-on-surface md:hidden">
												<span className="text-label-sm font-semibold uppercase tracking-wider text-primary-fixed">
													{destination.region}
												</span>
												<h3 className="mt-0.5 text-headline-sm font-bold">{destination.name}</h3>
											</div>
										</div>

										<div className="flex flex-col justify-between p-7 md:w-1/2">
											<div>
												<span className="mb-1 hidden text-label-sm font-bold uppercase tracking-wider text-primary md:block">
													{destination.region}
												</span>
												<h3 className="mb-3 hidden text-headline-md font-bold text-on-surface transition-colors group-hover:text-primary md:block">
													{destination.name}
												</h3>
												<p className="mb-4 text-body-sm text-on-surface-variant line-clamp-3">{destination.description}</p>

												<div className="mb-4 flex items-center gap-4 border-y border-surface-container-high py-3 text-xs text-on-surface-variant">
													<span className="flex items-center gap-1 font-semibold text-on-surface">
														<span className="material-symbols-outlined text-sm text-primary">schedule</span>
														{destination.duration}
													</span>
													<span className="flex items-center gap-1">
														<span className="material-symbols-outlined text-sm text-secondary">directions_boat</span>
														{destination.transport}
													</span>
													{destination.highlight && (
														<span className="flex items-center gap-1">
															<span className="material-symbols-outlined text-sm text-primary-container">scuba_diving</span>
															{destination.highlight}
														</span>
													)}
												</div>
											</div>

											<div className="flex items-center justify-between">
												<div>
													<span className="block text-[11px] uppercase text-outline font-medium">Dès</span>
													<span className="text-headline-md font-bold text-primary">{destination.price}</span>
												</div>
												<a
													href="#"
													className="flex items-center gap-2 rounded-full bg-on-background px-5 py-2.5 text-label-md font-medium text-surface-container-lowest transition-colors group-hover:bg-primary group-hover:text-on-primary"
												>
													<span>Découvrir</span>
													<span className="material-symbols-outlined text-xs">arrow_forward</span>
												</a>
											</div>
										</div>
									</>
								) : (
									<>
										<div className="relative h-72 overflow-hidden">
											<img
												className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
												src={destination.image}
												alt={destination.name}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent" />
											<div className="absolute left-4 top-4">
												<span className="rounded-full bg-secondary-container px-3 py-1 text-label-sm font-bold uppercase text-on-secondary-container shadow-md">
													{destination.badge}
												</span>
											</div>
											<div className="absolute bottom-4 left-4 right-4 text-inverse-on-surface">
												<span className="text-label-sm font-semibold uppercase tracking-wider text-primary-fixed">
													{destination.region}
												</span>
												<h3 className="mt-0.5 text-headline-sm font-bold">{destination.name}</h3>
											</div>
										</div>

										<div className="flex flex-1 flex-col justify-between p-6">
											<p className="mb-4 text-body-sm text-on-surface-variant line-clamp-2">{destination.description}</p>

											<div className="space-y-3 border-t border-surface-container-high pt-3">
												<div className="flex items-center justify-between text-xs text-on-surface-variant">
													<span className="flex items-center gap-1.5">
														<span className="material-symbols-outlined text-sm text-primary">schedule</span>
														{destination.duration}
													</span>
													<span className="flex items-center gap-1.5">
														<span className="material-symbols-outlined text-sm text-secondary">flight</span>
														{destination.transport}
													</span>
												</div>

												<div className="flex items-center justify-between pt-2">
													<div>
														<span className="block text-[11px] uppercase text-outline">Dès</span>
														<span className="text-headline-sm font-bold text-on-surface">{destination.price}</span>
													</div>
													<a
														href="#"
														className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-on-surface transition-colors group-hover:bg-primary group-hover:text-on-primary"
													>
														<span className="material-symbols-outlined text-sm">north_east</span>
													</a>
												</div>
											</div>
										</div>
									</>
								)}
							</article>
						)
					})}
				</div>
			</section>

			<section className="relative overflow-hidden bg-inverse-surface py-24 text-inverse-on-surface" id="experiences">
				<div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary-container/20 blur-[120px]" />
				<div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary-container/15 blur-[120px]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6">
					<div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
						<div className="lg:col-span-8">
							<span className="mb-3 block text-label-sm font-bold uppercase tracking-widest text-primary-fixed">
								L'Âme de Zero Stress Travel
							</span>
							<h2 className="text-headline-xl font-bold leading-tight tracking-tight">
								DES INSTANTS GRAVÉS, <br />
								<span className="bg-gradient-to-r from-primary-fixed to-secondary-container bg-clip-text text-transparent">
									AUCUNE TRACE DE CHARGE MENTALE.
								</span>
							</h2>
						</div>
						<div className="lg:col-span-4">
							<p className="text-body-md text-surface-variant">
								Chaque seconde de votre périple est orchestrée dans l'ombre par notre équipe dédiée. Vous ne faites que vivre l'émerveillement pur.
							</p>
						</div>
					</div>

					<div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
						{experiencePillars.map((pillar) => (
							<div
								key={pillar.id}
								className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-primary-container/40"
							>
								<div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${pillar.iconClass}`}>
									<span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
								</div>
								<span className="mb-1 block text-xs font-mono text-outline">{pillar.label}</span>
								<h3 className="mb-3 text-headline-md font-bold text-inverse-on-surface">{pillar.title}</h3>
								<p className="text-body-sm leading-relaxed text-surface-variant">{pillar.description}</p>
							</div>
						))}
					</div>

					<div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-gradient-to-r from-surface-container-highest/10 to-transparent p-10 md:flex-row md:p-14">
						<div className="max-w-2xl">
							<span className="material-symbols-outlined mb-2 block text-4xl text-primary-fixed">format_quote</span>
							<p className="text-headline-md font-medium italic leading-relaxed text-inverse-on-surface">
								« Le vrai luxe moderne ne réside plus dans le marbre des lobbies, mais dans l'effacement total de l'imprévu et la pureté des instants vécus. »
							</p>
							<span className="mt-4 block text-label-sm uppercase tracking-wider text-outline">
								— La Direction Générale, Zero Stress Travel
							</span>
						</div>
						<div className="shrink-0">
							<a
								href="#booking-cta"
								className="flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary-container px-8 py-4 text-label-lg font-medium text-on-primary shadow-lg transition-transform hover:scale-105"
							>
								<span>Créer mon itinéraire sur-mesure</span>
								<span className="material-symbols-outlined text-sm">east</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			<Contact />
		</>
	)
}