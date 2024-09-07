import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <Image src="/assets/images/7.png" alt="Sampana Mediclinic Logo" width={700} height={200} className="logo" />
        <p className="tagline">Committed to Caring since 2000.</p>
      </div>
    </header>
  )
}