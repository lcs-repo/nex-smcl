'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  '/assets/images/B.jpg',
  '/assets/images/B2.jpg',
  '/assets/images/B3.jpg',
  '/assets/images/chatus.png',
  '/assets/images/D.jpg',
  '/assets/images/E.jpg',
  '/assets/images/R1.jpg',
  '/assets/images/R2.jpg',
  '/assets/images/R3.jpg',
  '/assets/images/R4.jpg',
  '/assets/images/R5.jpg',
  '/assets/images/R6.jpg',
  '/assets/images/R7.jpg',
  '/assets/images/R8.jpg',
  '/assets/images/R9.jpg',
  '/assets/images/support-avatar.png',
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const slideshow = document.getElementById('slideshow')
    let startX: number

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      if (startX - endX > 50) {
        nextSlide()
      } else if (endX - startX > 50) {
        prevSlide()
      }
    }

    slideshow?.addEventListener('touchstart', handleTouchStart)
    slideshow?.addEventListener('touchend', handleTouchEnd)

    return () => {
      slideshow?.removeEventListener('touchstart', handleTouchStart)
      slideshow?.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div id="slideshow" style={{ position: 'relative', maxWidth: '450px', margin: '0 auto' }}>
      <Image 
        src={slides[currentSlide]} 
        alt="Facility Image" 
        width={450} 
        height={300} 
        layout="responsive"
      />
      <button onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>&#10094;</button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>&#10095;</button>
    </div>
  )
}