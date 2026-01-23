import { useState, useEffect } from 'react'

const CrossFitSection = () => {
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
    const element = document.getElementById('crossfit')
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const phases = [
    {
      name: 'THE SNATCH',
      description: 'Olympic lift for explosive power and full-body coordination',
      features: ['Explosive Power', 'Full Body Coordination', 'Hip Drive', 'Olympic Movement'],
      animation: 'theSnatch'
    },
    {
      name: 'THE CLEAN',
      description: 'Master the clean - powerful Olympic lift for strength and speed',
      features: ['Maximum Power', 'Hip Extension', 'Full Body Strength', 'Olympic Technique'],
      animation: 'theClean'
    },
    {
      name: 'WALL BALL',
      description: 'High-intensity functional movement combining squat and overhead press',
      features: ['Cardio Conditioning', 'Leg Power', 'Shoulder Endurance', 'Full Body Burn'],
      animation: 'wallBall'
    },
    {
      name: 'BACK SQUAT',
      description: 'Build leg strength and power with the king of lower body exercises',
      features: ['Leg Strength', 'Core Stability', 'Posterior Chain', 'Maximum Strength'],
      animation: 'backSquat'
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
    <section id="crossfit" className="manga-section crossfit-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-number">03</span>
            <span className="title-text">CROSSFIT</span>
            <span className="title-effect">🔥</span>
          </h2>
          <div className="manga-description">
            Push your limits! High-intensity functional fitness that transforms you into a performance machine.
          </div>
        </div>

        <div className="manga-content-grid">
          <div className="manga-animation-panel">
            <div className="comic-frame">
              <div className={`stick-figure-animation ${phases[activePhase].animation} ${isVisible ? 'animate' : ''}`}>
                {phases[activePhase].animation === 'theSnatch' && (
                  <div className="figure-image-container">
                    <img 
                      src="/the-snatch.jpg" 
                      alt="The Snatch exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'theClean' && (
                  <div className="figure-image-container">
                    <img 
                      src="/the-clean.jpg" 
                      alt="The Clean exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'wallBall' && (
                  <div className="figure-image-container">
                    <img 
                      src="/wall-ball.jpg" 
                      alt="Wall Ball exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'backSquat' && (
                  <div className="figure-image-container">
                    <img 
                      src="/back-squat.jpg" 
                      alt="Back Squat exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
              </div>
              <div className="motion-lines"></div>
              <div className="power-effect">🔥</div>
            </div>
          </div>

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
                    <span className="feature-icon">🔥</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="speech-bubble">
              <div className="bubble-content">
                "Push beyond your limits and become unstoppable!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrossFitSection
