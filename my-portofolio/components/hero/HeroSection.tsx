'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen bg-black text-white flex items-center justify-center text-center">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#000' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Hero Content */}
      <div className="z-10">
        <h2 className="text-lg font-light text-gray-300">I Am</h2>
        <h1 className="text-5xl md:text-6xl font-bold text-white flex justify-center items-center">
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'UI/UX Designer',
              2000,
              'React Developer',
              2000,
              'Frontend Engineer',
              2000,
              'Freelancer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="bg-black p-2 rounded-full hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-black p-2 rounded-full hover:bg-white hover:text-black transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-black p-2 rounded-full hover:bg-white hover:text-black transition">
            <FaInstagram />
          </a>
          <a href="#" className="bg-black p-2 rounded-full hover:bg-white hover:text-black transition">
            <FaPinterestP />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="border-2 border-white w-6 h-10 rounded-full flex justify-center items-start p-1 animate-bounce">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
