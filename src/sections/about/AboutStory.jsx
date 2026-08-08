function AboutStory() {
  return (
    <section className="bg-white px-6 py-14 sm:px-8 lg:px-13">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#252525]">
          I Love Food!
        </h2>

        <div className="mt-5 space-y-5 text-sm leading-7 text-[#6a625b]">
          <p>
            This space is for sharing fresh, flavorful recipes that are easy to
            make and easy to adjust. The goal is simple food that works for busy
            weekdays, slow weekends, and everything in between.
          </p>
          <p>
            You can use this page as a starting point for your own portfolio
            story. Replace the copy, swap the images, and make the personality
            feel more like your final brand.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1000&q=80"
          alt="Family cooking moment"
          className="mt-8 aspect-[4/3] w-full object-cover grayscale"
          loading="lazy"
        />

        <h2 className="mt-10 text-xl font-black uppercase tracking-tight text-[#252525]">
          Going Deeper
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-[#6a625b]">
          <li>
            <strong>Travel:</strong> recipes inspired by small markets, simple
            cafes, and everyday home kitchens.
          </li>
          <li>
            <strong>Loss:</strong> personal stories can live beside useful
            recipes when the tone is honest and thoughtful.
          </li>
          <li>
            <strong>Motherhood:</strong> meals that make family routines feel a
            little calmer.
          </li>
          <li>
            <strong>Home Stuff:</strong> notes about organizing, styling, and
            building a warm kitchen space.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutStory
