
import React from "react";

// @ts-ignore
import HeroSection from './Aboutuspage/HeroSection';
// @ts-ignore
import Developers from './Aboutuspage/Developers';
// @ts-ignore
import Founder from './Aboutuspage/Founder';

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
