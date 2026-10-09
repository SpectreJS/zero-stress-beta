export function Footer() {
  return (
    <footer className="docked full-width relative bg-inverse-surface dark:bg-surface-container-lowest text-inverse-on-surface border-t border-outline/20 dark:border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-8 pt-20 pb-12 flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-12 pb-16 border-b border-outline/20">
          <div className="col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img alt="Zero Stress Travel" className="h-12 w-auto object-contain filter drop-shadow" src="/zero-logo.png" />
              <span className="font-headline-lg text-headline-lg font-bold text-inverse-on-surface dark:text-on-surface">Zero Stress Travel</span>
            </div>
            <p className="font-body-md text-body-md text-surface-variant/80 dark:text-on-surface-variant max-w-sm">
              L'agence de voyage sur-mesure spécialiste des circuits nationaux à Madagascar et des voyages d'exception à l'international. Zéro stress, zéro imprévu.
            </p>
            <p className="font-label-lg text-label-lg font-bold text-secondary-container tracking-wide">Travel more. Stress less.</p>
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline-variant font-bold">Destinations</p>
            <ul className="flex flex-col gap-2.5 font-body-md text-body-md">
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#destinations"><span className="text-secondary-container font-semibold">National :</span> Madagascar Signature</a></li>
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#destinations"><span className="text-primary-fixed font-semibold">International :</span> Afrique Sauvage</a></li>
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#destinations"><span className="text-primary-fixed font-semibold">International :</span> Océan Indien</a></li>
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#destinations"><span className="text-primary-fixed font-semibold">International :</span> World Expeditions</a></li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline-variant font-bold">L'Agence</p>
            <ul className="flex flex-col gap-2.5 font-body-md text-body-md">
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#sur-mesure">Sur-Mesure VIP</a></li>
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#experiences">Expériences</a></li>
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#services">Conciergerie 24/7</a></li>
              <li><a className="text-surface-variant/80 dark:text-on-surface-variant hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors" href="#madagascar">Notre Équipe</a></li>
            </ul>
          </div>

          <div className="col-span-4 flex flex-col gap-5">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline-variant font-bold">Contact</p>
            <div className="flex flex-col gap-3 text-surface-variant/80 dark:text-on-surface-variant font-body-md text-body-md">
              <a href="tel:+261200000000" className="hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors">+261 20 000 00 00</a>
              <a href="mailto:bonjour@zerostresstravel.com" className="hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors">bonjour@zerostresstravel.com</a>
              <p>Conciergerie et devis personnalisés disponibles 7j/7.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-outline-variant/80 dark:text-on-surface-variant">
          <p className="font-body-sm text-body-sm">© 2025 Zero Stress Travel — Tous droits réservés.</p>
          <div className="flex items-center gap-5 text-body-sm">
            <a href="#" className="hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors">Politique</a>
            <a href="#" className="hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-inverse-on-surface dark:hover:text-on-surface transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
