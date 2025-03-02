import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className='py-16 bg-slate-50'>
      <div className='container max-w-full px-4 md:px-6'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-[#0A4590] mb-4'>
              Contact Us
            </h2>
            <p className='mb-6'>
              Have questions or need assistance? Our team is here to help you
              with all your shipping needs.
            </p>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-[#0A4590] mt-0.5' />
                <div>
                  <p className='font-medium'>Address</p>
                  <p>1708 NW 82nd Ave, Doral, FL 33126</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone className='w-5 h-5 text-[#0A4590] mt-0.5' />
                <div>
                  <p className='font-medium'>Phone</p>
                  <p>(321) 300-6468</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Mail className='w-5 h-5 text-[#0A4590] mt-0.5' />
                <div>
                  <p className='font-medium'>Email</p>
                  <p>info@westtechshipping.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='rounded-xl border border-gray-200 shadow'>
              <div className='flex flex-col space-y-1.5 p-6'>
                <h3 className='font-semibold leading-none tracking-tight'>
                  Send Us a Message
                </h3>
                <p className='text-sm'>
                  Fill out the form below and we&apos;ll get back to you
                  shortly.
                </p>
              </div>
              <div className='p-6 pt-0"'>
                <form className='space-y-4'>
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Name
                      </label>
                      <input
                        className='flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
                        id='name'
                        placeholder='Enter your name'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Email
                      </label>
                      <input
                        className='flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='subject'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Subject
                    </label>
                    <input
                      className='flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
                      id='subject'
                      placeholder='Enter subject'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      className='flex min-h-[120px] w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Enter your message'
                    />
                  </div>
                  <button className='w-full h-12 flex items-center justify-center p-4 rounded-md text-white font-semibold border shadow-sm  bg-[#0A4590] hover:bg-[#0A4590]/90 cursor-pointer'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
