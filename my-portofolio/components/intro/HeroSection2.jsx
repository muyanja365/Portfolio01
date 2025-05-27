"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';

const HeroSection2 = () => {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Downloading CV...");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Shaping Narratives<br />
            <span className="text-amber-400">Igniting Words</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-gray-300 max-w-lg mx-auto md:mx-0">
            Crafting Stories with Passion: Discover the Work of Meisa
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-md mx-auto md:mx-0">
            Welcome to the creative world of Meisa Beale, where words are crafted into captivating stories and insightful content. Explore the journey as an award-winning writer and discover how she brings imagination to life through her unique voice and compelling narratives.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FiDownload />
              Download My CV
            </button>
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 max-w-md mx-auto w-full">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-400">Hitie Mc</h3>
            
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 234 567 890
              </p>
              
              <p className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@bohble.com
              </p>
              
              <p className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                bohble.com
              </p>
              
              <p className="flex items-center gap-3 text-gray-400 text-sm pt-4 border-t border-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;