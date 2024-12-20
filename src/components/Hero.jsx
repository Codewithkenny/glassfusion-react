import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-section.jpeg'; // Place your image path here

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(heroRef.current);
        }
      },
      {
        threshold: 0.1, // When 10% of the element is in the viewport
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[500px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: isVisible ? `url(${heroImage})` : 'none', // Lazy load the image
        transition: 'background-image 0.3s ease-in-out', // Smooth transition for loading
      }}
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
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          Welcome to Glass Fusion
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Discover the beauty of glass fabrication for your next project.
        </p>

        {/* Buttons */}
        <div className="space-y-3 md:space-x-4 md:space-y-0 flex md:flex-row flex-col w-full md:w-auto max-w-[90%] md:max-w-none">
          <Link to="/about">
            <button className="w-full md:w-auto px-8 py-3 text-sm md:text-base rounded-full border border-primary bg-primary text-white font-semibold shadow-md transition-all duration-300 hover:bg-transparent hover:text-primary">
              LEARN MORE
            </button>
          </Link>
          <Link to="/contact">
            <button className="w-full md:w-auto px-8 py-3 text-sm md:text-base rounded-full border border-primary text-primary font-semibold shadow-md transition-all duration-300 hover:bg-primary hover:text-white">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
