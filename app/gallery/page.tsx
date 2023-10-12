import React from 'react'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto duration-1000'>
          <div className='mb-4 text-gray-700 space-y-4'>
            <div className='w-full shadow rounded-lg p-8 text-center'>
              <p className='text-red-300'>
                Sorry, there is no content available for this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
