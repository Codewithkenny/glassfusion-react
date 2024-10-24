import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const UpperHeader = () => {
  return (
    <div className="bg-[#D8DCE9] text-[#13084B] py-2">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left section: Phone, Contact Us */}
        <div className="flex space-x-4">
          <span>📞 +234 815 757 4317</span>
          <a href="mailto:nfo@glassfusion.ng " className="hover:underline">
            Contact Us
          </a>
        </div>
        {/* Right section: Social Links */}
        <div className="flex space-x-4">
        <a href="https://www.facebook.com/glassfusionafrica" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/glass.fusion" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
          <FaInstagram />
        </a>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
