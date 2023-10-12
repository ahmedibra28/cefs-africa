import Image from 'next/image'
import React from 'react'

export default function Page() {
  const partners = [
    '1.png',
    '2.png',
    '3.jpeg',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.jpeg',
    '9.jpeg',
  ]
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full'>
          <div className='mb-4 text-gray-600 space-y-4'>
            <div className='flex justify-between items-centers gap-5 flex-wrap'>
              {partners.map((partner) => (
                <div
                  key={partner}
                  className='card card-compact bg-base-100 shadow duration-700 hover:shadow-2xl w-[47%] md:w-[31%] lg:w-[23%] p-4 justify-center'
                >
                  <figure>
                    <Image
                      src={`/partners/${partner}`}
                      alt='partner'
                      width={300}
                      height={300}
                      className='w-24 object-contain'
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
