const Hero = () => {
  return (
    <section className='w-full flex justify-center items-center h-[500px] relative overflow-hidden'>
      <div
        style={{
          backgroundImage: 'url(/airplane.avif)',
          filter: 'brightness(0.5)',
        }}
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        aria-hidden='true'
      ></div>
      <div className='container flex items-center justify-center gap-16 px-4 md:px-6 mx-auto relative z-10'>
        <div className='p-4 w-[350px] h-[350px] border-4 border-white rounded-md flex flex-col gap-6 justify-center items-center'>
          <h2 className='text-2xl'>How It Works</h2>
          <p className='text-center'>
            Shop online and deliver to our address in Florida, USA.
          </p>
          <button className='p-4 w-[150px] h-[50px] rounded-lg bg-[#0A4590] hover:bg-[#F8721F] cursor-pointer'>
            Read More
          </button>
        </div>
        <div className='p-4 w-[350px] h-[350px] border-4 border-white rounded-md flex flex-col gap-6 justify-center items-center'>
          <h2 className='text-2xl'>Why Choose Us</h2>
          <p className='text-center'>
            Low rates, great service, and fast delivery.
          </p>
          <button className='w-[150px] h-[50px] rounded-lg bg-[#0A4590] hover:bg-[#F8721F] cursor-pointer'>
            Read More
          </button>
        </div>
        <div className='p-4 w-[350px] h-[350px] border-4 border-white rounded-md flex flex-col gap-6 justify-center items-center'>
          <h2 className='text-2xl'>Our Rates</h2>
          <p className='text-center'>We charge less than the others.</p>
          <button className='w-[150px] h-[50px] rounded-lg bg-[#0A4590] hover:bg-[#F8721F] cursor-pointer'>
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
