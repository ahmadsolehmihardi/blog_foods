function SmallRecipeRatingCard({ recipe }) {
  return (
    <article className="grid grid-cols-[72px_1fr] gap-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-16 w-18 object-cover"
        loading="lazy"
      />

      <div>
        <h3 className="font-serif text-sm font-bold leading-snug text-[#34302c]">
          {recipe.title}
        </h3>
        <p className="mt-1 text-sm leading-none text-[#e8b34e]">★★★★★</p>
        <p className="mt-1 text-[0.65rem] font-black uppercase tracking-wide text-[#8d8580]">
          {recipe.reviews} reviews / {recipe.rating} average
        </p>
      </div>
    </article>
  )
}

export default SmallRecipeRatingCard
