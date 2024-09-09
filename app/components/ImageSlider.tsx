'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/assets/images/B.png',
  '/assets/images/B2.png',
  '/assets/images/B3.png',
  '/assets/images/chatus.png',
  '/assets/images/D.png',
  '/assets/images/E.png',
  '/assets/images/R1.png',
  '/assets/images/R2.png',
  '/assets/images/R3.png',
  '/assets/images/R4.png',
  '/assets/images/R5.png',
  '/assets/images/R6.png',
  '/assets/images/R7.png',
  '/assets/images/R8.png',
  '/assets/images/R9.png'
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const startX = e.touches[0].clientX
      const handleTouchEnd = (e: TouchEvent) => {
        const endX = e.changedTouches[0].clientX
        if (startX - endX > 50) nextSlide()
        else if (endX - startX > 50) prevSlide()
        document.removeEventListener('touchend', handleTouchEnd)
      }
      document.addEventListener('touchend', handleTouchEnd)
    }

    const slideshow = document.getElementById('slideshow')
    slideshow?.addEventListener('touchstart', handleTouchStart)

    return () => {
      slideshow?.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  return (
    <div id="slideshow" className="relative max-w-[450px] mx-auto">
      <Image 
        src={images[currentSlide]}
        alt={`Facility Image ${currentSlide + 1}`}
        width={450}
        height={300}
        layout="responsive"
        priority={currentSlide === 0}
      />
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2">&#10094;</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2">&#10095;</button>
    </div>
  )
}