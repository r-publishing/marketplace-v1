/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['robohash.org', 'res.cloudinary.com'],
},
  env: {
    registryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
  },
}



module.exports = nextConfig
