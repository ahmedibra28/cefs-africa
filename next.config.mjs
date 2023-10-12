/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  images: {
    domains: [
      'api.cerid.so',
      'www.racearchive.org.uk',
      'www.wordstream.com',
      'seeklogo.com',
      'localhost',
      'plus.unsplash.com',
      'images.unsplash.com',
      'media.istockphoto.com',
      'thumb.ac-illust.com',
    ],
  },
}

export default withPlaiceholder(nextConfig)
