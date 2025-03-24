import React from 'react';
import Slider from 'react-slick';
import { Link, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/gallery/balustrade-thumbnail1.jpeg';
import image2 from '../assets/facade.jpg';
import image3 from '../assets/glass.jpg';
import image4 from '../assets/mirrors.jpg';
import image5 from '../assets/newglassbalustrade.jpg';

const Gallery = () => {
  // Get the product name dynamically from the URL parameters
  const { productName } = useParams();

  // Example images for the gallery
  const images = [image1, image2, image3, image4, image5];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <span className="mx-2"> &gt; </span>
        <span>{productName}</span>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-8">{productName} Gallery</h1>

      {/* Centered and Responsive Image Slider */}
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-4">
              <img 
                src={image} 
                alt={`${productName} image ${index + 1}`} 
                className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
