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
              initiative under the IGAD region including IGAD specialized
              institutions and IGAD strategy on Draught Disaster Resilience and
              Sustainability Initiative (IDDRSI) which aims ending drought
              emergencies and building resilient communities in the IGAD region,
              specialized Centre of Excellences in Food Security do not exist
              with few exceptional cases in some Universities.
            </p>
            <p>
              Therefore, the UPEACE CoE in Food Security which is first of its
              kind in Somalia and in the HoA, serves both research and teaching
              Centre where innovation and information on food security, climate
              change and nutrition will be natured for decision support.
            </p>
            <p>
              The aim of the center is to make difference in the field of Food
              Security by bringing together innovative research on the
              production process, particularly in Somalia and generally in the
              Horn of Africa (HoA) region.
            </p>
            <p>
              The Centre will focus on building and unlocking human, social,
              natural, financial, manufacturing and intellectual capitals
              through knowledge and technology transfer, research innovation,
              disseminating of information and promoting integrated food and
              nutrition systems in Somalia and in the HoA.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
