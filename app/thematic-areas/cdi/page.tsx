import BlurImage from '@/components/BlurImage'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full md:w-1/2'>
          <BlurImage
            src='/samtec.jpg'
            local={true}
            width={500}
            height={500}
            alt='Food Logo'
            className='w-full h-[400px] rounded-2xl object-cover duration-700 hover:scale-105 '
          />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='mb-4 text-gray-700 space-y-4'>
            <p>
              1. The Center provides services on designing policies and policy
              frameworks, operational strategies, and plans on productive
              sectors in Somalia and in the Africa to enable relevant
              authorities, Ministries, Industries, and Academic research and
              innovation institutions to focus on sustainable food systems,
              climate change and socio-economic development.
            </p>
            <p>
              2. The Center builds the capacities of all stakeholders including
              government Ministries, Local Institutions, and partners to
              effectively implement food systems programs.
            </p>
            <p>
              3. The Center establishes community of practice in Somalia and in
              the Africa in food systems and climate adaptations.
            </p>
            <p>
              4. The Center designs and supports enterprise and technology
              innovation programs that informs sustainable climate smart
              agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
