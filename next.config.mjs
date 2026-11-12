import legacyRedirects from './legacy-redirects.json' with {type:'json'};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {unoptimized:true},
  poweredByHeader:false,
  devIndicators:false,
  experimental:{globalNotFound:true},
  async redirects(){
    return Object.entries(legacyRedirects).map(([source,destination])=>({source,destination,permanent:true}));
  }
};
export default nextConfig;
