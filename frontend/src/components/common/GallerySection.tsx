import { fallbackImage, galleryPhotos } from '../../data'

export function GallerySection() {
  return (
    <section className="py-28 px-8 max-w-[1440px] mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
            <span>INSTANTANÉS VÉCUS</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">ATMOSPHERES &amp; MEMORIES</h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
          Passez la souris sur chaque cliché pour révéler les coordonnées de nos havres de paix secrets.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 auto-rows-[280px]">
        {galleryPhotos.map((photo) => (
          <div key={photo.title} className={`${photo.size} relative rounded-3xl overflow-hidden group shadow-lg border border-outline-variant/30`}>
            <img
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              alt={photo.title}
              src={photo.image}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.src = fallbackImage
                event.currentTarget.onerror = null
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`absolute bottom-6 left-6 right-6 custom-glass-dark rounded-2xl p-5 border border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${photo.size.includes('row-span-1') ? 'rounded-xl p-3' : ''}`}>
              <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">{photo.title}</p>
              <p className="font-label-sm text-label-sm text-secondary-container mt-1">{photo.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
