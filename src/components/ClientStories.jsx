"use client";

import React from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import bg from "./test_bg.jpg";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
const clients = [
  {
    name: "Arain",
    role: "Founder & CEO, Glamyra (Cosmetic Brand)",
    services: "Branding (Brand Identity, Digital Brand Presence), Motion Graphics, Content Creation",
    rating: 5,
    text: "Glamyra’s new brand identity and motion toolkit completely transformed our launch — the visuals are luxe and consistent across social and packaging. We saw immediate lift in engagement and a much stronger customer perception."
  },
  {
    name: "Zafar Ali",
    role: "Co-Founder & Head of Growth, Blue Ocean (E-commerce)",
    services: "Shopify Development, Paid Ads, Lead Gen",
    rating: 5,
    text: "The Shopify store and ad funnels the agency built turned browsers into buyers — scalable setup, strong creatives, and measurable ROI. Our ad spend finally converts."
  },
  {
    name: "Rana Imran",
    role: "Owner & Head Chef, Pizza Extreme (Restaurant)",
    services: "Digital Brand Presence, Content Creation, Local SEO (via WordPress landing page)",
    rating: 4,
    text: "The social branding and video content made our menu go viral locally — bookings and delivery orders jumped during our campaign period."
  },
  {
    name: "Nomi",
    role: "Founder & Creative Director, Virsa (Furniture & Sofa)",
    services: "UI Design, Custom Web Development, Print Media (catalogues)",
    rating: 5,
    text: "Virsa’s new website and catalogue showcase our pieces beautifully — the UX is elegant and the custom features helped customers visualize products better."
  },
  {
    name: "Owais Ahmed",
    role: "Managing Director, Xtraaa (Restaurant)",
    services: "Motion Graphics, EGC & UGC, Digital Brand Presence",
    rating: 5,
    text: "Authentic staff-generated content plus animated menu promos gave Xtraaa a fresh, modern voice that customers love."
  },
  {
    name: "Haider Wahab",
    role: "Founder, The Stove Club (Restaurant)",
    services: "Branding, Content Creation, Paid Ads",
    rating: 5,
    text: "The full rebrand and targeted ad campaigns filled our reservations calendar — creative, reliable, and results-driven."
  },
  {
    name: "Hammad Asif",
    role: "CEO, Deals Express (E-commerce)",
    services: "Shopify, Paid Ads, Lead Gen",
    rating: 5,
    text: "From store setup to acquisition strategy, the agency delivered a turnkey e-commerce engine — our conversion rate and lifetime value improved."
  },
  {
    name: "Umar Khan",
    role: "General Manager, Cafe Baharan (Restaurant)",
    services: "Print Media, Social Media Kit, Content Creation",
    rating: 4,
    text: "The print menus and digital templates are gorgeous and consistent — easy to update and perfectly on brand."
  },
  {
    name: "Amelia Grant",
    role: "Head of Brand, De Nature (Fitness Brand)",
    services: "Brand Identity, Motion Graphics, Content Creation",
    rating: 5,
    text: "The brand system and short workout videos gave De Nature a confident, cohesive presence across platforms — membership signups rose noticeably."
  },
  {
    name: "Jordan Pierce",
    role: "Founder, Hi Labs (Restaurant)",
    services: "Digital Brand Presence, UI Design, Motion Graphics",
    rating: 4,
    text: "Our online ordering flow and animated promos cut friction and boosted repeat orders — creative team nailed our vibe."
  },
  {
    name: "Ravi Deshmukh",
    role: "Owner, Naanstop (Restaurant)",
    services: "Content Creation, Paid Ads, Local Landing Page (WordPress)",
    rating: 5,
    text: "High-performing creatives and local targeting increased delivery orders — simple, tactical, and effective."
  },
  {
    name: "Elena Marquez",
    role: "Co-Founder, Yum Yum (Restaurant)",
    services: "Motion Graphics, Social Media Branding Kit, EGC/UGC",
    rating: 5,
    text: "The mix of user-generated clips and professional motion spots gave Yum Yum an authentic, high-energy presence online."
  },
  {
    name: "Marcus Wei",
    role: "Managing Partner, BKFS (Real Estate Marketing Agency)",
    services: "Custom Development, UI Design, Lead Gen",
    rating: 5,
    text: "The custom property portal and lead capture funnels the agency created have streamlined our prospecting and improved lead quality."
  },
  {
    name: "Natalie Cross",
    role: "Director, ELFA (English Learning Academy)",
    services: "WordPress Site, Content Creation, Paid Ads (LinkedIn/Facebook)",
    rating: 5,
    text: "The new site and targeted campaigns helped us attract serious students — enrollment inquiries are up and tuition revenue is climbing."
  },
  {
    name: "Darius Cole",
    role: "Executive Director, MYEF (Non-profit organization)",
    services: "Branding, Website, Motion Graphics (campaign videos)",
    rating: 5,
    text: "The brand refresh and emotionally resonant videos helped our fundraising and volunteer signups — storytelling that converts."
  },
  {
    name: "Leila Nasser",
    role: "Program Director, Benazir Hari Card (Government Scheme)",
    services: "Print Media, Digital Brand Presence, UI Design for information portal",
    rating: 5,
    text: "Clear, accessible materials and a user-friendly portal made the program easier to understand for beneficiaries."
  },
  {
    name: "Vincent Adler",
    role: "Owner, Toyota Point Motors (Car Showroom)",
    services: "Digital Brand Presence, UI Design, Paid Ads",
    rating: 4,
    text: "The showroom’s online presentation and test-drive booking flow were much improved — better lead-to-visit conversion."
  },
  {
    name: "Takeshi Mori",
    role: "Founder, Shawarma Kaizer (Restaurant)",
    services: "Brand Identity, Motion Graphics, Social Templates",
    rating: 5,
    text: "Our brand now feels bold and consistent — the short motion promos are used across delivery platforms and social."
  },
  {
    name: "Priya Kapoor",
    role: "COO, SuperGas (CNG Supply Company)",
    services: "UI Design, WordPress informational site, Content Creation",
    rating: 4,
    text: "The corporate site and clear UX helped communicate our services to partners and customers — professional and practical."
  },
  {
    name: "Sophia Malik",
    role: "CEO, kpmcore (Software Company)",
    services: "Custom Web Development, UI Design, Content Creation",
    rating: 5,
    text: "Kpmcore’s product pages and dashboard demos look premium and perform smoothly — UX and copy helped shorten sales cycles."
  },
  {
    name: "Ethan Brooks",
    role: "CTO, Narrowpath (IT Services)",
    services: "Brand Identity, UI Design, Lead Gen",
    rating: 5,
    text: "Narrowpath’s new identity and lead funnels helped us attract larger enterprise prospects — strategic, technical, and on time."
  },
  {
    name: "Chen Li",
    role: "Head of Product, GIZBAR (SaaS)",
    services: "UI Design, Custom Development, Motion Graphics (product explainers)",
    rating: 5,
    text: "The product UX overhaul and explainer animations made demos crystal clear — demos convert better than before."
  },
  {
    name: "Isabella Rossi",
    role: "Founder, BYRIVOPL (IT Consultancy)",
    services: "WordPress, Content Creation, Paid Ads",
    rating: 4,
    text: "Professional website and well-targeted campaigns increased inbound leads — the agency is easy to work with."
  },
  {
    name: "Ahmed Khan",
    role: "VP Engineering, Winnod (Cloud Platform)",
    services: "Custom Web Development, UI Design, Brand Identity",
    rating: 5,
    text: "Technical team loved the product site and developer docs layout — clear, fast, and developer-friendly."
  },
  {
    name: "Katerina Novak",
    role: "Head of Marketing, Eureka (Data Analytics Startup)",
    services: "Content Creation, Paid Ads, Digital Brand Presence",
    rating: 5,
    text: "Our thought leadership content and ad strategy generated high-quality demo requests and improved brand recognition."
  },
  {
    name: "Leo Martins",
    role: "CEO, Leorema (AI Tools)",
    services: "UI Design, Motion Graphics, Lead Gen",
    rating: 5,
    text: "The UI polish and animated product tour elevated investor decks and shortened demo time — impressive execution."
  },
  {
    name: "Priyanka Mehta",
    role: "Head of Growth, Scale Ai (ML Platform)",
    services: "Branding, Paid Ads, Content Creation",
    rating: 5,
    text: "The integrated brand + performance campaign approach helped us stand out in a crowded market and generate qualified trial signups."
  },
  {
    name: "Mateo Alvarez",
    role: "Product Manager, Ariacrm (CRM SaaS)",
    services: "Custom Development, UI Design, Content Creation",
    rating: 5,
    text: "The bespoke landing pages and onboarding flows reduced churn during our initial launch window."
  },
  {
    name: "Anika Berg",
    role: "CEO, Atera (IT Solutions)",
    services: "Brand Identity, WordPress, Lead Gen",
    rating: 5,
    text: "The refreshed identity and lead capture strategy gave our sales team better-quality conversations — great partnership."
  }
];


export default function ClientStories() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    renderMode: "performance",
    slides: { perView: 1, spacing: 25 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 25 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 35 } },
    },
  });

  return (
    <section
      id="clientstories"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative px-6 md:px-20 py-16 text-white font-outfit overflow-hidden"
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 text-center mb-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block border border-[#C6FD07] text-sm px-6 py-1 rounded-full text-[#C6FD07] tracking-wide"
        >
          Testimonials
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-lime-300 to-yellow-400 bg-clip-text text-transparent"
        >
          Real Stories. Real Results.
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
          Hear how our clients transformed their businesses with HayViral’s
          creative strategies and intelligent storytelling.
        </p>
      </div>

      {/* Slider Controls */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 md:left-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white p-2 md:p-3 rounded-full transition border border-white/20"
        >
          <ChevronLeft size={24} />
        </button>

        <div ref={sliderRef} className="keen-slider w-full">
          {clients.map((client, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <motion.div
              
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-gradient-to-br from-[#042B35]/80 via-[#00303C]/60 to-[#0D474F]/70 rounded-3xl border border-white/10 p-8 max-w-md text-left shadow-[0_0_25px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              >
                <Quote className="text-[#C6FD07] mb-4 opacity-70" size={32} />
                <p className="text-gray-100 italic mb-6 leading-relaxed">
                  {client.text}
                </p>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-white text-lg">
                    {client.name}
                  </h3>
                  <p className="text-sm text-[#C6FD07]/80">{client.role}</p>
                </div>

                {/* Glow ring */}
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-2 -right-2 w-16 h-16  blur-2xl rounded-full"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 md:right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white p-2 md:p-3 rounded-full transition border border-white/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Floating glowing circles */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [-10, 20, -10], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-10 right-20 w-52 h-52 bg-[#C6FD07]/20 blur-3xl rounded-full"
      />
    </section>
  );
}
