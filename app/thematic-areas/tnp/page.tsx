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
              1.The Centre believes the importance of partnership. Sustainable
              food security systems can only be achieved through effective
              collaboration, enhanced coordination, and creating synergies of
              working together.
            </p>

            <p>
              2.The Centre establishes effective key partners in research, in
              academia and in capacity development and program implementations.
            </p>

            <p>
              3. The Centre will map out partners and government institutions
              focusing on food systems and climate change and establish areas of
              support and collaborations.
            </p>

            <p>
              4. The Centre will play an effective role in food security
              coordination, programming, and policy advice.
            </p>

            <p>
              5. The Centre will work together with UN agencies, Bi-lateral
              institutions, Donors, International organizations, National
              institutions, and the private sector in the field of food systems
              and climate change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
