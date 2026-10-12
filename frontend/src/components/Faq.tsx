import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { serviceRows } from '../data'

export function ServicesSection() {
  const [openItem, setOpenItem] = useState<number | null>(0)
  const faqRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    faqRefs.current.forEach((element, index) => {
      if (!element) return

      const isOpen = openItem === index
      gsap.to(element, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.45,
        ease: 'power2.inOut',
        overflow: 'hidden',
      })
    })
  }, [openItem])

  return (
    <section className="py-28 bg-surface-container-low/50 border-t border-outline-variant/30" id="services">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
              <span>FAQ • ZERO STRESS</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">QUESTIONS FRÉQUENTES</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Tout est pensé pour que votre voyage soit fluide, transparent et totalement maîtrisé.
          </p>
        </div>

        <div className="space-y-4">
          {serviceRows.map((service, index) => {
            const isOpen = openItem === index

            return (
              <div
                key={service.number}
                className="rounded-2xl border border-outline-variant/40 bg-surface/60 overflow-hidden transition-all hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-surface-container/40"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container">
                      {service.number}
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">
                      {service.title}
                    </span>
                  </div>

                  <span
                    className={`material-symbols-outlined text-2xl text-on-surface-variant transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    add
                  </span>
                </button>

                <div
                  ref={(element) => {
                    faqRefs.current[index] = element
                  }}
                  className="border-t border-outline-variant/30 px-6 text-base leading-7 text-on-surface-variant overflow-hidden"
                  style={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <div className="py-5">{service.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
