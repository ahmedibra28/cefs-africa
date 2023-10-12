import Link from 'next/link'
import React from 'react'
import {
  FaEnvelope,
  FaFacebookSquare,
  FaGlobe,
  FaInstagramSquare,
  FaLinkedin,
  FaMobile,
  FaTwitterSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-primary text-white'>
      <div className='max-w-7xl mx-auto py-16 px-8'>
        <div className='flex flex-col md:flex-row flex-wrap justify-between gap-5 my-14'>
          {/* Fist */}
          <div className='w-full md:w-[31%] shadow-lg rounded-lg p-4'>
            <h1 className='text-2xl font-bold mb-2'>Thematic Focus Area</h1>
            <ul>
              <li className='mb-2'>
                <Link href='#'>Research</Link>
              </li>
              <li className='mb-2'>
                <Link href='#'>Academia</Link>
              </li>
              <li className='mb-2'>
                <Link href='#'>Capacity Development and Innovation</Link>
              </li>
              <li>
                <Link href='#'>Thematic Networking and Partnership</Link>
              </li>
            </ul>
          </div>

          {/* Second */}
          <div className='w-full md:w-[31%] shadow-lg rounded-lg p-4'>
            <h1 className='text-2xl font-bold mb-2'>Information Centre</h1>
            <ul>
              <li className='mb-2'>
                <Link href='#'>Relevance, Aim and Objectives</Link>
              </li>
              <li className='mb-2'>
                <Link href='#'>Leadership & Governance</Link>
              </li>
              <li>
                <Link href='#'>Partnerships</Link>
              </li>
            </ul>
          </div>

          {/* Third */}
          <div className='w-full md:w-[31%] shadow-lg rounded-lg p-4'>
            <h1 className='text-2xl font-bold mb-2'>Contact Information</h1>
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
                  href='mailto:akhalif@cefsafrica.com'
                  className='flex flex-row items-center gap-x-2'
                >
                  <FaEnvelope /> akhalif@cefsafrica.com
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

        <hr className='my-10' />

        <div className='text-center'>
          <h3>{new Date().getFullYear()} CEFS. All Rights Reserved.</h3>
          <div>
            <button className='btn btn-ghost'>
              <FaFacebookSquare className='text-lg' />
            </button>
            <button className='btn btn-ghost'>
              <FaTwitterSquare className='text-lg' />
            </button>
            <button className='btn btn-ghost'>
              <FaLinkedin className='text-lg' />
            </button>
            <button className='btn btn-ghost'>
              <FaInstagramSquare className='text-lg' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
