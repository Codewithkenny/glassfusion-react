// VideoSection.jsx
import React from 'react';
import VideoLinkImage from '../components/VideoLinkImage'; 
import videoImage from '../assets/video-img.jpg';

const CompanyVideo = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=45hSRTAC3_8"; 
  const imageUrl = "../assets/video-img.jpg"; 

  return (
    <div className="container mx-auto py-16 flex flex-col md:flex-row md:gap-5 p-4">
      {/* Text Section */}
      <div className="md:w-1/2 md:pr-8 bg-slate-100 py-2 px-3 p-6">
        <h1 className="text-4xl font-bold py-4 mb-4 text-primary">Glass Fusion journey</h1>
        <p className="text-base mb-4">
          <span className='font-semibold'>Click the image to play the video</span> <br /><br /> This video showcases the journey of using glass in innovative design and fabrication processes to create a variety of architectural products, including shower glass, facades, and balustrades. Explore how skilled artisans transform glass into functional yet stunning pieces that enhance modern spaces, from sleek shower enclosures to impressive building facades and elegant balustrades.
        </p>
        <p className="text-base mb-4">
        Through this video, gain insights into the meticulous techniques and craftsmanship required to shape and install glass products that meet both aesthetic and structural needs. Perfect for architects, designers, and anyone interested in the art and science behind glass fabrication!
        </p>
      </div>

      {/* Video Section */}
      <div className="md:w-1/2">
        <VideoLinkImage youtubeUrl={youtubeUrl} imageUrl={videoImage} />
      </div>
    </div>
  );
};

export default CompanyVideo;
