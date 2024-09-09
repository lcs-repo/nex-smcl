'use client'

import { useState } from 'react'
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full max-w-[800px] h-[450px] mx-auto">
      <Image
        src={images[currentSlide]}
        alt={`Facility Image ${currentSlide + 1}`}
        fill
        style={{ objectFit: 'contain' }}
      />
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        &#10095;
      </button>
    </div>
  )
}