/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['robohash.org', 'res.cloudinary.com'],
},
  env: {
    registryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
  },
}



module.exports = nextConfig
