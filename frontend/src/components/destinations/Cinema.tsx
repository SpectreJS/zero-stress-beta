export function Cinema() {
	return (
		<section className="py-28 px-8 bg-[#050B14] text-surface-container-lowest relative overflow-hidden border-b border-outline-variant/20" id="cinematic-film">
			<div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full custom-gradient-brand opacity-10 blur-[130px] pointer-events-none" />
			<div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary opacity-15 blur-[130px] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full custom-glass-dark border border-primary-container/30 text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-4 shadow-lg">
							<span className="material-symbols-outlined text-sm text-secondary-container">play_circle</span>
							<span>FILM CINÉMATOGRAPHIQUE 4K</span>
							<span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
						</div>
						<h2 className="font-headline-xl text-headline-xl text-white font-bold leading-tight">
							L&apos;IMMERSION TOTALE <br />
							<span className="custom-gradient-text">AVANT DE PARTIR.</span>
						</h2>
					</div>

					<p className="font-body-lg text-body-lg text-surface-variant/80 max-w-md font-light leading-relaxed">
						Chaque voyage est immortalisé et prévisualisé en ultra-haute définition. Ressentez la poésie sauvage de Madagascar et de nos grandes odyssées avant même d&apos;avoir bouclé vos bagages.
					</p>
				</div>

				<div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group bg-[#050B14]">
					<div className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer">
						<img
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqZbQ18H9FbrVS3kiNYhJZtnsP18L2ePou6e6SDdxyvWjBD2R_qjfLND-NSz08o5Z5AN5mSmCko8gqW2liJBny0NtShnPW-L-uwrAjo8v8xkxS73DQgR745bmA2i2JSNZXJHfMUcODarjTeK2cmG86Hg_RsDFf4_kj_8Ku64K8rGpu2ixwzSE7_B5pO1Qe9Hue8OgU71hUOunWGmBE86dMx-OBi_yycRs33xBMuiHZ"
							alt="Film Cinématique de l'Expédition Madagascar & Terres Préservées"
							className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-[#050B14]/60 pointer-events-none" />
						<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

						<div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
							<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full custom-glass-dark border border-white/15 backdrop-blur-xl text-white font-label-sm text-label-sm tracking-wider shadow-lg">
								<span className="material-symbols-outlined text-secondary-container text-base">graphic_eq</span>
								<span>4K ULTRA HD · DOLBY ATMOS</span>
							</div>

							<div className="flex items-center gap-2">
								<span className="px-3.5 py-1.5 rounded-full custom-glass-dark border border-primary-container/30 text-primary-fixed font-label-sm text-label-sm font-semibold uppercase tracking-wider">
									Docu-Série Officielle
								</span>
								<span className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full custom-glass-dark border border-white/15 text-white/80 font-label-sm text-label-sm font-medium tracking-wider">
									Nos Explorateurs
								</span>
							</div>
						</div>

						<div className="absolute inset-0 flex flex-col items-center justify-center z-20">
							<div className="relative group/btn cursor-pointer flex flex-col items-center gap-4">
								<div className="absolute -inset-4 rounded-full bg-primary-container/20 blur-xl group-hover/btn:bg-secondary-container/30 transition-all duration-500 animate-pulse" />
								<div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full custom-glass-dark border-2 border-primary-container flex items-center justify-center text-primary-fixed shadow-[0_0_35px_rgba(0,196,180,0.4)] group-hover/btn:border-secondary-container group-hover/btn:text-secondary-container group-hover/btn:scale-110 transition-all duration-300">
									<span className="material-symbols-outlined text-4xl md:text-5xl ml-1">play_arrow</span>
								</div>
								<span className="px-5 py-2 rounded-full custom-glass-dark border border-white/20 font-label-md text-label-md font-bold tracking-wide text-white group-hover/btn:text-primary-fixed group-hover/btn:border-primary-container transition-all shadow-md">
									Regarder le film d&apos;expédition (3:45 min)
								</span>
							</div>
						</div>

						<div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20 pointer-events-none">
							<div className="custom-glass-dark rounded-2xl px-5 py-3 border border-white/10 backdrop-blur-xl max-w-lg">
								<p className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider font-semibold">Chapitre 01 · Des Baobabs aux Atolls Secrets</p>
								<p className="font-body-sm text-body-sm text-surface-container-lowest mt-0.5">Récit de voyage immersif guidé par nos navigateurs &amp; naturalistes.</p>
							</div>
							<div className="custom-glass-dark rounded-2xl px-5 py-3 border border-white/10 backdrop-blur-xl flex items-center gap-4 self-start sm:self-auto">
								<span className="font-label-sm text-label-sm font-bold text-white/90 tracking-widest">00:00 / 03:45</span>
								<div className="flex items-center gap-2 text-white/70">
									<span className="material-symbols-outlined text-lg">volume_up</span>
									<span className="material-symbols-outlined text-lg">fullscreen</span>
								</div>
								<span className="px-2 py-0.5 rounded bg-primary/20 border border-primary-container text-primary-fixed text-[10px] font-bold tracking-widest uppercase">
									4K 60FPS
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* ANOVER VIDEO LIST  
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
					<div className="custom-glass-dark rounded-2xl p-5 border border-white/10 hover:border-primary-container transition-all duration-300 flex items-center justify-between cursor-pointer group">
						<div className="flex items-center gap-4">
							<div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-fixed group-hover:bg-primary-container group-hover:text-on-primary-fixed transition-colors">
								<span className="material-symbols-outlined text-xl">play_arrow</span>
							</div>
							<div>
								<p className="font-headline-sm text-headline-sm text-white group-hover:text-primary-fixed transition-colors text-base font-bold">01. L&apos;Éveil des Baobabs</p>
								<p className="font-body-sm text-body-sm text-surface-variant/70">Aube minérale &amp; brumes de Morondava</p>
							</div>
						</div>
						<span className="font-label-sm text-label-sm text-secondary-container px-2.5 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/30 font-semibold">01:15</span>
					</div>

					<div className="custom-glass-dark rounded-2xl p-5 border border-white/10 hover:border-primary-container transition-all duration-300 flex items-center justify-between cursor-pointer group">
						<div className="flex items-center gap-4">
							<div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-fixed group-hover:bg-primary-container group-hover:text-on-primary-fixed transition-colors">
								<span className="material-symbols-outlined text-xl">play_arrow</span>
							</div>
							<div>
								<p className="font-headline-sm text-headline-sm text-white group-hover:text-primary-fixed transition-colors text-base font-bold">02. Sanctuaires Marins</p>
								<p className="font-body-sm text-body-sm text-surface-variant/70">Eaux turquoises &amp; récifs de Nosy Tanikely</p>
							</div>
						</div>
						<span className="font-label-sm text-label-sm text-secondary-container px-2.5 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/30 font-semibold">01:40</span>
					</div>

					<div className="custom-glass-dark rounded-2xl p-5 border border-white/10 hover:border-primary-container transition-all duration-300 flex items-center justify-between cursor-pointer group">
						<div className="flex items-center gap-4">
							<div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-fixed group-hover:bg-primary-container group-hover:text-on-primary-fixed transition-colors">
								<span className="material-symbols-outlined text-xl">play_arrow</span>
							</div>
							<div>
								<p className="font-headline-sm text-headline-sm text-white group-hover:text-primary-fixed transition-colors text-base font-bold">03. Voûte Céleste</p>
								<p className="font-body-sm text-body-sm text-surface-variant/70">Bivouacs sous les étoiles du bush</p>
							</div>
						</div>
						<span className="font-label-sm text-label-sm text-secondary-container px-2.5 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/30 font-semibold">00:50</span>
					</div>
				</div>
				*/}
			</div>
		</section>
	)
}
