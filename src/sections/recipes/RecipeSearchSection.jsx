function RecipeSearchSection({ query, onQueryChange }) {
  return (
    <section className="bg-[#f7f6f4] px-6 sm:px-8 lg:px-13">
      <div className="mx-auto max-w-5xl -translate-y-7">
        <label className="block">
          <span className="sr-only">Search recipes</span>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by keyword"
            className="min-h-14 w-full border border-[#d8d1cb] bg-white px-5 text-base text-[#2f2b22] shadow-sm outline-none placeholder:text-[#9b928b] focus:border-[#7b3f64] focus:ring-2 focus:ring-[#f6c453]"
          />
        </label>
      </div>
    </section>
  )
}

export default RecipeSearchSection
