import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}