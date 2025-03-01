import Image from 'next/image'

const Header = () => {
  const nav = [
    'Home',
    'How It Works',
    'Rates',
    'Shipping Addresses',
    'Notice Board',
    'WestTechTV',
    'Login',
    'Sign Up',
  ]
  return (
    <div className='w-full flex justify-between items-center p-4'>
      <div>
        <Image
          src='/wtech/wtechlogo.png'
          alt='West Tech Logo'
          width={300}
          height={55}
        />
      </div>
      <nav>
        <ul className='list-none flex gap-4'>
          {nav.map((li, i) => (
            <li
              key={i}
              className='text-l text-[#0A4590] hover:text-[#F8721F] cursor-pointer'
            >
              {li}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
