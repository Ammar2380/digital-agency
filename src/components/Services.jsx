import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "./Servicesbg.webp";
import img5 from "./calendly.png";

// Cloudinary videos
const videos = {
  branding: "https://res.cloudinary.com/dyrncskbs/video/upload/Branding_wcpedv.mp4",
  uiDesign: "https://res.cloudinary.com/dyrncskbs/video/upload/ui_design_xczut2.mp4",
  digitalMarketing: "https://res.cloudinary.com/dyrncskbs/video/upload/Digital_Marketing_uvh3ke.mp4",
  webDevelopment: "https://res.cloudinary.com/dyrncskbs/video/upload/Web_Development_video.mp4", // replace with actual link if available
};

// Expanded services data
const servicesData = {
  branding: {
    title: "Branding",
    video: videos.branding,
    tabs: [
      {
        name: "Brand Identity",
        heading: "Define How Your Audience Sees You",
        desc: "We create a complete identity system that includes your logo, color palette, typography, brand voice, and visual direction — all designed to communicate your essence clearly and consistently. This helps you build instant recognition, emotional connection, and credibility across every platform."
      },
      {
        name: "Print Media",
        heading: "Physical Presence That Lasts",
        desc: "Print Media brings your brand into the physical world with materials that leave a lasting impression. From business cards and brochures to packaging and event materials, we design cohesive print assets that reflect your brand’s personality and values."
      },
      {
        name: "Motion Graphics",
        heading: "Bring Your Brand to Life",
        desc: "Motion Graphics turn your brand story into captivating visual experiences. We design dynamic animations, logo intros, and social media motion content that grab attention and keep viewers engaged."
      },
      {
        name: "Digital Brand Presence",
        heading: "Consistency Across Platforms",
        desc: "Digital Brand Presence ensures your brand looks and feels consistent across every online platform. We develop social media branding kits, cover designs, post templates, and digital guidelines that make your brand instantly recognizable."
      },
    ],
  },
  webDevelopment: {
    title: "Web Development",
    video: videos.webDevelopment,
    tabs: [
      {
        name: "WordPress",
        heading: "Flexible & SEO-Optimized Sites",
        desc: "Our WordPress development service gives you a powerful, flexible, and easy-to-manage website tailored to your business goals. Fully responsive, SEO-optimized, and scalable, built to convert visitors into clients."
      },
      {
        name: "Shopify",
        heading: "Turn Traffic into Sales",
        desc: "We design and build conversion-optimized Shopify stores with custom layouts, integrated payment systems, and engaging product displays. A professional, mobile-friendly store built to grow your brand."
      },
      {
        name: "Custom Development",
        heading: "Unique Digital Experiences",
        desc: "From advanced functionalities to interactive landing pages, we develop tailored solutions that align perfectly with your goals. Full control, performance, and scalability to make your website stand out."
      },
      {
        name: "UI Design",
        heading: "Beautiful, User-Friendly Interfaces",
        desc: "Our UI Design service focuses on visually striking, user-friendly interfaces that keep visitors engaged and make navigation effortless. Every design element serves a purpose and elevates your user experience."
      },
    ],
  },
  digitalMarketing: {
    title: "Digital Marketing",
    video: videos.digitalMarketing,
    tabs: [
      {
        name: "Content Creation",
        heading: "Engaging & High-Performing Assets",
        desc: "We craft scroll-stopping videos, graphics, and written content designed to capture attention and build trust across every platform. Platform-optimized content that fuels awareness, engagement, and conversions."
      },
      {
        name: "Paid Ads",
        heading: "Generate Leads & Sales",
        desc: "We design, launch, and optimize ad campaigns across Meta, Google, TikTok, and LinkedIn to ensure every dollar spent brings measurable returns. Scalable and predictable growth without wasted ad spend."
      },
      {
        name: "EGC & UGC",
        heading: "Authentic Storytelling",
        desc: "Through Employee-Generated and User-Generated Content, we turn your team and customers into storytellers. Capturing real experiences that build trust, engagement, and stronger community connection."
      },
      {
        name: "Lead Gen",
        heading: "Consistent, Qualified Prospects",
        desc: "We combine data-driven targeting, optimized funnels, and persuasive creative to attract, capture, and nurture leads effectively. A clear system for conversion that keeps your business growing month after month."
      },
    ],
  },
};

export default function ServicesPage() {
  const [activeTabs, setActiveTabs] = useState({
    branding: 0,
    webDevelopment: 0,
    digitalMarketing: 0,
  });

  const handleTabClick = (serviceKey, index) => {
    setActiveTabs((prev) => ({ ...prev, [serviceKey]: index }));
  };

  return (
    <section
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className="w-full text-white scroll-m-6"
      id="services"
    >
      <div className="relative">
        {/* Title / Intro */}
        <div className="text-center pt-14">
          <div className="flex justify-center">
            <h1 className="border border-[#C6FD07] font-semibold text-[#C6FD07] rounded-2xl mb-4 px-4 py-1">
              Services
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
            Digital Services That Drive Growth
          </h2>
          <p className="mt-1 text-base sm:text-lg md:text-xl opacity-70 font-outfit text-[#c2c2c2] max-w-xl mx-auto leading-tight font-extralight">
            From first impressions to long-term engagement, we cover everything your business needs to succeed online.
          </p>
        </div>

        {/* Services Sections */}
        <div className="px-6 md:px-20">
          {Object.entries(servicesData).map(([key, service]) => {
            const activeContent = service.tabs[activeTabs[key]];
            return (
              <section key={key} className="scroll-mt-55 relative pt-10 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#00303C] border border-[#C6FD07] rounded-2xl py-3">
                  {/* Left Side */}
                  <div className="px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-5">{service.title}</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-5 text-xs">
                      {service.tabs.map((tab, index) => (
                        <button
                          key={index}
                          onClick={() => handleTabClick(key, index)}
                          className={`md:px-6 px-4 md:py-2 py-1 rounded-full font-medium transition-all ${
                            activeTabs[key] === index
                              ? "bg-[#C6FD07] text-[#00303C]"
                              : "bg-purple-200 text-[#00303C] hover:bg-purple-300"
                          }`}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </div>

                    {/* Heading & Description */}
                    <motion.div
                      key={activeContent.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {activeContent.heading && (
                        <h3 className="text-xl md:text-2xl font-semibold mb-2 leading-5">
                          {activeContent.heading}
                        </h3>
                      )}
                      <p className="text-gray-200 text-base leading-tight mb-4">{activeContent.desc}</p>
                    </motion.div>
                  </div>

                  {/* Right Side — Video */}
                  <motion.div
                    key={service.video}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-lg px-4"
                  >
                    <video
                      src={service.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full aspect-video object-cover rounded-sm"
                    ></video>
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="p-8 flex justify-center">
          <button className="border border-[#00303C] bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition">
            <img className="h-5" src={img5} alt="Calendly" />
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
