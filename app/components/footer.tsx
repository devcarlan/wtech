import { Container, CreditCard, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const islands = [
    'St. Lucia',
    'St. Kitts & Nevis',
    'St. Maarten',
    'Grenada',
    'Barbados',
    'St. Vincent',
    'Dominica',
    'Antigua',
    'Guyana',
  ]
  return (
    <footer className='w-full pb-4 bg-[#24272D]'>
      <div className='flex items-baseline gap-8 p-6'>
        <div className='flex items-center'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold'>U.S Address</h3>
            <div className='flex'>
              <MapPin className='mt-1 mr-2 w-[20px] h-[20px]' />
              1708 NW 82nd Ave,
              <br />
              Doral, FL 33126
            </div>
            <div className='flex items-center'>
              <Phone className='mr-2 w-[20px] h-[20px]' />
              (321) 300-6468
            </div>
            <div className='flex items-center'>
              <Mail className='mr-2 w-[20px] h-[20px]' />
              info@westtechshipping.com
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center'>
            <Container className='mr-2 w-[20px] h-[20px]' /> Islands We Ship To:
          </div>
          <div>
            {islands.map((isle, i) => (
              <p key={i}>{isle}</p>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center'>
            <CreditCard className='mr-2 w-[20px] h-[20px]' /> Cards We Accept:
          </div>
          <div className='flex items-center gap-4'>
            <Image
              width={40}
              height={40}
              src='/visa.png'
              alt='Visa Credit Card'
            />
            <Image
              width={40}
              height={40}
              src='/master-card.png'
              alt='Master Card Credit Card'
            />
            <Image
              width={40}
              height={40}
              src='/american.png'
              alt='American Express Credit Card'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        &copy; {currentYear} West Technology Group Inc., All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
