function AboutHero() {
  return (
    <section className="bg-[#f8f6f3] px-6 pb-10 pt-28 sm:px-8 lg:px-13 lg:pt-30">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
          alt="Maya holding a bowl in the kitchen"
          className="h-full min-h-90 w-full object-cover"
        />

        <div className="max-w-xl">
          <p className="text-[0.65rem] font-black uppercase tracking-widest text-[#7b3f64]">
            Oliva / About Me
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium leading-tight text-[#7b3f64] sm:text-6xl">
            About Me
          </h1>
          <p className="mt-5 text-xs font-black uppercase tracking-widest text-[#47433f]">
            Hi, my name is Ahmad Soleh Mihardi
          </p>
          <div className="mt-5 space-y-5 text-sm leading-7 text-[#6a625b]">
            <p>
              Oliva is a small food blog about simple recipes, good olive oil,
              and everyday meals that feel fresh without being complicated.
            </p>
            <p>
              I started this project to share flexible dinner ideas, pantry
              staples, and kitchen notes for people who enjoy cooking at home.
            </p>
            <p>
              Around here you will find bright salads, cozy pastas, quick
              dinners, and simple guides you can edit into your own story later.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
