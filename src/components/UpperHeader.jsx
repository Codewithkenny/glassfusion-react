import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpperHeader = () => {
  return (
    <div className="bg-[#D8DCE9] text-[#13084B] py-2">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left section: Phone, Contact Us */}
        <div className="flex space-x-4">
          <span>📞 +234 815 757 4317</span>
          <a href="mailto:info@glassfusion.ng" className="hover:underline">
            Contact Us
          </a>
        </div>
        
        {/* Right section: Social Links and Get Quote Button */}
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/glassfusionafrica" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/glass.fusion" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <Link to="/contact">
          <button className="bg-[#13084B] text-white px-4 py-1 rounded-full hover:bg-opacity-90 transition">
            Get Quote
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
