import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#0A4590] text-white'>
      <div className='container max-w-full px-4 md:px-6 py-12'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>West Tech Shipping</h3>
            <p className='text-white/80 mb-4'>
              Providing reliable shipping solutions for individuals and
              families.
            </p>
            <div className='flex space-x-4'>
              <Link href='#' className='text-white hover:text-[#F8721F]'>
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link href='#' className='text-white hover:text-[#F8721F]'>
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link href='#' className='text-white hover:text-[#F8721F]'>
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link href='#' className='text-white hover:text-[#F8721F]'>
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Personal Package Shipping
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Home Pickup
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Package Protection
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Gift Shipping
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  International Shipping
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white/80 hover:text-[#F8721F]'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>
            <ul className='space-y-2'>
              <li className='flex items-start gap-2'>
                <Phone className='w-5 h-5' />
                <span className='text-white/80'>(321) 300-6468</span>
              </li>
              <li className='flex items-start gap-2'>
                <Mail className='w-5 h-5' />
                <span className='text-white/80'>info@westtechshipping.com</span>
              </li>
              <li className='flex items-start gap-2'>
                <MapPin className='w-5 h-5' />
                <span className='text-white/80'>
                  1708 NW 82nd Ave, Doral, FL 33126
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-white/20 text-center text-white/60'>
          <p>© {currentYear} West Tech Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
