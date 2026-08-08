import RecipeCategoryGroup from '../../components/recipe/RecipeCategoryGroup'

function RecipeCategoryGroups({ groups }) {
  return (
    <section className="bg-[#f7f6f4] px-6 py-8 sm:px-8 lg:px-13">
      <div className="mx-auto max-w-5xl space-y-14">
        {groups.map((group) => (
          <RecipeCategoryGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  )
}

export default RecipeCategoryGroups
