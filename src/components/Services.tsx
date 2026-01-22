import { useState } from 'react'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: 'calisthenics',
      title: 'Calisthenics',
      description: 'Master your bodyweight with progressive calisthenics training. Build strength, flexibility, and control through functional movements.',
      features: [
        'Progressive strength training',
        'Bodyweight mastery',
        'Flexibility & mobility',
        'Skill development'
      ],
      icon: 'calisthenics'
    },
    {
      id: 'animal-flow',
      title: 'Animal Flow',
      description: 'Move like nature intended. Animal Flow combines ground-based movement patterns to improve mobility, coordination, and body awareness.',
      features: [
        'Ground-based movements',
        'Natural movement patterns',
        'Enhanced coordination',
        'Full-body integration'
      ],
      icon: 'animal-flow'
    },
    {
      id: 'crossfit',
      title: 'Crossfit',
      description: 'High-intensity functional fitness that combines weightlifting, cardio, and gymnastics. Push your limits and achieve peak performance.',
      features: [
        'High-intensity workouts',
        'Functional movements',
        'Community support',
        'Scalable programming'
      ],
      icon: 'crossfit'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Three powerful disciplines, one complete fitness experience
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`service-icon service-icon-${service.icon}`}>
                {service.icon === 'calisthenics' && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pull-up bar structure */}
                    <line x1="12" y1="12" x2="12" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="88" y1="12" x2="88" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="12" y1="12" x2="88" y2="12" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular person doing pull-up */}
                    <circle cx="50" cy="26" r="7" fill="currentColor"/>
                    {/* Broad shoulders */}
                    <line x1="50" y1="33" x2="42" y2="38" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                    <line x1="50" y1="33" x2="58" y2="38" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                    {/* Muscular torso */}
                    <path d="M 50 33 Q 48 50 50 55 Q 52 50 50 33" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"/>
                    <line x1="50" y1="55" x2="50" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular legs */}
                    <line x1="50" y1="70" x2="36" y2="90" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="50" y1="70" x2="64" y2="90" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular arms reaching up to bar */}
                    <line x1="42" y1="38" x2="35" y2="18" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="58" y1="38" x2="65" y2="18" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Hands gripping bar */}
                    <circle cx="35" cy="18" r="4" fill="currentColor"/>
                    <circle cx="65" cy="18" r="4" fill="currentColor"/>
                    {/* Feet */}
                    <circle cx="36" cy="90" r="3.5" fill="currentColor"/>
                    <circle cx="64" cy="90" r="3.5" fill="currentColor"/>
                  </svg>
                )}
                {service.icon === 'animal-flow' && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Muscular person in quadruped/animal flow position */}
                    <circle cx="50" cy="28" r="8" fill="currentColor"/>
                    {/* Broad shoulders */}
                    <line x1="50" y1="36" x2="40" y2="42" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="50" y1="36" x2="60" y2="42" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular torso */}
                    <path d="M 50 36 Q 48 50 50 58 Q 52 50 50 36" stroke="currentColor" strokeWidth="5.5" fill="none" strokeLinecap="round"/>
                    <line x1="50" y1="58" x2="50" y2="72" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular legs */}
                    <line x1="50" y1="72" x2="36" y2="92" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="50" y1="72" x2="64" y2="92" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular arms in quadruped position */}
                    <line x1="40" y1="42" x2="30" y2="78" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="60" y1="42" x2="70" y2="78" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Hands on ground */}
                    <circle cx="30" cy="78" r="4.5" fill="currentColor"/>
                    <circle cx="70" cy="78" r="4.5" fill="currentColor"/>
                    {/* Feet on ground */}
                    <circle cx="36" cy="92" r="4" fill="currentColor"/>
                    <circle cx="64" cy="92" r="4" fill="currentColor"/>
                  </svg>
                )}
                {service.icon === 'crossfit' && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Muscular person */}
                    <circle cx="50" cy="20" r="8" fill="currentColor"/>
                    {/* Broad shoulders */}
                    <line x1="50" y1="28" x2="40" y2="35" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="50" y1="28" x2="60" y2="35" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular torso */}
                    <path d="M 50 28 Q 48 45 50 52 Q 52 45 50 28" stroke="currentColor" strokeWidth="5.5" fill="none" strokeLinecap="round"/>
                    <line x1="50" y1="52" x2="50" y2="68" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular legs */}
                    <line x1="50" y1="68" x2="38" y2="92" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="50" y1="68" x2="62" y2="92" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Muscular arms holding barbell */}
                    <line x1="40" y1="35" x2="25" y2="46" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="60" y1="35" x2="75" y2="46" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    {/* Barbell bar */}
                    <line x1="20" y1="46" x2="80" y2="46" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    {/* Barbell weights - larger */}
                    <rect x="15" y="40" width="10" height="12" rx="2" fill="currentColor"/>
                    <rect x="75" y="40" width="10" height="12" rx="2" fill="currentColor"/>
                    {/* Inner weight details */}
                    <rect x="17" y="42" width="6" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <rect x="77" y="42" width="6" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1"/>
                    {/* Feet */}
                    <circle cx="38" cy="92" r="4" fill="currentColor"/>
                    <circle cx="62" cy="92" r="4" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="service-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
