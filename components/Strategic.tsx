import Link from 'next/link'
import React from 'react'
import {
  FaGraduationCap,
  FaHandshake,
  FaLayerGroup,
  FaSearch,
} from 'react-icons/fa'

export default function Strategic() {
  const strategics = [
    {
      title: 'Research',
      content:
        'The CEFS will collaborate with Africa Research & Innovation Institutions, including African Universities, global research bodies, and other international research partners on food system, policy, and capacity development, and climate change adaptation.',
      icon: <FaSearch className='text-4xl md:text-5xl' />,
      link: '/thematic-areas/research',
    },
    {
      title: 'Academia',
      content:
        'The Center will develop both short and structured curriculum-based academic training courses and programs in the food systems and create knowledge platform. The Center will make available in all curriculums related to food system.',
      icon: <FaGraduationCap className='text-4xl md:text-5xl' />,
      link: '/thematic-areas/academia',
    },
    {
      title: 'Capacity Development & Innovation',
      content:
        'The Center provides services on designing policies and policy frameworks, operational strategies, and plans on productive sectors in Somalia and in the Africa to enable relevant authorities, Ministries, Industries, and Academic research and innovation institutions to focus on sustainable food systems, climate change and socio-economic development.',
      icon: <FaLayerGroup className='text-4xl md:text-5xl' />,
      link: '/thematic-areas/cdi',
    },
    {
      title: 'Thematic Networking & Partnership',
      content:
        'The Centre believes the importance of partnership. Sustainable food systems system can only be achieved through effective collaboration, enhanced coordination, and creating synergies of working together.',
      icon: <FaHandshake className='text-4xl md:text-5xl' />,
      link: '/thematic-areas/tnp',
    },
  ]
  return (
    <div className='bg-primary text-white'>
      <div className='max-w-7xl mx-auto py-16 px-8'>
        <h1 className='text-center font-bold uppercase text-3xl mb-2'>
          Strategic Focus Areas
        </h1>
        <p className='text-center w-full md:w-[80%] mx-auto'>
          These four major areas of focusing will be interlinked to ensure that
          the big, picture on food systems w we miegatew it at ecsion making
          evels to ensure sustainabie or tood and nutrition system at grassroots
          level.
        </p>

        <div className='flex flex-col md:flex-row flex-wrap justify-between gap-5 md:gap-14 my-14'>
          {strategics.map((strategic, index) => (
            <div
              key={index}
              className='w-full md:w-[46%] shadow-lg rounded-lg p-4'
            >
              <div className='flex flex-col md:flex-row items-start'>
                <div className='mr-5 w-24'>{strategic.icon}</div>
                <div>
                  <h1 className='text-2xl font-bold'>{strategic.title}</h1>
                  <p>{strategic.content}</p>
                  <Link
                    href={strategic.link}
                    className='btn btn-outline btn-ghost border-white text-white mt-5'
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
