import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { AboutSection } from './components/AboutSection'
import { Cinema } from './components/Cinema'
import { Contact } from './components/Contact'
import { CTASection } from './components/CTASection'
import { CustomTripSection } from './components/CustomTripSection'
import { DestinationSection } from './components/DestinationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { heroSlides } from './data'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement | null>(null)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 40)
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
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
