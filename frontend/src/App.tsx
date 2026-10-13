import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AboutSection } from './components/destinations/AboutSection'
import { Cinema } from './components/destinations/Cinema'
import { Contact } from './components/common/Contact'
import { CustomTripSection } from './components/destinations/CustomTripSection'
import { DestinationSection } from './components/destinations/DestinationSection'
import { ExperienceSection } from './components/destinations/ExperienceSection'
import { HeroSection } from './components/destinations/HeroSection'
import { Layout } from './components/layout/Layout'
import { ServicesSection } from './components/destinations/Faq'
import { TestimonialsSection } from './components/destinations/TestimonialsSection'
import { HubChat } from './components/widget/HubChat'
import { heroSlides, projects } from './data'
import DetailProjet from './pages/detailProjet'
import ListProjet from './pages/ListProjet'

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  const appRef = useRef<HTMLDivElement | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

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
    <>
      <HeroSection activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <DestinationSection />
      <AboutSection />
      <Cinema />
      <ExperienceSection />
      <CustomTripSection />
      <ServicesSection />
      <TestimonialsSection />
      <Contact />
      <HubChat />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/detailProjet" element={<Navigate to={`/detailProjet/${projects[0]?.slug ?? 'decouverte-madagascar'}`} replace />} />
      <Route path="/detailProjet/:slug" element={<Layout><DetailProjet /></Layout>} />
      <Route path="/projets/:slug" element={<Layout><DetailProjet /></Layout>} />
      <Route path="/listProjet" element={<Layout><ListProjet /></Layout>} />
      <Route path="*" element={<Layout><HomePage /></Layout>} />
    </Routes>
  )
}

export default App
