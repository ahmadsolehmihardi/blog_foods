import { useMemo, useState } from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { mostLovedRecipes, recipeCategoryGroups } from '../data/recipesIndex'
import MostLovedRecipes from '../sections/recipes/MostLovedRecipes'
import RecipeCategoryGroups from '../sections/recipes/RecipeCategoryGroups'
import RecipeSearchSection from '../sections/recipes/RecipeSearchSection'
import RecipesHero from '../sections/recipes/RecipesHero'

function Recipes() {
  const [query, setQuery] = useState('')

  const filteredRecipes = useMemo(() => {
    const keyword = query.trim().toLowerCase()

    if (!keyword) {
      return mostLovedRecipes
    }

    return mostLovedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(keyword),
    )
  }, [query])

  const filteredGroups = useMemo(() => {
    const keyword = query.trim().toLowerCase()

    if (!keyword) {
      return recipeCategoryGroups
    }

    return recipeCategoryGroups
      .map((group) => ({
        ...group,
        links: group.links.filter((link) => link.toLowerCase().includes(keyword)),
      }))
      .filter((group) => group.links.length > 0)
  }, [query])

  return (
    <main className="min-h-screen bg-[#f7f6f4]">
      <Header variant="solid" />
      <RecipesHero />
      <RecipeSearchSection query={query} onQueryChange={setQuery} />
      <MostLovedRecipes recipes={filteredRecipes} />
      <RecipeCategoryGroups groups={filteredGroups} />
      <Footer />
    </main>
  )
}

export default Recipes
