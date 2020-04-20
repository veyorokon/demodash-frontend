import React from "react";
import Hero from "./Sections/Hero";
import Solution from "./Sections/Solution";
import HowItWorks from "./Sections/HowItWorks";
import Features from "./Sections/Features";
import Testimonials from "./Sections/Testimonials";

export default () => {
  return (
    <React.Fragment>
      <Hero />
      <Solution />
      <HowItWorks />
      <Features />
      <Testimonials />
    </React.Fragment>
  );
};
