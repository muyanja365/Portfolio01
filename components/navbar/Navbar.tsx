"use client";

import React, { useState } from 'react';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaSun, FaMoon } from 'react-icons/fa6';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'en',
    name: 'English',
    flag: 'https://flagcdn.com/us.svg'
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguageOpen(!languageOpen);

  const navItems = [
    { name: 'Home', active: true },
    { name: 'Services', active: false },
    { name: 'Portfolio', active: false },
    { name: 'Pricing', active: false },
    { name: 'Blog', active: false },
    { name: 'Contact', active: false },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/fr.svg' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaXTwitter />, label: 'Twitter' },
    { icon: <FaYoutube />, label: 'YouTube' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn' },
  ];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setSelectedLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <>
      <nav className={`${darkMode ? 'bg-[#1e1e26]' : 'bg-gray-100'} text-${darkMode ? 'white' : 'gray-800'} px-4 py-3 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300 shadow-md`}>
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden text-xl focus:outline-none"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-lg font-semibold hover:text-[#e4cc8c] transition-colors">
              Robert.<span className="text-[#e4cc8c]">Muyanja</span>
            </span>
          </div>
        </div>

        {/* Center: Navigation Links - Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className={`${item.active ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'} cursor-pointer transition-colors duration-200 px-2 py-1 rounded`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Language + Icons */}
        <div className="flex items-center gap-4 text-sm">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 cursor-pointer focus:outline-none group"
              aria-label="Change language"
              aria-expanded={languageOpen}
            >
              <Image
                src={selectedLanguage.flag}
                alt={selectedLanguage.name}
                width={20}
                height={14}
                className="rounded-sm"
              />
              <span className="group-hover:text-[#e4cc8c] transition-colors">{selectedLanguage.name}</span>
              <MdArrowDropDown className={`text-xl transition-transform duration-200 ${languageOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#2a2a35] rounded-md shadow-lg z-50 border border-gray-700 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-[#3a3a45] transition-colors ${selectedLanguage.code === lang.code ? 'bg-[#3a3a45]' : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={20}
                      height={14}
                      className="rounded-sm"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex gap-3 text-base">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                aria-label={social.label}
                className={`hover:text-[#e4cc8c] cursor-pointer transition-colors duration-200 ${darkMode ? 'text-white' : 'text-gray-700'} p-1`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            className="text-xl focus:outline-none p-1 hover:text-[#e4cc8c] transition-colors duration-200"
          >
            {darkMode ? (
              <FaSun className="text-[#e4cc8c]" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1e1e26] bg-opacity-95 z-40 pt-20 px-4">
          <ul className="flex flex-col gap-1 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className={`block py-4 px-4 ${item.active ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'} hover:bg-[#2a2a35] rounded transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex justify-center gap-6 mt-8 text-2xl py-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                aria-label={social.label}
                className="text-white hover:text-[#e4cc8c] transition-colors p-2"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              className="text-2xl focus:outline-none p-2 text-[#e4cc8c]"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;