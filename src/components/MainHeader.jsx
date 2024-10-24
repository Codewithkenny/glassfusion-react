import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons for the hamburger and close button
// import logoImage from "../assets/gf-logo.png"


const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <div className="bg-white text-[#13084B] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Glass Fusion</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links Container for Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex space-x-12">
            <a href="/" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Home
            </a>
            <a href="/about" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              About
            </a>
            <a href="/projects" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Projects
            </a>
            <a href="/contact" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-5">
          <nav className="flex flex-col space-y-4 py-4 px-4">
            <a href="#home" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Home
            </a>
            <a href="#services" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Services
            </a>
            <a href="#projects" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Projects
            </a>
            <a href="#about" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              About Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
