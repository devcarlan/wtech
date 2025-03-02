import { Box, Ship, Truck } from 'lucide-react'

const Services = () => {
  return (
    <section className='py-16'>
      <div className='container max-w-full px-4 md:px-6'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold tracking-tight text-[#0A4590]'>
            Our Services
          </h2>
          <p className='mt-2'>
            Comprehensive shipping solutions tailored to your personal needs.
          </p>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='gap-6 rounded-xl border border-gray-200 shadow'>
            <div className='gap-2 flex flex-col space-y-1.5 p-6 pb-2'>
              <Ship className='h-10 w-10 text-[#0A4590] mb-2' />
              <h3 className='font-semibold leading-none tracking-tight'>
                Personal Package Shipping
              </h3>
            </div>
            <div className='p-6 pt-0'>
              <p>
                Reliable and cost-effective shipping services for your personal
                items and gifts to anywhere in the world.
              </p>
            </div>
          </div>
          <div className='gap-6 rounded-xl border border-gray-200 shadow'>
            <div className='gap-2 flex flex-col space-y-1.5 p-6 pb-2'>
              <Truck className='h-10 w-10 text-[#0A4590] mb-2' />
              <h3 className='font-semibold leading-none tracking-tight'>
                Home Pickup
              </h3>
            </div>
            <div className='p-6 pt-0'>
              <p>
                Convenient pickup service directly from your home with flexible
                scheduling options.
              </p>
            </div>
          </div>
          <div className='gap-6 rounded-xl border border-gray-200 shadow'>
            <div className='gap-2 flex flex-col space-y-1.5 p-6 pb-2'>
              <Box className='h-10 w-10 text-[#0A4590] mb-2' />
              <h3 className='font-semibold leading-none tracking-tight'>
                Package Protection
              </h3>
            </div>
            <div className='p-6 pt-0'>
              <p>
                Secure handling and insurance options to ensure your valuable
                items arrive safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
