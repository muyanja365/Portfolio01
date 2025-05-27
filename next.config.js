// next.config.js
const isGithubPages = process.env.NODE_ENV === 'production';

const repoName = 'Portfolio01'; // replace with your actual GitHub repo name

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
};

