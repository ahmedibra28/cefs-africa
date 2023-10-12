import BlurImage from '@/components/BlurImage'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
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
          <div className='mb-4 text-gray-700 space-y-4'>
            <p>
              1. The Centre provides services on developing policies and policy
              frameworks, operational strategies, and plans on productive
              sectors in Somalia and in the HoA to enable relevant authorities,
              Ministries, Industries and Academic Institutions to focus on
              sustainable food systems, climate change and socio-economic
              development.
            </p>

            <p>
              2. The Centre builds capacities of all stakeholders including
              government Ministries, Local Institutions, and partners to
              effectively implement food systems programs.
            </p>

            <p>
              3. The Centre establishes community of practice in Somalia and in
              the HoA in food systems and climate adaptations.
            </p>

            <p>
              4. The Centre designs and supports enterprise and technology
              innovation programs that informs sustainable climate smart
              agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
