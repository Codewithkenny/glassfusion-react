import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Breadcrumb from '../components/BreadCrumb'; 
import image1 from '../assets/gallery/balustrade-thumbnail1.jpg';
import image2 from '../assets/facade.jpg';
import image3 from '../assets/glass.jpg';
import image4 from '../assets/mirrors.jpg';
import image5 from '../assets/newglassbalustrade.jpg';
import '../sliderGallery.css'; 


const Gallery = ({ productName = 'Product Name' }) => {
  // Example images for the gallery
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Breadcrumb paths
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Gallery', url: `/gallery/${productName}` }, // Dynamic URL based on product name
  ];

  return (
    <div className="container mx-auto py-16">
      {/* Include the Breadcrumb component */}
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-4xl font-bold mb-4">Gallery</h1>

      {/* Image slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-96">
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
