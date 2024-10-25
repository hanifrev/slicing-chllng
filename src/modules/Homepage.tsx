"use client";

import Navbar from "@/components/Navbar";
import FeatureSection from "@/sections/FeatureSection";
import HeroSection from "@/sections/HeroSection";
import LastSection from "@/sections/LastSection";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <LastSection />
    </div>
  );
};

export default Homepage;
