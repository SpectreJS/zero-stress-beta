import { type ReactNode, useEffect, useState } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 40)
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <Header headerScrolled={headerScrolled} />

      <main>{children}</main>

      {showScrollTop && (
        <button
          type="button"
          aria-label="Retour en haut"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_36px_rgba(0,0,0,0.3)]"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      )}

      <Footer />
    </div>
  )
}
