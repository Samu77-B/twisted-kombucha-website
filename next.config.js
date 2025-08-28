/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['cdn.shopify.com', 'images.unsplash.com'],
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/twisted-kombucha-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/twisted-kombucha-website/' : '',
}

module.exports = nextConfig
