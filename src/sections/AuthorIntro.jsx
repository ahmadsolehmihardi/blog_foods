function AuthorIntro() {
  return (
    <section className="bg-[#f4f1ed] px-6 py-14 sm:px-8 lg:px-13">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-white lg:grid-cols-3">
        <div className="flex min-h-[360px] flex-col items-center justify-center px-8 py-12 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-[#7b3f64]">
            Hi! I&apos;m Maya.
          </p>

          <p className="mt-3 font-serif text-3xl italic leading-none text-[#b98da3]">
            nice to meet you!
          </p>

          <p className="mt-7 max-w-xs text-sm leading-7 text-[#675f58]">
            I share simple recipes, olive oil tips, and weeknight meals for home
            cooks who want food that feels bright, fresh, and easy to love.
          </p>

          <a
            href="#"
            className="mt-7 inline-flex min-h-10 items-center justify-center bg-[#47433f] px-7 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#f6c453] hover:text-[#24301f]"
          >
            Learn More
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=720&q=80"
          alt="Author cooking in a bright kitchen"
          className="h-full min-h-[360px] w-full object-cover"
          loading="lazy"
        />

        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=720&q=80"
          alt="Preparing a meal at home"
          className="h-full min-h-[360px] w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default AuthorIntro
