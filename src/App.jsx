import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import AuthorIntro from './sections/AuthorIntro'
import CategoryShortcutMenu from './sections/CategoryShortcutMenu'
import CookbookCTA from './sections/CookbookCTA'
import Footer from './components/layout/Footer'
import HeroSection from './sections/HeroSection'
import LatestPosts from './sections/LatestPosts'
import About from './pages/About'
import Recipes from './pages/Recipes'
import SocialNewsletterBar from './sections/SocialNewsletterBar'

function Home() {
  return (
    <main className="min-h-screen bg-[#f8f0e6]">
      <Header />
      <HeroSection />
      <CategoryShortcutMenu />
      <LatestPosts />
      <AuthorIntro />
      <SocialNewsletterBar />
      <CookbookCTA />
      <Footer />
    </main>
  )
}

function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    function handleHashChange() {
      setPage(window.location.hash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (page === '#about') {
    return <About />
  }

  if (page === '#recipes') {
    return <Recipes />
  }

  return <Home />
}

export default App
