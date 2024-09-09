'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  return (
    <div className="relative w-full max-w-[800px] aspect-[16/9] mx-auto overflow-hidden rounded-lg shadow-lg">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Facility Image ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out',
            opacity: index === currentSlide ? 1 : 0,
          }}
          priority={index === currentSlide}
        />
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Next image"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}