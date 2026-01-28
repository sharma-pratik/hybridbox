import { useState, useEffect } from 'react'

const CalisthenicsSection = () => {
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
    const element = document.getElementById('calisthenics')
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const phases = [
    {
      name: 'HANDSTAND',
      description: 'Master balance and control with handstand progression',
      features: ['Balance Training', 'Shoulder Strength', 'Core Stability', 'Body Control'],
      animation: 'handstand'
    },
    {
      name: 'PLANCHE',
      description: 'Ultimate bodyweight strength feat - horizontal hold',
      features: ['Extreme Strength', 'Shoulder Endurance', 'Core Mastery', 'Progressive Training'],
      animation: 'planche'
    },
    {
      name: 'HANGING ONE ARM L-SIT',
      description: 'Elite core and hip flexor strength - single arm hanging L-sit hold',
      features: ['Elite Core Strength', 'Hip Flexor Power', 'Unilateral Stability', 'Advanced Control'],
      animation: 'hangingOneArmLSit'
    },
    {
      name: 'FRONT LEVER',
      description: 'Master horizontal body hold - ultimate core and back strength',
      features: ['Core Mastery', 'Back Strength', 'Full Body Control', 'Advanced Skill'],
      animation: 'frontLever'
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
    <section id="calisthenics" className="manga-section calisthenics-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-number">01</span>
            <span className="title-text">CALISTHENICS</span>
            <span className="title-effect">💥</span>
          </h2>
          <div className="manga-description">
            Master your bodyweight! Transform into a strength machine through progressive calisthenics training.
          </div>
        </div>

        <div className="manga-content-grid">
          <div className="manga-animation-panel">
            <div className="comic-frame">
              <div className={`stick-figure-animation ${phases[activePhase].animation} ${isVisible ? 'animate' : ''}`}>
                {phases[activePhase].animation === 'handstand' && (
                  <div className="figure-image-container">
                    <img 
                      src="/handstand.jpg" 
                      alt="Handstand exercise" 
                      className="figure-image"
                    />
                  </div>
                )}

                {phases[activePhase].animation === 'planche' && (
                  <div className="figure-image-container">
                    <img 
                      src="/planche.jpg" 
                      alt="Planche exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'hangingOneArmLSit' && (
                  <div className="figure-image-container">
                    <img 
                      src="/one-arm-front-lever.jpg" 
                      alt="Hanging One Arm L-Sit exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
                {phases[activePhase].animation === 'frontLever' && (
                  <div className="figure-image-container">
                    <img 
                      src="/front-lever.jpg" 
                      alt="Front Lever exercise" 
                      className="figure-image"
                    />
                  </div>
                )}
              </div>
              <div className="motion-lines"></div>
              <div className="power-effect">⚡</div>
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
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="speech-bubble">
              <div className="bubble-content">
                "Transform your body into a weapon of strength!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalisthenicsSection
