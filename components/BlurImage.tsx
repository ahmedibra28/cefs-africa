import React from 'react'

import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'

export async function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  local = false,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  local?: boolean
}) {
  if (local) {
    const base64 =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGNgYGBg+H9rgd//J6ujQWww+H9pefv/UzO2IQS+vUv7cud4JogDAMgDEhA+9jbyAAAAAElFTkSuQmCC'

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
        style={{ objectFit: 'cover' }}
        unoptimized
      />
    )
  }
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
      style={{ objectFit: 'cover' }}
    />
  )
}

export default BlurImage
