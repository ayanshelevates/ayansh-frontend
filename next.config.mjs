/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ayanshcms.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;