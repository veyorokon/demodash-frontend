import React from "react";
import Hero from "./Sections/Hero";
import Solution from "./Sections/Solution";
import HowItWorks from "./Sections/HowItWorks";
import Features from "./Sections/Features";
import Testimonials from "./Sections/Testimonials";
import CallToAction from "./Sections/CallToAction";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";

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
