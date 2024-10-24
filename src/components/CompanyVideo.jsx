// VideoSection.jsx
import React from 'react';
import VideoLinkImage from '../components/VideoLinkImage'; 
import videoImage from '../assets/video-img.jpg';

const CompanyVideo = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=45hSRTAC3_8"; 
  const imageUrl = "../assets/video-img.jpg"; 

  return (
    <div className="container mx-auto py-16 flex flex-col md:flex-row md:gap-5">
      {/* Text Section */}
      <div className="md:w-1/2 md:pr-8 bg-slate-100 py-2 px-3 p-6">
        <h1 className="text-4xl font-bold mb-4 text-primary">Glass Fusion journey</h1>
        <p className="text-lg mb-4">
          <span className='font-semibold'>Click the image to play the video</span> <br /><br /> Here you can add a description of the video, explaining its content and purpose. This text can provide context and encourage users to click the play button.
        </p>
        <p className="text-lg mb-4">
          Add any additional information you think is relevant to your audience or details about what they will see in the video.
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
