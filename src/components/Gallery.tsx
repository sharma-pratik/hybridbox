import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - replace with actual images from the website
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', alt: 'Calisthenics training' },
    { id: 2, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', alt: 'Crossfit workout' },
    { id: 3, src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop', alt: 'Animal flow movement' },
    { id: 4, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', alt: 'Park gym equipment' },
    { id: 5, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', alt: 'Group training session' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', alt: 'Outdoor fitness' },
    { id: 7, src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop', alt: 'Strength training' },
    { id: 8, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', alt: 'Community workout' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            See our community in action
          </p>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage !== null && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={images[selectedImage].src} alt={images[selectedImage].alt} />
            {selectedImage > 0 && (
              <button 
                className="lightbox-nav lightbox-prev"
                onClick={() => setSelectedImage(selectedImage - 1)}
              >
                ‹
              </button>
            )}
            {selectedImage < images.length - 1 && (
              <button 
                className="lightbox-nav lightbox-next"
                onClick={() => setSelectedImage(selectedImage + 1)}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
