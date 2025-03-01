import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? `/wtech` : '',
  assetPrefix: isProd ? `/wtech/` : '',
  images: {
    loader: 'imgix',
    path: '',
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
}

export default nextConfig
