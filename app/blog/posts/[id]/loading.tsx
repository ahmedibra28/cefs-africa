import React from 'react'

export default function loading() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-5'>
        <div className='w-full lg:w-[67%]'>
          <div className='mb-4 space-y-4'>
            <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-5'>
              {[1]?.map((item) => (
                <div
                  key={item}
                  className='card card-compact shadow-xl w-full lg:w-[100%] h-[600px] bg-gray-200 animate-pulse'
                >
                  <div className='w-full h-[500px] object-cover duration-700 hover:scale-105'></div>
                  <div className='card-body'>
                    <h2 className='card-title h-10 w-[80%]'></h2>

                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                    <p className='bg-gray-400 w-full h-8'></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full md:w-[30%] animate-pulse'>
          <ul className='menu bg-gray-200 w-full rounded-box h-auto'>
            <li>
              <h2 className='menu-title h-8 bg-gray-300 w-full mb-5'></h2>
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
                  <li key={item} className='mb-2'>
                    <div className='text-primary w-full bg-gray-400 h-8 rounded-none'></div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
