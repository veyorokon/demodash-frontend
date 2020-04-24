import React from "react";
import Hero from "./Sections/Hero";
import Discover from "./Sections/Discover";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Discover />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
