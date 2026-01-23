import { useState, useEffect } from 'react'

const FounderSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    const element = document.getElementById('founder')
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const credentials = [
    { icon: '📚', text: 'NESTA Certified' },
    { icon: '📚', text: 'ISSA Certified' },
    { icon: '📚', text: 'IHFA Certified' }
  ]

  const specialties = [
    { icon: '💪', text: 'Calisthenics' },
    { icon: '🏃', text: 'Movement' },
    { icon: '⚡', text: 'Performance Coach' }
  ]

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % 2)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section id="founder" className="manga-section founder-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-text">FOUNDER</span>
            <span className="title-effect">👤</span>
          </h2>
          <div className="manga-description">
            Meet the visionary behind Strength Bar Athlete and Hybridbox
          </div>
        </div>

        <div className="founder-content-grid">
          <div className="founder-image-panel">
            <div className="comic-frame founder-frame">
              <div className={`founder-image-container ${isVisible ? 'animate' : ''}`}>
                <img 
                  src="/pankaj-pasi-founder.png" 
                  alt="Pankaj Pasi - Founder" 
                  className="founder-image"
                  onError={(e) => {
                    console.error('Founder image failed to load');
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="motion-lines"></div>
              <div className="power-effect">⭐</div>
            </div>
          </div>

          <div className="founder-info-panel">
            <div className="founder-name-section">
              <h3 className="founder-name">PANKAJ PASI</h3>
              <div className="founder-tags">
                <span className="founder-tag">📚 NESTA</span>
                <span className="founder-tag">📚 ISSA</span>
                <span className="founder-tag">📚 IHFA</span>
              </div>
              <div className="founder-specialties">
                {specialties.map((specialty, idx) => (
                  <span key={idx} className="specialty-badge">
                    <span className="specialty-icon">{specialty.icon}</span>
                    <span className="specialty-text">{specialty.text}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="founder-bio">
              <p className="bio-text">
                Hi, I'm <strong>Pankaj Pasi</strong>, a passionate calisthenics expert with over <strong>10 years of experience</strong> in the fitness industry. In 2020, I established <strong>Gujarat's biggest and Vadodara's first open-air calisthenics park</strong>, Strength Bar Athlete (SBA), located in New Alkapuri, Gotri.
              </p>
              <p className="bio-text">
                Building on the success of SBA, I founded <strong>HYBRIDBOX</strong> - a revolutionary open park gym that combines Calisthenics, Animal Flow, and CrossFit into one comprehensive fitness experience. HYBRIDBOX represents the next evolution in accessible, community-driven fitness.
              </p>
              <p className="bio-text">
                My vision is to help people cultivate <strong>long-term fitness and happiness</strong> by creating impactful fitness content and fostering a vibrant, supportive community. Join us, and let's redefine fitness together!
              </p>
            </div>

            <div className="founder-achievements">
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">10+ Years</h4>
                  <p className="achievement-desc">Fitness Industry Experience</p>
                </div>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🏋️</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">2020</h4>
                  <p className="achievement-desc">Established SBA</p>
                </div>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">📍</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">Gujarat's Biggest</h4>
                  <p className="achievement-desc">Open-Air Calisthenics Park</p>
                </div>
              </div>
            </div>

            <div className="speech-bubble founder-quote">
              <div className="bubble-content">
                "Join us, and let's redefine fitness together!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
