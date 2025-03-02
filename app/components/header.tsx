'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
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
        <button className='hidden md:flex items-center justify-center ml-6 w-36 h-12 p-4 rounded-md text-white font-semibold border shadow-sm  bg-[#0A4590] hover:bg-[#0A4590]/90 cursor-pointer'>
          Get a Quote
        </button>
        <button
          className='ml-auto md:hidden'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          <span className='sr-only'>Toggle Menu</span>
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden border-t p-4 space-y-4 bg-white'>
          <nav className='flex flex-col space-y-4'>
            <Link
              href='#'
              className='text-sm font-medium transition-colors hover:text-[#F8721F]'
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Home
            </Link>
            <Link
              href='#'
              className='text-sm font-medium transition-colors hover:text-[#F8721F]'
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Services
            </Link>
            <Link
              href='#'
              className='text-sm font-medium transition-colors hover:text-[#F8721F]'
              onClick={() => setIsOpen((prev) => !prev)}
            >
              WestTechTV
            </Link>
            <Link
              href='#'
              className='text-sm font-medium transition-colors hover:text-[#F8721F]'
              onClick={() => setIsOpen((prev) => !prev)}
            >
              About Us
            </Link>
            <Link
              href='#'
              className='text-sm font-medium transition-colors hover:text-[#F8721F]'
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Contact
            </Link>
          </nav>
          <div className='flex flex-col gap-2'>
            <button className='w-full flex items-center justify-center h-12 p-4 text-white font-semibold bg-[#0A4590] hover:bg-[#0A4590]/90'>
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
