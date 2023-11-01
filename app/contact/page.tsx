import React from 'react'
import { FaEnvelope, FaGlobe, FaMobile } from 'react-icons/fa'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto duration-1000'>
          <div className='mb-4 text-gray-700 space-y-4'>
            <div className='w-full shadow-lg rounded-lg p-8'>
              <h1 className='text-2xl font-bold mb-2 text-primary'>
                Contact Information
              </h1>
              <ul>
                <li className='mb-2'>
                  <a
                    href='tell:+254722749361'
                    className='flex flex-row items-center gap-x-2'
                  >
                    <FaMobile /> +254-722-74-9361 / +252614392902
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='mailto:director@cefsafrica.com'
                    className='flex flex-row items-center gap-x-2'
                  >
                    <FaEnvelope /> director@cefsafrica.com
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='mailto:info@cefsafrica.com'
                    className='flex flex-row items-center gap-x-2'
                  >
                    <FaEnvelope /> info@cefsafrica.com
                  </a>
                </li>
                <li>
                  <a
                    href='https://cefsafricac.com'
                    target='_blank'
                    className='flex flex-row items-center gap-x-2'
                  >
                    <FaGlobe /> https://cefsafricac.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
