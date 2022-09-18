const nextConfig = {
    experimental: {
        scrollRestoration: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    publicRuntimeConfig: {},
    serverRuntimeConfig: {},
    compress: false,
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async headers() {
        const globalHeaders = [
            {
                key: 'Cache-Control',
                value: '600',
            },
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
            },
            {
                key: 'X-DNS-Prefetch-Control',
                value: 'off',
            },
            {
                key: 'X-Download-Options',
                value: 'noopen',
            },
            {
                key: 'X-Frame-Options',
                value: 'sameorigin',
            },
            {
                key: 'X-Permitted-Cross-Domain-Policies',
                value: 'none',
            },
            {
                key: 'X-XSS-Protection',
                value: '0',
            },
        ];

        if (process.env.NODE_ENV !== 'development') {
            globalHeaders.push({
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; preload',
            });
        }

        return [
            {
                source: '/',
                headers: globalHeaders,
            },
            {
                source: '/:path*',
                headers: globalHeaders,
            },
        ];
    },
};

module.exports = nextConfig;
