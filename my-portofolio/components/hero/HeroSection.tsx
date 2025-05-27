'use client';

import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative h-screen bg-black text-white flex items-center justify-center text-center overflow-hidden">
      {/* Particles Background - CSP compliant version */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Content */}
      <div className="z-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl font-light text-gray-300 mb-2">I Am</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 min-h-[4rem]">
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
            style={{ display: 'inline-block' }}
          />
        </h1>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-4">
          {[
            { icon: <FaFacebookF />, label: "Facebook" },
            { icon: <FaLinkedinIn />, label: "LinkedIn" },
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaPinterestP />, label: "Pinterest" },
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              aria-label={social.label}
              className="bg-transparent border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="animate-bounce w-6 h-10 mx-auto border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-1 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;