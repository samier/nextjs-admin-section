/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w0.peakpx.com",
      },
      {
        protocol: "https",
        hostname: "imgsrv.crunchyroll.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
      },
      {
        protocol: "https",
        hostname: "*.*",
      },
      {
        protocol: "https",
        hostname: "codeventure.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "172.178.125.162",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
