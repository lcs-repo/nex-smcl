/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  export default nextConfig;