import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (isHomePage) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/' + href)
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav>
      <ul>
        <li><Link href="/" onClick={(e) => handleClick(e, '#home')}>Home</Link></li>
        <li><Link href="/#services" onClick={(e) => handleClick(e, '#services')}>Services</Link></li>
        <li><Link href="/#about" onClick={(e) => handleClick(e, '#about')}>About Us</Link></li>
        <li><Link href="/#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</Link></li>
        <li><Link href="/doctors">Doctors</Link></li>
      </ul>
    </nav>
  )
}