import React from 'react'
import BlurImage from './BlurImage'

export default function WhoVisMis() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className='w-full md:w-1/2'>
          <BlurImage
            src='https://images.unsplash.com/photo-1600336153113-d66c79de3e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
            width={300}
            height={300}
            alt='Food Logo'
            className='w-full h-[400px] rounded-2xl object-cover duration-700 hover:scale-105 '
          />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='mb-4'>
            <h1 className='text-lg font-bold text-primary'>Who we are</h1>
            <p className='text-gray-600'>
              The Centre of Excellence that focuses and promotes climate
              adaptation and integrated food and nutrition systems, we build and
              unlock natural and socio-economic capitals through knowledge and
              technology transfer, research innovation, and disseminating
              information.
            </p>
          </div>
          <div className='mb-2'>
            <h1 className='text-lg font-bold text-primary'>Vision</h1>
            <p className='text-gray-600'>
              A leading Centre of excellence in research, academia and policy
              and capacity development in food systems, climate adaptation,
              innovation and technology transfer for sustainable food security.
            </p>
          </div>
          <div className='mb-2'>
            <h1 className='text-lg font-bold text-primary'>
              Mission Statement
            </h1>
            <p className='text-gray-600'>
              To contribute to ending drought emergencies, climate adaption,
              economic development, poverty alleviation, and sustainable,
              productive sector through knowledge and capacity development,
              UP-CEFS actions will appropriately inform decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
