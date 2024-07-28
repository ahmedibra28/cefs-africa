import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'

export default function Navigation() {
  const menuItems = [
    { name: 'Home', href: '/#' },
    {
      name: 'About Us',
      children: [
        { name: 'Relevance, Aim & Objectives', href: '/about/aims-objectives' },
        {
          name: 'Leadership & Governance',
          href: '/about/leadership-governance',
        },
        { name: 'Partnerships', href: '/about/partnerships' },
      ],
    },
    {
      name: 'Thematic Areas',
      children: [
        { name: 'Research', href: '/thematic-areas/research' },
        { name: 'Academia', href: '/thematic-areas/academia' },
        {
          name: 'Capacity Development & Innovation',
          href: '/thematic-areas/cdi',
        },
        {
          name: 'Thematic Networking & Partnership',
          href: '/thematic-areas/tnp',
        },
      ],
    },
    // { name: 'Programmes', href: '/#' },
    { name: 'Contact Us', href: '/contact' },
    {
      name: 'Media',
      children: [
        // { name: 'News & Updates', href: '/#' },
        { name: 'Blog', href: '/blog' },
        { name: 'Gallery', href: '/gallery' },
      ],
    },
  ]

  return (
    <Fragment>
      <div className='bg-primary text-white text-center p-1'>
        <h3>Centre of Excellence in Food Systems and Climate Adaptation</h3>
        <div>
          <a
            href='https://facebook.com'
            target='_blank'
            className='btn btn-ghost'
          >
            <FaFacebookSquare className='text-lg' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            className='btn btn-ghost'
          >
            <FaTwitterSquare className='text-lg' />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            className='btn btn-ghost'
          >
            <FaLinkedin className='text-lg' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            className='btn btn-ghost'
          >
            <FaInstagramSquare className='text-lg' />
          </a>
        </div>
      </div>

      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto'
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.children ? (
                    <>
                      <a>{item.name}</a>

                      <ul className='p-2'>
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              className='whitespace-nowrap'
                              href={child.href}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link href={'/'}>
            <Image
              src='/logo.jpg'
              width={300}
              height={300}
              className='w-auto h-auto md:h-20 duration-1000'
              alt='Food Logo'
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 z-50'>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <>
                    <details className='dropdown'>
                      <summary>{item.name}</summary>
                      <ul className='p-2 w-auto'>
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              className='whitespace-nowrap'
                              href={child.href}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </>
                ) : (
                  <Link href={item.href}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end'></div>
      </div>
    </Fragment>
  )
}
