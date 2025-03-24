import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/glass_fusion_hero_bg.jpg',
    title: 'Build With Glass',
    description: 'The professional architecture glass manufacturer',
  },
  {
    image: '/glass_fusion_hero_bg_2.jpg',
    title: 'Innovate with Transparency',
    description: 'Explore modern glass solutions for every space',
  },
  {
    image: '/glass_fusion_hero_bg_3.jpg',
    title: 'Unleash Creativity',
    description: 'Transform your vision with our premium glass products',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Slide Images */}
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {slides[currentSlide].description}
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link to="/about">
              <button className="px-6 py-3 text-sm md:text-base bg-[#00bbf0] text-white font-semibold border border-primary shadow-md transition-all duration-300 hover:bg-transparent hover:text-primary">
                LEARN MORE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-3 text-sm md:text-base bg-transparent text-white font-semibold border border-white shadow-md transition-all duration-300 hover:bg-white hover:text-black">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'
              } transition-all duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
