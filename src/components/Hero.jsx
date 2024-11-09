import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-section.jpeg';

const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Single Stripe Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(
            300deg,
            rgba(19, 8, 75, 0.7) 50%,
            transparent 50%
          )`,
        }}
      ></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Glass Fusion
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Discover the beauty of glass fabrication for your next project.
        </p>
        <div className="flex space-x-4">
          <Link to="/about">
          <button className="px-6 py-2 rounded-full border border-primary bg-primary text-white transition-all duration-300 hover:bg-transparent hover:text-primary">
                Learn More
          </button>
          </Link>
          <Link to="/contact">
          <button className="px-6 py-2 rounded-full border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
