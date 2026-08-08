const posts = [
  {
    title: 'Crispy Parmesan Chicken with Creamy Lemon Pasta',
    date: 'July 22, 2026',
    excerpt:
      'Crispy golden chicken and creamy lemon pasta for an easy weeknight dinner.',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=520&q=80',
  },
  {
    title: 'Smashed Olives with Burrata',
    date: 'July 13, 2026',
    excerpt:
      'Creamy burrata, smashed olives, herbs, and toasted bread for sharing.',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=520&q=80',
  },
  {
    title: '35 Summer Produce Recipes For Your Farmer’s Market Haul',
    date: 'July 10, 2026',
    excerpt:
      'Fresh corn, tomatoes, zucchini, berries, and more bright summer ideas.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=520&q=80',
  },
]

const collections = [
  ['Instant Pot Recipes', 38],
  ['Vegan Recipes', 199],
  ['Meal Prep Recipes', 39],
  ['Quick and Easy Recipes', 500],
  ['Pasta Recipes', 179],
  ['Soup Recipes', 76],
]

function LatestPosts() {
  return (
    <section className="bg-white px-6 py-14 sm:px-8 lg:px-13">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="mb-8 text-xs font-black uppercase tracking-widest text-[#7b3f64]">
            The Latest & Greatest
          </p>

          <div className="divide-y divide-[#e8e0d8]">
            {posts.map((post) => (
              <article key={post.title} className="grid gap-5 py-7 sm:grid-cols-[220px_1fr]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />

                <div>
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-widest text-[#a8a19a]">
                    {post.date}
                  </p>
                  <h2 className="max-w-xl font-serif text-2xl font-bold leading-tight text-[#252525] sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#6f6861]">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-xs font-black uppercase tracking-widest text-[#e0a642] hover:text-[#7b3f64]"
                  >
                    Continue Reading
                  </a>
                </div>
              </article>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex min-h-12 w-full max-w-md items-center justify-center bg-[#7b3f64] px-8 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#f6c453] hover:text-[#24301f]"
          >
            View More Recent Posts
          </a>
        </div>

        <aside className="space-y-8">
          <div className="bg-[#f4e8da] p-5">
            <img
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=640&q=80"
              alt="Freezer meals"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="mt-4 bg-[#7b3f64] px-5 py-6 text-center text-white">
              <p className="font-serif text-3xl italic leading-none">20 healthy</p>
              <p className="mt-1 text-lg font-black uppercase tracking-widest">
                Freezer Meals
              </p>
            </div>
          </div>

          <div className="bg-[#f7f4f1]">
            <h3 className="px-5 py-4 text-xs font-black uppercase tracking-widest text-[#7b3f64]">
              Recipe Collections
            </h3>

            <ul className="divide-y divide-[#e3ddd7]">
              {collections.map(([name, count]) => (
                <li key={name}>
                  <a
                    href="#"
                    className="flex items-center justify-between px-5 py-4 text-sm text-[#6a625b] hover:bg-[#f6c453] hover:text-[#24301f]"
                  >
                    <span>{name}</span>
                    <span className="text-xs">{count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default LatestPosts
