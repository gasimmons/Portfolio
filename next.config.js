/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',

    images: {
        unoptimized: true,
        domains: ["placeholder.svg"],
        remotePatterns: [{
            protocol: "https",
            hostname: "**",
        }],
    },

    experimental: {
        appDir: true,
    }
}

module.exports = nextConfig


