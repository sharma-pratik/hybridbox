import { useState, useEffect } from 'react'

const ContactSection = () => {
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
    const element = document.getElementById('contact')
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="contact" className="manga-section contact-section">
      <div className="manga-panel">
        <div className="panel-header">
          <h2 className="manga-section-title">
            <span className="title-text">CONTACT US</span>
            <span className="title-effect">📞</span>
          </h2>
          <div className="manga-description">
            Get in touch with us! We're here to help you start your fitness journey.
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-cards-grid">
            <div className={`contact-card ${isVisible ? 'animate' : ''}`}>
              <div className="contact-icon">📧</div>
              <h3 className="contact-card-title">EMAIL</h3>
              <a href="mailto:contact@hybrixdbox.in" className="contact-link">
                contact@hybrixdbox.in
              </a>
            </div>

            <div className={`contact-card ${isVisible ? 'animate' : ''}`}>
              <div className="contact-icon">📱</div>
              <h3 className="contact-card-title">PHONE</h3>
              <div className="contact-phones">
                <a href="tel:+918160964128" className="contact-link">
                  +91 81609 64128
                </a>
                <a href="tel:+917048660327" className="contact-link">
                  +91 70486 60327
                </a>
              </div>
            </div>

            <div className={`contact-card ${isVisible ? 'animate' : ''}`}>
              <div className="contact-icon">📍</div>
              <h3 className="contact-card-title">ADDRESS</h3>
              <p className="contact-address">
                R.S. No. 74, Plot No. 3,<br/>
                Opp. Krishna Park Society,<br/>
                Nr. Sayid Vasna Village,<br/>
                Bh. Linde Company,<br/>
                Vadodara-390007
              </p>
            </div>

            <div className={`contact-card contact-card-map ${isVisible ? 'animate' : ''}`}>
              <div className="contact-icon">🗺️</div>
              <h3 className="contact-card-title">FIND US</h3>
              <a 
                href="https://goo.gl/maps/7cxAK1oKsNZxQgBV7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                <span className="map-link-text">View on Google Maps</span>
                <span className="map-link-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="speech-bubble contact-quote">
            <div className="bubble-content">
              "Ready to transform your fitness? Let's connect!"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
