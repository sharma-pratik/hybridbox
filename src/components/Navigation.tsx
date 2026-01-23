import { useState } from 'react'

interface NavigationProps {
  scrollY: number
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`manga-navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img 
            src="/hybridbox-logo.png" 
            alt="Hybridbox Logo" 
            className="logo-img"
            onError={(e) => {
              console.error('Logo failed to load');
              (e.target as HTMLImageElement).style.display = 'none';
            }} 
          />
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>HOME</a>
          <a href="#sba" onClick={(e) => { e.preventDefault(); scrollToSection('sba') }}>SBA</a>
          <a href="#founder" onClick={(e) => { e.preventDefault(); scrollToSection('founder') }}>FOUNDER</a>
          <a href="#calisthenics" onClick={(e) => { e.preventDefault(); scrollToSection('calisthenics') }}>CALISTHENICS</a>
          <a href="#animal-flow" onClick={(e) => { e.preventDefault(); scrollToSection('animal-flow') }}>ANIMAL FLOW</a>
          <a href="#crossfit" onClick={(e) => { e.preventDefault(); scrollToSection('crossfit') }}>CROSSFIT</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACT</a>
        </div>
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
