import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "./calendly.png";
import bg from "./hero@3x.jpg";

// Client logos
import logo1 from "./Client Logos/1.png";
import logo2 from "./Client Logos/2.png";
import logo3 from "./Client Logos/3.png";
import logo4 from "./Client Logos/4.png";
import logo5 from "./Client Logos/5.png";
import logo6 from "./Client Logos/6.png";
import logo7 from "./Client Logos/7.png";
import logo8 from "./Client Logos/8.png";
import logo9 from "./Client Logos/9.png";
import logo10 from "./Client Logos/10.png";
import logo11 from "./Client Logos/11.png";
import logo12 from "./Client Logos/12.png";
import logo13 from "./Client Logos/13.png";
import logo14 from "./Client Logos/14.png";
import logo15 from "./Client Logos/15.png";
import logo16 from "./Client Logos/16.png";
import logo17 from "./Client Logos/17.png";
import logo18 from "./Client Logos/18.png";
import logo19 from "./Client Logos/19.png";
import logo20 from "./Client Logos/20.png";
import logo21 from "./Client Logos/21.png";
import logo22 from "./Client Logos/22.png";
import logo23 from "./Client Logos/23.png";
import logo24 from "./Client Logos/24.png";
import logo25 from "./Client Logos/25.png";
import logo26 from "./Client Logos/26.png";
import logo27 from "./Client Logos/27.png";
import logo28 from "./Client Logos/28.png";
import logo29 from "./Client Logos/29.png";
import logo30 from "./Client Logos/30.png";

import VideoCard from "./Vedio.jsx";

// Cloudinary video URLs
const video1 = "https://res.cloudinary.com/dyrncskbs/video/upload/hero_1_v949eu.mp4";
const video2 = "https://res.cloudinary.com/dyrncskbs/video/upload/hero_3_pjgr51.mp4";
const video3 = "https://res.cloudinary.com/dyrncskbs/video/upload/hero_2_qrdenq.mp4";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-change logos every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen flex items-center pt-28 px-6 md:px-12 text-[#C6FD07]"
    >
      <div className="relative w-full max-w-[1224px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center w-auto flex justify-center md:justify-start items-center">
            <h1 className="px-6 font-semibold mb-3 rounded-4xl text-center py-1 text-sm border border-[#C6FD07]">
              HayViral Digital Agency
            </h1>
          </div>

          <h1 className="text-center md:w-130 md:text-left md:text-5xl font-outfit text-3xl font-bold">
            5x Your Growth Turn Clicks into Customers
          </h1>

          <p className="mt-3 text-center md:text-left text-white font-outfit leading-tight md:leading-normal text-base md:text-lg md:w-124">
            Digital solutions built for Entrepreneurs and their businesses because you deserve big results without the big agency price tag.
          </p>

          {/* CTA + SLIDING LOGOS */}
          <div className="mt-6 flex flex-col gap-6 items-center md:items-start">
            <button className="border border-[#00303C] bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex flex-row justify-center items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition">
              <img className="h-5" src={img1} alt="" />
              Book a Free Discovery Call
            </button>

            {/* SLIDING LOGO STRIP */}
            <div className="flex flex-col gap-6 items-center md:items-start">
              <div className="overflow-hidden w-screen mb-5 md:w-120">
                <motion.div
                  className="flex gap-10 min-w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                >
                  {[...logos, ...logos].map((logo, i) => (
                    <img key={i} src={logo} alt="Client Logo" className="h-6 w-auto" />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE VIDEOS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-4 justify-center md:justify-end mb-5">
            <VideoCard videoSrc={video2} rotate="-rotate-4" />
            <VideoCard videoSrc={video1} rotate="md:block hidden -rotate-1" />
            <VideoCard videoSrc={video3} rotate="rotate-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
