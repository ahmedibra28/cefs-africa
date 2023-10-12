import React from 'react'

import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'

export async function BlurImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const { base64 } = await getPlaiceholder(buffer)

  return (
    <Image
      src={src}
      width={width}
      height={height}
      blurDataURL={base64}
      placeholder='blur'
      alt={alt}
      className={`${className}`}
      quality={100}
    />
  )
}

export default BlurImage
