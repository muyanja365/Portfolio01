// import type { NextConfig } from "next";
// import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required to work with next/image on static sites
  },
  trailingSlash: true, // ensure URLs work properly on GitHub Pages
  basePath: '/Portfolio01', // this matches your GitHub repo name
};

export default nextConfig;
