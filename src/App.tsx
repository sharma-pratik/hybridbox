import { useEffect } from 'react'
import Hero from './components/Hero'
import CalisthenicsSection from './components/CalisthenicsSection'
import AnimalFlowSection from './components/AnimalFlowSection'
import CrossFitSection from './components/CrossFitSection'
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
      <CalisthenicsSection />
      <AnimalFlowSection />
      <CrossFitSection />
    </div>
  )
}

export default App
