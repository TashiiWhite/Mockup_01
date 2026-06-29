import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal, useScrollProgress } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  const progressRef = useRef(null)
  useScrollProgress(progressRef)

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <BeforeAfter />
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
