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
              1. The Centre will develop both short and structured
              curriculum-based academic training courses and programs in the
              Food Systems and create knowledge platform. The Centre will make
              available in all curriculums related to food security.
            </p>

            <p>
              2. In Collaboration with University for Peace and other regional
              and global research institutions and universities, the Centre will
              enroll postgraduate students and provide technical training in the
              field of food security and climate change.
            </p>

            <p>
              3.The Centre will establish and maintain subject matter experts
              (SME) on food security and climate adaptation as well as the
              relevant learning technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
