import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Capacity Development & Innovation',
  description: 'Capacity Development & Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className='text-sm breadcrumbs bg-primary text-white h-auto flex items-center p-8'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>Thematic Areas</li>
          <li className='whitespace-pre-wrap'>
            Capacity Development & Innovation
          </li>
        </ul>
      </div>

      {children}
    </div>
  )
}
