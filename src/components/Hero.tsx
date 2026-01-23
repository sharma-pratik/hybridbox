import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="manga-hero">
      <div className="manga-background">
        <div className="speed-lines"></div>
        <div className="manga-overlay"></div>
      </div>
      <div className={`manga-content ${isVisible ? 'visible' : ''}`}>
        <div className="manga-title-container">
          <h1 className="manga-title">
          <span className="title-main">HYBRIDBOX</span>
            <span className="title-impact">⚡</span>
        </h1>
          <div className="manga-subtitle">
            <span className="subtitle-text">POWER UP YOUR BODY!</span>
            <div className="subtitle-lines"></div>
          </div>
        </div>
        <div className="manga-tags">
          <span className="manga-tag">💪 CALISTHENICS</span>
          <span className="manga-tag">🐾 ANIMAL FLOW</span>
          <span className="manga-tag">🔥 CROSSFIT</span>
      </div>
        <div className="scroll-indicator-manga">
          <div className="manga-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
