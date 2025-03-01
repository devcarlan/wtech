import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? `/wtech` : '',
  assetPrefix: isProd ? `/wtech/` : '',
}

export default nextConfig
