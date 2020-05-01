import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Demoers from "./Sections/Demoers";
import Solution from "./Sections/Solution";
import Payment from "./Sections/Payment";
import Testimonials from "./Sections/Testimonials";
import CallToAction from "./Sections/CallToAction";

export default () => {
  return (
    <>
      <Hero />
      <About />
      <Solution />
      <Demoers />
      <Payment />
      <Testimonials />
      <CallToAction />
    </>
  );
};
