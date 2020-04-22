import React from "react";
import NavBar from "./Sections/NavBar";
import Hero from "./Sections/Hero";
import Solution from "./Sections/Solution";
import HowItWorks from "./Sections/HowItWorks";
import Features from "./Sections/Features";
import Testimonials from "./Sections/Testimonials";
import CallToAction from "./Sections/CallToAction";
import FooterNav from "./Sections/FooterNav";
import FooterMeta from "./Sections/FooterMeta";
import FooterCopy from "./Sections/FooterCopy";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Solution />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CallToAction />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
