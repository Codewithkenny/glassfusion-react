import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu open/close state
    if (isDropdownOpen) setIsDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="bg-white text-[#13084B] py-4 shadow-md relative"> 
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Glass Fusion</Link>
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
            <Link to="/" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Home
            </Link>
            {/* Glass Types Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-sm font-semibold hover:text-blue-600 transition duration-200"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Glass Types
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 bg-primary text-white shadow-lg mt-2 rounded z-50 w-48">
                  <ul className="flex flex-col space-y-2 p-4 border-b border-white">
                    {['Balustrades', 'Shower Glass', 'Tempered Glass', 'Frosted Glass', 'Insulated Glass', 'Laminated Safety Glass', 'Colored Glass', 'Reflective Glass', 'Tempered Safety Glass', 'Clear Glass'].map((type, index) => (
                      <li key={index}>
                        <Link
                          to={`/glass-types/${type.toLowerCase().replace(/ /g, '-')}`}
                          className="block p-2 hover:bg-blue-600"
                          onClick={() => { closeDropdown(); }}
                        >
                          {type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link to="/projects" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              About
            </Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-5">
          <nav className="flex flex-col space-y-4 py-4 px-4">
            <Link to="/" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Home
            </Link>
            {/* Glass Types Dropdown in Mobile Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-sm font-semibold hover:text-blue-600 transition duration-200"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Glass Types
              </button>
              {isDropdownOpen && (
                <div className="bg-primary text-white shadow-lg mt-2 rounded z-50 w-48">
                  <ul className="flex flex-col space-y-2 p-4 border-b border-gray-300">
                    {['Balustrades', 'Shower Glass', 'Tempered Glass', 'Frosted Glass', 'Insulated Glass', 'Laminated Safety Glass', 'Colored Glass', 'Reflective Glass', 'Tempered Safety Glass', 'Clear Glass'].map((type, index) => (
                      <li key={index}>
                        <Link
                          to={`/glass-types/${type.toLowerCase().replace(/ /g, '-')}`}
                          className="block p-2 hover:bg-blue-600"
                          onClick={() => { closeDropdown(); toggleMenu(); }}
                        >
                          {type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link to="/projects" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              About
            </Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-blue-600 transition duration-200">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
