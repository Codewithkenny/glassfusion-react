import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Import only necessary images for each glass type
import balustradesImage from '../../assets/gallery/balustrade-thumbnail1.jpeg';
import balustradeThumbnail1 from '../../assets/newglassbalustrade.jpg';
import balustradeThumbnail2 from '../../assets/balustrade.jpg';
import showerGlassImage from '../../assets/gallery/showerglass.jpg';
import showerGlassThumbnail1 from '../../assets/showerglass-thumbnail1.jpg';
import showerGlassThumbnail2 from '../../assets/showerglass-thumbnail2.jpg';


const GlassTypePage = () => {
  const { type } = useParams();
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  // Define glass types with only two images each
  const glassTypes = {
    balustrades: {
      title: 'Balustrades',
      description: 'Balustrades are protective barriers or railings used in various architectural designs.',
      image: balustradesImage,
      thumbnails: [balustradeThumbnail1, balustradeThumbnail2],
    },
    showers: {
      title: 'Shower Glass',
      description: 'Shower glass is made by sandwiching a layer of polyvinyl butyral (PVB) between two pieces of glass.',
      image: showerGlassImage,
      thumbnails: [showerGlassThumbnail1, showerGlassThumbnail2],
    },
    // Add more glass types if needed
  };

  const glassTypeDetail = glassTypes[type] || {
    title: 'Not Found',
    description: 'This glass type does not exist.',
    image: '',
    thumbnails: [],
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (thumbnail) => {
    setSelectedThumbnail(thumbnail);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{glassTypeDetail.title}</h1>
      <p className="text-lg mb-6">{glassTypeDetail.description}</p>
      
      {/* Main Image */}
      {glassTypeDetail.image && (
        <img
          src={glassTypeDetail.image}
          alt={glassTypeDetail.title}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-6"
        />
      )}
      
      {/* Gallery Thumbnails */}
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {glassTypeDetail.thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`${glassTypeDetail.title} Thumbnail ${index + 1}`}
            className="w-full h-auto rounded cursor-pointer hover:shadow-md transition-all duration-200 transform hover:scale-105"
            onClick={() => handleThumbnailClick(thumbnail)}
          />
        ))}
      </div>

      {/* Lightbox for Selected Thumbnail */}
      {selectedThumbnail && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-3xl mx-auto">
            <img
              src={selectedThumbnail}
              alt="Selected Thumbnail"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-800"
              onClick={() => setSelectedThumbnail(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlassTypePage;
