import type { NextConfig } from "next";

// No `output` mode is set on purpose. This site deploys to Vercel, which uses its
// own Build Output API and never reads `.next/standalone`. Setting
// `output: "standalone"` would only add build time and opt into a known
// Turbopack tracing bug (vercel/next.js#88844).
//
// If this ever moves to Docker or a VM, add `output: "standalone"` back, and
// remember `server.js` does not serve `public/` or `.next/static` by itself:
//   cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ]
  },
};

export default nextConfig;
