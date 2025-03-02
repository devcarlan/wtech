import FAQ from './components/faq'
import Footer from './components/footer'
import Hero from './components/hero'
import Services from './components/services'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <Hero />
        <Services />
      </main>
    </div>
  )
}
