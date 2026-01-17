import { useState } from 'react'
import './ImageCarousel.css'

interface ImageCarouselProps {
  images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fullscreenIndex, setFullscreenIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index)
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    document.body.style.overflow = ''
    setIsFullscreen(false)
  }

  const goToPreviousFullscreen = () => {
    setFullscreenIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length
      setCurrentIndex(newIndex)
      return newIndex
    })
  }

  const goToNextFullscreen = () => {
    setFullscreenIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length
      setCurrentIndex(newIndex)
      return newIndex
    })
  }

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="image-carousel">
        <div className="carousel-container">
          <div className="carousel-slide" onClick={() => openFullscreen(currentIndex)}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} loading="lazy" />
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button className="carousel-button carousel-button-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
              ‹
            </button>
            <button className="carousel-button carousel-button-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
              ›
            </button>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button key={index} className={`carousel-dot ${index === currentIndex ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }} />
              ))}
            </div>
          </>
        )}
      </div>

      {isFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[fullscreenIndex]} alt={`Slide ${fullscreenIndex + 1}`} className="fullscreen-image" />
            {images.length > 1 && (
              <>
                <button className="fullscreen-button fullscreen-button-prev" onClick={(e) => { e.stopPropagation(); goToPreviousFullscreen(); }}>‹</button>
                <button className="fullscreen-button fullscreen-button-next" onClick={(e) => { e.stopPropagation(); goToNextFullscreen(); }}>›</button>
              </>
            )}
            <button className="fullscreen-close" onClick={closeFullscreen}>×</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCarousel
