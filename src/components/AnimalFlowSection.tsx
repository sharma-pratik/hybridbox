import { useState, useEffect } from 'react'

const AnimalFlowSection = () => {
  const [activePhase, setActivePhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    const element = document.getElementById('animal-flow')
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const phases = [
    {
      name: 'COSSACK SQUAT',
      description: 'Build leg strength and hip mobility with this dynamic squat variation',
      features: ['Leg Strength', 'Hip Mobility', 'Balance', 'Lower Body Power'],
      animation: 'cossackSquat'
    },
    {
      name: 'CRAB BRIDGE REACH',
      description: 'Enhance shoulder mobility and posterior chain strength',
      features: ['Shoulder Flexibility', 'Back Strength', 'Hip Mobility', 'Balance'],
      animation: 'crabBridgeReach'
    },
    {
      name: 'SCORPION SIT THROUGH',
      description: 'Advanced movement combining flexibility, strength, and coordination',
      features: ['Spinal Mobility', 'Hip Flexibility', 'Core Strength', 'Body Control'],
      animation: 'scorpionSitThrough'
    },
    {
      name: 'SPIDERMAN CRAWL',
      description: 'Primal movement for full-body strength and coordination',
      features: ['Full Body Strength', 'Core Stability', 'Shoulder Mobility', 'Coordination'],
      animation: 'spidermanCrawl'
    }
  ]

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % phases.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section id="animal-flow" className="manga-section animal-flow-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-number">02</span>
            <span className="title-text">ANIMAL FLOW</span>
            <span className="title-effect">🐾</span>
          </h2>
          <div className="manga-description">
            Unleash your primal power! Move like nature intended with ground-based animal movements.
          </div>
        </div>

        <div className="manga-content-grid reverse">
          <div className="manga-info-panel">
            <div className="phase-selector">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  className={`phase-btn ${activePhase === index ? 'active' : ''}`}
                  onClick={() => setActivePhase(index)}
                >
                  <span className="phase-number">{index + 1}</span>
                  <span className="phase-name">{phase.name}</span>
                </button>
              ))}
            </div>

            <div className="current-phase-info">
              <h3 className="phase-title">{phases[activePhase].name}</h3>
              <p className="phase-description">{phases[activePhase].description}</p>
              <div className="phase-features">
                {phases[activePhase].features.map((feature, idx) => (
                  <div key={idx} className="feature-badge">
                    <span className="feature-icon">🐾</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="speech-bubble">
              <div className="bubble-content">
                "Connect with your animal instincts!"
              </div>
            </div>
          </div>

          <div className="manga-animation-panel">
            <div className="comic-frame">
              <div className={`stick-figure-animation ${phases[activePhase].animation} ${isVisible ? 'animate' : ''}`}>
                {phases[activePhase].animation === 'cossackSquat' && (
                  <div className="figure-image-container">
                    <img 
                      src="/cossack-squat.jpg" 
                      alt="Cossack Squat exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'crabBridgeReach' && (
                  <div className="figure-image-container">
                    <img 
                      src="/crab-bridge-reach.jpg" 
                      alt="Crab Bridge Reach exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'scorpionSitThrough' && (
                  <div className="figure-image-container">
                    <img 
                      src="/scorpion-sit-through.jpg" 
                      alt="Scorpion Sit Through exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'spidermanCrawl' && (
                  <div className="figure-image-container">
                    <img 
                      src="/spiderman-crawl.jpg" 
                      alt="Spiderman Crawl exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
              </div>
              <div className="motion-lines"></div>
              <div className="power-effect">🐾</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalFlowSection
