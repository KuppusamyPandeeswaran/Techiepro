import React from "react";
import { useParams } from "react-router-dom";

const VideoDetails = ({ videos }) => {
  const { videoId } = useParams();
  const video = videos.find((v) => v.id === parseInt(videoId));

  if (!video) {
    return <div>Video not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-6">{video.title}</h1>
      <iframe
        width="100%"
        height="600"
        src={video.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="mt-4 text-gray-600">{video.shortNote}</p>
      <span className="block mt-2 text-sm text-gray-500">{video.category}</span>
    </div>
  );
};

export default VideoDetails;
