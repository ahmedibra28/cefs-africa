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
      image: '/cdi.jpg',
      alt: 'Food Logo',
      caption:
        'Climate change and adaptation, and capacity development and innovation',
    },
    {
      image: '/climate.jpg',
      alt: 'Food Logo',
    },
    {
      image: '/objects.jpg',
      alt: 'Food Logo',
    },
    {
      image: '/samtec.jpg',
      alt: 'Food Logo',
    },
    { image: '/mator.jpeg', alt: 'Motor' },
    { image: '/geel.jpg', alt: 'Geel' },
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
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGNgYGBg+H9rgd//J6ujQWww+H9pefv/UzO2IQS+vUv7cud4JogDAMgDEhA+9jbyAAAAAElFTkSuQmCC'
              placeholder='blur'
              className='w-full h-[30vh] md:h-[calc(100vh-192px)] object-cover'
              alt={slide.alt}
              style={{ objectFit: 'cover' }}
              unoptimized
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
