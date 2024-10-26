import React from 'react';
import { useParams } from 'react-router-dom';

const GlassTypePage = () => {
  const { type } = useParams(); // Extract the dynamic parameter

  // Define the glass type details
  const glassTypes = {
    balustrades: {
      title: 'Balustrades',
      description: 'Balustrades are protective barriers or railings used in various architectural designs.',
      image: '../assets/balustrades.jpg',
      thumbnails: [
        '../assets/balustrade-thumbnail1.jpg',
        '../assets/balustrade-thumbnail2.jpg',
        // Add more thumbnails as needed
      ],
    },
    laminated: {
      title: 'Laminated Glass',
      description: 'Laminated glass is made by sandwiching a layer of polyvinyl butyral (PVB) between two pieces of glass.',
      image: '../assets/laminated-glass.jpg',
      thumbnails: [
        '../assets/laminated-thumbnail1.jpg',
        '../assets/laminated-thumbnail2.jpg',
        // Add more thumbnails as needed
      ],
    },
    // Define additional glass types...
  };

  // Get the glass type details based on the URL parameter
  const glassTypeDetail = glassTypes[type] || { title: 'Not Found', description: 'This glass type does not exist.', image: '', thumbnails: [] };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{glassTypeDetail.title}</h1>
      <p className="text-lg mb-6">{glassTypeDetail.description}</p>
      {glassTypeDetail.image && (
        <img
          src={glassTypeDetail.image}
          alt={glassTypeDetail.title}
          className="w-full rounded shadow-lg mb-6"
        />
      )}
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {glassTypeDetail.thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`${glassTypeDetail.title} Thumbnail ${index + 1}`}
            className="w-full h-auto rounded cursor-pointer"
            onClick={() => {/* Logic to view this thumbnail in large view */}}
          />
        ))}
      </div>
    </div>
  );
};

export default GlassTypePage;
