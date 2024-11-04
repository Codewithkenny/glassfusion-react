import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-section.jpeg';

const Hero = () => {
  return (
    <div
      className="relative w-full  h-[500px] bg-cover  bg-no-repeat bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#13084B] to-transparent opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Glass Fusion
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Discover the beauty of glass fabrication for your next project.
        </p>
        <div className="flex space-x-4">
          <Link to="/about">
            <button className="bg-[#C9CBDC] text-[#13084B] px-6 py-3 rounded-full shadow hover:bg-opacity-80 transition duration-200">
              Learn More
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-[#13084B] text-white px-6 py-3 rounded-full shadow hover:bg-opacity-80 transition duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
