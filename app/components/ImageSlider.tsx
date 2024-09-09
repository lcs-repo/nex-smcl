'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import B from '/public/assets/images/B.png'
import B2 from '/public/assets/images/B2.png'
import B3 from '/public/assets/images/B3.png'
import chatus from '/public/assets/images/chatus.png'
import D from '/public/assets/images/D.png'
import E from '/public/assets/images/E.png'
import R1 from '/public/assets/images/R1.png'
import R2 from '/public/assets/images/R2.png'
import R3 from '/public/assets/images/R3.png'
import R4 from '/public/assets/images/R4.png'
import R5 from '/public/assets/images/R5.png'
import R6 from '/public/assets/images/R6.png'
import R7 from '/public/assets/images/R7.png'
import R8 from '/public/assets/images/R8.png'
import R9 from '/public/assets/images/R9.png'

const slides = [B, B2, B3, chatus, D, E, R1, R2, R3, R4, R5, R6, R7, R8, R9]

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