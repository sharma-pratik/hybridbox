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
      name: 'BEAST CRAWL',
      description: 'Move like a predator - build primal strength and coordination',
      features: ['Full Body Movement', 'Core Stability', 'Shoulder Mobility', 'Coordination'],
      animation: 'beast'
    },
    {
      name: 'CRAB REACH',
      description: 'Enhance shoulder mobility and posterior chain strength',
      features: ['Shoulder Flexibility', 'Back Strength', 'Hip Mobility', 'Balance'],
      animation: 'crab'
    },
    {
      name: 'SCORPION REACH',
      description: 'Advanced movement combining flexibility and strength',
      features: ['Spinal Mobility', 'Hip Flexibility', 'Shoulder Strength', 'Body Control'],
      animation: 'scorpion'
    },
    {
      name: 'APE REACH',
      description: 'Primate-inspired movement for power and agility',
      features: ['Explosive Power', 'Hip Mobility', 'Full Body Integration', 'Dynamic Movement'],
      animation: 'ape'
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
                {phases[activePhase].animation === 'beast' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in beast crawl position */}
                    <circle cx="100" cy="80" r="12" fill="#000"/>
                    <line x1="100" y1="92" x2="75" y2="120" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="92" x2="125" y2="120" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 92 Q 95 150 100 180 Q 105 150 100 92" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="180" x2="100" y2="220" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="220" x2="75" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="220" x2="125" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="75" y1="120" x2="60" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="125" y1="120" x2="140" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="60" cy="200" r="5" fill="#000"/>
                    <circle cx="140" cy="200" r="5" fill="#000"/>
                    <circle cx="75" cy="260" r="4" fill="#000"/>
                    <circle cx="125" cy="260" r="4" fill="#000"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'crab' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in crab position */}
                    <circle cx="100" cy="250" r="12" fill="#000"/>
                    <line x1="100" y1="238" x2="85" y2="220" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="238" x2="115" y2="220" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 238 Q 95 180 100 150 Q 105 180 100 238" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="150" x2="100" y2="110" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="110" x2="85" y2="70" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="110" x2="115" y2="70" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="85" y1="220" x2="70" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="115" y1="220" x2="130" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="70" cy="200" r="5" fill="#000"/>
                    <circle cx="130" cy="200" r="5" fill="#000"/>
                    <circle cx="85" cy="70" r="4" fill="#000"/>
                    <circle cx="115" cy="70" r="4" fill="#000"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'scorpion' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in scorpion reach */}
                    <circle cx="100" cy="200" r="12" fill="#000"/>
                    <line x1="100" y1="188" x2="85" y2="170" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="188" x2="115" y2="170" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 188 Q 100 150 100 120 Q 100 150 100 188" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="120" x2="100" y2="80" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="80" x2="70" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="80" x2="130" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="85" y1="170" x2="60" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="115" y1="170" x2="140" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="60" cy="200" r="5" fill="#000"/>
                    <circle cx="140" cy="200" r="5" fill="#000"/>
                    <circle cx="70" cy="50" r="4" fill="#000"/>
                    <circle cx="130" cy="50" r="4" fill="#000"/>
                    {/* Curved leg */}
                    <path d="M 100 200 Q 90 240 80 260" stroke="#000" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'ape' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in ape reach position */}
                    <circle cx="100" cy="100" r="12" fill="#000"/>
                    <line x1="100" y1="112" x2="70" y2="140" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="112" x2="130" y2="140" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 112 Q 95 170 100 200 Q 105 170 100 112" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="200" x2="100" y2="240" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="240" x2="80" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="240" x2="120" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="70" y1="140" x2="50" y2="180" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="130" y1="140" x2="150" y2="180" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="50" cy="180" r="5" fill="#000"/>
                    <circle cx="150" cy="180" r="5" fill="#000"/>
                    <circle cx="80" cy="280" r="4" fill="#000"/>
                    <circle cx="120" cy="280" r="4" fill="#000"/>
                  </svg>
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
