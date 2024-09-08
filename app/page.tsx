'use client'

import { useEffect, useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import ChatWidget from './components/ChatWidget'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <section id="home">
          <h2>Welcome to Sampana Mediclinic</h2>
          <p>Sampana Mediclinic is committed to providing high-quality medical care with advanced diagnostic facilities.
            Our team of experienced doctors and staff are dedicated to your health and well-being.</p>
          <a href="#contact" className="cta-button">Book an Appointment</a>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>General Checkup</li>
            <li>Clinical Laboratory</li>
            <li>X-ray</li>
            <li>Ultrasound</li>
            <li>2D-Echo</li>
            <li>ECG</li>
          </ul>
        </section>
        <section id="about">
          <h2>Location / Operating Hours</h2>
          <p>South Supermarket Parking - McArthur Highway, Bulihan, Malolos Bulacan</p>
          <p>Monday - Saturday</p>
          <p>6:00 AM - 5:00 PM</p>
        </section>
        <section id="photo-album">
          <h2>Our Facility</h2>
          <ImageSlider />
        </section>
        <section id="contact">
          <h2>Contact Us / Book an Appointment</h2>
          <p><strong>Phone:</strong> 09627522727 / 09671934111</p>
          <p><strong>Facebook:</strong> Sampana Mediclinic and Laboratory</p>
          <p><strong>Email:</strong> smcl.malolos@gmail.com</p>
          <p><strong>Address:</strong> South Supermarket Parking - McArthur Highway, Bulihan, Malolos Bulacan</p>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}