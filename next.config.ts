export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    // also other fromats like jpg, jpeg, png are working without adding them here
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopware.store",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/password",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
