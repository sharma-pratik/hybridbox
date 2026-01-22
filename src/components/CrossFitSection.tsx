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
      name: 'DEADLIFT',
      description: 'Build raw power with the king of strength exercises',
      features: ['Maximum Strength', 'Posterior Chain', 'Full Body Power', 'Functional Movement'],
      animation: 'deadlift'
    },
    {
      name: 'BURPEE',
      description: 'High-intensity full-body conditioning movement',
      features: ['Cardio Endurance', 'Full Body Burn', 'Explosive Power', 'Fat Loss'],
      animation: 'burpee'
    },
    {
      name: 'THRUSTER',
      description: 'Combine squat and press for ultimate power output',
      features: ['Total Body Strength', 'Cardio Conditioning', 'Power Development', 'Efficiency'],
      animation: 'thruster'
    },
    {
      name: 'BOX JUMP',
      description: 'Explosive plyometric movement for athletic power',
      features: ['Explosive Power', 'Vertical Jump', 'Leg Strength', 'Athleticism'],
      animation: 'boxjump'
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
                {phases[activePhase].animation === 'deadlift' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Barbell */}
                    <line x1="30" y1="150" x2="170" y2="150" stroke="#000" strokeWidth="8" strokeLinecap="round"/>
                    <rect x="20" y="140" width="20" height="20" rx="3" fill="#000"/>
                    <rect x="160" y="140" width="20" height="20" rx="3" fill="#000"/>
                    {/* Person doing deadlift */}
                    <circle cx="100" cy="100" r="12" fill="#000"/>
                    <line x1="100" y1="112" x2="85" y2="130" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="112" x2="115" y2="130" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 112 Q 95 160 100 180 Q 105 160 100 112" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="180" x2="100" y2="240" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="240" x2="80" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="240" x2="120" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="85" y1="130" x2="70" y2="150" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="115" y1="130" x2="130" y2="150" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="70" cy="150" r="5" fill="#000"/>
                    <circle cx="130" cy="150" r="5" fill="#000"/>
                    <circle cx="80" cy="280" r="4" fill="#000"/>
                    <circle cx="120" cy="280" r="4" fill="#000"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'burpee' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Person in burpee position */}
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
                    {/* Ground line */}
                    <line x1="50" y1="280" x2="150" y2="280" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'thruster' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Barbell overhead */}
                    <line x1="50" y1="60" x2="150" y2="60" stroke="#000" strokeWidth="8" strokeLinecap="round"/>
                    <rect x="40" y="50" width="20" height="20" rx="3" fill="#000"/>
                    <rect x="140" y="50" width="20" height="20" rx="3" fill="#000"/>
                    {/* Person doing thruster */}
                    <circle cx="100" cy="120" r="12" fill="#000"/>
                    <line x1="100" y1="132" x2="85" y2="150" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="132" x2="115" y2="150" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 132 Q 95 180 100 200 Q 105 180 100 132" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="200" x2="100" y2="260" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="260" x2="80" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="260" x2="120" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="85" y1="150" x2="70" y2="70" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="115" y1="150" x2="130" y2="70" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="70" cy="70" r="5" fill="#000"/>
                    <circle cx="130" cy="70" r="5" fill="#000"/>
                    <circle cx="80" cy="280" r="4" fill="#000"/>
                    <circle cx="120" cy="280" r="4" fill="#000"/>
                  </svg>
                )}
                {phases[activePhase].animation === 'boxjump' && (
                  <svg viewBox="0 0 200 300" className="figure-svg">
                    {/* Box */}
                    <rect x="60" y="200" width="80" height="30" fill="#000" opacity="0.3" stroke="#000" strokeWidth="3"/>
                    {/* Person jumping onto box */}
                    <circle cx="100" cy="120" r="12" fill="#000"/>
                    <line x1="100" y1="132" x2="85" y2="150" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="132" x2="115" y2="150" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M 100 132 Q 95 180 100 200 Q 105 180 100 132" stroke="#000" strokeWidth="7" fill="none"/>
                    <line x1="100" y1="200" x2="100" y2="250" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="250" x2="80" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="100" y1="250" x2="120" y2="280" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="85" y1="150" x2="70" y2="140" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="115" y1="150" x2="130" y2="140" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="70" cy="140" r="5" fill="#000"/>
                    <circle cx="130" cy="140" r="5" fill="#000"/>
                    <circle cx="80" cy="280" r="4" fill="#000"/>
                    <circle cx="120" cy="280" r="4" fill="#000"/>
                  </svg>
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
