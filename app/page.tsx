import Choose from './components/choose'
import Contact from './components/contact'
import Hero from './components/hero'
import Services from './components/services'
import Ship from './components/ship'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <Hero />
        <Services />
        <Choose />
        <Ship />
        <Contact />
      </main>
    </div>
  )
}
