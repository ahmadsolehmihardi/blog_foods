import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import SocialNewsletterBar from '../sections/SocialNewsletterBar'
import AboutHero from '../sections/about/AboutHero'
import AboutStory from '../sections/about/AboutStory'
import FoodBloggerProCTA from '../sections/about/FoodBloggerProCTA'
import TeamSection from '../sections/about/TeamSection'

function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="darkTransparent" />
      <AboutHero />
      <SocialNewsletterBar />
      <AboutStory />
      <FoodBloggerProCTA />
      <TeamSection />
      <Footer />
    </main>
  )
}

export default About
