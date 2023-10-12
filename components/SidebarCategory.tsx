import { getAllCategories } from '@/services/api'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategory() {
  const [category, error] = await getAllCategories()

  return (
    <>
      {error ? (
        <div className='alert alert-error'>
          <span>{error.message}</span>
        </div>
      ) : (
        <ul className='menu bg-gray-50 w-full rounded-box'>
          <li>
            <h2 className='menu-title'>Categories</h2>
            <ul>
              {category?.map((item) => (
                <li key={item.id}>
                  <Link href={`/blog/posts?category=${item.id}`}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.name,
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </>
  )
}
