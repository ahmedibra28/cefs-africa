import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full'>
          <div className='mb-4 text-gray-600 space-y-4'>
            <p>CEFS-CA is an independent Centre led by Board of Directors</p>
            <p>
              <span className='font-bold text-primary me-1'>
                Board of Directors (BoD)
              </span>
              is the governing body of the Center. The Board provides strategic
              direction and raises funds for the Center. The Center is expected
              to generate revenue.
            </p>
            <p>
              CEFS-CA is led by a
              <span className='font-bold text-primary mx-1'>Director </span> who
              is responsible for long-term goals and strategic directions; the
              Director is also the Chief Executive of the day-to-day operations
              of the Center.
            </p>
            <p>
              The Center has a
              <span className='font-bold text-primary mx-1'>Secretariat</span>
              comprising technical persons in the four thematic areas and
              administration that handle daily logistics of the Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
