/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to output static HTML/CSS/JS files
  output: 'export',

  // Optional: Add a trailing slash to all paths (e.g., /about -> /about/)
  // This can help with compatibility on some static hosting platforms.
  trailingSlash: true,

  // Optional: Configure image optimization for static exports.
  // Since the `next dev` and `next start` servers aren't present on a static host,
  // you need to unoptimize images or use a third-party service.
  images: {
    unoptimized: true
  }

  // Note: The `output: 'export'` configuration disables API Routes and
  // server-side rendering (getServerSideProps, etc.), as they are incompatible.
}

module.exports = nextConfig