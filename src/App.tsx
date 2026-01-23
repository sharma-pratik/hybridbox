import { useEffect } from 'react'
import Hero from './components/Hero'
import StrengthBarAthleteSection from './components/StrengthBarAthleteSection'
import FounderSection from './components/FounderSection'
import CalisthenicsSection from './components/CalisthenicsSection'
import AnimalFlowSection from './components/AnimalFlowSection'
import CrossFitSection from './components/CrossFitSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

      return (
        <div className="app">
          <Navigation scrollY={0} />
          <Hero />
          <AboutSection />
          <CalisthenicsSection />
          <AnimalFlowSection />
          <CrossFitSection />
          <StrengthBarAthleteSection />
          <FounderSection />
          <ContactSection />
        </div>
      )
}

export default App
