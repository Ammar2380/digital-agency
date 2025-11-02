import React, { useRef, useState } from "react";

export default function VideoCard({ videoSrc, rotate }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
    }, 200);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <>
      {/* 🔸 Small video preview */}
      <div
        onClick={handleVideoClick}
        className={`relative w-32 h-56 md:w-48 md:h-72 border-2 border-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:scale-[1.03] transition-transform duration-300 ${rotate}`}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
       <div className="absolute bottom-2 right-2 bg-black/25 text-white text-xs px-2 py-1 rounded-md pointer-events-none">
  🔊
</div>

      </div>

      {/* 🔸 Fullscreen modal with orange stroke */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Orange glowing border effect */}
            <div className="absolute inset-0 rounded-2xl border-[6px] border-[#FB6B03] shadow-[0_0_25px_#FB6B03] pointer-events-none"></div>

            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              className="relative max-h-[85vh] max-w-[85vw] rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
