import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { AboutSection } from './components/AboutSection'
import { Cinema } from './components/Cinema'
import { Contact } from './components/Contact'
// import { CTASection } from './components/CTASection'
import { CustomTripSection } from './components/CustomTripSection'
import { DestinationSection } from './components/DestinationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/Faq'
import { TestimonialsSection } from './components/TestimonialsSection'
import { HubChat } from './components/HubChat'
import { heroSlides } from './data'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement | null>(null)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      gsap.set('[data-reveal]', { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-badge]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, delay: 0.1 },
      )

      gsap.fromTo(
        '[data-hero-line]',
        { opacity: 0, yPercent: 110 },
        { opacity: 1, yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.12, delay: 0.2 },
      )

      gsap.fromTo(
        '[data-hero-cta]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, delay: 0.45 },
      )

      gsap.fromTo(
        '[data-hero-card]',
        { opacity: 0, x: 42, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.35 },
      )

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, appRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={appRef} className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <Header headerScrolled={headerScrolled} />

      <main>
        <HeroSection activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        <DestinationSection />
        <AboutSection />
        <Cinema />
        <ExperienceSection />
        <CustomTripSection />
        <ServicesSection />
        <TestimonialsSection />
        <Contact />
        {/* <CTASection /> */}
      </main>
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

      <HubChat />
      <Footer />
    </div>
  )
}

export default App
