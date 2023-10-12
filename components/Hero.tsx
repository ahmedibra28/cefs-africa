'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

export default function Hero() {
  const progressCircle = useRef<HTMLDivElement | null>(null)
  const progressContent = useRef<any | null>(null)
  const onAutoplayTimeLeft = (_: unknown, time: number, progress: number) => {
    progressCircle.current?.style.setProperty(
      '--progress',
      (1 - progress) as any
    )
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=100',
      alt: 'Food Logo',
      caption:
        'Climate change and adaptation, and capacity development and innovation',
    },
    {
      image:
        'https://images.unsplash.com/photo-1624324378932-68e20f332982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100',
      alt: 'Food Logo',
      caption:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore odio, ea eaque sint quasi vel ratione blanditiis.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1562089727-90aa996a6f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=100',
      alt: 'Food Logo',
      caption: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=100',
      alt: 'Food Logo',
      caption:
        'Climate change and adaptation and capacity development and innovation',
    },
  ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              width={1000}
              height={1000}
              className='w-full h-[30vh] md:h-[calc(100vh-192px)] object-cover'
              alt={slide.alt}
            />
            {slide?.caption && (
              <div className='mt-20 md:mt-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/50 w-full text-center h-auto md:h-24 flex  justify-center items-center'>
                <div>
                  <h1 className='text-lg sm:text-xl md:text-2xl'>
                    {slide.caption}
                  </h1>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        <div className='autoplay-progress' slot='container-end'>
          <div
            ref={progressCircle}
            className='p-5 w-10 h-10 bg-white rounded-full flex justify-center items-center text-primary border-2 border-primary absolute right-2 top-2 z-10'
          >
            <span ref={progressContent}></span>
          </div>
        </div>
      </Swiper>
    </>
  )
}
