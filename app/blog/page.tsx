import BlurImage from '@/components/BlurImage'
import SidebarCategory from '@/components/SidebarCategory'
import { getPostCount, getPosts } from '@/services/api'
import Link from 'next/link'
import React from 'react'

export default async function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined
  }
}) {
  const { page = 1 } = searchParams
  const limit = 12

  const [count = 1, errorCount] = await getPostCount()
  const [posts, error] = await getPosts({ page: Number(page), limit })

  return (
    <div className='max-w-7xl mx-auto py-16 px-8'>
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        {error || errorCount ? (
          <div className='alert alert-error'>
            <span>{error?.message || errorCount?.message}</span>
          </div>
        ) : (
          <div className='w-full'>
            <div className='mb-4 text-gray-700 space-y-4'>
              <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-5'>
                {posts?.map((post) => (
                  <div
                    key={post.id}
                    className='card card-compact bg-base-100 shadow-xl w-full lg:w-[48%]'
                  >
                    <figure>
                      <BlurImage
                        src={
                          post._embedded['wp:featuredmedia']?.[0]?.source_url ||
                          'https://thumb.ac-illust.com/73/7387030e5a5600726e5309496353969a_t.jpeg'
                        }
                        width={300}
                        height={300}
                        alt='Food Logo'
                        className='w-full h-[300px] rounded-2xl object-cover duration-700 hover:scale-105 '
                      />
                    </figure>
                    <div className='card-body'>
                      <div
                        className='card-title'
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                      <span className='text-xs mt-2'>
                        {post.date_gmt?.replaceAll('T', ' ')}
                      </span>
                      <div className='card-actions justify-end'>
                        <Link
                          href={`/blog/posts/${post.id}`}
                          className='btn btn-ghost text-primary'
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='text-center'>
              <div className='join'>
                <Link
                  href={`/blog?page=${Number(page) > 1 ? Number(page) - 1 : 1}`}
                  className='join-item btn'
                >
                  «
                </Link>
                <button className='join-item btn'>Page {page}</button>
                <Link
                  href={`/blog?page=${
                    Math.floor(Number(count)) / limit > Number(page)
                      ? Number(page) + 1
                      : Number(page)
                  }`}
                  className='join-item btn'
                >
                  »
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className='w-full md:w-1/3'>
          <SidebarCategory />
        </div>
      </div>
    </div>
  )
}
