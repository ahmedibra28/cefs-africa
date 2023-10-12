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
              1. The CEFS will collaborate with the Africa Research
              Institutions, including African Universities, global research
              bodies and other international research partners on food security,
              policy, and capacity development and climate change.
            </p>

            <p>
              2.The Centre establishes and promotes research areas on climate
              adaptation, food security, livelihood systems and resilience
              building through collaboration and working with stakeholders and
              bringing together global food security experts.
            </p>
            <p>
              3. The Centre explores available food security and climate
              adaptation data and envisages on how to utilize it to inform
              decision and transform climate adaptation and agriculture
              production systems.
            </p>
            <p>
              4. The Centre conducts research studies, assessments and surveys
              on food security, climate change and adaptation, the Centre
              focuses on all productive sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}