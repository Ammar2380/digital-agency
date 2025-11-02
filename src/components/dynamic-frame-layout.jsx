import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl group">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className="absolute w-full h-full object-cover"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

// ✅ Updated DesktopFrame with click-to-fullscreen
function DesktopFrame({ video }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
    }, 100);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      <div
        className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-md pointer-events-none">
          🔊
        </div>
      </div>

      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-2xl border-[6px] border-[#FB6B03] shadow-[0_0_25px_#FB6B03] pointer-events-none"></div>
            <video
              ref={videoRef}
              src={video}
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

export function DynamicFrameLayout({
  frames = [],
  sliderImages = [],
  hoverSize = 6,
  gapSize = 6,
}) {
  const [hovered, setHovered] = useState(null);

  const rowSize = hovered ? "1.2fr 0.8fr" : "1fr 1fr";
  const colSize = hovered ? "0.9fr 1.2fr 0.9fr" : "1fr 1fr 1fr";

  return (
    <div
      className="grid w-full h-full transition-all duration-500"
      style={{
        gridTemplateRows: rowSize,
        gridTemplateColumns: colSize,
        gap: `${gapSize}px`,
      }}
    >
      {frames.slice(0, 3).map((f, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered({ row: 0, col: i })}
          onMouseLeave={() => setHovered(null)}
        >
          <DesktopFrame video={f.video} isHovered={hovered?.row === 0 && hovered?.col === i} />
        </div>
      ))}

      <div
        onMouseEnter={() => setHovered({ row: 1, col: 0 })}
        onMouseLeave={() => setHovered(null)}
      >
        <DesktopFrame video={frames[3].video} isHovered={hovered?.row === 1 && hovered?.col === 0} />
      </div>

      <div
        onMouseEnter={() => setHovered({ row: 1, col: 1 })}
        onMouseLeave={() => setHovered(null)}
      >
        <ImageSlider images={sliderImages} />
      </div>

      <div
        onMouseEnter={() => setHovered({ row: 1, col: 2 })}
        onMouseLeave={() => setHovered(null)}
      >
        <DesktopFrame video={frames[4].video} isHovered={hovered?.row === 1 && hovered?.col === 2} />
      </div>
    </div>
  );
}

// Export mobile slider for reuse
DynamicFrameLayout.MobileSlider = ImageSlider;
