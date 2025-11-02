import { useEffect, useState, useRef } from "react";
import { DynamicFrameLayout } from "./dynamic-frame-layout";
import bg from "./test_bg.jpg";

// Cloudinary video URLs
const demoFrames = [
  { id: 1, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Digital_Marketing_voyuzg.mp4" },
  { id: 2, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Branding_1_erq2ce.mp4" },
  { id: 3, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Intro_weodxg.mp4" },
  { id: 4, video: "https://res.cloudinary.com/dyrncskbs/video/upload/ui_design_2_ng7jo2.mp4" },
  { id: 5, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Content_Creation_wi0nf4.mp4" },
];

// Cloudinary image URLs
const sliderImages = [
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_1_depynw.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_2_nv40lq.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-10_ry5unb.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-11_g7elu5.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-5_n1o4lt.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/9_o2dyyc.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-6_vjmreu.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/7_jzambj.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_3_vpsus3.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-3_lej6iw.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-2_btmuin.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-1_zakpty.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/6_uvgw1g.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_4_upl12c.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_5_xid6we.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/8_cxffvu.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/10_hgg2zu.jpg"
];

export default function DemoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openVideo, setOpenVideo] = useState(null); // fullscreen video
  const videoRef = useRef(null);

  // Auto slider for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Open video in fullscreen modal
  const handleVideoClick = (video) => {
    setOpenVideo(video);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
    }, 100);
  };

  // Close modal
  const handleClose = (e) => {
    if (e.target === e.currentTarget) setOpenVideo(null);
  };

  // Add click handlers for desktop frames
  const desktopFrames = demoFrames.map(f => ({
    ...f,
    onClick: () => handleVideoClick(f.video)
  }));

  return (
    <section className="scroll-m-1" id="portfolio">
      <div
        className="w-full min-h-screen px-5 md:px-10 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-block border border-[#C6FD07] text-[#C6FD07] px-5 py-1 rounded-2xl font-semibold">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Real Stories. Real Results.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-lg leading-snug">
            Hear directly from our clients about how HayViral helped them grow, scale, and succeed.
          </p>
        </div>

        {/* Video / Slider Section */}
        <div className="bg-[#1E1E1E]/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden p-3 md:p-5">
          {/* Mobile Scroll Layout */}
          <div className="block md:hidden overflow-x-auto no-scrollbar">
            <div className="flex space-x-3">
              {demoFrames.map((frame) => (
                <div
                  key={frame.id}
                  className="w-72 h-80 rounded-xl object-cover border border-gray-700 flex-shrink-0 cursor-pointer"
                  onClick={() => handleVideoClick(frame.video)}
                >
                  <video
                    src={frame.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}

              {/* Auto Image Slider */}
              <div className="relative w-72 h-80 rounded-xl overflow-hidden border border-gray-700 flex-shrink-0">
                <img
                  src={sliderImages[currentSlide]}
                  alt="Brand Style"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block w-full h-[85vh]">
            <DynamicFrameLayout
              frames={desktopFrames} // ✅ click handlers applied
              sliderImages={sliderImages}
              hoverSize={6}
              gapSize={8}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {openVideo && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-2xl border-[6px] border-[#FB6B03] shadow-[0_0_25px_#FB6B03] pointer-events-none"></div>
            <video
              ref={videoRef}
              src={openVideo}
              controls
              autoPlay
              className="relative max-h-[85vh] max-w-[85vw] rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
