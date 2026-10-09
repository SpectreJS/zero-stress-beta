export function CTASection() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050B14] py-24" id="contact">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-60" alt="Lagoon at twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqwXUJG1xAU9YV0JGBJKgRjQ__0cvVzmwwhMRIg7dNv9xM3xY7PP2r6FEUj0h8Kg1kzGEps0cK9j0ddgrShywunP7AACRtnofpiBe0mqxjfgKtGQk_K55l1h05pApOuBq5FMiQEUZSziq0cSDtWmoUT37zx-yIppjtJvoSuh9l3RjJ4jsCO2Bck4U4Kzgi2gHydSgfiyBLxwzeVxBrp5X5yEIeun4WZALPlMVbJOM8" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full custom-glass-dark border border-primary-container/30 text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-6 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-secondary-container" />
          <span>LE DEPART EST IMMINENT</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold tracking-tight mb-4">READY TO ESCAPE?</h2>
        <p className="font-body-xl text-body-xl text-surface-variant font-light max-w-2xl mb-10 leading-relaxed">
          Le monde vous attend. Laissez le stress derrière vous. Confiez votre projet à nos créateurs d'évasion et partez l'esprit parfaitement libre.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
          <a className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-10 py-5 rounded-full shadow-[0_12px_40px_rgba(0,196,180,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3" href="#contact">
            <span>Planifier mon voyage maintenant</span>
            <span className="material-symbols-outlined text-xl">east</span>
          </a>
          <a className="custom-glass-dark hover:bg-surface-container-lowest/15 text-surface-container-lowest font-label-lg text-label-lg px-8 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3" href="https://wa.me/33100000000" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined text-secondary-container text-xl">chat</span>
            <span>WhatsApp Concierge 24/7</span>
          </a>
        </div>

        <div className="flex items-center gap-8 mt-12 text-surface-variant/80 font-label-sm text-label-sm uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
            Devis gratuit sous 24h
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
            Assurance multirisques incluse
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
            Paiement sécurisé en 3x
          </span>
        </div>
      </div>
    </section>
  )
}
