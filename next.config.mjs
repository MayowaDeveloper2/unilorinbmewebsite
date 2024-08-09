/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "mayowadigital.com.ng",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  