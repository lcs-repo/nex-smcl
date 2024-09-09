'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/assets/images/B.png',
  '/assets/images/B2.png',
  '/assets/images/B3.png',
  '/assets/images/chatus.jpg',
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
    // Touch event handling code remains the same
  }, [])

  return (
    <div id="slideshow" className="relative w-full max-w-[800px] aspect-[16/9] mx-auto">
        <Image 
            src={images[currentSlide]}
            alt={`Facility Image ${currentSlide + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={currentSlide === 0}
        />
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">&#10094;</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">&#10095;</button>
    </div>
  )
}