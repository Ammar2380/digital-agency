import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlaySquare, BarChart3, PenTool } from "lucide-react";
import "./App.css";
import Footer from './components/Footer';
import Logo from './components/Logo'
import Navbar from './components/Navbar'

import Contact from './components/Contact'
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import SectionHeading from "./components/SectionHeading";
import ClientStories from "./components/ClientStories";
import img1 from './calendly.png'










export default function HayviralLanding() {
  return (
    <div className="font-sans">
   
      
      <Navbar />
      <Hero />
      <About />
       <ClientStories />
      <WhyChooseUs />
      <Services />
      <HowWeWork />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
