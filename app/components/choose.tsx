import { Anchor, Clock, Globe, Phone } from 'lucide-react'

const Choose = () => {
  return (
    <section className='py-16 bg-slate-50'>
      <div className='container max-w-full px-4 md:px-6'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold tracking-tight text-[#0A4590]'>
            Why Choose Us
          </h2>
          <p className='mt-2'>
            We deliver more than just packages - we deliver peace of mind for
            your personal shipments.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-center text-center'>
            <div className='rounded-full bg-[#0A4590]/10 p-3 mb-4'>
              <Clock className='h-6 w-6 text-[#0A4590]' />
            </div>
            <h3 className='text-lg font-medium mb-2'>Timely Delivery</h3>
            <p>
              We understand the importance of your personal packages arriving on
              time, especially for special occasions.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='rounded-full bg-[#0A4590]/10 p-3 mb-4'>
              <Globe className='h-6 w-6 text-[#0A4590]' />
            </div>
            <h3 className='text-lg font-medium mb-2'>Global Network</h3>
            <p>
              Send personal packages to friends and family anywhere in the
              Caribbean and U.S with our extensive network.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='rounded-full bg-[#0A4590]/10 p-3 mb-4'>
              <Anchor className='h-6 w-6 text-[#0A4590]' />
            </div>
            <h3 className='text-lg font-medium mb-2'>Reliable Service</h3>
            <p>
              With years of experience, we provide dependable shipping services
              you can trust.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='rounded-full bg-[#0A4590]/10 p-3 mb-4'>
              <Phone className='h-6 w-6 text-[#0A4590]' />
            </div>
            <h3 className='text-lg font-medium mb-2'>Customer Support</h3>
            <p>
              Our dedicated team is always ready to assist you with any
              inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
