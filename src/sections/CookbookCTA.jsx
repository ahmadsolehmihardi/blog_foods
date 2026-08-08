function CookbookCTA() {
  return (
    <section className="bg-[#474747] px-6 py-16 text-white sm:px-8 lg:px-13">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80"
            alt="Cookbook recipes"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 grid place-items-center bg-[#7b3f64]/65 px-6 text-center">
            <div>
              <p className="text-4xl font-black uppercase leading-none tracking-widest sm:text-6xl">
                Top 25
              </p>
              <p className="text-5xl font-black uppercase leading-none tracking-widest sm:text-7xl">
                Recipes
              </p>
              <p className="mt-3 text-sm font-black uppercase tracking-widest">
                Cookbook
              </p>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="font-serif text-3xl italic leading-none text-[#e0b7ca]">
            get it now
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Oliva Recipe Guide
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#f4e8da] lg:mx-0">
            The ebook includes our most popular recipes in a beautiful, easy to
            download format. Enter your email and we&apos;ll send it right over.
          </p>

          <form className="mt-7 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              placeholder="First Name"
              className="min-h-12 bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#a9a09a] focus:ring-2 focus:ring-[#f6c453]"
            />
            <input
              type="email"
              placeholder="Email"
              className="min-h-12 bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#a9a09a] focus:ring-2 focus:ring-[#f6c453]"
            />
            <button
              type="submit"
              className="min-h-12 bg-[#f6c453] px-8 text-xs font-black uppercase tracking-widest text-[#24301f] transition-colors hover:bg-white"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CookbookCTA
