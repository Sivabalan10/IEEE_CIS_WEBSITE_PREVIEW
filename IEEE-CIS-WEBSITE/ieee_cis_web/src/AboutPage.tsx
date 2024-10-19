import React from "react";
import "./index.css";
// @ts-ignore
import HeroSection from "./Aboutpage/HeroSection";
// @ts-ignore
import Developers from "./Aboutpage/Developers";
// @ts-ignore
import Founder from "./Aboutpage/Founder";

const AboutPage = () => {
  return (
    <div className="about-page">
      <HeroSection />
      <Developers />
      <Founder />
    </div>
  );
};

export default AboutPage;
