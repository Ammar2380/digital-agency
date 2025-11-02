import React, { useState } from "react";

export default function MobileVideoGallery({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);

  // Only render on mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) return null;

  return (
    <div className="w-full h-full relative bg-black">
      {/* Fullscreen overlay for playing video */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-full h-auto max-h-full landscape:rotate-0"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold"
            onClick={() => setActiveVideo(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Video thumbnails */}
      <div className="flex overflow-x-scroll space-x-4 p-4">
        {videos.map((video, index) => (
          <div key={index} className="relative flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden bg-gray-800">
            <video
              src={video}
              poster={`${video}?poster`} // optional thumbnail
              className="w-full h-full object-cover"
              muted
              playsInline
            />
            <button
              onClick={() => setActiveVideo(video)}
              className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black bg-opacity-30 hover:bg-opacity-50"
            >
              ▶
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
