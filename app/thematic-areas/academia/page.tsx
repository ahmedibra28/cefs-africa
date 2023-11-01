import BlurImage from '@/components/BlurImage'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full md:w-1/2'>
          <BlurImage
            src='/academia.jpg'
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
              The Center will develop both short and structured curriculum-based
              academic training courses and programs in the Food Securities and
              create knowledge platform. The Center will make available in all
              curriculums related to food security.
            </p>
            <p>
              In Collaboration with accredited Universities and other regional
              and global research institutions and universities, the Center will
              enroll postgraduate students and provide technical training in the
              field of food securities and climate change.
            </p>
            <p>
              The Center will establish and maintain subject matter experts
              (SME) on food Securities and climate change adaptation as well as
              the relevant learning technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
