import { ChevronRight } from 'lucide-react'

const FAQ = () => {
  const li = [
    'Do you insure packages?',
    'How long will it take to receive my goods?',
    'Will my packages go via air or sea freight?',
    'What address do I ship my packages to?',
    'How do you calculate the weight of a package?',
    'Do you ship to the US?',
    'How much time do I have to pickup my package after I have gotten an email that it is available for pickup?',
  ]
  return (
    <section className='w-full p-6 bg-[#F8721F] text-black'>
      <h3 className='text-3xl text-white mt-4 mb-4 font-bold'>
        Frequently Asked Questions
      </h3>
      <ul className='list-none flex flex-col gap-4'>
        {li.map((li, i) => (
          <li
            key={i}
            className='text-[#0A4590] text-lg font-semibold flex items-center cursor-pointer hover:text-white'
          >
            {li}
            <ChevronRight className='ml-2' />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQ
