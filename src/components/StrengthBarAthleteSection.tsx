const StrengthBarAthleteSection = () => {

  return (
    <section id="sba" className="manga-section sba-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-text">STRENGTH BAR ATHLETE</span>
            <span className="title-effect">🏋️</span>
          </h2>
          <div className="manga-description">
            Gujarat's biggest and Vadodara's first open-air calisthenics park.
          </div>
        </div>

        <div className="sba-content">
          <div className="sba-introduces">
            <div className="introduces-header">
              <h3 className="introduces-title">INTRODUCING</h3>
            </div>
            <div className="hybridbox-connection">
              <div className="connection-arrow">↓</div>
              <div className="hybridbox-badge">
                <div className="badge-content">
                  <span className="badge-label">INTRODUCED BY SBA</span>
                  <span className="badge-name">HYBRIDBOX</span>
                  <span className="badge-subtitle">Open Park Gym</span>
                </div>
              </div>
            </div>
            <div className="introduces-description">
              <p>
                Strength Bar Athlete proudly introduces <strong>HYBRIDBOX</strong> - a revolutionary approach to fitness combining Calisthenics, Animal Flow, and CrossFit in an open park gym setting.
              </p>
            </div>
            <div className="sba-link-container">
              <a 
                href="https://strengthbarathlete.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sba-link-btn"
              >
                <span className="link-icon">🌐</span>
                <span className="link-text">VISIT STRENGTH BAR ATHLETE</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrengthBarAthleteSection
