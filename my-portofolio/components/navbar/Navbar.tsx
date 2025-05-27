 import React from 'react';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaSun } from 'react-icons/fa6';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e26] text-white px-4 py-3 flex justify-between items-center">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt3 className="text-xl cursor-pointer" />
        <div className="flex items-center gap-2">
          {/* <Image src="/logo.svg" alt="Logo" width={24} height={24} /> */}
          <span className="text-lg font-semibold text-white">Robert.<span className="text-[#e4cc8c]">Muyanja</span></span>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="text-white font-semibold cursor-pointer">Home</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Services</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Portfolio</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Pricing</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Blog</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Contact</li>
      </ul>

      {/* Right: Language + Icons */}
      <div className="flex items-center gap-4 text-sm">
        {/* Language */}
        <div className="flex items-center gap-1 cursor-pointer">
          <Image
            src="https://flagcdn.com/us.svg"
            alt="English"
            width={20}
            height={14}
            className="sm"
          />
          <span>English</span>
          <MdArrowDropDown className="text-xl" />
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-3 text-white text-base">
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
          <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
          <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
        </div>

        {/* Theme Toggle */}
        <FaSun className="text-xl text-[#e4cc8c] cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
