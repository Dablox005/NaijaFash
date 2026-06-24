/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'www.zttw.store',
                port: '',
                pathname: '/**',
          },    
          {
                protocol: 'https',
                hostname: 'swestkicks.co.za',
                port: '',
                pathname: '/**',
          },    
          {
            protocol: 'https',
            hostname: 'highfashionbyjol.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'ash-luxe.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'sfycdn.speedsize.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'www.pithafrica.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'www.garmspot.com',
            port: '',
            pathname: '/**',
            },   
            {
            protocol: 'https',
            hostname: 'i0.wp.com',
            port: '',
            pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
