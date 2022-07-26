/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')

const runtimeCaching = require('next-pwa/cache')

const ContentSecurityPolicy = `
   default-src 'self';
   img-src 'self' data:;
   script-src 'self' 'unsafe-eval';
   connect-src 'self' vitals.vercel-insights.com;
   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
   font-src 'self' https://fonts.gstatic.com;  
 `

const securityHeaders = () => [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
]

const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
    /*  | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName?: boolean,
      // Enabled by default.
      ssr?: boolean,
      // Enabled by default.
      fileName?: boolean,
      // Empty by default.
      topLevelImportPaths?: string[],
      // Defaults to ["index"].
      meaninglessFileNames?: string[],
      // Enabled by default.
      cssProp?: boolean,
      // Empty by default.
      namespace?: string,
      // Not supported yet.
      minify?: boolean,
      // Not supported yet.
      transpileTemplateLiterals?: boolean,
      // Not supported yet.
      pure?: boolean,
    } */
  },
  reactStrictMode: true,
  i18n: {
    locales: ['es-AR'],
    defaultLocale: 'es-AR',
    localeDetection: false,
  },
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders(),
      },
    ]
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
}

module.exports = nextConfig
