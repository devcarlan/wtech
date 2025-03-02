import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative bg-[#0A4590] py-20 text-white'>
      <div className='container max-w-full px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Reliable Shipping Solutions for Your Personal Needs
            </h1>
            <p className='text-white/80 md:text-xl'>
              West Tech Shipping provides efficient and cost-effective shipping
              services for all your packages.
            </p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <button className='flex items-center justify-center w-40 h-12 p-4 rounded-md font-semibold bg-[#F8721F] hover:bg-[#F8721F]/90 text-white'>
                Get a Quote
                <ArrowRight className='ml-2 h-4 w-4' />
              </button>
              <button className='flex items-center justify-center w-40 h-12 p-4 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-[#0A4590]'>
                Contact Us
              </button>
            </div>
          </div>
          <div className='relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden'>
            <Image
              src='/wtech/delivery.avif'
              alt='Shipping and logistics'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent' />
    </section>
  )
}

export default Hero
