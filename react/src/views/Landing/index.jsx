import React from "react";
import Hero from "./Sections/Hero";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";
import {Drawer} from "views/_components";

export default () => {
  return (
    <React.Fragment>
      <Drawer />
      <NavBar />
      <Hero />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
