function RecipeCategoryGroup({ group }) {
  return (
    <section>
      <h2 className="border-b border-[#ddd8d3] pb-3 font-serif text-lg font-bold uppercase tracking-widest text-[#4b4641]">
        {group.title}
      </h2>

      <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {group.links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm text-[#6a625b] hover:text-[#7b3f64]"
            >
              <span className="h-2 w-2 rounded-full bg-[#7b3f64] transition-colors group-hover:bg-[#f6c453]" />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecipeCategoryGroup
