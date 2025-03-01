import Image from 'next/image'

const Services = () => {
  return (
    <section className='w-full bg-white flex flex-col items-center text-black mt-6'>
      <h2 className='text-3xl text-center mb-6'>Our Services</h2>
      <div className='grid grid-cols-3 gap-4 justify-center px-4 mb-4'>
        {[
          {
            imgSrc: '/cplane.png',
            title: 'RECEIVE, SHIP, & CLEAR PACKAGES',
            description: `Shop online at your favorite sites and just ship your goods 
        to the following address: 1708 NW 82nd Ave Doral, FL 33126 USA (321) 
        300-6468. We will then ship directly to you and clear your package 
        through Customs. Our shipping fee is $10 per pound, handling fee is $5, 
        plus any applicable duties. (St. Maarten: USD $5 per pound and USD $5 handling).`,
          },
          {
            imgSrc: '/c-card.png',
            title: 'USE OF CREDIT CARDS',
            description: `If you need us to, we can place your orders online using 
        our credit card for a fee of $10 (St. Maarten: USD $5) per order.`,
          },
          {
            imgSrc: '/ctruck.png',
            title: 'PACKAGE DELIVERY',
            description: `If you have a busy schedule and you are not able to pick 
        up your packages at one of our office locations, we can deliver your 
        packages to your home or office.`,
          },
        ].map((service, index) => (
          <div key={index} className='flex flex-col h-full p-4 gap-2'>
            <div className='flex justify-center mb-4'>
              <Image
                src={service.imgSrc}
                width={84}
                height={84}
                alt={service.title}
              />
            </div>
            <h3 className='text-lg font-semibold text-center'>
              {service.title}
            </h3>
            <p className='text-sm text-center'>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center mb-8'>
        <button className='w-[150px] text-white h-[50px] px-2 rounded-lg bg-[#0A4590] hover:bg-[#F8721F] cursor-pointer'>
          Request A Quote
        </button>
      </div>
    </section>
  )
}

export default Services
