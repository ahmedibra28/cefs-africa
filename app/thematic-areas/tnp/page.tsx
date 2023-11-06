import BlurImage from '@/components/BlurImage'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full md:w-1/2'>
          <BlurImage
            src='/tnp.jpg'
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
              1. The Center believes the importance of collaboration and
              partnership. Sustainable food system systems can only be achieved
              through effective collaboration, enhanced coordination, and
              creating synergies of working together.
            </p>
            <p>
              2. The Center establishes effective key partners in research, in
              academia, and in capacity development and program implementations.
            </p>
            <p>
              3. The Center will map out partners and government institutions
              focusing on food systems and climate change and establish areas of
              Sequencing Layering & Integration (SLI)- an integration of
              intentional layering and sequencing of multi-sectoral
              interventions and the collaborations of actors in order to prevent
              or reduce the drivers and effects of shocks and stresses that
              undermine the food systems and climate adaptation programs and the
              long-term wellbeing of the people of Somalia.{' '}
            </p>
            <p>
              4. The Center will play an effective role in food system
              coordination, programing, climate change adaptation and financing
              and policy advice.
            </p>
            <p>
              5. The Center will Work together with UN agencies, Bilateral
              institutions, Donors, International organizations, National
              institutions, and Private Sector Actors in the field of food
              systems and climate change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
