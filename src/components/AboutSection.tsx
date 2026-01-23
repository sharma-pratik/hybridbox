const AboutSection = () => {

  return (
    <section id="about" className="manga-section about-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-text">ABOUT HYBRIDBOX</span>
            <span className="title-effect">💪</span>
          </h2>
          <div className="manga-description">
            A revolutionary fitness experience combining the best of three powerful disciplines
          </div>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-card">
              <h3 className="about-card-title">WHAT IS HYBRIDBOX?</h3>
              <p className="about-card-text">
                HYBRIDBOX is an innovative open park gym concept introduced by Strength Bar Athlete. We combine three powerful fitness disciplines—Calisthenics, Animal Flow, and CrossFit—into one comprehensive training experience.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">OUR APPROACH</h3>
              <p className="about-card-text">
                We believe in making fitness accessible, fun, and effective. Our unique hybrid approach allows you to build strength, improve mobility, and enhance performance through diverse movement patterns and training methods.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">WHY HYBRIDBOX?</h3>
              <p className="about-card-text">
                By combining bodyweight mastery, primal movements, and high-intensity training, HYBRIDBOX offers a complete fitness solution that challenges your body in new ways and keeps your training exciting and progressive.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="comic-frame">
              <div className="about-diagram">
                <div className="diagram-item">
                  <div className="diagram-icon">💪</div>
                  <div className="diagram-label">CALISTHENICS</div>
                </div>
                <div className="diagram-plus">+</div>
                <div className="diagram-item">
                  <div className="diagram-icon">🐾</div>
                  <div className="diagram-label">ANIMAL FLOW</div>
                </div>
                <div className="diagram-plus">+</div>
                <div className="diagram-item">
                  <div className="diagram-icon">🔥</div>
                  <div className="diagram-label">CROSSFIT</div>
                </div>
                <div className="diagram-equals">=</div>
                <div className="diagram-result">
                  <div className="diagram-icon-large">💥</div>
                  <div className="diagram-label-large">HYBRIDBOX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
