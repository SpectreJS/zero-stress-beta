export function Footer() {
	return (
		<footer className="docked full-width relative bg-inverse-surface border-t border-outline/20">
			<div className="max-w-7xl mx-auto px-8 pt-20 pb-12 flex flex-col justify-between">
				{/* Top Row Footer */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-outline/20">
					{/* Brand identity */}
					<div className="md:col-span-5 space-y-4">
						<div className="font-headline-lg text-headline-lg font-bold text-inverse-on-surface flex items-center gap-3">
							<a className="flex items-center gap-3.5 group" href="#">
								<img
									alt="Zero Stress Travel Logo"
									className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
									src="/zero-logo.png"
								/>
							</a>

						</div>
						<p className="text-surface-variant/80 font-body-md text-body-md max-w-sm">
							La haute couture du voyage dépaysant. Éliminez la moindre trace de logistique et savourez l'immensité du monde en toute quiétude.
						</p>
						<div className="pt-2 text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-2">
							<span className="material-symbols-outlined text-[16px]">verified</span>
							<span>Membre officiel de l'Élite des Agences de Voyage Awwwards</span>
						</div>
					</div>

					{/* Links column 1 */}
					<div className="md:col-span-3 space-y-3">
						<span className="font-label-sm text-label-sm uppercase tracking-wider text-inverse-on-surface block mb-4">Expéditions Clés</span>
						<ul className="space-y-2.5 font-body-md text-body-md">
							<li><a className="text-inverse-primary font-medium hover:text-primary-fixed transition-colors" href="#">Madagascar Signature</a></li>
							<li><a className="text-surface-variant/80 hover:text-inverse-on-surface transition-colors" href="#">Afrique Sauvage</a></li>
							<li><a className="text-surface-variant/80 hover:text-inverse-on-surface transition-colors" href="#">Océan Indien</a></li>
							<li><a className="text-surface-variant/80 hover:text-inverse-on-surface transition-colors" href="#">Expéditions Privées</a></li>
						</ul>
					</div>

					{/* Links column 2 & Contacts */}
					<div className="md:col-span-4 space-y-3">
						<span className="font-label-sm text-label-sm uppercase tracking-wider text-inverse-on-surface block mb-4">Services Dédiés</span>
						<ul className="space-y-2.5 font-body-md text-body-md">
							<li><a className="text-surface-variant/80 hover:text-inverse-on-surface transition-colors" href="#">Conciergerie 24/7</a></li>
							<li><a className="text-surface-variant/80 hover:text-inverse-on-surface transition-colors" href="#">Politique de Confidentialité</a></li>
							<li><a className="text-surface-variant/80 hover:text-inverse-on-surface transition-colors" href="#">Mentions Légales</a></li>
						</ul>
						<div className="pt-4 text-surface-variant/80 font-body-sm text-body-sm">
							<span>Permanence VIP : </span>
							<a className="text-primary-fixed hover:underline font-semibold" href="tel:+33189456789">+33 1 89 45 67 89</a>
						</div>
					</div>
				</div>

				{/* Bottom Copyright Row */}
				<div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-surface-variant/80 font-body-sm text-body-sm gap-4">
					<p>© 2024 Zero Stress Travel. All rights reserved. Travel more. Stress less.</p>
					<div className="flex items-center space-x-6">
						<a className="hover:text-primary-fixed transition-colors" href="#">Instagram</a>
						<a className="hover:text-primary-fixed transition-colors" href="#">LinkedIn VIP</a>
						<a className="hover:text-primary-fixed transition-colors" href="#">Le Carnet Privé</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
