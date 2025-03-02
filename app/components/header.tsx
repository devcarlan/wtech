import Image from 'next/image'
import Link from 'next/link'

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
    <header className='sticky top-0 z-50 w-full border-b bg-white'>
      <div className='container max-w-full flex h-16 items-center py-2 px-4 md:px-6'>
        <Link href='/'>
          <Image
            src='/wtechlogo.png'
            alt='West Tech Logo'
            width={300}
            height={55}
          />
        </Link>
        <nav className='hidden md:flex ml-auto gap-6'>
          <Link
            href='#'
            className='text-sm font-semibold transition-colors hover:text-[#F8721F]'
          >
            Home
          </Link>
          <Link
            href='#'
            className='text-sm font-semibold transition-colors hover:text-[#F8721F]'
          >
            Services
          </Link>
          <Link
            href='#'
            className='text-sm font-semibold transition-colors hover:text-[#F8721F]'
          >
            WestTechTV
          </Link>
          <Link
            href='#'
            className='text-sm font-semibold transition-colors hover:text-[#F8721F]'
          >
            About Us
          </Link>
          <Link
            href='#'
            className='text-sm font-semibold transition-colors hover:text-[#F8721F]'
          >
            Contact
          </Link>
        </nav>
        <button className='flex items-center justify-center ml-6 w-36 h-12 p-4 rounded-md text-white font-semibold border shadow-sm  bg-[#0A4590] hover:bg-[#0A4590]/90 cursor-pointer'>
          Get a Quote
        </button>
      </div>
    </header>
  )
}

export default Header
