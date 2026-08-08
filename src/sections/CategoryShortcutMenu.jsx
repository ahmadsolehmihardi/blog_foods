import { useMemo, useState } from 'react'

const categories = [
  {
    name: 'Quick + Easy',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Dinner',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Vegetarian',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Healthy',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Instant Pot',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Vegan',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Meal Prep',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Soups',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Salads',
    image:
      'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=240&q=80',
  },
]

function CategoryShortcutMenu() {
  const [query, setQuery] = useState('')

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(query.trim().toLowerCase()),
    )
  }, [query])

  return (
    <section id="recipe-categories" className="bg-[#f8f0e6] px-5 py-10 sm:px-8 lg:px-13">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_minmax(280px,420px)] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#7b3f64]">
              Browse Recipes
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#24301f] sm:text-4xl">
              Find your next favorite meal.
            </h2>
          </div>

          <label className="block">
            <span className="sr-only">Search categories</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search recipe categories"
              className="min-h-12 w-full border border-[#d8cbbb] bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#9b928b] focus:border-[#7b3f64] focus:ring-2 focus:ring-[#f6c453]"
            />
          </label>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
          {filteredCategories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group flex flex-col items-center text-center"
            >
              <span className="relative h-20 w-20 overflow-hidden rounded-full bg-[#eadccb] ring-2 ring-transparent transition duration-300 group-hover:-translate-y-1 group-hover:ring-[#f6c453] sm:h-22 sm:w-22">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </span>

              <span className="mt-3 text-[0.68rem] font-black uppercase leading-tight tracking-wide text-[#24301f] transition-colors group-hover:text-[#7b3f64]">
                {category.name}
              </span>
            </a>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <p className="py-8 text-center text-sm text-[#6a625b]">
            No categories found.
          </p>
        )}
      </div>
    </section>
  )
}

export default CategoryShortcutMenu
