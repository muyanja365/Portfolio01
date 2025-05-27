import React from "react";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import HeroSection2 from "@/components/intro/HeroSection2";

const HomePage: React.FC = () => {
  return (
   <>
   <Navbar />
    <HeroSection />
    <HeroSection2 />
   </>
  );
};

export default HomePage;