import SmallRecipeRatingCard from '../../components/recipe/SmallRecipeRatingCard'

function MostLovedRecipes({ recipes }) {
  return (
    <section className="bg-[#f7f6f4] px-6 pb-14 pt-4 sm:px-8 lg:px-13">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-3xl text-[#e8b34e]">♕</p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-widest text-[#7b3f64]">
            Most Loved Recipes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6a625b]">
            These are reader favorites with simple ingredients, clear steps, and
            dependable results.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <SmallRecipeRatingCard key={recipe.title} recipe={recipe} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex min-h-12 w-full max-w-md items-center justify-center bg-[#7b3f64] px-8 text-xs font-black uppercase tracking-widest text-white hover:bg-[#f6c453] hover:text-[#24301f]"
          >
            + View All Recipes
          </a>
        </div>
      </div>
    </section>
  )
}

export default MostLovedRecipes
