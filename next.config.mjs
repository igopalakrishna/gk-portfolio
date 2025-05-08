/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js to compile framer-motion’s ESM build so client boundaries work.
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
