import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpperHeader = () => {
  return (
    <div className="bg-[#D8DCE9] text-[#13084B] py-2">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left section: Phone, Contact Us */}
        <div className="flex items-center space-x-4 flex-wrap sm:space-x-6 w-full sm:w-auto mt-2 mb-0">
          <span className="block sm:inline">📞 +234 815 757 4317</span>
          {/* Hide "Contact Us" on mobile */}
          <a
            href="mailto:info@glassfusion.ng"
            className="relative text-primary group hidden sm:block"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>

        {/* Right section: Social Links and Get Quote Button */}
        <div className="flex items-center space-x-4 flex-wrap sm:space-x-6 justify-end mt-2 sm:mt-0 w-full sm:w-auto">
          {/* Hide social icons on mobile */}
          <a href="https://www.facebook.com/glassfusionafrica" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hidden sm:block">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/glass.fusion" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 hidden sm:block">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@GLASSFUSION" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 hidden sm:block">
            <FaYoutube />
          </a>
          {/* Always visible Get a quote button */}
          <Link to="/contact">
            <button className="bg-primary text-white px-4 py-1 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white mt-2 sm:mt-0 ml-4 sm:ml-0 mb-2 sm:mb-0">
              Get a quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
