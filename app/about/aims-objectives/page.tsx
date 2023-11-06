import BlurImage from '@/components/BlurImage'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full md:w-1/2'>
          <BlurImage
            src='/objects.jpg'
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
              Despite the existence of several food systems sustainability
              initiatives under the IGAD region including IGAD specialized
              institutions and IGAD strategy on draught disaster, Resilience and
              Sustainability Initiative (IDDRSI) which aims to end drought
              emergencies and building resilient communities in the IGAD region,
              specialized Center of Excellences in Food Systems do not exist
              with few exceptional cases in some universities.
            </p>
            <p>
              Therefore, the CEFS-Africa in Food Systems which is the first of
              its kind in Somalia and in the Africa that serves research,
              innovation, teaching, and capacity development Center where
              innovation and information on climate change and adaptation, food
              system, and nutrition will be nurtured for decision support.
            </p>
            <p>
              The Center promotes climate adaptation and integrated food and
              nutrition systems, we build and unlock natural and socio-economic
              capitals through knowledge and technology transfer, research
              innovation, and disseminating information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
