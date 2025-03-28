/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["placeholder.svg"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    // Enable CSS modules
    cssModules: true,
    // Ensure CSS order is preserved
    optimizeCss: false,
    // Transpile specific packages if needed
    transpilePackages: [],
    // Experimental features
    experimental: {
        // Enable app directory features
        appDir: true,
        // Improve CSS loading
        optimizeCss: true,
        // Improve font loading
        fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
    },
}

module.exports = nextConfig


