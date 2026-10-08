type HeaderProps = {
  headerScrolled: boolean
}

export function Header({ headerScrolled }: HeaderProps) {
  return (
    <header
      id="main-header"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-7 bg-transparent',
        headerScrolled ? 'py-4 backdrop-blur-xl bg-[#050B14]/80 border-b border-white/10 shadow-xl' : '',
      ].join(' ')}
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a className="flex items-center gap-3.5 group" href="#">
          <img
            alt="Zero Stress Travel Logo"
            className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
            src="/zero-logo.webp"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
        
            <a className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[13px] font-medium tracking-[0.22em] uppercase transition-colors group" href="#destinations">
            <span>Destination</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[13px] font-medium tracking-[0.22em] uppercase transition-colors group" href="#experiences">
            <span>EXPÉRIENCES</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[13px] font-medium tracking-[0.22em] uppercase transition-colors group" href="#sur-mesure">
            <span>VOYAGES SUR MESURE</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[13px] font-medium tracking-[0.22em] uppercase transition-colors group" href="#madagascar">
            <span>À PROPOS</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-7 py-3 rounded-full shadow-[0_8px_24px_rgba(0,196,180,0.25)] hover:shadow-[0_8px_32px_rgba(164,246,36,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group" href="#contact">
            <span className="tracking-wide">PLANIFIER MON VOYAGE</span>
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </header>
  )
}
