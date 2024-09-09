'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/assets/images/B.png',
  '/assets/images/B2.png',
  '/assets/images/B3.png',
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
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 1000) // Changed back to 5000ms (5 seconds) for a slower transition
    return () => clearInterval(timer)
  }, [])

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => [...prev, src])
  }

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`)
  }

  useEffect(() => {
    console.log('Loaded images:', loadedImages)
  }, [loadedImages])

  return (
    <div className="relative w-full max-w-[1600px] mx-auto aspect-[16/9] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Facility Image ${index + 1}`}
          fill
          className="object-contain transition-opacity duration-500"
          style={{
            opacity: index === currentSlide ? 1 : 0,
          }}
          onLoadingComplete={() => handleImageLoad(src)}
          onError={() => handleImageError(src)}
        />
      ))}
    </div>
  )
}