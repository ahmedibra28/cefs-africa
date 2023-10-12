import BlurImage from '@/components/BlurImage'
import SidebarCategory from '@/components/SidebarCategory'
import { getPost } from '@/services/api'
import React from 'react'

export default async function Page({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { id } = params

  const [post, error] = await getPost({ id: Number(id) })

  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      {error ? (
        <div className='alert alert-error'>
          <span>{error?.message}</span>
        </div>
      ) : (
        <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-5'>
          <div className='w-full lg:w-[67%]'>
            <figure>
              <BlurImage
                src={
                  post?._embedded['wp:featuredmedia']?.[0]?.source_url ||
                  'https://thumb.ac-illust.com/73/7387030e5a5600726e5309496353969a_t.jpeg'
                }
                width={300}
                height={300}
                alt='Food Logo'
                className='w-full h-[600px] rounded-2xl object-cover duration-700 hover:scale-105'
              />
            </figure>

            <div className='card-body text-gray-700'>
              <div
                className='card-title'
                dangerouslySetInnerHTML={{
                  __html: post?.title.rendered || '',
                }}
              />
              <span className='text-xs my-2'>
                {post?.date_gmt?.replaceAll('T', ' ')}
              </span>
              <div
                className='text-gray-600'
                dangerouslySetInnerHTML={{
                  __html: post?.excerpt.rendered || '',
                }}
              />

              <hr className='my-5' />
              <div
                dangerouslySetInnerHTML={{
                  __html: post?.content.rendered || '',
                }}
              />
            </div>
          </div>

          <div className='w-full md:w-[30%]'>
            <SidebarCategory />
          </div>
        </div>
      )}
    </div>
  )
}
