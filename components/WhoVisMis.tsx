import React from 'react'
import BlurImage from './BlurImage'

export default function WhoVisMis() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className='w-full md:w-1/2 rounded-2xl'>
          <BlurImage
            src='/climate.jpg'
            width={500}
            height={500}
            alt='Food Logo'
            className='w-full h-[400px] rounded-2xl object-cover duration-700 hover:scale-105'
            local={true}
          />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='mb-4'>
            <h1 className='text-lg font-bold text-primary'>Who we are</h1>
            <p className='text-gray-600'>
              The Centre of Excellence that focuses and promotes climate
              adaptation and integrated food and nutrition system, we build and
              unlock natural and socio-economic capitals through knowledge and
              technology transfer, research innovation, and disseminating
              information.
            </p>
          </div>
          <div className='mb-2'>
            <h1 className='text-lg font-bold text-primary'>Vision</h1>
            <p className='text-gray-600'>
              A leading Centre of Excellence in research, academia, and policy;
              and capacity development in food system, climate change
              adaptation, innovation, and technology transfer for sustainable
              food system.
            </p>
          </div>
          <div className='mb-2'>
            <h1 className='text-lg font-bold text-primary'>
              Mission Statement
            </h1>
            <p className='text-gray-600'>
              To contribute to ending drought emergencies, economic development,
              poverty alleviation, and sustainable productive sector through
              knowledge and capacity development, CEFS-CA actions will
              appropriately inform decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
