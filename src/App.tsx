import { useEffect, useState } from 'react'

import { AboutSection } from './components/AboutSection'
import { CTASection } from './components/CTASection'
import { CustomTripSection } from './components/CustomTripSection'
import { DestinationSection } from './components/DestinationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { heroSlides } from './data'

function App() {
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

  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <Header headerScrolled={headerScrolled} />

      <main>
        <HeroSection activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        <DestinationSection />
        <AboutSection />
        <ExperienceSection />
        <CustomTripSection />
        <GallerySection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
