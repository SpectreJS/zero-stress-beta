import { useState } from 'react'

export function FilterSearch() {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('all')
  const [budget, setBudget] = useState('all')
  const [sort, setSort] = useState('popular')
  const [activeCategory, setActiveCategory] = useState('all')

  const resetFilters = () => {
    setQuery('')
    setCountry('all')
    setBudget('all')
    setSort('popular')
    setActiveCategory('all')
  }

  return (
    <section className="relative z-30 mx-auto -mt-10 mb-16 max-w-7xl px-6" id="destinations">
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest/90 p-6 shadow-[0_24px_50px_-12px_rgba(5,11,20,0.1)] backdrop-blur-2xl md:p-8">
        <div className="grid grid-cols-1 items-center gap-4 border-surface-container-high md:grid-cols-12">
          <div className="relative md:col-span-5">
            <label className="mb-1 block text-label-sm font-label-sm uppercase tracking-wider text-outline">
              Recherche destination ou pays
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-primary" data-icon="search">
                search
              </span>
              <input
                className="w-full rounded-full border-0 bg-surface-container-low py-3 pl-12 pr-4 text-body-lg font-body-lg text-on-surface placeholder-outline transition-all focus:ring-2 focus:ring-primary-container"
                id="search-input"
                placeholder="Ex: Nosy Be, Serengeti, Islande..."
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button className="absolute right-4 text-outline hover:text-on-surface" id="clear-search" type="button" onClick={() => setQuery('')}>
                  <span className="material-symbols-outlined text-sm" data-icon="close">
                    close
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="md:col-span-3">
            <label className="mb-1 flex items-center gap-1.5 text-label-sm font-label-sm uppercase tracking-wider text-outline">
              <span className="material-symbols-outlined text-xs text-primary" data-icon="public">
                public
              </span>
              Pays / Territoire
            </label>
            <div className="relative">
              <select
                className="w-full cursor-pointer appearance-none rounded-full border-0 bg-surface-container-low px-4 py-3 pr-10 text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-primary-container"
                id="country-select"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option value="all">Tous les pays</option>
                <option value="madagascar">🇲🇬 Madagascar (National)</option>
                <option value="international">🌍 International</option>
              </select>
              <span
                className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base text-outline"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 flex items-center gap-1 text-label-sm font-label-sm uppercase tracking-wider text-outline">
              <span className="material-symbols-outlined text-xs text-secondary" data-icon="payments">
                payments
              </span>
              Budget estimé
            </label>
            <div className="relative">
              <select
                className="w-full cursor-pointer appearance-none rounded-full border-0 bg-surface-container-low px-4 py-3 pr-10 text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-primary-container"
                id="budget-select"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              >
                <option value="all">Tous budgets</option>
                <option value="3500">Dès 3 500 €</option>
                <option value="5000">Dès 5 000 €</option>
                <option value="6000">Dès 6 000 € +</option>
              </select>
              <span
                className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base text-outline"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 flex items-center gap-1 text-label-sm font-label-sm uppercase tracking-wider text-outline">
              <span className="material-symbols-outlined text-xs text-primary" data-icon="swap_vert">
                swap_vert
              </span>
              Trier par
            </label>
            <div className="relative">
              <select
                className="w-full cursor-pointer appearance-none rounded-full border-0 bg-surface-container-low px-4 py-3 pr-10 text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-primary-container"
                id="sort-select"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                <option value="popular">Popularité</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="new">Nouveautés</option>
              </select>
              <span
                className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base text-outline"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
          </div>
        </div>

        {(query || activeCategory !== 'all' || budget !== 'all' || country !== 'all') && (
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={resetFilters} className="text-label-sm font-medium text-primary hover:text-primary/80">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
