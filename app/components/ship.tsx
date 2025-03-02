const Ship = () => {
  return (
    <section className='py-16 bg-[#0A4590] text-white'>
      <div className='container max-w-full px-4 md:px-6 text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>
          Ready to Ship Your Package?
        </h2>
        <p className='text-white/80 mb-8 max-w-2xl mx-auto'>
          Contact us today to get started with your personal shipping needs and
          enjoy hassle-free delivery.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <button className='flex items-center justify-center w-40 h-12 p-4 rounded-md font-semibold cursor-pointer bg-[#F8721F] hover:bg-[#F8721F]/90 text-white'>
            Get Started
          </button>
          <button className='flex items-center justify-center w-40 h-12 p-4 rounded-md font-semibold cursor-pointer border border-white text-white hover:bg-white hover:text-[#0A4590]'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Ship
