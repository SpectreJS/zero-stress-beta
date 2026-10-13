import { Link } from 'react-router-dom'

type HeaderProps = {
  headerScrolled: boolean
}

export function Header({ headerScrolled }: HeaderProps) {
  return (
    <header
      id="main-header"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-7 bg-transparent',
        headerScrolled ? 'py-4 bg-[#000000e0]/90 border-b border-white/10 shadow-xl' : 'top-scroll',
      ].join(' ')}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link className="zstress-logo flex items-center gap-3.5 group" to="/">
          <img
            alt="Zero Stress Travel Logo"
            className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
            src="/zero-logo.png"
          />
        </Link>

        <div className='nav-itm'>
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            <Link className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[11px] font-medium tracking-[0.22em] uppercase transition-colors group" to="/listProjet">
              <span>Destination</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
            <Link className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[11px] font-medium tracking-[0.22em] uppercase transition-colors group" to="/listProjet">
              <span>EXPÉRIENCES</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
            <Link className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[11px] font-medium tracking-[0.22em] uppercase transition-colors group" to="/listProjet">
              <span>VOYAGES SUR MESURE</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
            <Link className="relative py-1 text-white/90 hover:text-[#00C4B4] text-[11px] font-medium tracking-[0.22em] uppercase transition-colors group" to="/">
              <span>À PROPOS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C4B4] via-[#10B981] to-[#A4F624] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link className="custom-gradient-brand text-on-primary-fixed font-label-lg text-label-lg font-bold px-7 py-3 rounded-full shadow-[0_8px_24px_rgba(0,196,180,0.25)] hover:shadow-[0_8px_32px_rgba(164,246,36,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group" to="/listProjet">
              <span className="tracking-wide">PLANIFIER MON VOYAGE</span>
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
