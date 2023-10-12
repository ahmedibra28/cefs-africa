import Hero from '@/components/Hero'
import Strategic from '@/components/Strategic'
import WhoVisMis from '@/components/WhoVisMis'
import { Fragment } from 'react'

export default async function Home() {
  return (
    <Fragment>
      <Hero />
      <WhoVisMis />
      <Strategic />
      <div className='mb-14'></div>
    </Fragment>
  )
}
