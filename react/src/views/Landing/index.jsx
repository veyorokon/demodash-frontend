import React from "react";
import Hero from "./Sections/Hero";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
