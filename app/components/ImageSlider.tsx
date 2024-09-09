'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import B from '/assets/images/B.jpg'
import B2 from '/assets/images/B2.jpg'
import B3 from '/assets/images/B3.jpg'
import chatus from '/assets/images/chatus.png'
import D from '/assets/images/D.jpg'
import E from '/assets/images/E.jpg'
import R1 from '/assets/images/R1.jpg'
import R2 from '/assets/images/R2.jpg'
import R3 from '/assets/images/R3.jpg'
import R4 from '/assets/images/R4.jpg'
import R5 from '/assets/images/R5.jpg'
import R6 from '/assets/images/R6.jpg'
import R7 from '/assets/images/R7.jpg'
import R8 from '/assets/images/R8.jpg'
import R9 from '/assets/images/R9.jpg'

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