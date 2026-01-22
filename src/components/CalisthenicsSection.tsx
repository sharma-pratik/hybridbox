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
      name: 'PULL-UPS',
      description: 'Build upper body strength with progressive pull-up training',
      features: ['Muscle Building', 'Grip Strength', 'Back Development', 'Core Activation'],
      animation: 'pullup'
    },
    {
      name: 'HANDSTAND',
      description: 'Master balance and control with handstand progression',
      features: ['Balance Training', 'Shoulder Strength', 'Core Stability', 'Body Control'],
      animation: 'handstand'
    },
    {
      name: 'MUSCLE-UP',
      description: 'Advanced movement combining pull and push strength',
      features: ['Full Body Power', 'Explosive Strength', 'Coordination', 'Elite Skill'],
      animation: 'muscleup'
    },
    {
      name: 'PLANCHE',
      description: 'Ultimate bodyweight strength feat - horizontal hold',
      features: ['Extreme Strength', 'Shoulder Endurance', 'Core Mastery', 'Progressive Training'],
      animation: 'planche'
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
                {phases[activePhase].animation === 'pullup' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Pull-up bar */}
                    <line x1="20" y1="30" x2="20" y2="10" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="180" y1="30" x2="180" y2="10" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="20" y1="30" x2="180" y2="30" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    {/* Person doing pull-up */}
                    <circle cx="100" cy="60" r="12" fill="#000"/>
                    <line x1="100" y1="72" x2="80" y2="90" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="72" x2="120" y2="90" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 72 Q 95 130 100 150 Q 105 130 100 72" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="150" x2="100" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="200" x2="75" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="200" x2="125" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="80" y1="90" x2="70" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="120" y1="90" x2="130" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="70" cy="50" r="5" fill="#000"/>
                    <circle cx="130" cy="50" r="5" fill="#000"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'handstand' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in handstand */}
                    <circle cx="100" cy="250" r="12" fill="#000"/>
                    <line x1="100" y1="238" x2="85" y2="220" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="238" x2="115" y2="220" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 238 Q 95 180 100 160 Q 105 180 100 238" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="160" x2="100" y2="110" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="110" x2="85" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="110" x2="115" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="85" cy="50" r="5" fill="#000"/>
                    <circle cx="115" cy="50" r="5" fill="#000"/>
                    {/* Ground line */}
                    <line x1="50" y1="280" x2="150" y2="280" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'muscleup' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Pull-up bar */}
                    <line x1="20" y1="30" x2="20" y2="10" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="180" y1="30" x2="180" y2="10" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="20" y1="30" x2="180" y2="30" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    {/* Person doing muscle-up - body above bar with bent arms */}
                    {/* Head above bar */}
                    <circle cx="100" cy="50" r="12" fill="#000"/>
                    {/* Broad shoulders */}
                    <line x1="100" y1="62" x2="75" y2="75" stroke="#000" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="100" y1="62" x2="125" y2="75" stroke="#000" strokeWidth="7" strokeLinecap="round"/>
                    {/* Muscular torso - leaning forward slightly */}
                    <path d="M 100 62 Q 98 100 100 130 Q 102 100 100 62" stroke="#000" strokeWidth="8" fill="none"/>
                    {/* Bent arms gripping bar - elbows at 90 degrees */}
                    {/* Left arm: elbow at shoulder level, hand gripping bar */}
                    <line x1="75" y1="75" x2="60" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="60" y1="50" x2="50" y2="30" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    {/* Right arm: elbow at shoulder level, hand gripping bar */}
                    <line x1="125" y1="75" x2="140" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="140" y1="50" x2="150" y2="30" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    {/* Hands gripping bar */}
                    <circle cx="50" cy="30" r="6" fill="#000"/>
                    <circle cx="150" cy="30" r="6" fill="#000"/>
                    {/* Torso continues down */}
                    <line x1="100" y1="130" x2="100" y2="200" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    {/* Legs - slightly forward for balance */}
                    <line x1="100" y1="200" x2="85" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="200" x2="115" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    {/* Feet */}
                    <circle cx="85" cy="260" r="4" fill="#000"/>
                    <circle cx="115" cy="260" r="4" fill="#000"/>
                    {/* Power lines for dynamic effect */}
                    <line x1="30" y1="50" x2="45" y2="50" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <line x1="155" y1="50" x2="170" y2="50" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'planche' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in planche position */}
                    <circle cx="100" cy="200" r="12" fill="#000"/>
                    <line x1="100" y1="188" x2="70" y2="160" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="188" x2="130" y2="160" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 188 Q 100 150 100 130 Q 100 150 100 188" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="130" x2="100" y2="80" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="80" x2="70" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="80" x2="130" y2="50" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="70" cy="50" r="5" fill="#000"/>
                    <circle cx="130" cy="50" r="5" fill="#000"/>
                    {/* Ground line */}
                    <line x1="50" y1="280" x2="150" y2="280" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
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
