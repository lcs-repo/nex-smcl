'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Doctors() {
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
        <section id="doctors">
          <h2>Our Doctors</h2>
          <div className="doctors-list">
            <div className="doctor">
              <h3>Dr. Rhandy P. Panganiban</h3>
              <p>Cardiologist</p>
              <p>Tuesday (1:00 - 3:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Cheryl Adriano</h3>
              <p>Endocrinologist</p>
              <p>Monday (9:00 AM - 4:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Alberto Fariñas</h3>
              <p>Internal Medicine</p>
              <p>Monday, Wednesday (9:00 AM - 11:00 AM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Amelie Crislyd Avenido</h3>
              <p>Hematologist</p>
              <p>Monday (9:00 AM - 12:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Aileen Abigail Fariñas</h3>
              <p>Internal Medicine</p>
              <p>Monday (9:00 AM - 11:00 AM), <br />Friday, Saturday (2:00 PM - 5:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Portia Buenafe</h3>
              <p>OB-Gyn/Sonologist</p>
              <p>Thursday (9:00 AM - 11:00 AM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Maria Rhina Uy</h3>
              <p>Family Medicine</p>
              <p>Friday (11:00 AM - 2:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Portia Buenafe</h3>
              <p>OB-Gyn/Sonologist</p>
              <p>Monday (9:00 AM - 11:00 AM), <br />Friday, Saturday (2:00 PM - 5:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Mary Grace Alvaran</h3>
              <p>Pediatrician</p>
              <p>Monday (7:00 AM - 9:30 AM),<br /> Wednesday (7:00 AM - 12:00 PM),<br /> Friday (2:00 PM - 5:00 PM), <br />Saturday (7:00 AM - 9:30 AM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Omar Braga</h3>
              <p>Radiologist/Sonologist</p>
              <p>Saturday (9:30 AM - 11:00 AM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Alberto Gabriel</h3>
              <p>Radiologist/Sonologist</p>
              <p>Daily (8:00 AM - 9:00 AM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Amanda Mae Manalaysay</h3>
              <p>Cardiologist</p>
              <p>Thursday (2:00 PM - 4:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Fredireck Thomas Manalaysay</h3>
              <p>Pulmonologist</p>
              <p>Tuesday (1:00 PM - 3:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Fidel Tomas Manalaysay III</h3>
              <p>Urologist</p>
              <p>Saturday (1:00 PM - 4:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Bea Puentespina</h3>
              <p>Generalist</p>
              <p>Wednesday (1:00 PM - 5:00 PM), <br />Saturday (8:00 AM - 4:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Bong Santiago</h3>
              <p>Internal Medicine</p>
              <p>Thursday (10:00 AM - 12:00 PM)</p>
            </div>
            <div className="doctor">
              <h3>Dr. Mark Manicad</h3>
              <p>Generalist</p>
              <p>Tuesday (8:00 AM - 12:00 AM), <br /> Friday (8:00 AM - 12:00 AM) </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}