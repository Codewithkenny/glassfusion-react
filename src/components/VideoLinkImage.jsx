// VideoLinkImage.jsx
import React from 'react';

const VideoLinkImage = ({ youtubeUrl, imageUrl }) => {
  return (
    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="relative block">
      <img 
        src={imageUrl} 
        alt="Video thumbnail" 
        className="w-full h-96 object-cover" // Set a specific height for the image
      />
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Play Button */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-white rounded-full w-16 h-16 flex justify-center items-center bg-transparent mb-4"> {/* Added margin-bottom */}
            <svg 
              className="text-white w-8 h-8" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="9.5 6 9.5 17 16.5 11.5 9.5 6" />
            </svg>
          </div>
          <span className="text-white text-sm mt-2">Play Video</span> {/* Overlay text */}
        </div>
      </div>
    </a>
  );
};

export default VideoLinkImage;
