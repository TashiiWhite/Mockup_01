import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
