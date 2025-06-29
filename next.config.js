/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [{
            source: '/api/:path*',
            destination: 'https://go-vercel-wedding-invitation.vercel.app/api/:path*',
        }, ];
    },
    images: {
        domains: [
            'res.cloudinary.com',
            // add other domains as needed
        ],
    },
};

module.exports = nextConfig;